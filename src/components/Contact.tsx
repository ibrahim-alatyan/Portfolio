import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { profile } from '../data/content';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Contact() {
  const { lang, t } = useSite();

  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: LinkedinIcon, label: 'LinkedIn', href: profile.linkedin },
    { icon: GithubIcon, label: 'GitHub', href: profile.github },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl border border-ink-900/10 dark:border-paper-100/10 bg-gradient-to-br from-paper-100/60 to-transparent dark:from-ink-900/60 p-8 sm:p-14 relative overflow-hidden">
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-4"
            >
              {lang === 'ar' ? 'تواصل' : 'Contact'}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl mb-6"
            >
              {lang === 'ar' ? 'لنبني شيئًا مبنيًا على بيانات حقيقية' : "Let's build something grounded in real data"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-ink-800/75 dark:text-paper-200/70 max-w-xl mb-10 leading-relaxed"
            >
              {lang === 'ar'
                ? 'متاح لفرص التوظيف والتعاون في مشاريع الذكاء الاصطناعي وعلوم البيانات. راسلني مباشرة أو تواصل عبر لينكدإن.'
                : "Open to full-time roles and collaborations in AI, ML, and data. Reach out directly or connect on LinkedIn."}
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-900/15 dark:border-paper-100/15 bg-paper-50/70 dark:bg-ink-950/50 text-sm font-medium hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus-ring"
                >
                  <l.icon size={16} />
                  {l.label}
                </a>
              ))}
            </div>

            <p className="flex items-center gap-1.5 text-xs text-ink-600/60 dark:text-paper-400/60 mt-8">
              <MapPin size={13} /> {t(profile.location)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
