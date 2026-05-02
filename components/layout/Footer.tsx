'use client';

export interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <footer className="py-16 md:py-20 px-8 md:px-16 border-t border-border bg-ivory-dark">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="flex flex-col gap-6 max-w-sm">
          <span className="font-display italic font-medium text-3xl">Safira.</span>
          <p className="text-text-secondary text-sm leading-relaxed font-medium">
            Onde a precisão infalível da Inteligência Cognitiva converge com a alma da alta-costura secular.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-widest text-[10px] text-text-secondary mb-2">
              Exclusivo
            </span>
            <a href="#" className="font-medium hover:text-text-primary transition-colors opacity-80 hover:opacity-100">
              Membership
            </a>
            <a href="#" className="font-medium hover:text-text-primary transition-colors opacity-80 hover:opacity-100">
              Estudos de Caso
            </a>
            <a href="#" className="font-medium hover:text-text-primary transition-colors opacity-80 hover:opacity-100">
              Manifesto
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-widest text-[10px] text-text-secondary mb-2">
              Legal
            </span>
            <a href="#" className="font-medium hover:text-text-primary transition-colors opacity-80 hover:opacity-100">
              Privacidade
            </a>
            <a href="#" className="font-medium hover:text-text-primary transition-colors opacity-80 hover:opacity-100">
              Termos
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-text-secondary font-medium">
        <p className="opacity-80">&copy; {new Date().getFullYear()} Brazeo.IA. Uma experiência de luxo.</p>
        <div className="flex items-center gap-2 opacity-80">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Operando em Excelência
        </div>
      </div>
    </footer>
  );
}
