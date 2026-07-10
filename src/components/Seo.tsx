import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { applySeo, type SeoRoute } from '../lib/seo';

type SeoProps = {
  route?: SeoRoute;
};

export default function Seo({ route = 'home' }: SeoProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    applySeo(lang, route);
  }, [lang, route]);

  return null;
}
