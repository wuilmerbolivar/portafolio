import { FormEvent, useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, MoreVertical, Phone, Video, CheckCheck, ArrowUpRight, Linkedin, Shield, ScrollText, Github, BriefcaseBusiness, Code2, Globe2, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/site';
import ProfileAvatar from './ProfileAvatar';

const chatBackgroundStyle = {
  backgroundColor: 'rgba(11,20,26,0.92)',
  backgroundImage: [
    'radial-gradient(circle at 20% 24%, rgba(134,150,160,0.08) 0 2px, transparent 2.4px)',
    'radial-gradient(circle at 78% 34%, rgba(134,150,160,0.06) 0 1.8px, transparent 2.2px)',
    'radial-gradient(circle at 42% 72%, rgba(134,150,160,0.05) 0 2.2px, transparent 2.8px)',
    'linear-gradient(180deg, rgba(32,44,51,0.14) 0%, rgba(11,20,26,0.22) 100%)',
  ].join(', '),
  backgroundPosition: '0 0, 8px 10px, 14px 16px, 0 0',
  backgroundSize: '26px 26px, 34px 34px, 42px 42px, 100% 100%',
};

export default function Contact() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [step, setStep] = useState(0);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);
  const currentTime = new Intl.DateTimeFormat(lang === 'es' ? 'es-PE' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());
  const quickMessages = [
    { label: t('contact.quickRecruiter'), message: t('contact.quickRecruiterMessage'), icon: BriefcaseBusiness },
    { label: t('contact.quickProject'), message: t('contact.quickProjectMessage'), icon: Code2 },
    { label: t('contact.quickServices'), message: t('contact.quickServicesMessage'), icon: Globe2 },
  ];
  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(t('contact.emailSubject'))}`;

  useEffect(() => {
    setStep(0);
    const t1 = setTimeout(() => setStep(1), 1200);
    const t2 = setTimeout(() => setStep(2), 3000);
    const t3 = setTimeout(() => setStep(3), 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [lang]);

  const sendMessage = () => {
    const normalizedMessage = message.trim();

    if (!normalizedMessage) {
      return;
    }

    const greeting = lang === 'es' ? 'Hola Wuilmer' : 'Hi Wuilmer';
    const text = encodeURIComponent(`${greeting}\n\n${normalizedMessage}`);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappPhone}?text=${text}`;

    setSubmitted(true);
    setSubmittedMessage(normalizedMessage);

    setTimeout(() => {
      const openedWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (openedWindow) {
        openedWindow.opener = null;
      }
    }, 600);

    setTimeout(() => {
      setSubmitted(false);
      setSubmittedMessage('');
      setMessage('');
    }, 4000);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    sendMessage();
  };

  const handleQuickMessage = (nextMessage: string) => {
    setMessage(nextMessage);
    window.setTimeout(() => messageInputRef.current?.focus(), 0);
  };

  return (
    <section id="contact" className="bg-brand-card border border-brand-green/20 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-green/5 opacity-50 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[1.5rem] lg:text-[1.75rem] text-white font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-[0.875rem] lg:text-[1rem] text-slate-400 leading-[1.6] mb-6">
            {t('contact.description')}
          </p>

          <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-slate-200">{t('contact.socialTitle')}</h3>
            <p className="mt-2 text-[0.82rem] leading-relaxed text-slate-400">{t('contact.socialDescription')}</p>
            <div className="mt-4 grid gap-3">
              <a href={emailHref} className="inline-flex items-center justify-between rounded-xl border border-brand-green/20 bg-brand-green/10 px-4 py-3 text-[0.85rem] font-semibold text-brand-green hover:bg-brand-green/15 transition-colors">
                <span className="inline-flex items-center gap-2"><Mail size={16} aria-hidden="true" />{t('contact.email')}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-[0.85rem] text-slate-200 hover:bg-white/8 transition-colors">
                <span className="inline-flex items-center gap-2"><Linkedin size={16} aria-hidden="true" />{t('contact.linkedin')}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-[0.85rem] text-slate-200 hover:bg-white/8 transition-colors">
                <span className="inline-flex items-center gap-2"><Github size={16} aria-hidden="true" />{t('contact.github')}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={siteConfig.newsletter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-[0.85rem] text-slate-200 hover:bg-white/8 transition-colors">
                <span className="inline-flex items-center gap-2"><ScrollText size={16} aria-hidden="true" />{t('contact.newsletter')}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={siteConfig.cybersecuritySite} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-[0.85rem] text-slate-200 hover:bg-white/8 transition-colors">
                <span className="inline-flex items-center gap-2"><Shield size={16} aria-hidden="true" />{t('contact.securitySite')}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/8 bg-white/4 p-4">
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-slate-200">{t('contact.quickTitle')}</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {quickMessages.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleQuickMessage(item.message)}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 text-center text-[0.78rem] font-medium text-slate-200 transition-colors hover:border-brand-green/30 hover:bg-brand-green/10 hover:text-white"
                >
                  <item.icon size={15} aria-hidden="true" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <p className="mb-3 text-center text-[0.78rem] text-slate-400">{t('contact.chatHint')}</p>
          <div className="w-full max-w-105 bg-[#0b141a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-120">
            <div className="bg-[#202c33] px-3 py-3 flex items-center gap-3 shadow-md z-10 cursor-default">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
                <ProfileAvatar alt="Wuilmer Bolívar" className="w-full h-full object-cover" loading="lazy" decoding="async" sizes="40px" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[#e9edef] font-medium text-[1rem] leading-tight truncate">Wuilmer Bolívar</h3>
                <p className="text-[#8696a0] text-[0.8rem] truncate">{t('contact.online')}</p>
              </div>
              <div className="flex gap-4 text-[#aebac1] pr-2">
                <Video size={18} className="cursor-not-allowed hover:text-white transition-colors" aria-hidden="true" />
                <Phone size={18} className="cursor-not-allowed hover:text-white transition-colors" aria-hidden="true" />
                <MoreVertical size={18} className="cursor-not-allowed hover:text-white transition-colors" aria-hidden="true" />
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto hidden-scrollbar flex flex-col gap-3 relative" style={chatBackgroundStyle}>
              <div className="flex justify-center mb-2 mt-2">
                <span className="bg-[#182229] text-[#8696a0] text-[0.75rem] px-3 py-1 rounded-lg shadow-sm font-medium uppercase tracking-wider">
                  {t('contact.today')}
                </span>
              </div>

              {step >= 1 ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#202c33] text-[#e9edef] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-sm p-2.5 px-3 max-w-[88%] self-start shadow-sm relative group">
                  <p className="text-[0.875rem] leading-[1.4] pr-10 pb-2">{t('contact.msg1')}</p>
                  <span className="text-[#8696a0] text-[0.65rem] absolute bottom-1 right-2">{currentTime}</span>
                </motion.div>
              ) : null}

              {step >= 2 ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#202c33] text-[#e9edef] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-sm p-2.5 px-3 max-w-[88%] self-start shadow-sm relative group">
                  <p className="text-[0.875rem] leading-[1.4] pr-10 pb-2">{t('contact.msg2')}</p>
                  <span className="text-[#8696a0] text-[0.65rem] absolute bottom-1 right-2">{currentTime}</span>
                </motion.div>
              ) : null}

              {step >= 3 ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-[#202c33] text-[#e9edef] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-sm p-2.5 px-3 max-w-[88%] self-start shadow-sm relative group">
                  <p className="text-[0.875rem] leading-[1.4] pr-10 pb-2">{t('contact.msg3')}</p>
                  <span className="text-[#8696a0] text-[0.65rem] absolute bottom-1 right-2">{currentTime}</span>
                </motion.div>
              ) : null}

              {step < 3 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#202c33] rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-sm p-3 max-w-[85%] self-start flex gap-1.5 items-center shadow-sm">
                  <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </motion.div>
              ) : null}

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95, originX: 1, originY: 1 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#005c4b] text-[#e9edef] rounded-tl-lg rounded-br-sm rounded-bl-lg rounded-tr-sm p-2.5 px-3 max-w-[88%] self-end shadow-sm relative mt-auto">
                  <p className="text-[0.875rem] leading-[1.4] pr-14 pb-2 whitespace-pre-wrap break-words">{submittedMessage}</p>
                  <div className="absolute bottom-1 right-2 flex items-center gap-1">
                    <span className="text-[#8696a0] text-[0.65rem] font-medium opacity-80">{currentTime}</span>
                    <CheckCheck size={14} className="text-[#53bdeb]" />
                  </div>
                </motion.div>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="bg-[#202c33] px-2 py-2.5 flex items-end gap-2 shrink-0 z-10 w-full">
              <div className="flex-1 bg-[#2a3942] rounded-2xl flex items-center min-h-11 px-4 cursor-text w-full overflow-hidden">
                <textarea
                  ref={messageInputRef}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t('contact.message')}
                  rows={1}
                  className="flex-1 bg-transparent text-[#e9edef] text-[0.95rem] placeholder:text-[#8696a0] focus:outline-none py-2.5 resize-none max-h-25 hidden-scrollbar w-full"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={!message.trim()}
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${message.trim() ? 'bg-[#00a884] text-white hover:bg-[#008f6f]' : 'bg-[#2a3942] text-[#8696a0] cursor-not-allowed'}`}
                aria-label={t('contact.sendLabel')}
              >
                <Send size={20} className="-ml-0.5" fill={message.trim() ? 'currentColor' : 'none'} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
