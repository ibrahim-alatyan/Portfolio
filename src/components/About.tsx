import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import { profile, education, bootcamp } from '../data/content';
import { asset } from '../lib/asset';
import { GraduationCap, BrainCircuit } from 'lucide-react';

export default function About() {
  const { lang, t } = useSite();

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0 w-64 sm:w-72"
        >
          <div className="absolute -inset-3 rounded-2xl border border-gold-500/30 rotate-2" />
          <div className="relative rounded-2xl overflow-hidden border border-ink-900/10 dark:border-paper-100/10 shadow-xl">
            <img src={asset(profile.portrait)} alt={t(profile.name)} className="w-full h-full object-cover aspect-[4/5]" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-ink-950 dark:bg-gold-500 text-paper-50 dark:text-ink-950 rounded-xl px-4 py-2 text-xs font-display font-medium shadow-lg">
            AI · ML · BI
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-4"
          >
            {lang === 'ar' ? 'نبذة عني' : 'About'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-6"
          >
            {lang === 'ar' ? 'أحوّل البيانات إلى أنظمة ذكاء اصطناعي فعلية' : 'Turning data into real AI systems'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ink-800/80 dark:text-paper-200/75 leading-relaxed max-w-2xl mb-10"
          >
            {t(profile.summary)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/50 dark:bg-ink-900/50 p-6 flex items-start gap-4"
          >
            <div className="p-2.5 rounded-xl bg-gold-500/15 text-gold-600 dark:text-gold-400">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="font-display font-medium">{t(education.degree)}</p>
              <p className="text-sm text-ink-700/70 dark:text-paper-300/70 mt-1">{t(education.school)}</p>
              <p className="text-sm text-ink-700/70 dark:text-paper-300/70">{t(education.detail)}</p>
              <p className="text-xs text-ink-600/60 dark:text-paper-400/60 mt-1">{education.period}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/50 dark:bg-ink-900/50 p-6 flex items-start gap-4 mt-4"
          >
            <div className="p-2.5 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400">
              <BrainCircuit size={20} />
            </div>
            <div>
              <p className="font-display font-medium">{t(bootcamp.degree)}</p>
              <p className="text-sm text-ink-700/70 dark:text-paper-300/70 mt-1">{t(bootcamp.school)}</p>
              <p className="text-sm text-ink-700/70 dark:text-paper-300/70">{t(bootcamp.detail)}</p>
              <p className="text-xs text-ink-600/60 dark:text-paper-400/60 mt-1">{bootcamp.period}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
