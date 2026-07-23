import { useSite } from '../context/SiteContext';
import { profile } from '../data/content';

export default function Footer() {
  const { lang, t } = useSite();
  return (
    <footer className="py-8 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-600/60 dark:text-paper-400/60">
        <p>© {new Date().getFullYear()} {t(profile.name)}</p>
        <p>{lang === 'ar' ? 'صُمم وبُني بعناية' : 'Designed & built with care'}</p>
      </div>
    </footer>
  );
}
