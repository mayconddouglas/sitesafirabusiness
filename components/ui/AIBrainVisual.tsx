'use client';

import { motion } from 'motion/react';

export function AIBrainVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any, delay: 0.1 }}
      className="relative w-full aspect-square max-w-[340px] mt-16 md:mt-20 mx-auto lg:ml-0 lg:mr-auto pointer-events-none"
    >
      <motion.svg
        viewBox="0 0 600 600"
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.24)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="300" r="280" fill="url(#g)" />

        <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
          <path d="M128 190 L246 148 L356 172 L460 232" />
          <path d="M138 310 L220 246 L300 300 L398 262 L472 330" />
          <path d="M160 430 L260 398 L350 410 L442 380" />
          <path d="M220 480 L300 420 L390 460" />
          <path d="M240 210 L300 300 L340 232" />
          <path d="M300 300 L290 392 L356 360" />
        </g>

        <g fill="rgba(255,255,255,0.55)">
          <circle cx="128" cy="190" r="4" />
          <circle cx="246" cy="148" r="4" />
          <circle cx="356" cy="172" r="4" />
          <circle cx="460" cy="232" r="4" />
          <circle cx="138" cy="310" r="4" />
          <circle cx="220" cy="246" r="4" />
          <circle cx="300" cy="300" r="5" />
          <circle cx="398" cy="262" r="4" />
          <circle cx="472" cy="330" r="4" />
          <circle cx="160" cy="430" r="4" />
          <circle cx="260" cy="398" r="4" />
          <circle cx="350" cy="410" r="4" />
          <circle cx="442" cy="380" r="4" />
          <circle cx="220" cy="480" r="4" />
          <circle cx="300" cy="420" r="4" />
          <circle cx="390" cy="460" r="4" />
          <circle cx="340" cy="232" r="4" />
          <circle cx="356" cy="360" r="4" />
          <circle cx="290" cy="392" r="4" />
        </g>
      </motion.svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white/10 font-display text-[64px] md:text-[84px] italic tracking-tight">
          Safira
        </div>
      </div>
    </motion.div>
  );
}
