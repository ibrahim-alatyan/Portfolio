import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import { experience } from '../data/content';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { lang, t } = useSite();

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-4"
        >
          {lang === 'ar' ? 'المسار المهني' : 'Experience'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-14"
        >
          {lang === 'ar' ? 'الخبرات العملية' : 'Where I built it in production'}
        </motion.h2>

        <div className="relative ps-8">
          <div className="absolute top-1 bottom-1 start-[11px] w-px bg-gradient-to-b from-gold-500/60 via-ink-900/15 dark:via-paper-100/15 to-transparent" />
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="relative"
              >
                <div className="absolute -start-8 top-1 w-[23px] h-[23px] rounded-full bg-paper-50 dark:bg-ink-950 border-2 border-gold-500 flex items-center justify-center">
                  <Briefcase size={11} className="text-gold-600 dark:text-gold-400" />
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-lg">{t(exp.role)}</h3>
                  <span className="text-xs font-medium text-ink-600/60 dark:text-paper-400/60">{exp.period}</span>
                </div>
                <p className="text-sm text-gold-600 dark:text-gold-400 font-medium">{t(exp.org)}</p>
                <p className="text-xs text-ink-600/60 dark:text-paper-400/60 mb-4">{t(exp.dept)}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm leading-relaxed text-ink-800/80 dark:text-paper-200/75 ps-4 relative before:content-[''] before:absolute before:start-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal-500">
                      {t(b)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
