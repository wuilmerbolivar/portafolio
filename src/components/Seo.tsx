import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { applySeo } from '../lib/seo';

export default function Seo() {
  const { lang } = useLanguage();

  useEffect(() => {
    applySeo(lang);
  }, [lang]);

  return null;
}
