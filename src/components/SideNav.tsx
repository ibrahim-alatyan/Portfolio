import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';

const sections = [
  { id: 'top', en: 'Home', ar: 'الرئيسية' },
  { id: 'about', en: 'About', ar: 'نبذة' },
  { id: 'experience', en: 'Experience', ar: 'الخبرات' },
  { id: 'projects', en: 'Projects', ar: 'المشاريع' },
  { id: 'skills', en: 'Skills', ar: 'المهارات' },
  { id: 'certificates', en: 'Certificates', ar: 'الشهادات' },
  { id: 'contact', en: 'Contact', ar: 'تواصل' },
];

export default function SideNav() {
  const { lang } = useSite();
  const [activeId, setActiveId] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed top-1/2 -translate-y-1/2 end-6 z-40 flex-col items-end gap-3"
    >
      {sections.map((s) => {
        const isActive = activeId === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-2.5 focus-ring rounded-full"
            aria-label={lang === 'ar' ? s.ar : s.en}
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`text-[11px] font-medium whitespace-nowrap px-2.5 py-1 rounded-full bg-paper-50/90 dark:bg-ink-900/90 border border-ink-900/10 dark:border-paper-100/10 transition-all duration-200 ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto'
              }`}
            >
              {lang === 'ar' ? s.ar : s.en}
            </span>
            <span className="relative w-2.5 h-2.5 flex items-center justify-center">
              <motion.span
                animate={{ scale: isActive ? 1 : 0.55 }}
                transition={{ duration: 0.25 }}
                className={`block w-2.5 h-2.5 rounded-full ${
                  isActive ? 'bg-gold-500' : 'bg-ink-900/25 dark:bg-paper-100/25 group-hover:bg-gold-500/70'
                }`}
              />
            </span>
          </a>
        );
      })}
    </nav>
  );
}
