'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

import { Magnetic } from '@/components/ui/Magnetic';

const subtleScroll = {
  initial: { opacity: 0.01, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any },
  },
  viewport: { once: true, margin: '-50px' },
};

export interface CTASectionProps {}

export function CTASection({}: CTASectionProps) {
  return (
    <motion.section
      {...subtleScroll}
      className="py-40 px-8 md:px-16 max-w-[1600px] mx-auto text-center border-t border-border-subtle"
    >
      <div className="inline-flex items-center gap-3 mb-10">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: '2rem' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-px bg-text-primary opacity-30"
        ></motion.span>
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-text-primary/70">Acesso Restrito</span>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: '2rem' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-px bg-text-primary opacity-30"
        ></motion.span>
      </div>

      <h2 className="text-6xl md:text-8xl font-serif tracking-tight mb-12 leading-[1.05]">
        Transcenda o <span className="italic text-text-secondary block mt-2">atendimento convencional.</span>
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
        <Magnetic className="w-full sm:w-auto">
          <button className="group w-full sm:w-auto bg-text-primary text-white px-12 py-5 rounded-full font-semibold text-[11px] tracking-widest uppercase hover:bg-black/90 transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] hover:-translate-y-1">
            Solicitar Elegibilidade
          </button>
        </Magnetic>
        <Magnetic className="w-full sm:w-auto">
          <button className="group w-full sm:w-auto bg-transparent border border-border-subtle text-text-primary px-12 py-5 rounded-full font-semibold text-[11px] tracking-widest uppercase hover:bg-border-subtle/30 transition-all duration-700 flex items-center justify-center gap-3 hover:-translate-y-1">
            Agendar Advisory Board{' '}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </Magnetic>
      </div>
    </motion.section>
  );
}

