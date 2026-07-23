import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { certificates } from '../data/content';
import { asset } from '../lib/asset';

export default function Certificates() {
  const { lang, t } = useSite();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const withImages = certificates.filter((c) => c.image);
  const imageIndexMap = withImages.map((c) => certificates.indexOf(c));

  const openLightbox = (certIdx: number) => {
    const pos = imageIndexMap.indexOf(certIdx);
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
          {certificates.map((cert, idx) => (
            <motion.button
              key={idx}
              onClick={() => cert.image && openLightbox(idx)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.04 }}
              className={`text-start rounded-2xl border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/40 dark:bg-ink-900/40 overflow-hidden transition-colors focus-ring ${
                cert.image ? 'hover:border-gold-500/40 cursor-pointer' : 'cursor-default'
              }`}
            >
              {cert.image ? (
                <div className="aspect-[4/3] overflow-hidden bg-ink-900/5">
                  <img src={asset(cert.image!)} alt={t(cert.title)} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="aspect-[4/3] flex items-center justify-center bg-ink-900/5 dark:bg-paper-100/5">
                  <div className="flex flex-col items-center gap-2 text-ink-600/40 dark:text-paper-400/40">
                    <Award size={28} />
                    <span className="text-[11px]">{t(cert.issuer)}</span>
                  </div>
                </div>
              )}
              <div className="p-4">
                <p className="font-medium text-sm leading-snug mb-1">{t(cert.title)}</p>
                <p className="text-xs text-teal-600 dark:text-teal-400">{t(cert.issuer)}</p>
                <p className="text-[11px] text-ink-600/50 dark:text-paper-400/50 mt-1">{cert.date}</p>
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
            className="fixed inset-0 z-[100] bg-ink-950/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 end-5 text-paper-50 p-2 rounded-full hover:bg-paper-50/10 focus-ring">
              <X size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute start-4 text-paper-50 p-2 rounded-full hover:bg-paper-50/10 focus-ring"
            >
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              src={asset(withImages[lightboxIdx].image!)}
              alt={t(withImages[lightboxIdx].title)}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute end-4 text-paper-50 p-2 rounded-full hover:bg-paper-50/10 focus-ring"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
