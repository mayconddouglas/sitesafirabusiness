'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Bot, CheckCheck } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as any;

export interface HeroSectionProps {}

type ChatSide = 'client' | 'safira';

interface ChatMessage {
  side: ChatSide;
  time: string;
  text: string;
  showBotIcon?: boolean;
  showChecks?: boolean;
}

const HERO_CHAT_MESSAGES: ChatMessage[] = [
  {
    side: 'client',
    time: '14:32',
    text: 'Oi! Vi vocês no insta, têm vestido de festa para casamento?',
    showChecks: true,
  },
  {
    side: 'safira',
    time: '14:32',
    text: 'Olá! Que legal que nos encontrou 💎 Sim, temos \numa coleção incrível! Me conta: o casamento é diurno ou noturno? E tem alguma \npreferência de cor?',
    showBotIcon: true,
  },
  {
    side: 'client',
    time: '14:33',
    text: 'Noturno, prefiro preto ou vinho',
    showChecks: true,
  },
  {
    side: 'safira',
    time: '14:33',
    text: 'Perfeito! Separei 3 opções exclusivas para você 👗\n🔹 Vestido Noir Serenity — R$ 890\n🔹 Vestido Borgonha Empire — R$ 1.240  \n🔹 Vestido Black Velvet — R$ 760\nPosso enviar as fotos e detalhes de cada um?',
    showBotIcon: true,
  },
];

interface TypewriterTextProps {
  text: string;
  startDelayMs: number;
  speedMs?: number;
}

function TypewriterText({ text, startDelayMs, speedMs = 14 }: TypewriterTextProps) {
  const [visible, setVisible] = useState('');

  useEffect(() => {
    let interval: number | undefined;
    const startTimeout = window.setTimeout(() => {
      let i = 0;
      interval = window.setInterval(() => {
        i += 1;
        setVisible(text.slice(0, i));
        if (i >= text.length && interval) window.clearInterval(interval);
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimeout);
      if (interval) window.clearInterval(interval);
    };
  }, [startDelayMs, speedMs, text]);

  return <span className="whitespace-pre-line">{visible}</span>;
}

interface ChatBubbleProps {
  message: ChatMessage;
  appearDelayMs: number;
  typeDelayMs: number;
}

function ChatBubble({ message, appearDelayMs, typeDelayMs }: ChatBubbleProps) {
  const isClient = message.side === 'client';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: appearDelayMs / 1000, ease: easeOut }}
      className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[520px] rounded-2xl px-4 py-3 border ${
          isClient
            ? 'bg-[#E8E3DB] border-white/10 text-[#0A0A0A]'
            : 'bg-[#1C1C1C] border-white/10 text-[#F7F5F0]'
        }`}
      >
        <div className="flex items-start gap-2">
          {!isClient && message.showBotIcon && (
            <span className="mt-0.5 w-6 h-6 rounded-full bg-[#0D0D0D] text-[#F7F5F0] flex items-center justify-center shrink-0 border border-white/10">
              <Bot className="w-3.5 h-3.5" />
            </span>
          )}

          <div className="flex-1 text-[13px] leading-relaxed font-medium">
            <TypewriterText text={message.text} startDelayMs={typeDelayMs} />
          </div>
        </div>

        <div className={`mt-2 flex items-center justify-end gap-1.5 text-[10px] font-mono tracking-widest ${isClient ? 'text-[#0A0A0A]/60' : 'text-[#F7F5F0]/55'}`}>
          <span>{message.time}</span>
          {message.showChecks && <CheckCheck className="w-3.5 h-3.5" />}
        </div>
      </div>
    </motion.div>
  );
}

interface ChatMockupProps {}

function ChatMockup({}: ChatMockupProps) {
  const charSpeed = 12;
  const bubbleEnterGapMs = 520;
  const initialDelayMs = 500;

  const timings = useMemo(() => {
    const list: Array<{ appear: number; type: number; duration: number }> = [];
    let cursor = initialDelayMs;

    for (const msg of HERO_CHAT_MESSAGES) {
      const appear = cursor;
      const type = appear + 160;
      const duration = msg.text.length * charSpeed;
      list.push({ appear, type, duration });
      cursor = type + duration + bubbleEnterGapMs;
    }

    return list;
  }, []);

  return (
    <div className="relative w-full max-w-[780px] mx-auto">
      <div className="relative rounded-3xl border border-white/10 bg-[#111111] shadow-[0_50px_120px_-45px_rgba(0,0,0,0.85)] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/85 font-display italic">
              S
            </div>
            <div className="leading-tight">
              <p className="text-sm text-white/90 font-medium tracking-wide">Safira Business</p>
              <p className="text-[11px] text-white/50 tracking-widest uppercase">online</p>
            </div>
          </div>
          <div className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">WhatsApp</div>
        </div>

        <div className="relative p-6 md:p-8 space-y-4 bg-[#111111]">
          <div className="relative space-y-4">
            {HERO_CHAT_MESSAGES.map((m, i) => (
              <ChatBubble key={i} message={m} appearDelayMs={timings[i]!.appear} typeDelayMs={timings[i]!.type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="absolute left-0 right-0 top-24 h-px bg-white/5"></div>
      <div className="absolute left-0 right-0 top-36 h-px bg-white/5"></div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 pt-16 md:pt-20 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-[#F7F5F0]/80 font-body text-[10px] tracking-[0.28em] uppercase">
              IA · Atendimento · 24h
            </div>

            <h1 className="mt-10 font-display text-[#F7F5F0] leading-[1.05] tracking-tight text-[44px] md:text-[72px] font-normal">
              Sua loja <span className="italic">atende sozinha</span>.
            </h1>

            <p className="mt-8 text-[16px] text-[#8A8A8A] leading-relaxed font-medium font-body max-w-[480px]">
              A Safira é uma IA treinada com o tom da sua marca. Ela responde clientes, recomenda produtos e fecha pedidos
              autonomamente. Enquanto você dorme.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-sm px-7 py-4 font-body text-[13px] font-semibold text-[#0A0A0A] bg-[#F7F5F0] hover:bg-[#EDEAE3] transition-colors"
              >
                Ver em Ação →
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center px-2 py-4 font-body text-[13px] font-medium text-[#8A8A8A] underline decoration-white/20 underline-offset-4 hover:text-[#F7F5F0] hover:decoration-white/40 transition-colors"
              >
                Começar Agora — R$ 297/mês
              </a>
            </div>

            <div className="mt-6 text-[12px] text-white/65 font-body tracking-wide">
              ✓ Sem cartão de crédito&nbsp;&nbsp; ✓ Setup em 48h&nbsp;&nbsp; ✓ Cancele quando quiser
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.15, ease: easeOut }}
            className="lg:col-span-7"
          >
            <ChatMockup />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: easeOut }}
          className="mt-14 md:mt-16 rounded-2xl border border-white/[0.08] bg-white/[0.04]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            <div className="px-8 py-6 flex items-center justify-between">
              <span className="text-[#8A8A8A] font-body text-[10px] tracking-[0.28em] uppercase">3x mais vendas</span>
              <span className="text-[#F7F5F0] font-display text-[28px] font-normal">+3x</span>
            </div>
            <div className="px-8 py-6 flex items-center justify-between">
              <span className="text-[#8A8A8A] font-body text-[10px] tracking-[0.28em] uppercase">87% de satisfação</span>
              <span className="text-[#F7F5F0] font-display text-[28px] font-normal">87%</span>
            </div>
            <div className="px-8 py-6 flex items-center justify-between">
              <span className="text-[#8A8A8A] font-body text-[10px] tracking-[0.28em] uppercase">24h de atendimento</span>
              <span className="text-[#F7F5F0] font-display text-[28px] font-normal">24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
