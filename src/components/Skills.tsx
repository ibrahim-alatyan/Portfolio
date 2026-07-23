import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import { skillGroups } from '../data/content';

export default function Skills() {
  const { lang, t } = useSite();

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-4"
        >
          {lang === 'ar' ? 'المهارات' : 'Skills'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-14"
        >
          {lang === 'ar' ? 'الأدوات التي أفكر بها' : 'The toolkit I think in'}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (gi % 3) * 0.06 }}
              className="rounded-2xl border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/40 dark:bg-ink-900/40 p-6 hover:border-gold-500/40 transition-colors"
            >
              <h3 className="font-display font-medium text-sm text-teal-600 dark:text-teal-400 mb-4 tracking-wide">
                {t(group.title)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-ink-900/5 dark:bg-paper-100/10 text-ink-800/85 dark:text-paper-200/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
