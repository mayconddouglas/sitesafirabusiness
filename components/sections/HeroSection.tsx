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
        className={`max-w-[520px] rounded-2xl px-4 py-3 border shadow-sm ${
          isClient
            ? 'bg-[#DCF8C6] border-[#BFE7A6] text-[#0B141A]'
            : 'bg-white border-black/5 text-[#0B141A]'
        }`}
      >
        <div className="flex items-start gap-2">
          {!isClient && message.showBotIcon && (
            <span className="mt-0.5 w-6 h-6 rounded-full bg-[#0F2A5C] text-white flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </span>
          )}

          <div className="flex-1 text-[13px] leading-relaxed font-medium">
            <TypewriterText text={message.text} startDelayMs={typeDelayMs} />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-end gap-1.5 text-[10px] font-mono tracking-widest opacity-70">
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
      <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_top,_rgba(59,139,245,0.22),_transparent_60%)] blur-2xl"></div>

      <div className="relative rounded-[2rem] border border-white/10 bg-[#0B141A] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#101B22]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 font-display italic">
              S
            </div>
            <div className="leading-tight">
              <p className="text-sm text-white/90 font-medium tracking-wide">Safira Business</p>
              <p className="text-[11px] text-emerald-300/70 tracking-widest uppercase">online</p>
            </div>
          </div>
          <div className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">WhatsApp</div>
        </div>

        <div className="relative p-6 md:p-8 space-y-4 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.14),_transparent_55%)]">
          <div className="absolute inset-0 opacity-35 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_36%,rgba(255,255,255,0.04)_100%)]"></div>
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_45%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.06)_0%,transparent_42%)]"></div>

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
  const particles = useMemo(() => {
    const seed = 13;
    const rand = (i: number) => {
      const x = Math.sin(seed * 1000 + i * 97.13) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${Math.floor(rand(i) * 100)}%`,
      top: `${Math.floor(rand(i + 20) * 90)}%`,
      size: 2 + Math.floor(rand(i + 40) * 3),
      duration: 6 + rand(i + 60) * 10,
      delay: rand(i + 80) * 3,
      opacity: 0.18 + rand(i + 100) * 0.25,
    }));
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#080C14]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,139,245,0.28)_0%,rgba(26,75,140,0.10)_28%,rgba(8,12,20,1)_68%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,20,0.55)_0%,rgba(8,12,20,1)_70%)]"></div>

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.opacity }}
            animate={{ y: [0, -18, 0], opacity: [p.opacity, p.opacity * 1.35, p.opacity] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 pt-16 md:pt-20 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 font-body text-[12px] tracking-wide">
              <span>🤖</span>
              <span>Agente de IA para Moda • Disponível 24h</span>
            </div>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-[3.55rem] font-display text-white leading-[1.05] tracking-tight">
              Sua loja atende, qualifica e vende no WhatsApp — sem você precisar estar online.
            </h1>

            <p className="mt-6 text-[15px] md:text-lg text-white/65 leading-relaxed font-medium font-body max-w-xl">
              A Safira é uma IA treinada com o tom da sua marca. Ela responde clientes, recomenda produtos e fecha pedidos
              autonomamente. Enquanto você dorme.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 font-body text-[13px] tracking-wide uppercase font-semibold text-white bg-gradient-to-r from-safira-deep to-safira-mid hover:from-safira-mid hover:to-safira-deep transition-all duration-500 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                Ver a Safira em Ação →
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 font-body text-[13px] tracking-wide uppercase font-semibold text-white/85 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
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
          className="mt-14 md:mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="px-8 py-6 flex items-center justify-between">
              <span className="text-white/70 font-body text-[12px] tracking-wide uppercase">3x mais vendas</span>
              <span className="text-white font-display text-2xl">+3x</span>
            </div>
            <div className="px-8 py-6 flex items-center justify-between">
              <span className="text-white/70 font-body text-[12px] tracking-wide uppercase">87% de satisfação</span>
              <span className="text-white font-display text-2xl">87%</span>
            </div>
            <div className="px-8 py-6 flex items-center justify-between">
              <span className="text-white/70 font-body text-[12px] tracking-wide uppercase">24h de atendimento</span>
              <span className="text-white font-display text-2xl">24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
