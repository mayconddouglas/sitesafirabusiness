'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { X } from 'lucide-react';
import Link from 'next/link';

export interface NavbarProps {}

interface NavItem {
  label: string;
  href: string;
}

export function Navbar({}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!scrollY) return;
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 80);
    });
  }, [scrollY]);

  const navItems: NavItem[] = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Cases', href: '#cases' },
  ];

  const drawerTransition = {
    duration: 0.6,
    ease: [0.76, 0, 0.24, 1] as any,
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-ivory/85 backdrop-blur-xl border-b border-border' : 'bg-ivory'
      }`}
    >
      <div className="h-16 md:h-20 px-6 md:px-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display italic text-[22px] md:text-[26px] tracking-tight text-text-primary">
            Safira
          </span>
          <span className="mt-1 font-body text-[9px] uppercase tracking-[0.45em] text-text-muted">
            BUSINESS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[11px] tracking-[0.2em] uppercase font-semibold text-text-muted/60 hover:text-text-muted transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#demo"
            className="font-body text-[11px] tracking-[0.2em] uppercase font-semibold text-text-primary hover:text-text-secondary transition-colors"
          >
            Acessar Demo →
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="font-body text-[11px] tracking-[0.2em] uppercase font-semibold text-text-inverse px-6 py-3 rounded-sm bg-obsidian hover:bg-obsidian-soft transition-colors"
          >
            Falar com Especialista
          </a>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-text-primary"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
          type="button"
        >
          <span className="sr-only">Abrir menu</span>
          <span className="relative w-5 h-4">
            <span className="absolute left-0 top-0 w-full h-px bg-text-primary"></span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-text-primary"></span>
            <span className="absolute left-0 bottom-0 w-full h-px bg-text-primary"></span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={drawerTransition}
              className="fixed inset-0 z-50 bg-black/20"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={drawerTransition}
              className="fixed top-0 right-0 z-50 h-dvh w-[88%] max-w-sm bg-ivory border-l border-border"
            >
              <div className="h-16 px-6 flex items-center justify-between border-b border-border">
                <div className="flex flex-col leading-none">
                  <span className="font-display italic text-[22px] tracking-tight text-text-primary">Safira</span>
                  <span className="mt-1 font-body text-[9px] uppercase tracking-[0.45em] text-text-muted">
                    BUSINESS
                  </span>
                </div>
                <button
                  className="text-text-primary hover:text-text-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  type="button"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-10">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-body text-[11px] tracking-[0.2em] uppercase font-semibold text-text-muted/60 hover:text-text-muted transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col gap-4 pt-2">
                  <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="font-body text-[11px] tracking-[0.2em] uppercase font-semibold text-text-primary hover:text-text-secondary transition-colors">
                    Acessar Demo →
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[11px] tracking-[0.2em] uppercase font-semibold text-text-inverse px-6 py-4 rounded-sm bg-obsidian hover:bg-obsidian-soft transition-colors text-center"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
