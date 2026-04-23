'use client';

import type { ComponentType } from 'react';
import { motion } from 'motion/react';
import { Brain, FolderUp, Sparkles, Smartphone, TrendingUp } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as any;

interface HowItWorksStep {
  index: string;
  title: string;
  desc: string;
  eta: string;
  icon: ComponentType<{ className?: string }>;
}

export interface HowItWorksSectionProps {}

export function HowItWorksSection({}: HowItWorksSectionProps) {
  const steps: HowItWorksStep[] = [
    {
      index: '01',
      title: 'Você compartilha seu catálogo',
      desc: 'Envie seu catálogo em PDF, planilha ou integre direto com sua plataforma (Shopify, Nuvemshop, WooCommerce). Nossa IA lê e aprende tudo.',
      eta: '~2h',
      icon: FolderUp,
    },
    {
      index: '02',
      title: 'Treinamos a Safira com sua marca',
      desc: 'Definimos juntos o tom de voz, as respostas padrão, as políticas de troca e o que a IA pode ou não fazer. Você aprova tudo antes de ir ao ar.',
      eta: '~24h',
      icon: Sparkles,
    },
    {
      index: '03',
      title: 'Conectamos ao seu WhatsApp Business',
      desc: 'Integramos com a API oficial do WhatsApp. Seu número continua o mesmo. A Safira passa a responder automaticamente, 24 horas por dia.',
      eta: '~1h',
      icon: Smartphone,
    },
    {
      index: '04',
      title: 'Você acompanha e vende mais',
      desc: 'Acesse o painel de conversas, veja o histórico, acompanhe métricas de atendimento e intervja quando quiser. A IA trabalha, você foca no que importa.',
      eta: 'Automático',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32 px-6 md:px-16 max-w-[1600px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-secondary/70 text-safira-mid font-body text-[12px] tracking-wide uppercase font-semibold">
          <Brain className="w-4 h-4" />
          Implementação em 48h
        </span>

        <h2 className="mt-8 text-4xl md:text-6xl font-display text-text-primary leading-[1.05] tracking-tight">
          Da contratação ao primeiro cliente atendido em 48 horas
        </h2>
        <p className="mt-6 text-[15px] md:text-lg text-text-secondary leading-relaxed font-medium font-body max-w-2xl mx-auto">
          Sem código. Sem técnico. Você só precisa do seu catálogo.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative mt-14 md:mt-20"
      >
        <div className="hidden md:block absolute left-10 right-10 top-12 h-px bg-border"></div>
        <div className="md:hidden absolute left-6 top-6 bottom-6 w-px bg-border"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.index}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
                }}
                className="relative"
              >
                <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 w-3.5 h-3.5 rounded-full gradient-safira border border-white shadow-[0_12px_22px_rgba(15,42,92,0.25)]"></span>
                <span className="md:hidden absolute left-6 top-12 w-3.5 h-3.5 rounded-full gradient-safira border border-white shadow-[0_12px_22px_rgba(15,42,92,0.25)]"></span>
                <div className="relative rounded-[2rem] border border-border bg-white p-8 md:p-9 overflow-hidden shadow-[0_18px_40px_rgba(8,12,20,0.06)]">
                  <div className="absolute -right-6 -top-8 text-[7.5rem] font-display tracking-tight text-safira-bright/10 select-none">
                    {step.index}
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-12 h-12 rounded-2xl gradient-safira flex items-center justify-center shadow-[0_18px_40px_rgba(15,42,92,0.25)]">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] tracking-wide uppercase font-semibold font-body bg-bg-secondary text-safira-mid border border-border">
                        {step.eta}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl md:text-2xl font-display text-text-primary leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-relaxed font-medium font-body text-text-secondary whitespace-pre-line">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
        className="mt-14 md:mt-20 rounded-[2rem] border border-border bg-bg-secondary/50 px-8 py-8"
      >
        <p className="text-[11px] tracking-[0.35em] uppercase font-semibold text-text-muted text-center">
          Integrações compatíveis
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {['Shopify', 'Nuvemshop', 'WooCommerce', 'Bling', 'Tiny ERP', 'Google Sheets'].map((name) => (
            <div
              key={name}
              className="px-5 py-2.5 rounded-full border border-border bg-white text-text-secondary font-body text-[12px] tracking-wide uppercase font-semibold"
            >
              {name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
