import { motion } from 'framer-motion';
import { ArrowDownRight, MapPin, Mail } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { profile } from '../data/content';
import ParticleField from './ParticleField';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  const { lang, t } = useSite();
  const roles = profile.roles[lang];

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <ParticleField />
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.05] dark:opacity-[0.07] font-mono text-[13px] leading-[1.9] tracking-[0.3em] text-ink-900 dark:text-paper-100 whitespace-pre-wrap break-all p-4"
      >
        {Array.from({ length: 40 }).map((_, i) => (i % 2 === 0 ? '01 ' : '10 ')).join('').repeat(20)}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper-50/0 to-paper-50 dark:to-ink-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-5 flex items-center gap-2"
        >
          <MapPin size={13} />
          {t(profile.location)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-[2.5rem] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl"
        >
          {t(profile.name)}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-5 flex flex-wrap gap-2 max-w-3xl"
        >
          {roles.map((r, i) => (
            <span
              key={i}
              className="text-sm sm:text-base font-medium px-3.5 py-1.5 rounded-full border border-ink-900/15 dark:border-paper-100/15 bg-paper-50/60 dark:bg-ink-900/50 backdrop-blur-sm"
            >
              {r}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-800/80 dark:text-paper-200/75"
        >
          {t(profile.summary)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-950 text-paper-50 dark:bg-gold-500 dark:text-ink-950 font-medium text-sm hover:opacity-90 transition-opacity focus-ring"
          >
            {lang === 'ar' ? 'استعرض المشاريع' : 'View Projects'}
            <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-ink-900/20 dark:border-paper-100/20 text-sm font-medium hover:bg-ink-900/5 dark:hover:bg-paper-100/10 transition-colors focus-ring"
          >
            {lang === 'ar' ? 'تواصل معي' : "Let's Connect"}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.56 }}
          className="mt-6 flex items-center gap-3"
        >
          {[
            { icon: GithubIcon, href: profile.github, label: 'GitHub' },
            { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-ink-900/15 dark:border-paper-100/15 text-ink-700 dark:text-paper-200 hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring"
            >
              <s.icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
