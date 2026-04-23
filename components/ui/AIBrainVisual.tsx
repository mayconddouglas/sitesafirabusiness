'use client';

import { motion, useScroll, useTransform } from 'motion/react';

export function AIBrainVisual() {
  const { scrollYProgress } = useScroll();
  const rotateScroll = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateScrollReverse = useTransform(scrollYProgress, [0, 1], [720, 0]);

  return (
    <div
      className="relative w-full aspect-square max-w-[280px] mt-24 mx-auto lg:ml-0 lg:mr-auto flex items-center justify-center pointer-events-none opacity-90"
      style={{ perspective: 1200 }}
    >
      <div className="absolute inset-0 bg-white blur-[100px] opacity-5 rounded-full"></div>

      <div className="absolute w-1.5 h-1.5 bg-[#DDF247] rounded-full animate-pulse shadow-[0_0_20px_4px_rgba(221,242,71,0.5)] z-10 transition-transform duration-1000 scale-100 hover:scale-150"></div>

      <motion.div
        style={{ rotateZ: rotateScroll, rotateX: '60deg', rotateY: '45deg', transformStyle: 'preserve-3d' }}
        className="absolute w-full h-full rounded-full border border-white/10"
      ></motion.div>
      <motion.div
        style={{ rotateZ: rotateScrollReverse, rotateX: '45deg', rotateY: '-60deg', transformStyle: 'preserve-3d' }}
        className="absolute w-[75%] h-[75%] rounded-full border border-white/20"
      ></motion.div>
      <motion.div
        style={{ rotateZ: rotateScroll, rotateX: '-60deg', rotateY: '60deg', transformStyle: 'preserve-3d' }}
        className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-white/10"
      ></motion.div>

      <motion.div
        animate={{ rotateZ: 360, rotateX: -45, rotateY: -45 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="absolute w-[30%] h-[30%] rounded-full border border-white/30"
      ></motion.div>
    </div>
  );
}

