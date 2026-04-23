'use client';

import { ArrowUpRight, MessageCircle, ShoppingBag, Zap } from 'lucide-react';
import { motion } from 'motion/react';

import { BoutiqueCard } from '@/components/ui/BoutiqueCard';
import { AIBrainVisual } from '@/components/ui/AIBrainVisual';
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

export interface FeaturesSectionProps {}

export function FeaturesSection({}: FeaturesSectionProps) {
  return (
    <>
      <section id="experiencia" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
        <motion.div {...subtleScroll} className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <span className="block text-safira-bright font-bold text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
              A Experiência (Interesse)
            </span>
            <h2 className="text-5xl md:text-6xl font-display text-text-primary leading-[1.1] max-w-2xl">
              Sofisticação digital, <br />
              <span className="italic text-text-secondary">feita sob medida.</span>
            </h2>
          </div>
          <p className="text-base text-text-secondary max-w-sm font-medium leading-relaxed">
            Esqueça chatbots engessados e robotizados. A Safira oferece uma jornada de alta constura no atendimento, fluindo
            através dos caprichos dos clientes como um legítimo Personal Shopper.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BoutiqueCard
            icon={<MessageCircle className="w-5 h-5" />}
            tag="curadoria"
            title="Discurso de Grife"
            desc="Treinada com o DNA único da sua marca. Comunica-se com os clientes exalando a mesma elegância e etiqueta de um vendedor sênior da sua loja física."
            delay={0}
          />
          <BoutiqueCard
            icon={<ShoppingBag className="w-5 h-5" />}
            tag="velocidade"
            title="Acesso Imediato ao Acervo"
            desc="Esqueça o 'vou verificar no estoque'. A Safira acessa as coleções e recomenda as peças desejadas no timing perfeito das emoções."
            delay={0.15}
          />
          <BoutiqueCard
            icon={<Zap className="w-5 h-5" />}
            tag="conversão"
            title="Vendas Sem Atrito"
            desc="Toda a negociação e finalização acontece no próprio WhatsApp. Um ecossistema de desejo que culmina em transações de alto ticket invisíveis à concorrência."
            delay={0.3}
          />
        </div>
      </section>

      <motion.section
        {...subtleScroll}
        id="tecnologia"
        className="py-32 bg-text-primary text-white mx-4 md:mx-8 rounded-[3rem] px-8 md:px-16"
      >
        <div className="max-w-[1400px] mx-auto min-h-[600px] flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-16 lg:mb-0">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '2rem' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="h-px bg-white/40 opacity-50"
            ></motion.span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70">Arquitetura Cognitiva</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-auto">
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-6xl font-display leading-tight mb-8">
                O cérebro oculto
                <br />
                <span className="text-white/50 italic">por trás da sua grife.</span>
              </h2>
              <Magnetic>
                <button className="group flex items-center gap-4 text-[11px] tracking-widest uppercase font-semibold bg-transparent border border-white/20 px-8 py-4 rounded-full hover:bg-white/15 transition-all duration-700 hover:-translate-y-1">
                  A Inteligência Proprietária{' '}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </Magnetic>

              <AIBrainVisual />
            </div>

            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12">
              <div className="border-t border-white/20 pt-8 transition-opacity duration-1000 hover:opacity-100 opacity-70">
                <h4 className="text-2xl font-display mb-4 flex items-center justify-between">
                  Visão Semântica <span className="text-white/40 text-sm font-body tracking-widest opacity-80">01</span>
                </h4>
                <p className="text-white/60 leading-relaxed font-medium">
                  A Safira identifica desejos subliminares. Se o cliente pede &quot;algo fresco para Mônaco&quot;, ela
                  sugere exatamente os tecidos que combinam com o cenário. Uma verdadeira personal shopper em nuvem.
                </p>
              </div>

              <div className="border-t border-white/20 pt-8 transition-opacity duration-1000 hover:opacity-100 opacity-70">
                <h4 className="text-2xl font-display mb-4 flex items-center justify-between">
                  Fidelidade Absoluta <span className="text-white/40 text-sm font-body tracking-widest opacity-80">02</span>
                </h4>
                <p className="text-white/60 leading-relaxed font-medium">
                  Delírio algorítmico não existe aqui. Ela jamais recomendará um produto de concorrentes ou fora do seu
                  catálogo. A criatividade da IA é contida pelas paredes do seu acervo.
                </p>
              </div>

              <div className="border-t border-white/20 pt-8 transition-opacity duration-1000 hover:opacity-100 opacity-70">
                <h4 className="text-2xl font-display mb-4 flex items-center justify-between">
                  Implantação Fluida <span className="text-white/40 text-sm font-body tracking-widest opacity-80">03</span>
                </h4>
                <p className="text-white/60 leading-relaxed font-medium">
                  Nossa arquitetura foi desenhada para conectar com ERPs pesados. Tudo se sincroniza nos bastidores sem
                  gerar pânico na sua operação técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
