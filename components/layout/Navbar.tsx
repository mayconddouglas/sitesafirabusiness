'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

import { Magnetic } from '@/components/ui/Magnetic';

export interface NavbarProps {}

export function Navbar({}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-24 px-8 md:px-16 flex items-center justify-between bg-bg-primary/95 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <span className="font-serif italic font-medium text-2xl tracking-tight">Safira.</span>
      </div>

      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#experiencia"
          className="text-[13px] uppercase tracking-widest font-semibold text-text-primary/70 hover:text-text-primary transition-colors"
        >
          A Experiência
        </a>
        <a
          href="#tecnologia"
          className="text-[13px] uppercase tracking-widest font-semibold text-text-primary/70 hover:text-text-primary transition-colors"
        >
          Tecnologia
        </a>
        <a
          href="#membership"
          className="text-[13px] uppercase tracking-widest font-semibold text-text-primary/70 hover:text-text-primary transition-colors"
        >
          Membership
        </a>
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
        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        type="button"
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
              <a href="#experiencia" className="text-xl font-serif" onClick={() => setMobileMenuOpen(false)}>
                A Experiência
              </a>
              <a href="#tecnologia" className="text-xl font-serif" onClick={() => setMobileMenuOpen(false)}>
                Tecnologia
              </a>
              <a href="#membership" className="text-xl font-serif" onClick={() => setMobileMenuOpen(false)}>
                Membership
              </a>
              <div className="h-px bg-border-subtle my-4"></div>
              <button className="bg-text-primary text-white px-6 py-4 rounded-full font-medium w-full text-xs uppercase tracking-widest" type="button">
                Solicitar Convite
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

