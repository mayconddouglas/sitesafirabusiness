'use client';

import { motion } from 'motion/react';

const subtleScroll = {
  initial: { opacity: 0.01, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any },
  },
  viewport: { once: true, margin: '-50px' },
};

interface HowItWorksStep {
  index: string;
  title: string;
  desc: string;
}

export interface HowItWorksSectionProps {}

export function HowItWorksSection({}: HowItWorksSectionProps) {
  const steps: HowItWorksStep[] = [
    {
      index: '01',
      title: 'Integra o acervo',
      desc: 'Conectamos seu catálogo e variáveis de estoque. A Safira responde apenas com peças reais e disponíveis.',
    },
    {
      index: '02',
      title: 'Define o tom de voz',
      desc: 'Treinamos etiqueta, retórica e protocolos do atendimento premium da marca em poucas iterações.',
    },
    {
      index: '03',
      title: 'Opera no WhatsApp',
      desc: 'A conversa acontece no canal preferido do cliente. Sem fricção, sem troca de plataforma, sem perda de intenção.',
    },
    {
      index: '04',
      title: 'Converte com discrição',
      desc: 'A Safira conduz objeções, cria desejo e finaliza com links e instruções sob medida — mantendo o luxo como padrão.',
    },
  ];

  return (
    <section id="como-funciona" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
      <motion.div {...subtleScroll} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
        <div>
          <span className="block text-safira-bright font-bold text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
            Fluxo (Clareza)
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-text-primary leading-[1.1] max-w-2xl">
            Um ritual simples, <br />
            <span className="italic text-text-secondary">uma operação impecável.</span>
          </h2>
        </div>
        <p className="text-base text-text-secondary max-w-sm font-medium leading-relaxed">
          Implantamos a Safira sem ruído operacional. Cada etapa é desenhada para preservar a estética, a performance e a
          privacidade do seu ecossistema.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 rounded-[2rem] border border-border/60 bg-bg-secondary/30 p-10 md:p-12">
          <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-text-secondary mb-6">O que muda</p>
          <p className="text-text-secondary leading-relaxed font-medium text-[15px]">
            Você deixa de depender do timing humano para atender e converte com a mesma precisão de um vendedor sênior,
            24/7, sem sacrificar o charme do atendimento boutique.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
              className="group rounded-[2rem] border border-border/60 bg-white/0 hover:bg-white/50 transition-all duration-1000 p-10 md:p-12"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-text-secondary/70 mb-3">
                    Etapa {step.index}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-medium text-[15px] max-w-2xl">{step.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-bg-secondary/80 border border-border/60 flex items-center justify-center text-[11px] font-semibold tracking-widest text-text-secondary group-hover:text-text-primary transition-colors">
                  {step.index}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
