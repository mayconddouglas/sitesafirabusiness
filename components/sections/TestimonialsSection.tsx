'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const subtleScroll = {
  initial: { opacity: 0.01, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any },
  },
  viewport: { once: true, margin: '-50px' },
};

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface TestimonialsSectionProps {}

export function TestimonialsSection({}: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      name: 'Diretora de Boutique (SP)',
      role: 'Moda Luxury',
      quote: 'O tom de voz ficou idêntico ao da loja física. A sensação é de atendimento humano — só que sem atraso.',
    },
    {
      name: 'Head de Vendas',
      role: 'Maison de Acessórios',
      quote: 'A Safira identifica intenção e conduz objeções com elegância. Nosso WhatsApp virou um funil de alto ticket.',
    },
    {
      name: 'CMO',
      role: 'Marca Premium',
      quote: 'Integração rápida e zero atrito com a operação. O time ganha tempo e os clientes sentem exclusividade.',
    },
  ];

  return (
    <section className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
      <motion.div {...subtleScroll} className="text-center max-w-3xl mx-auto mb-20">
        <span className="block text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
          Depoimentos (Prova)
        </span>
        <h2 className="text-5xl md:text-6xl font-serif mb-8 text-text-primary">
          Excelência que <span className="italic text-text-secondary">se confirma.</span>
        </h2>
        <p className="text-text-secondary text-base font-medium max-w-2xl mx-auto">
          O luxo é percebido nos detalhes. O impacto aparece quando o cliente sente a mesma discrição, presença e precisão
          em cada resposta.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 14, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
            className="p-10 md:p-12 rounded-[2rem] border border-border-subtle/60 bg-bg-secondary/30 hover:bg-white/60 transition-all duration-1000"
          >
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-4 h-4 text-accent fill-current opacity-90" />
              ))}
            </div>

            <p className="text-[15px] text-text-secondary leading-relaxed font-medium mb-10">&quot;{t.quote}&quot;</p>

            <div className="border-t border-border-subtle pt-6">
              <p className="font-serif text-xl text-text-primary">{t.name}</p>
              <p className="text-[11px] tracking-[0.25em] uppercase text-text-secondary font-semibold mt-2">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

