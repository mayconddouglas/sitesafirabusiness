'use client';

import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export interface MembershipCardProps {
  name: string;
  desc: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  delay?: number;
}

export function MembershipCard({
  name,
  desc,
  price,
  features,
  isPremium = false,
  delay = 0,
}: MembershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] as any }}
      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      className={`p-10 md:p-14 border rounded-[2rem] flex flex-col relative transition-all duration-1000 ${
        isPremium
          ? 'bg-obsidian text-text-inverse border-transparent shadow-[0_30px_80px_rgba(10,10,10,0.18)] hover:shadow-[0_40px_100px_rgba(10,10,10,0.28)] hover:-translate-y-1'
          : 'bg-transparent border-border hover:border-text-primary/10 text-text-primary hover:bg-white/40'
      }`}
    >
      {isPremium && (
        <div className="absolute top-8 right-8 flex items-center gap-2">
          <Star className="w-3 h-3 text-white/80 fill-current" />
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/80">
            Destaque
          </span>
        </div>
      )}

      <h3 className={`text-4xl font-display mb-4 ${isPremium ? 'text-white' : 'text-text-primary'}`}>
        {name}
      </h3>
      <p className={`text-[15px] mb-12 leading-relaxed font-medium ${isPremium ? 'text-white/70' : 'text-text-secondary'}`}>
        {desc}
      </p>

      <div className="mb-12 transition-transform duration-1000 transform origin-left">
        {price !== 'Sob Consulta' && price !== 'Fale Conosco' && (
          <span className="text-xl align-top mr-1 font-medium">R$</span>
        )}
        <span
          className={`text-6xl font-light tracking-tighter ${isPremium ? 'text-white' : 'text-text-primary'} ${
            price === 'Fale Conosco' || price === 'Sob Consulta' ? 'text-4xl' : ''
          }`}
        >
          {price}
        </span>
      </div>

      <div className="space-y-5 flex-1 mb-12">
        {features.map((feat, i) => (
          <div key={i} className="flex gap-4 items-start group">
            <div
              className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-700 group-hover:scale-150 ${
                isPremium
                  ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                  : 'bg-text-primary/30'
              }`}
            ></div>
            <span className={`text-[14px] leading-relaxed font-medium ${isPremium ? 'text-white/90' : 'text-text-secondary'}`}>
              {feat}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-700 ${
          isPremium
            ? 'bg-ivory text-text-primary mx-0 hover:bg-ivory-dark hover:shadow-[0_10px_20px_rgba(255,255,255,0.08)]'
            : 'bg-ivory-dark border border-border hover:bg-text-primary hover:text-text-inverse mx-0 shadow-sm hover:shadow-lg'
        }`}
      >
        {price === 'Fale Conosco' || price === 'Sob Consulta' ? 'Agendar Reunião VIP' : `Adquirir ${name}`}
      </button>
    </motion.div>
  );
}
