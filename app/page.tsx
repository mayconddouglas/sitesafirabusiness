'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, ArrowUpRight, Star,
  MessageCircle, ShoppingBag, Zap, ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const subtleFade = {
  initial: { opacity: 0.01, scale: 0.95, y: 20 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const subtleScroll = {
  initial: { opacity: 0.01, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as any } },
  viewport: { once: true, margin: "-50px" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

function Magnetic({ children, className = "" }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-text-primary selection:bg-accent/40 bg-bg-primary overflow-x-hidden">
      
      {/* 1. NAVBAR (CLEAN, MINIMAL) */}
      <header className="h-24 px-8 md:px-16 flex items-center justify-between bg-bg-primary/95 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="font-serif italic font-medium text-2xl tracking-tight">Safira.</span>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          <a href="#experiencia" className="text-[13px] uppercase tracking-widest font-semibold text-text-primary/70 hover:text-text-primary transition-colors">A Experiência</a>
          <a href="#tecnologia" className="text-[13px] uppercase tracking-widest font-semibold text-text-primary/70 hover:text-text-primary transition-colors">Tecnologia</a>
          <a href="#membership" className="text-[13px] uppercase tracking-widest font-semibold text-text-primary/70 hover:text-text-primary transition-colors">Membership</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Magnetic>
            <button className="text-[13px] uppercase tracking-widest font-semibold hover:text-text-secondary transition-colors">
              Acesso Restrito
            </button>
          </Magnetic>
          <Magnetic>
            <button className="bg-text-primary hover:bg-black/80 text-white px-8 py-3 rounded-full font-medium text-xs uppercase tracking-widest transition-all duration-500">
              Solicitar Convite
            </button>
          </Magnetic>
        </div>

        <button 
          className="md:hidden text-text-primary hover:text-accent-hover transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg-secondary absolute top-full left-0 right-0 overflow-hidden z-50 shadow-2xl"
            >
              <div className="p-8 flex flex-col gap-6">
                <a href="#experiencia" className="text-xl font-serif" onClick={() => setMobileMenuOpen(false)}>A Experiência</a>
                <a href="#tecnologia" className="text-xl font-serif" onClick={() => setMobileMenuOpen(false)}>Tecnologia</a>
                <a href="#membership" className="text-xl font-serif" onClick={() => setMobileMenuOpen(false)}>Membership</a>
                <div className="h-px bg-border-subtle my-4"></div>
                <button className="bg-text-primary text-white px-6 py-4 rounded-full font-medium w-full text-xs uppercase tracking-widest">
                  Solicitar Convite
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* SECTION 1: HERO EDITORIAL */}
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
                <motion.span initial={{ width: 0 }} whileInView={{ width: "2rem" }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="h-px bg-text-primary opacity-30"></motion.span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-text-primary/80">Tecnologia para o Alto Padrão</span>
              </motion.div>

              <motion.h1 variants={subtleFade} className="text-6xl md:text-[5.5rem] lg:text-[6.2rem] font-serif font-medium tracking-tight text-text-primary leading-[1.05] mb-8">
                A excelência do luxo. <br /><span className="italic text-text-secondary">Em escala cognitiva.</span>
              </motion.h1>

              <motion.p variants={subtleFade} className="text-lg text-text-secondary leading-relaxed max-w-md mb-12 font-medium">
                A Safira é a primeira inteligência artificial moldada para operações de elite. Nosso motor orquestra vendas de ticket elevado no WhatsApp com a mesma retórica, discrição e etiqueta de um Private Shopper.
              </motion.p>
              
              <motion.div variants={subtleFade} className="flex flex-col sm:flex-row items-center justify-start gap-5 mt-4 w-full">
                <Magnetic className="w-full sm:w-auto">
                  <button className="group relative w-full sm:w-auto flex items-center justify-center gap-4 text-[11px] tracking-widest uppercase font-semibold bg-text-primary text-white border border-transparent px-10 py-5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-white/10 will-change-transform overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Elevar o Padrão da Instituição <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  </button>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <button className="group relative w-full sm:w-auto flex items-center justify-center gap-4 text-[11px] tracking-widest uppercase font-semibold text-text-primary bg-transparent border border-border-subtle px-10 py-5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:bg-white hover:border-black/10 will-change-transform overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      O Universo Safira <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 opacity-70 group-hover:opacity-100" />
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
                
                {/* Abstract Ambient Glows */}
                <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-[#DDF247]/10 blur-[100px] rounded-full animate-pulse transition-all duration-[3000ms] group-hover:bg-[#DDF247]/15 group-hover:scale-110"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-500/5 blur-[120px] rounded-full"></div>
                
                {/* Tech Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 transition-opacity duration-1000 group-hover:opacity-70"></div>

                {/* Glass UI Content */}
                <div className="relative h-full flex flex-col p-8 md:p-10 z-10">
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DDF247] animate-pulse shadow-[0_0_10px_rgba(221,242,71,0.8)]"></div>
                      <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-white/50">Terminal Safira</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono text-white/30 text-right">Build 9.1<br/>Cognitive_Core</span>
                  </div>

                  <div className="flex-1 mt-8 flex flex-col gap-8">
                    {/* Log Entry 1: Analysis */}
                    <div className="flex items-start gap-4">
                      <span className="text-[10px] font-mono text-white/30 pt-1 shrink-0">16:42:01</span>
                      <div>
                         <p className="text-xs text-white/90 font-medium mb-1 tracking-wide">Identificação de Clientela VIP</p>
                         <p className="text-[11px] text-white/40 leading-relaxed font-mono">Contato estabelecido. Histórico puxado. LTV estimado: R$ 245.000,00</p>
                      </div>
                    </div>

                    {/* Log Entry 2: Processing */}
                    <div className="flex items-start gap-4">
                      <span className="text-[10px] font-mono text-white/30 pt-1 shrink-0">16:42:04</span>
                      <div>
                         <p className="text-xs text-white/90 font-medium mb-1 tracking-wide">Processamento Heurístico</p>
                         <p className="text-[11px] text-white/40 leading-relaxed font-mono">Realizando cruzamento de acervo Ouro com paleta colorimétrica Outono/Inverno preferida.</p>
                      </div>
                    </div>

                    {/* Log Entry 3: Action Taken */}
                    <motion.div 
                      initial={{ opacity: 0.01, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="flex items-start gap-4 relative group/log"
                    >
                      <div className="absolute -left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#DDF247]/0 via-[#DDF247] to-[#DDF247]/0 opacity-0 group-hover/log:opacity-100 transition-opacity duration-500"></div>
                      <span className="text-[10px] font-mono text-[#DDF247] pt-1.5 shrink-0 transition-all duration-300">16:42:08</span>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 w-full backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(221,242,71,0.05)]">
                         <p className="text-xs text-[#DDF247] font-medium mb-2 flex items-center gap-2">
                           <Zap className="w-3.5 h-3.5" /> Recomendação Orquestrada
                         </p>
                         <p className="text-[11px] text-white/70 leading-relaxed italic">
                           &quot;Bom dia, Sr. Arthur. A peça que mencionamos no desfile de Milão acaba de desembarcar em nosso acervo fechado. Gostaria que eu realizasse o envio imediato?&quot;
                         </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Status Footer */}
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

        {/* BRANDS / AESTHETIC RECOGNITION */}
        <motion.section 
          {...subtleScroll}
          className="py-20 border-y border-border-subtle/40 bg-bg-secondary/20"
        >
          <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col items-center">
            <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-[0.3em] mb-12 text-center">
              A Escolha Unânime das Mais Prestigiadas Maisons
            </p>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-1000">
              <span className="font-serif italic text-2xl md:text-3xl transition-transform duration-1000 hover:scale-105">Amelie & Co.</span>
              <span className="font-sans font-light tracking-[0.2em] text-lg md:text-xl uppercase transition-transform duration-1000 hover:scale-105">Maison Noir</span>
              <span className="font-serif font-medium tracking-tight text-2xl md:text-3xl transition-transform duration-1000 hover:scale-105">Atelier Ouro</span>
              <span className="font-sans font-bold tracking-widest text-lg md:text-xl uppercase transition-transform duration-1000 hover:scale-105">Vogue Minimal</span>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2: THE EXPERIENCE (EDITORIAL LAYOUT) */}
        <section id="experiencia" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
          <motion.div 
            {...subtleScroll} 
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12"
          >
            <div>
              <span className="block text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-sm">A Experiência (Interesse)</span>
              <h2 className="text-5xl md:text-6xl font-serif text-text-primary leading-[1.1] max-w-2xl">
                Sofisticação digital, <br/><span className="italic text-text-secondary">feita sob medida.</span>
              </h2>
            </div>
            <p className="text-base text-text-secondary max-w-sm font-medium leading-relaxed">
              Esqueça chatbots engessados e robotizados. A Safira oferece uma jornada de alta constura no atendimento, fluindo através dos caprichos dos clientes como um legítimo Personal Shopper.
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

        {/* SECTION 3: TECHNOLOGY (THE INTELLIGENCE) */}
        <motion.section 
          {...subtleScroll}
          id="tecnologia" 
          className="py-32 bg-text-primary text-white mx-4 md:mx-8 rounded-[3rem] px-8 md:px-16"
        >
          <div className="max-w-[1400px] mx-auto min-h-[600px] flex flex-col justify-between">
            
            <div className="flex items-center gap-3 mb-16 lg:mb-0">
              <motion.span initial={{ width: 0 }} whileInView={{ width: "2rem" }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="h-px bg-white/40 opacity-50"></motion.span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/70">Arquitetura Cognitiva</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-auto">
              <div className="lg:col-span-5">
                <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
                  O cérebro oculto<br/><span className="text-white/50 italic">por trás da sua grife.</span>
                </h2>
                <Magnetic>
                  <button className="group flex items-center gap-4 text-[11px] tracking-widest uppercase font-semibold bg-transparent border border-white/20 px-8 py-4 rounded-full hover:bg-white/15 transition-all duration-700 hover:-translate-y-1">
                    A Inteligência Proprietária <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </Magnetic>
                
                <AIBrainVisual />
              </div>

              <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12">
                <div className="border-t border-white/20 pt-8 transition-opacity duration-1000 hover:opacity-100 opacity-70">
                  <h4 className="text-2xl font-serif mb-4 flex items-center justify-between">
                    Visão Semântica <span className="text-white/40 text-sm font-sans tracking-widest opacity-80">01</span>
                  </h4>
                  <p className="text-white/60 leading-relaxed font-medium">A Safira identifica desejos subliminares. Se o cliente pede &quot;algo fresco para Mônaco&quot;, ela sugere exatamente os tecidos que combinam com o cenário. Uma verdadeira personal shopper em nuvem.</p>
                </div>
                
                <div className="border-t border-white/20 pt-8 transition-opacity duration-1000 hover:opacity-100 opacity-70">
                  <h4 className="text-2xl font-serif mb-4 flex items-center justify-between">
                    Fidelidade Absoluta <span className="text-white/40 text-sm font-sans tracking-widest opacity-80">02</span>
                  </h4>
                  <p className="text-white/60 leading-relaxed font-medium">Delírio algorítmico não existe aqui. Ela jamais recomendará um produto de concorrentes ou fora do seu catálogo. A criatividade da IA é contida pelas paredes do seu acervo.</p>
                </div>

                <div className="border-t border-white/20 pt-8 transition-opacity duration-1000 hover:opacity-100 opacity-70">
                  <h4 className="text-2xl font-serif mb-4 flex items-center justify-between">
                    Implantação Fluida <span className="text-white/40 text-sm font-sans tracking-widest opacity-80">03</span>
                  </h4>
                  <p className="text-white/60 leading-relaxed font-medium">Nossa arquitetura foi desenhada para conectar com ERPs pesados. Tudo se sincroniza nos bastidores sem gerar pânico na sua operação técnica.</p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        {/* SECTION 4: THE MEMBERSHIP (PRICING) */}
        <section id="membership" className="py-32 px-8 md:px-16 max-w-[1600px] mx-auto">
           <motion.div {...subtleScroll} className="text-center max-w-3xl mx-auto mb-24">
            <span className="block text-accent font-bold text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-sm">Adesão (Ação)</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 text-text-primary">
              Membros <span className="italic text-text-secondary">Safira.</span>
            </h2>
            <p className="text-text-secondary text-base font-medium max-w-2xl mx-auto">
              Escolha o nível de exclusividade, resposta e volume que a sua marca precisa. Diferente do mercado comum, nossos planos de adesão entregam dedicação extrema.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* PRICING CARDS */}
            <MembershipCard 
              name="Safira Starter"
              desc="Para marcas emergentes que querem o luxo desde a sua primeira venda online."
              price="297"
              features={[
                "Agente de IA no WhatsApp",
                "Treino do Tom de Voz da Marca",
                "Leitura Rápida de Catálogo (200 itens)",
                "Padrão Classe A em Respostas"
              ]}
              delay={0}
            />
            <MembershipCard 
              name="Safira Business Plus"
              desc="O estado da arte para marcas estabelecidas e com volume constante de leads VIPs."
              price="597"
              isPremium={true}
              features={[
                "Atendimento Seamless WhatsApp + Insta",
                "Escalabilidade para Alta Demanda",
                "Acervo Infinito (Integração Direta)",
                "Checkout Direto por Link Mágico",
                "Suporte VIP de 4 Horas"
              ]}
              delay={0.15}
            />
            <MembershipCard 
              name="Safira Enterprise"
              desc="Exclusividade máxima. Sob medida para grandes consórcios e redes de franquias."
              price="Fale Conosco"
              features={[
                "Múltiplos Agentes Omnichannel",
                "Arquitetura Implantada no seu ERP",
                "Gerente de Sucesso (CS) Dedicado",
                "Dashboards de BI em Tempo Real",
                "Acordo de LGPD Rigoroso"
              ]}
              delay={0.3}
            />
          </div>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <motion.section 
          {...subtleScroll}
          className="py-40 px-8 md:px-16 max-w-[1600px] mx-auto text-center border-t border-border-subtle"
        >
            <div className="inline-flex items-center gap-3 mb-10">
              <motion.span initial={{ width: 0 }} whileInView={{ width: "2rem" }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="h-px bg-text-primary opacity-30"></motion.span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-text-primary/70">Acesso Restrito</span>
              <motion.span initial={{ width: 0 }} whileInView={{ width: "2rem" }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="h-px bg-text-primary opacity-30"></motion.span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-serif tracking-tight mb-12 leading-[1.05]">
              Transcenda o <span className="italic text-text-secondary block mt-2">atendimento convencional.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
               <Magnetic className="w-full sm:w-auto">
                 <button className="group w-full sm:w-auto bg-text-primary text-white px-12 py-5 rounded-full font-semibold text-[11px] tracking-widest uppercase hover:bg-black/90 transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] hover:-translate-y-1">
                   Solicitar Elegibilidade
                 </button>
               </Magnetic>
               <Magnetic className="w-full sm:w-auto">
                 <button className="group w-full sm:w-auto bg-transparent border border-border-subtle text-text-primary px-12 py-5 rounded-full font-semibold text-[11px] tracking-widest uppercase hover:bg-border-subtle/30 transition-all duration-700 flex items-center justify-center gap-3 hover:-translate-y-1">
                   Agendar Advisory Board <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                 </button>
               </Magnetic>
            </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="py-16 md:py-20 px-8 md:px-16 border-t border-border-subtle bg-bg-secondary">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-16">
          
          <div className="flex flex-col gap-6 max-w-sm">
             <span className="font-serif italic font-medium text-3xl">Safira.</span>
             <p className="text-text-secondary text-sm leading-relaxed font-medium">Onde a precisão infalível da Inteligência Cognitiva converge com a alma da alta-costura secular.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase tracking-widest text-[10px] text-text-secondary mb-2">Exclusivo</span>
              <a href="#" className="font-medium hover:text-accent-hover transition-colors opacity-80 hover:opacity-100">Membership</a>
              <a href="#" className="font-medium hover:text-accent-hover transition-colors opacity-80 hover:opacity-100">Estudos de Caso</a>
              <a href="#" className="font-medium hover:text-accent-hover transition-colors opacity-80 hover:opacity-100">Manifesto</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase tracking-widest text-[10px] text-text-secondary mb-2">Legal</span>
              <a href="#" className="font-medium hover:text-accent-hover transition-colors opacity-80 hover:opacity-100">Privacidade</a>
              <a href="#" className="font-medium hover:text-accent-hover transition-colors opacity-80 hover:opacity-100">Termos</a>
            </div>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto border-t border-border-subtle mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-text-secondary font-medium">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Brazeo.IA. Uma experiência de luxo.</p>
          <div className="flex items-center gap-2 opacity-80">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Operando em Excelência
          </div>
        </div>
      </footer>
    </div>
  );
}

// ----------------------------------------------------
// UI COMPONENTS (REFINED & PREMIUM)
// ----------------------------------------------------

function BoutiqueCard({ icon, tag, title, desc, delay = 0 }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] as any }}
      style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      className="group relative p-10 border border-border-subtle/50 bg-bg-secondary/40 rounded-[2rem] hover:bg-white/80 transition-all duration-1000 ease-out flex flex-col gap-10"
    >
      <div className="flex justify-between items-center">
        <div className="text-text-primary/40 group-hover:text-text-primary transition-colors duration-700">
           {icon}
        </div>
        <div className="text-[10px] tracking-[0.2em] font-semibold uppercase text-text-secondary">
          {tag}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-serif mb-4 text-text-primary">{title}</h3>
        <p className="text-text-secondary leading-relaxed font-medium text-[15px]">{desc}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left ease-[0.22,1,0.36,1] rounded-b-[2rem]"></div>
    </motion.div>
  );
}

function MembershipCard({ name, desc, price, features, isPremium = false, delay = 0 }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] as any }}
      style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
      className={`p-10 md:p-14 border rounded-[2rem] flex flex-col relative transition-all duration-1000 ${
        isPremium 
          ? 'bg-accent text-white border-transparent shadow-[0_30px_80px_rgba(10,37,64,0.15)] hover:shadow-[0_40px_100px_rgba(10,37,64,0.25)] hover:-translate-y-1' 
          : 'bg-transparent border-border-subtle hover:border-text-primary/10 text-text-primary hover:bg-white/40'
      }`}
    >
      {isPremium && (
        <div className="absolute top-8 right-8 flex items-center gap-2">
           <Star className="w-3 h-3 text-white/80 fill-current" />
           <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/80">Destaque</span>
        </div>
      )}

      <h3 className={`text-4xl font-serif mb-4 ${isPremium ? 'text-white' : 'text-text-primary'}`}>{name}</h3>
      <p className={`text-[15px] mb-12 leading-relaxed font-medium ${isPremium ? 'text-white/70' : 'text-text-secondary'}`}>{desc}</p>

      <div className="mb-12 transition-transform duration-1000 transform origin-left">
        {(price !== "Sob Consulta" && price !== "Fale Conosco") && <span className="text-xl align-top mr-1 font-medium">R$</span>}
        <span className={`text-6xl font-light tracking-tighter ${isPremium ? 'text-white' : 'text-text-primary'} ${price === "Fale Conosco" || price === "Sob Consulta" ? 'text-4xl' : ''}`}>{price}</span>
      </div>

      <div className="space-y-5 flex-1 mb-12">
        {features.map((feat: string, i: number) => (
          <div key={i} className="flex gap-4 items-start group">
            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-700 group-hover:scale-150 ${isPremium ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-text-primary/30'}`}></div>
            <span className={`text-[14px] leading-relaxed font-medium ${isPremium ? 'text-white/90' : 'text-text-secondary'}`}>{feat}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-700 ${
        isPremium 
          ? 'bg-white text-accent mx-0 hover:bg-bg-primary hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]' 
          : 'bg-bg-secondary border border-border-subtle hover:bg-text-primary hover:text-white mx-0 shadow-sm hover:shadow-lg'
      }`}>
        {price === "Fale Conosco" || price === "Sob Consulta" ? "Agendar Reunião VIP" : `Adquirir ${name}`}
      </button>
    </motion.div>
  );
}

function AIBrainVisual() {
  const { scrollYProgress } = useScroll();
  const rotateScroll = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateScrollReverse = useTransform(scrollYProgress, [0, 1], [720, 0]);

  return (
    <div className="relative w-full aspect-square max-w-[280px] mt-24 mx-auto lg:ml-0 lg:mr-auto flex items-center justify-center pointer-events-none opacity-90" style={{ perspective: 1200 }}>
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-white blur-[100px] opacity-5 rounded-full"></div>

      {/* Core Energy */}
      <div className="absolute w-1.5 h-1.5 bg-[#DDF247] rounded-full animate-pulse shadow-[0_0_20px_4px_rgba(221,242,71,0.5)] z-10 transition-transform duration-1000 scale-100 hover:scale-150"></div>
      
      {/* Scroll-Reactive Rings */}
      <motion.div
        style={{ rotateZ: rotateScroll, rotateX: "60deg", rotateY: "45deg", transformStyle: "preserve-3d" }}
        className="absolute w-full h-full rounded-full border border-white/10"
      ></motion.div>
      <motion.div
        style={{ rotateZ: rotateScrollReverse, rotateX: "45deg", rotateY: "-60deg", transformStyle: "preserve-3d" }}
        className="absolute w-[75%] h-[75%] rounded-full border border-white/20"
      ></motion.div>
      <motion.div
        style={{ rotateZ: rotateScroll, rotateX: "-60deg", rotateY: "60deg", transformStyle: "preserve-3d" }}
        className="absolute w-[50%] h-[50%] rounded-full border border-dashed border-white/10"
      ></motion.div>
      
      {/* Constant Passive Ring */}
      <motion.div
        animate={{ rotateZ: 360, rotateX: -45, rotateY: -45 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
        className="absolute w-[30%] h-[30%] rounded-full border border-white/30"
      ></motion.div>
    </div>
  );
}
