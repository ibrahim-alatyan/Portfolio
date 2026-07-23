import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { certificates } from '../data/content';
import { asset } from '../lib/asset';

function dateScore(d: string) {
  const [m, y] = d.split('/').map(Number);
  return y * 100 + m;
}

export default function Certificates() {
  const { lang, t } = useSite();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const sorted = useMemo(() => {
    const featured = certificates.filter((c) => c.featured).sort((a, b) => dateScore(b.date) - dateScore(a.date));
    const rest = certificates.filter((c) => !c.featured).sort((a, b) => dateScore(b.date) - dateScore(a.date));
    return [...featured, ...rest];
  }, []);

  const withImages = sorted.filter((c) => c.image);

  const openLightbox = (cert: (typeof sorted)[number]) => {
    const pos = withImages.findIndex((c) => c === cert);
    if (pos !== -1) setLightboxIdx(pos);
  };

  const close = () => setLightboxIdx(null);
  const next = () => setLightboxIdx((i) => (i === null ? null : (i + 1) % withImages.length));
  const prev = () => setLightboxIdx((i) => (i === null ? null : (i - 1 + withImages.length) % withImages.length));

  return (
    <section id="certificates" className="relative py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-4"
        >
          {lang === 'ar' ? 'الشهادات' : 'Certificates'}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-14"
        >
          {lang === 'ar' ? 'شهادات وإثبات تعلّم مستمر' : 'Proof of continuous learning'}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.map((cert, idx) => (
            <motion.button
              key={idx}
              onClick={() => cert.image && openLightbox(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.04 }}
              className={`relative text-start rounded-2xl border p-5 flex items-start gap-4 transition-colors focus-ring ${
                cert.featured
                  ? 'border-gold-500/50 bg-gradient-to-br from-gold-500/[0.08] to-transparent dark:from-gold-500/[0.1]'
                  : 'border-ink-900/10 dark:border-paper-100/10 bg-paper-100/40 dark:bg-ink-900/40'
              } ${cert.image ? 'hover:border-gold-500/50 cursor-pointer' : 'cursor-default'}`}
            >
              {cert.featured && (
                <span className="absolute -top-2.5 -end-2.5 flex items-center justify-center w-7 h-7 rounded-full bg-gold-500 text-ink-950 shadow-md">
                  <Star size={13} fill="currentColor" />
                </span>
              )}
              <div className="shrink-0 w-11 h-11 rounded-xl bg-ink-900/5 dark:bg-paper-100/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                <Award size={20} />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm leading-snug mb-1">{t(cert.title)}</p>
                <p className="text-xs text-teal-600 dark:text-teal-400">{t(cert.issuer)}</p>
                <p className="text-[11px] text-ink-600/70 dark:text-paper-400/80 mt-1">{cert.date}</p>
                {cert.image && (
                  <p className="text-[11px] text-gold-600 dark:text-gold-400 mt-2 inline-flex items-center gap-1">
                    <ExternalLink size={11} />
                    {lang === 'ar' ? 'اضغط للتفاصيل' : 'Click for details'}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="hidden sm:flex absolute start-4 text-paper-50 p-2 rounded-full hover:bg-paper-50/10 focus-ring"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-paper-50 dark:bg-ink-900 border border-ink-900/10 dark:border-paper-100/10 shadow-2xl"
            >
              <div className="relative p-3 bg-ink-950">
                <img
                  src={asset(withImages[lightboxIdx].image!)}
                  alt={t(withImages[lightboxIdx].title)}
                  className="w-full rounded-lg border border-paper-100/10 object-contain max-h-[50vh] mx-auto"
                />
                <button
                  onClick={close}
                  className="absolute top-5 end-5 w-8 h-8 flex items-center justify-center rounded-full bg-ink-950/70 text-paper-50 hover:bg-ink-950/90 focus-ring"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <a
                href={asset(withImages[lightboxIdx].image!)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-xs font-medium text-ink-700/80 dark:text-paper-300/80 bg-paper-100/60 dark:bg-ink-950/40 border-b border-ink-900/10 dark:border-paper-100/10 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                <ExternalLink size={13} />
                {lang === 'ar' ? 'فتح الصورة بتبويب جديد' : 'Open image in new tab'}
              </a>

              <div className="p-6">
                {withImages[lightboxIdx].featured && (
                  <p className="flex items-center gap-1 text-[10.5px] font-display font-medium tracking-[0.15em] uppercase text-gold-600 dark:text-gold-400 mb-2">
                    <Star size={11} fill="currentColor" /> {lang === 'ar' ? 'شهادة مميزة' : 'Featured certificate'}
                  </p>
                )}
                <h3 className="font-display font-semibold text-lg mb-4">{t(withImages[lightboxIdx].title)}</h3>

                <div className="divide-y divide-ink-900/10 dark:divide-paper-100/10 border-t border-b border-ink-900/10 dark:border-paper-100/10">
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-[11px] uppercase tracking-wider text-ink-600/70 dark:text-paper-400/80">
                      {lang === 'ar' ? 'الجهة المانحة' : 'Issuer'}
                    </span>
                    <span className="text-sm font-medium">{t(withImages[lightboxIdx].issuer)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-[11px] uppercase tracking-wider text-ink-600/70 dark:text-paper-400/80">
                      {lang === 'ar' ? 'السنة' : 'Year'}
                    </span>
                    <span className="text-sm font-medium">{withImages[lightboxIdx].date}</span>
                  </div>
                  {withImages[lightboxIdx].credentialId && (
                    <div className="flex items-center justify-between py-2.5 gap-3">
                      <span className="text-[11px] uppercase tracking-wider text-ink-600/70 dark:text-paper-400/80 shrink-0">
                        {lang === 'ar' ? 'رقم الاعتماد' : 'Credential ID'}
                      </span>
                      <span className="text-xs font-mono text-end break-all">{withImages[lightboxIdx].credentialId}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="hidden sm:flex absolute end-4 text-paper-50 p-2 rounded-full hover:bg-paper-50/10 focus-ring"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
