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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] as any }}
      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      className="group relative p-10 border border-[#E5E0D8] bg-white rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col gap-10 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    >
      <div className="flex justify-between items-center">
        <div className="text-text-primary">
          {icon}
        </div>
        <div className="text-[10px] tracking-[0.28em] font-semibold uppercase text-text-muted">
          {tag}
        </div>
      </div>
      <div>
        <h3 className="text-[22px] font-display font-medium mb-4 text-text-primary leading-snug">{title}</h3>
        <p className="text-text-muted leading-[1.7] font-medium font-body text-[14px]">{desc}</p>
      </div>
    </motion.div>
  );
}
