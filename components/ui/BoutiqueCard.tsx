'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

export interface BoutiqueCardProps {
  icon: ReactNode;
  tag: string;
  title: string;
  desc: string;
  delay?: number;
}

export function BoutiqueCard({ icon, tag, title, desc, delay = 0 }: BoutiqueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] as any }}
      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      className="group relative p-10 border border-border/50 bg-bg-secondary/40 rounded-[2rem] hover:bg-white/80 transition-all duration-1000 ease-out flex flex-col gap-10"
    >
      <div className="flex justify-between items-center">
        <div className="text-text-primary/40 group-hover:text-text-primary transition-colors duration-700">
          {icon}
        </div>
        <div className="text-[10px] tracking-[0.2em] font-semibold uppercase text-text-secondary">
          {tag}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-display mb-4 text-text-primary">{title}</h3>
        <p className="text-text-secondary leading-relaxed font-medium text-[15px]">{desc}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-safira-bright transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left ease-[0.22,1,0.36,1] rounded-b-[2rem]"></div>
    </motion.div>
  );
}
