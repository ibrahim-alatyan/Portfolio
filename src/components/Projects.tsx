import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, ImageOff } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { projects, confidentialProjects } from '../data/content';
import type { Project } from '../data/content';
import { GithubIcon } from './BrandIcons';

const filters = [
  { key: 'all', en: 'All', ar: 'الكل' },
  { key: 'personal', en: 'Personal', ar: 'شخصي' },
  { key: 'ksu', en: 'University', ar: 'جامعي' },
  { key: 'hackathon', en: 'Hackathon', ar: 'هاكاثون' },
  { key: 'bootcamp', en: 'Bootcamp', ar: 'معسكر' },
  { key: 'stc-task', en: 'STC Task', ar: 'مهمة STC' },
  { key: 'confidential', en: 'Confidential', ar: 'سري' },
] as const;

export default function Projects() {
  const { lang, t } = useSite();
  const [active, setActive] = useState<string>('all');

  const allProjects: Project[] = [...projects, ...confidentialProjects];

  const filtered = useMemo(() => {
    if (active === 'all') return allProjects;
    if (active === 'confidential') return allProjects.filter((p) => p.confidential);
    return allProjects.filter((p) => p.category === active && !p.confidential);
  }, [active]);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-4"
        >
          {lang === 'ar' ? 'المشاريع' : 'Projects'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-10"
        >
          {lang === 'ar' ? 'أعمال مطبّقة على بيانات حقيقية' : 'Work applied to real data'}
        </motion.h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-colors focus-ring ${
                active === f.key
                  ? 'bg-ink-950 text-paper-50 dark:bg-gold-500 dark:text-ink-950 border-transparent'
                  : 'border-ink-900/15 dark:border-paper-100/15 text-ink-700/70 dark:text-paper-300/70 hover:border-gold-500/50'
              }`}
            >
              {lang === 'ar' ? f.ar : f.en}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} lang={lang} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, lang, t }: { project: Project; lang: 'en' | 'ar'; t: any }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/40 dark:bg-ink-900/40 hover:border-gold-500/40 transition-colors"
    >
      <div className="relative aspect-[16/10] bg-ink-900/5 dark:bg-paper-100/5 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={t(project.title)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ImageOff size={26} className="text-ink-900/20 dark:text-paper-100/20" />
        )}
        {project.confidential && (
          <div className="absolute top-3 end-3 flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-ink-950/85 text-gold-400 backdrop-blur-sm">
            <Lock size={11} />
            {lang === 'ar' ? 'سري' : 'Confidential'}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {project.org && (
          <p className="text-[11px] font-medium text-teal-600 dark:text-teal-400 mb-1">{t(project.org)}</p>
        )}
        <h3 className="font-display font-semibold text-base mb-2">{t(project.title)}</h3>
        <p className="text-sm text-ink-800/75 dark:text-paper-200/70 leading-relaxed mb-4 flex-1">
          {t(project.description)}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-ink-900/5 dark:bg-paper-100/10 text-ink-700/70 dark:text-paper-300/70">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-1 border-t border-ink-900/10 dark:border-paper-100/10 mt-auto pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring rounded"
            >
              <GithubIcon size={14} /> {lang === 'ar' ? 'الكود' : 'Code'}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring rounded"
            >
              <ExternalLink size={14} /> {lang === 'ar' ? 'المعاينة' : 'Live Demo'}
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="text-xs text-ink-600/50 dark:text-paper-400/50">
              {lang === 'ar' ? 'غير متاح للنشر العام' : 'Not publicly available'}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
