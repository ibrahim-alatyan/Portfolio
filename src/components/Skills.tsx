import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Share2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { skillCategories } from '../data/skillsData';
import type { SkillItem } from '../data/skillsData';

type ViewMode = 'list' | 'graph';

export default function Skills() {
  const { lang, t } = useSite();
  const [view, setView] = useState<ViewMode>('list');
  const [active, setActive] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
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
              className="font-display text-3xl sm:text-4xl font-semibold tracking-tight"
            >
              {lang === 'ar' ? 'الأدوات التي أفكر بها' : 'The toolkit I think in'}
            </motion.h2>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-ink-900/15 dark:border-paper-100/15 p-1">
            <button
              onClick={() => { setView('graph'); setActive(null); }}
              className={`flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors focus-ring ${
                view === 'graph' ? 'bg-ink-950 text-paper-50 dark:bg-gold-500 dark:text-ink-950' : 'text-ink-700/70 dark:text-paper-300/70'
              }`}
            >
              <Share2 size={13} /> {lang === 'ar' ? 'شبكة' : 'Graph'}
            </button>
            <button
              onClick={() => { setView('list'); setActive(null); }}
              className={`flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors focus-ring ${
                view === 'list' ? 'bg-ink-950 text-paper-50 dark:bg-gold-500 dark:text-ink-950' : 'text-ink-700/70 dark:text-paper-300/70'
              }`}
            >
              <LayoutGrid size={13} /> {lang === 'ar' ? 'قائمة' : 'List'}
            </button>
          </div>
        </div>

        <div className="min-h-[52px] mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="w-full max-w-xl rounded-2xl border border-gold-500/40 bg-paper-100/60 dark:bg-ink-900/60 px-5 py-3 text-center"
              >
                <p className="font-display font-medium text-sm mb-0.5">{active.name}</p>
                <p className="text-xs text-ink-800/75 dark:text-paper-200/70">{t(active.description)}</p>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-ink-600/60 dark:text-paper-400/70"
              >
                {lang === 'ar' ? 'اختر تقنية لتشوف كيف أستخدمها' : 'Select a technology to see how I use it'}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {view === 'list' ? (
          <ListView active={active} onSelect={setActive} t={t} />
        ) : (
          <GraphView active={active} onSelect={setActive} t={t} />
        )}
      </div>
    </section>
  );
}

function ListView({ active, onSelect, t }: any) {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {skillCategories.map((cat, ci) => (
        <motion.div
          key={cat.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: (ci % 2) * 0.06 }}
          className="rounded-2xl border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/40 dark:bg-ink-900/40 p-5"
        >
          <h3 className="font-display font-medium text-sm text-teal-600 dark:text-teal-400 mb-4 tracking-wide">
            {t(cat.title)}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {cat.items.map((item: SkillItem) => {
              const isActive = active?.name === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => onSelect(isActive ? null : item)}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 text-center transition-colors focus-ring ${
                    isActive
                      ? 'border-gold-500 bg-gold-500/10'
                      : 'border-ink-900/10 dark:border-paper-100/10 hover:border-gold-500/40'
                  }`}
                >
                  <item.icon size={20} className={isActive ? 'text-gold-600 dark:text-gold-400' : 'text-ink-800/80 dark:text-paper-200/80'} />
                  <span className="text-[10.5px] leading-tight text-ink-800/80 dark:text-paper-200/80">{item.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function GraphView({ active, onSelect, t }: any) {
  const layout = useMemo(() => {
    const cx = 500;
    const cy = 300;
    const catRadius = 230;
    const n = skillCategories.length;
    return skillCategories.map((cat, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      const catX = cx + Math.cos(angle) * catRadius;
      const catY = cy + Math.sin(angle) * catRadius * 0.72;
      const itemRadius = 62;
      const spread = Math.min(cat.items.length * 0.42, Math.PI * 0.9);
      const items = cat.items.map((item, j) => {
        const t2 = cat.items.length > 1 ? j / (cat.items.length - 1) - 0.5 : 0;
        const a = angle + t2 * spread;
        return {
          item,
          x: catX + Math.cos(a) * itemRadius,
          y: catY + Math.sin(a) * itemRadius * 0.9,
        };
      });
      return { cat, x: catX, y: catY, items };
    });
  }, []);

  return (
    <div className="rounded-2xl border border-ink-900/10 dark:border-paper-100/10 bg-paper-100/30 dark:bg-ink-900/30 overflow-hidden">
      <svg viewBox="0 0 1000 620" className="w-full h-auto select-none">
        {layout.map((c) =>
          c.items.map((p) => (
            <line
              key={c.cat.key + p.item.name}
              x1={c.x}
              y1={c.y}
              x2={p.x}
              y2={p.y}
              stroke="currentColor"
              className="text-ink-900/10 dark:text-paper-100/10"
              strokeWidth={1}
            />
          ))
        )}

        {layout.map((c) => (
          <g key={c.cat.key}>
            <circle cx={c.x} cy={c.y} r={5} className="fill-gold-500" />
            <text
              x={c.x}
              y={c.y - 14}
              textAnchor="middle"
              className="fill-ink-900 dark:fill-paper-100 font-display"
              style={{ fontSize: 11, fontWeight: 600 }}
            >
              {t(c.cat.title)}
            </text>
          </g>
        ))}

        {layout.map((c) =>
          c.items.map((p) => {
            const isActive = active?.name === p.item.name;
            return (
              <g
                key={p.item.name}
                transform={`translate(${p.x},${p.y})`}
                onClick={() => onSelect(isActive ? null : p.item)}
                className="cursor-pointer"
              >
                <circle
                  r={16}
                  className={
                    isActive
                      ? 'fill-gold-500 stroke-gold-500'
                      : 'fill-paper-50 dark:fill-ink-800 stroke-ink-900/15 dark:stroke-paper-100/20'
                  }
                  strokeWidth={1}
                />
                <text
                  y={30}
                  textAnchor="middle"
                  className="fill-ink-800 dark:fill-paper-200"
                  style={{ fontSize: 9.5 }}
                >
                  {p.item.name.length > 14 ? p.item.name.slice(0, 13) + '…' : p.item.name}
                </text>
              </g>
            );
          })
        )}
      </svg>
    </div>
  );
}
