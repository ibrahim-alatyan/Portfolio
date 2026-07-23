import { useEffect, useState } from 'react';
import { Moon, Sun, Languages, Menu, X, Download } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { profile } from '../data/content';
import { asset } from '../lib/asset';

const sections = [
  { id: 'about', en: 'About', ar: 'نبذة' },
  { id: 'experience', en: 'Experience', ar: 'الخبرات' },
  { id: 'projects', en: 'Projects', ar: 'المشاريع' },
  { id: 'skills', en: 'Skills', ar: 'المهارات' },
  { id: 'certificates', en: 'Certificates', ar: 'الشهادات' },
  { id: 'contact', en: 'Contact', ar: 'تواصل' },
];

export default function Navbar() {
  const { lang, setLang, theme, setTheme } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper-50/85 dark:bg-ink-950/80 backdrop-blur-md border-b border-ink-900/10 dark:border-paper-100/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-lg focus-ring rounded">
          {lang === 'ar' ? 'ابراهيم بن عتيان' : 'Ibrahim Al-Atyan'}
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-ink-700/80 dark:text-paper-200/70 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring rounded"
              >
                {lang === 'ar' ? s.ar : s.en}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={asset(profile.resume)}
            download
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-gold-600/40 text-gold-600 dark:text-gold-400 hover:bg-gold-500/10 transition-colors focus-ring"
          >
            <Download size={14} />
            {lang === 'ar' ? 'السيرة الذاتية' : 'Resume'}
          </a>
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="p-2 rounded-full hover:bg-ink-900/5 dark:hover:bg-paper-100/10 transition-colors focus-ring"
            aria-label="Toggle language"
          >
            <Languages size={18} />
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-ink-900/5 dark:hover:bg-paper-100/10 transition-colors focus-ring"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          className="md:hidden p-2 focus-ring rounded"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper-50 dark:bg-ink-950 border-t border-ink-900/10 dark:border-paper-100/10 px-5 py-4">
          <ul className="flex flex-col gap-3 text-sm mb-4">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)} className="block py-1">
                  {lang === 'ar' ? s.ar : s.en}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href={asset(profile.resume)} download className="text-sm px-3 py-1.5 rounded-full border border-gold-600/40 text-gold-600 dark:text-gold-400">
              {lang === 'ar' ? 'السيرة الذاتية' : 'Resume'}
            </a>
            <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="p-2 rounded-full">
              <Languages size={18} />
            </button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
