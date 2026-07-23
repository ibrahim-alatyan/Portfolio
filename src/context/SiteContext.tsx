import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang } from '../data/content';

interface SiteContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
  t: <T extends { en: string; ar: string }>(obj: T) => string;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const t = <T extends { en: string; ar: string }>(obj: T) => obj[lang];

  return (
    <SiteContext.Provider value={{ lang, setLang, theme, setTheme, t }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used within SiteProvider');
  return ctx;
}
