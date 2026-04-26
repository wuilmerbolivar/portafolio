import { startTransition, useEffect, useState } from 'react';
import { ArrowUpRight, FolderGit2, GitFork, LoaderCircle, RefreshCw, Star, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type GitHubUser = {
  followers: number;
  html_url: string;
  public_repos: number;
  updated_at: string;
};

type GitHubRepo = {
  archived: boolean;
  description: string | null;
  fork: boolean;
  forks_count: number;
  html_url: string;
  id: number;
  language: string | null;
  name: string;
  pushed_at: string;
  stargazers_count: number;
};

type LanguageBreakdown = {
  count: number;
  name: string;
  share: number;
  tone: string;
};

type RecentRepo = {
  description: string | null;
  id: number;
  language: string | null;
  name: string;
  pushedAt: string;
  stars: number;
  url: string;
};

type GitHubSnapshot = {
  activeRepos: number;
  followers: number;
  profileUrl: string;
  publicRepos: number;
  recentRepos: RecentRepo[];
  topLanguages: LanguageBreakdown[];
  totalStars: number;
  updatedAt: string;
};

type CachedSnapshot = {
  data: GitHubSnapshot;
  timestamp: number;
};

const CACHE_KEY = 'wb-github-insights-v1';
const CACHE_TTL = 1000 * 60 * 15;

const languageTones: Record<string, string> = {
  Bash: 'from-lime-300 to-green-400',
  CSS: 'from-blue-400 to-sky-300',
  HTML: 'from-orange-400 to-amber-300',
  JavaScript: 'from-yellow-300 to-amber-400',
  PHP: 'from-indigo-400 to-violet-400',
  Python: 'from-emerald-300 to-cyan-400',
  Ruby: 'from-rose-400 to-pink-400',
  TypeScript: 'from-sky-400 to-cyan-300',
};

function getLanguageTone(language: string) {
  return languageTones[language] ?? 'from-slate-300 to-slate-500';
}

function getRelativeTime(dateString: string, lang: 'es' | 'en') {
  const now = Date.now();
  const target = new Date(dateString).getTime();
  const diffMinutes = Math.round((target - now) / 60000);
  const formatter = new Intl.RelativeTimeFormat(lang === 'es' ? 'es' : 'en', {
    numeric: 'auto',
  });

  if (Math.abs(diffMinutes) < 60) {
    return formatter.format(diffMinutes, 'minute');
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (Math.abs(diffHours) < 24) {
    return formatter.format(diffHours, 'hour');
  }

  const diffDays = Math.round(diffHours / 24);
  if (Math.abs(diffDays) < 30) {
    return formatter.format(diffDays, 'day');
  }

  const diffMonths = Math.round(diffDays / 30);
  if (Math.abs(diffMonths) < 12) {
    return formatter.format(diffMonths, 'month');
  }

  const diffYears = Math.round(diffDays / 365);
  return formatter.format(diffYears, 'year');
}

function buildSnapshot(user: GitHubUser, repos: GitHubRepo[]): GitHubSnapshot {
  const activeRepos = repos.filter((repo) => !repo.archived && !repo.fork);
  const totalStars = activeRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const languageCounts = activeRepos.reduce<Record<string, number>>((accumulator, repo) => {
    if (!repo.language) {
      return accumulator;
    }

    accumulator[repo.language] = (accumulator[repo.language] ?? 0) + 1;
    return accumulator;
  }, {});

  const totalLanguageProjects = Object.values(languageCounts).reduce((sum, value) => sum + value, 0);

  const topLanguages = Object.entries(languageCounts)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 5)
    .map(([name, count]) => ({
      count,
      name,
      share: totalLanguageProjects > 0 ? count / totalLanguageProjects : 0,
      tone: getLanguageTone(name),
    }));

  const recentRepos = [...activeRepos]
    .sort((left, right) => Date.parse(right.pushed_at) - Date.parse(left.pushed_at))
    .slice(0, 3)
    .map((repo) => ({
      description: repo.description,
      id: repo.id,
      language: repo.language,
      name: repo.name,
      pushedAt: repo.pushed_at,
      stars: repo.stargazers_count,
      url: repo.html_url,
    }));

  return {
    activeRepos: activeRepos.length,
    followers: user.followers,
    profileUrl: user.html_url,
    publicRepos: user.public_repos,
    recentRepos,
    topLanguages,
    totalStars,
    updatedAt: recentRepos[0]?.pushedAt ?? user.updated_at,
  };
}

function readCache() {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(CACHE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as CachedSnapshot;
  } catch {
    window.localStorage.removeItem(CACHE_KEY);
    return null;
  }
}

function writeCache(data: GitHubSnapshot) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload: CachedSnapshot = {
    data,
    timestamp: Date.now(),
  };

  window.localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
}

export default function GitHubInsights() {
  const { t, lang } = useLanguage();
  const [data, setData] = useState<GitHubSnapshot | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const cachedSnapshot = readCache();
    const hasFreshCache = cachedSnapshot && Date.now() - cachedSnapshot.timestamp < CACHE_TTL;
    const controller = new AbortController();

    if (cachedSnapshot) {
      setData(cachedSnapshot.data);
      setShowFallback(false);
      setHasError(false);
      setIsLoading(!hasFreshCache);
    }

    if (hasFreshCache) {
      setIsLoading(false);
      return () => controller.abort();
    }

    const fetchGitHubData = async () => {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch('https://api.github.com/users/wuilmerbolivar', {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
          }),
          fetch('https://api.github.com/users/wuilmerbolivar/repos?per_page=100&sort=updated', {
            headers: { Accept: 'application/vnd.github+json' },
            signal: controller.signal,
          }),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('GitHub request failed');
        }

        const user = (await userResponse.json()) as GitHubUser;
        const repos = (await reposResponse.json()) as GitHubRepo[];
        const snapshot = buildSnapshot(user, repos);

        writeCache(snapshot);
        startTransition(() => {
          setData(snapshot);
          setHasError(false);
          setShowFallback(false);
          setIsLoading(false);
        });
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setHasError(!cachedSnapshot);
        setShowFallback(Boolean(cachedSnapshot));
        setIsLoading(false);
      }
    };

    fetchGitHubData();

    return () => controller.abort();
  }, []);

  const metricCards = data
    ? [
        { icon: FolderGit2, label: t('tech.publicRepos'), value: data.publicRepos },
        { icon: GitFork, label: t('tech.activeRepos'), value: data.activeRepos },
        { icon: Star, label: t('tech.totalStars'), value: data.totalStars },
        { icon: Users, label: t('tech.followers'), value: data.followers },
      ]
    : [];

  return (
    <div className="pt-6 border-t border-white/10">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-5">
        <div>
          <h3 className="text-[0.875rem] text-slate-300 font-semibold uppercase tracking-widest mb-2">
            {t('tech.githubTitle')}
          </h3>
          <p className="text-[0.875rem] text-slate-400 leading-relaxed max-w-2xl">
            {t('tech.githubSubtitle')}
          </p>
        </div>

        {data ? (
          <a
            href={data.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.75rem] text-brand-blue hover:text-white transition-colors shrink-0"
          >
            {t('tech.openProfile')}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : null}
      </div>

      {isLoading && !data ? (
        <div aria-live="polite" className="rounded-2xl border border-white/8 bg-white/3 p-5">
          <div className="inline-flex items-center gap-2 text-[0.875rem] text-slate-300">
            <LoaderCircle size={16} className="animate-spin text-brand-blue" aria-hidden="true" />
            {t('tech.githubLoading')}
          </div>
        </div>
      ) : null}

      {hasError && !data ? (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/8 p-5 text-[0.875rem] text-red-100">
          {t('tech.githubError')}
        </div>
      ) : null}

      {data ? (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-[0.75rem] text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-1.5">
              <RefreshCw size={14} className="text-brand-blue" aria-hidden="true" />
              {t('tech.refreshLabel')} {getRelativeTime(data.updatedAt, lang)}
            </span>
            {showFallback ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/8 px-3 py-1.5 text-amber-100">
                {t('tech.githubFallback')}
              </span>
            ) : null}
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
            {metricCards.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-4 min-h-28">
                <metric.icon size={18} className="text-brand-blue mb-3" aria-hidden="true" />
                <div className="text-[1.4rem] font-bold text-white leading-none">{metric.value}</div>
                <div className="text-[0.72rem] text-slate-400 uppercase tracking-[0.18em] mt-2">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-5">
              <h3 className="text-[0.8rem] text-white font-semibold uppercase tracking-[0.18em] mb-5">
                {t('tech.topLanguages')}
              </h3>
              <div className="space-y-4">
                {data.topLanguages.map((language) => (
                  <div key={language.name}>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="text-[0.875rem] text-slate-200 font-medium">{language.name}</div>
                      <div className="text-[0.75rem] text-slate-400">
                        {language.count} {t('tech.languageProjects')}
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-white/6 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-linear-to-r ${language.tone}`}
                        style={{ width: `${Math.max(language.share * 100, 12)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-linear-to-br from-white/6 to-white/3 p-5">
              <h3 className="text-[0.8rem] text-white font-semibold uppercase tracking-[0.18em] mb-5">
                {t('tech.recentRepos')}
              </h3>
              <div className="space-y-3">
                {data.recentRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/8 bg-black/18 p-4 hover:border-brand-blue/30 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-[0.92rem] text-white font-semibold truncate">{repo.name}</div>
                        <div className="text-[0.75rem] text-slate-400 mt-1 line-clamp-2">
                          {repo.description ?? (lang === 'es' ? 'Repositorio público sin descripción.' : 'Public repository without description.')}
                        </div>
                      </div>
                      <ArrowUpRight size={16} className="text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-3 text-[0.72rem] text-slate-400">
                      {repo.language ? <span>{repo.language}</span> : null}
                      <span className="inline-flex items-center gap-1">
                        <Star size={12} aria-hidden="true" />
                        {repo.stars}
                      </span>
                      <span>{t('tech.latestPush')} {getRelativeTime(repo.pushedAt, lang)}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
