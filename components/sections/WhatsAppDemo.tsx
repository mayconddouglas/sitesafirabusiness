'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const subtleScroll = {
  initial: { opacity: 0.01, scale: 0.98 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any },
  },
  viewport: { once: true, margin: '-50px' },
};

interface WhatsAppMessage {
  side: 'client' | 'safira';
  text: string;
  time: string;
}

export interface WhatsAppDemoProps {}

export function WhatsAppDemo({}: WhatsAppDemoProps) {
  const messages: WhatsAppMessage[] = [
    {
      side: 'client',
      text: 'Bom dia. Preciso de algo leve e sofisticado para Mônaco — sem exageros.',
      time: '16:41',
    },
    {
      side: 'safira',
      text: 'Perfeito. Para o clima e a paleta da Riviera, sugiro linho italiano em off-white com corte minimalista. Posso separar duas opções do acervo fechado?',
      time: '16:41',
    },
    {
      side: 'client',
      text: 'Pode. Quero uma peça que funcione do almoço ao jantar.',
      time: '16:42',
    },
    {
      side: 'safira',
      text: 'Entendido. Separei a camisa “Atelier Ouro” e a calça de cintura alta “Maison Noir”. Ambas com caimento impecável e pronta-entrega. Deseja envio imediato?',
      time: '16:42',
    },
  ];

  return (
    <section id="demo" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
      <motion.div {...subtleScroll} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="block text-gold font-bold text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-sm">
            Demonstração (WhatsApp)
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-text-primary leading-[1.1] mb-8">
            Conversa real, <br />
            <span className="italic text-text-secondary">conversão invisível.</span>
          </h2>
          <p className="text-base text-text-secondary font-medium leading-relaxed max-w-md">
            A Safira conduz o diálogo como um Personal Shopper: pergunta, interpreta nuances e oferece a peça certa sem
            parecer um robô. Tudo acontece no mesmo ritmo emocional do cliente.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[2.5rem] border border-border/60 bg-[#0A0A0C] p-[1px] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.25)]">
            <div className="rounded-[2.5rem] bg-[#0A0A0C] overflow-hidden">
              <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm text-white/90 font-medium tracking-wide">Safira Concierge</p>
                    <p className="text-[11px] text-white/40 tracking-widest uppercase">Online</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase">WhatsApp</div>
              </div>

              <div className="p-8 md:p-10 space-y-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent">
                {messages.map((m, i) => {
                  const isSafira = m.side === 'safira';
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
                      className={`flex ${isSafira ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[520px] rounded-2xl px-5 py-4 border backdrop-blur-md ${
                          isSafira
                            ? 'bg-white/5 border-white/10 text-white/85'
                            : 'bg-[#DDF247]/15 border-[#DDF247]/20 text-white/90'
                        }`}
                      >
                        <p className="text-[13px] leading-relaxed font-medium">{m.text}</p>
                        <div className="mt-2 text-[10px] font-mono tracking-widest opacity-60 flex justify-end">{m.time}</div>
                      </div>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
                  className="pt-6 border-t border-white/10 flex items-center justify-between"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-white/40">
                    Protocolo de Elegância Ativo
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/80">Classe A</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
