'use client';

import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Zap } from 'lucide-react';

import { Magnetic } from '@/components/ui/Magnetic';

const subtleFade = {
  initial: { opacity: 0.01, scale: 0.95, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const subtleScroll = {
  initial: { opacity: 0.01, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any },
  },
  viewport: { once: true, margin: '-50px' },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export interface HeroSectionProps {}

export function HeroSection({}: HeroSectionProps) {
  return (
    <>
      <section className="pt-20 pb-32 md:pb-40 px-8 md:px-16 max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="lg:col-span-6 flex flex-col z-20"
          >
            <motion.div variants={subtleFade} className="inline-flex items-center gap-3 mb-8">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '2rem' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="h-px bg-text-primary opacity-30"
              ></motion.span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-text-primary/80">
                Tecnologia para o Alto Padrão
              </span>
            </motion.div>

            <motion.h1
              variants={subtleFade}
              className="text-6xl md:text-[5.5rem] lg:text-[6.2rem] font-serif font-medium tracking-tight text-text-primary leading-[1.05] mb-8"
            >
              A excelência do luxo. <br />
              <span className="italic text-text-secondary">Em escala cognitiva.</span>
            </motion.h1>

            <motion.p
              variants={subtleFade}
              className="text-lg text-text-secondary leading-relaxed max-w-md mb-12 font-medium"
            >
              A Safira é a primeira inteligência artificial moldada para operações de elite. Nosso motor orquestra vendas de
              ticket elevado no WhatsApp com a mesma retórica, discrição e etiqueta de um Private Shopper.
            </motion.p>

            <motion.div variants={subtleFade} className="flex flex-col sm:flex-row items-center justify-start gap-5 mt-4 w-full">
              <Magnetic className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto flex items-center justify-center gap-4 text-[11px] tracking-widest uppercase font-semibold bg-text-primary text-white border border-transparent px-10 py-5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-white/10 will-change-transform overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Elevar o Padrão da Instituição{' '}
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>
                </button>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto flex items-center justify-center gap-4 text-[11px] tracking-widest uppercase font-semibold text-text-primary bg-transparent border border-border-subtle px-10 py-5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:bg-white hover:border-black/10 will-change-transform overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    O Universo Safira{' '}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 opacity-70 group-hover:opacity-100" />
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent pointer-events-none"></div>
                </button>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.01, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-6 relative w-full aspect-[4/5] max-w-lg lg:max-w-none mx-auto rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0A0A0C] rounded-[2rem] overflow-hidden">
              <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-[#DDF247]/10 blur-[100px] rounded-full animate-pulse transition-all duration-[3000ms] group-hover:bg-[#DDF247]/15 group-hover:scale-110"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-500/5 blur-[120px] rounded-full"></div>

              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 transition-opacity duration-1000 group-hover:opacity-70"></div>

              <div className="relative h-full flex flex-col p-8 md:p-10 z-10">
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DDF247] animate-pulse shadow-[0_0_10px_rgba(221,242,71,0.8)]"></div>
                    <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/50">Terminal Safira</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-white/30 text-right">
                    Build 9.1
                    <br />
                    Cognitive_Core
                  </span>
                </div>

                <div className="flex-1 mt-8 flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-mono text-white/30 pt-1 shrink-0">16:42:01</span>
                    <div>
                      <p className="text-xs text-white/90 font-medium mb-1 tracking-wide">Identificação de Clientela VIP</p>
                      <p className="text-[11px] text-white/40 leading-relaxed font-mono">
                        Contato estabelecido. Histórico puxado. LTV estimado: R$ 245.000,00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-mono text-white/30 pt-1 shrink-0">16:42:04</span>
                    <div>
                      <p className="text-xs text-white/90 font-medium mb-1 tracking-wide">Processamento Heurístico</p>
                      <p className="text-[11px] text-white/40 leading-relaxed font-mono">
                        Realizando cruzamento de acervo Ouro com paleta colorimétrica Outono/Inverno preferida.
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0.01, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-start gap-4 relative group/log"
                  >
                    <div className="absolute -left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#DDF247]/0 via-[#DDF247] to-[#DDF247]/0 opacity-0 group-hover/log:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-[10px] font-mono text-[#DDF247] pt-1.5 shrink-0 transition-all duration-300">
                      16:42:08
                    </span>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(221,242,71,0.05)]">
                      <p className="text-xs text-[#DDF247] font-medium mb-2 flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5" /> Recomendação Orquestrada
                      </p>
                      <p className="text-[11px] text-white/70 leading-relaxed italic">
                        &quot;Bom dia, Sr. Arthur. A peça que mencionamos no desfile de Milão acaba de desembarcar em nosso
                        acervo fechado. Gostaria que eu realizasse o envio imediato?&quot;
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                    <span className="text-[10px] tracking-widest uppercase font-medium text-white/40">Status do Motor</span>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/90">Autônomo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section {...subtleScroll} className="py-20 border-y border-border-subtle/40 bg-bg-secondary/20">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col items-center">
          <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-[0.3em] mb-12 text-center">
            A Escolha Unânime das Mais Prestigiadas Maisons
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-1000">
            <span className="font-serif italic text-2xl md:text-3xl transition-transform duration-1000 hover:scale-105">
              Amelie & Co.
            </span>
            <span className="font-sans font-light tracking-[0.2em] text-lg md:text-xl uppercase transition-transform duration-1000 hover:scale-105">
              Maison Noir
            </span>
            <span className="font-serif font-medium tracking-tight text-2xl md:text-3xl transition-transform duration-1000 hover:scale-105">
              Atelier Ouro
            </span>
            <span className="font-sans font-bold tracking-widest text-lg md:text-xl uppercase transition-transform duration-1000 hover:scale-105">
              Vogue Minimal
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
}

