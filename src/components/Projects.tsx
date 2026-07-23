import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ImageOff, X, FolderGit2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { projects, confidentialProjects } from '../data/content';
import type { Project } from '../data/content';
import { GithubIcon } from './BrandIcons';
import { asset } from '../lib/asset';

const filters = [
  { key: 'all', en: 'All', ar: 'الكل' },
  { key: 'personal', en: 'Personal', ar: 'شخصي' },
  { key: 'ksu', en: 'University', ar: 'جامعي' },
  { key: 'hackathon', en: 'Hackathon', ar: 'هاكاثون' },
  { key: 'bootcamp', en: 'Bootcamp', ar: 'معسكر' },
  { key: 'stc-task', en: 'Solutions by STC', ar: 'حلول من إس تي سي' },
  { key: 'kacst', en: 'KACST', ar: 'كاكست' },
] as const;

export default function Projects() {
  const { lang, t } = useSite();
  const [active, setActive] = useState<string>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const allProjects: Project[] = [...projects, ...confidentialProjects].sort((a, b) => a.order - b.order);

  const filtered = useMemo(() => {
    if (active === 'all') return allProjects;
    return allProjects.filter((p) => p.category === active);
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
                  : 'border-ink-900/15 dark:border-paper-100/15 text-ink-700/80 dark:text-paper-300/80 hover:border-gold-500/50'
              }`}
            >
              {lang === 'ar' ? f.ar : f.en}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} lang={lang} t={t} onOpen={() => setSelected(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} lang={lang} t={t} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function TechBadges({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg border border-ink-900/10 dark:border-paper-100/15 bg-paper-50/60 dark:bg-ink-950/40 text-ink-700/80 dark:text-paper-300/80"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, lang, t, onOpen }: { project: Project; lang: 'en' | 'ar'; t: any; onOpen: () => void }) {
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
            src={asset(project.image)}
            alt={t(project.title)}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <p className="text-[10.5px] font-display font-medium tracking-[0.15em] uppercase text-teal-600 dark:text-teal-400">
            {project.tags.slice(0, 3).join(' · ')}
          </p>
          {project.year && <span className="text-[11px] text-ink-600/60 dark:text-paper-400/70 shrink-0">{project.year}</span>}
        </div>
        {project.org && (
          <p className="text-[11px] font-medium text-gold-600 dark:text-gold-400 mb-1">{t(project.org)}</p>
        )}
        <h3 className="font-display font-semibold text-base mb-2">{t(project.title)}</h3>
        <p className="text-[13px] text-ink-800/75 dark:text-paper-200/70 leading-relaxed mb-4 flex-1 line-clamp-2">
          {t(project.description)}
        </p>
        <div className="mb-4">
          <TechBadges tags={project.tags} />
        </div>
        <button
          onClick={onOpen}
          className="text-xs font-medium text-gold-600 dark:text-gold-400 hover:underline text-start pt-3 border-t border-ink-900/10 dark:border-paper-100/10 mt-auto focus-ring rounded"
        >
          {lang === 'ar' ? 'اضغط للتفاصيل' : 'Click for details'}
        </button>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, lang, t, onClose }: { project: Project; lang: 'en' | 'ar'; t: any; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-ink-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl bg-paper-50 dark:bg-ink-900 border border-ink-900/10 dark:border-paper-100/10 shadow-2xl"
      >
        <div className="relative aspect-[16/9] bg-ink-900/5 dark:bg-paper-100/5 flex items-center justify-center">
          {project.image ? (
            <img src={asset(project.image)} alt={t(project.title)} className="w-full h-full object-contain" />
          ) : (
            <ImageOff size={32} className="text-ink-900/20 dark:text-paper-100/20" />
          )}
          <button
            onClick={onClose}
            className="absolute top-3 end-3 w-8 h-8 flex items-center justify-center rounded-full bg-ink-950/70 text-paper-50 hover:bg-ink-950/90 focus-ring"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <p className="text-[10.5px] font-display font-medium tracking-[0.15em] uppercase text-teal-600 dark:text-teal-400">
              {project.tags.slice(0, 3).join(' · ')}
            </p>
            {project.year && <span className="text-xs text-ink-600/60 dark:text-paper-400/70">{project.year}</span>}
          </div>
          <h3 className="font-display font-semibold text-xl mb-3">{t(project.title)}</h3>

          {project.confidential ? (
            <div className="flex items-start gap-2 rounded-xl border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/60 dark:bg-ink-950/40 px-3.5 py-2.5 mb-4">
              <Lock size={14} className="text-gold-600 dark:text-gold-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium">
                  {project.org ? t(project.org) : ''} · {lang === 'ar' ? 'سري' : 'Confidential'}
                </p>
                {project.confidentialNote && (
                  <p className="text-[11px] text-ink-700/70 dark:text-paper-300/70 mt-0.5">{t(project.confidentialNote)}</p>
                )}
              </div>
            </div>
          ) : (
            project.org && <p className="text-xs font-medium text-gold-600 dark:text-gold-400 mb-4">{t(project.org)}</p>
          )}

          <p className="text-sm leading-relaxed text-ink-800/80 dark:text-paper-200/75 mb-5">{t(project.description)}</p>

          <div className="mb-6">
            <TechBadges tags={project.tags} />
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-ink-900/10 dark:border-paper-100/10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ink-950 text-paper-50 dark:bg-gold-500 dark:text-ink-950 text-sm font-medium hover:opacity-90 transition-opacity focus-ring"
              >
                <GithubIcon size={15} /> {lang === 'ar' ? 'عرض المستودع' : 'View Repository'}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-ink-900/15 dark:border-paper-100/15 text-sm font-medium hover:border-gold-500/50 transition-colors focus-ring"
              >
                <FolderGit2 size={15} /> {lang === 'ar' ? 'المعاينة' : 'Live Demo'}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
