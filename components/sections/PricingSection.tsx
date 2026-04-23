'use client';

import { motion } from 'motion/react';

import { MembershipCard } from '@/components/ui/MembershipCard';

const subtleScroll = {
  initial: { opacity: 0.01, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any },
  },
  viewport: { once: true, margin: '-50px' },
};

export interface PricingSectionProps {}

export function PricingSection({}: PricingSectionProps) {
  return (
    <section id="membership" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
      <motion.div {...subtleScroll} className="text-center max-w-3xl mx-auto mb-24">
        <span className="block text-safira-bright font-bold text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
          Adesão (Ação)
        </span>
        <h2 className="text-5xl md:text-6xl font-display mb-8 text-text-primary">
          Membros <span className="italic text-text-secondary">Safira.</span>
        </h2>
        <p className="text-text-secondary text-base font-medium max-w-2xl mx-auto">
          Escolha o nível de exclusividade, resposta e volume que a sua marca precisa. Diferente do mercado comum, nossos
          planos de adesão entregam dedicação extrema.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <MembershipCard
          name="Safira Starter"
          desc="Para marcas emergentes que querem o luxo desde a sua primeira venda online."
          price="297"
          features={[
            'Agente de IA no WhatsApp',
            'Treino do Tom de Voz da Marca',
            'Leitura Rápida de Catálogo (200 itens)',
            'Padrão Classe A em Respostas',
          ]}
          delay={0}
        />
        <MembershipCard
          name="Safira Business Plus"
          desc="O estado da arte para marcas estabelecidas e com volume constante de leads VIPs."
          price="597"
          isPremium={true}
          features={[
            'Atendimento Seamless WhatsApp + Insta',
            'Escalabilidade para Alta Demanda',
            'Acervo Infinito (Integração Direta)',
            'Checkout Direto por Link Mágico',
            'Suporte VIP de 4 Horas',
          ]}
          delay={0.15}
        />
        <MembershipCard
          name="Safira Enterprise"
          desc="Exclusividade máxima. Sob medida para grandes consórcios e redes de franquias."
          price="Fale Conosco"
          features={[
            'Múltiplos Agentes Omnichannel',
            'Arquitetura Implantada no seu ERP',
            'Gerente de Sucesso (CS) Dedicado',
            'Dashboards de BI em Tempo Real',
            'Acordo de LGPD Rigoroso',
          ]}
          delay={0.3}
        />
      </div>
    </section>
  );
}
