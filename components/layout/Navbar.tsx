'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
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

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur-xl transition-all duration-500 ${
        isScrolled ? 'border-b border-border shadow-[0_10px_30px_rgba(10,10,10,0.08)]' : ''
      }`}
    >
      <div className="h-20 md:h-24 px-6 md:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2.5 20 7.1v9.8L12 21.5 4 16.9V7.1L12 2.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-text-primary"
              />
              <path
                d="M12 4.7 18.4 8.4v7.2L12 19.3 5.6 15.6V8.4L12 4.7Z"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gold/70"
              />
            </svg>

            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-2">
                <span className="font-display italic text-lg text-text-primary">Safira</span>
                <span className="font-body text-[12px] tracking-widest uppercase text-text-secondary">Business</span>
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-text-muted">
                  Agente Ativo 24h
                </span>
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[13px] tracking-wide uppercase font-semibold text-text-muted hover:text-text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#demo"
            className="font-body text-[13px] tracking-wide uppercase font-semibold text-text-secondary hover:text-text-primary transition-colors px-5 py-3 rounded-full border border-border bg-ivory/60 hover:bg-ivory-dark"
          >
            Acessar Demo
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="font-body text-[13px] tracking-wide uppercase font-semibold text-text-inverse px-6 py-3 rounded-full bg-gradient-to-r from-obsidian to-obsidian-soft hover:from-obsidian-soft hover:to-obsidian transition-all duration-500 shadow-sm hover:shadow-md"
          >
            Falar com Especialista
          </a>
        </div>

        <button
          className="md:hidden text-text-primary hover:text-text-secondary transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu"
          type="button"
        >
          <Menu className="w-6 h-6" />
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
              className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 z-50 h-dvh w-[88%] max-w-sm bg-ivory border-l border-border shadow-[0_30px_80px_rgba(10,10,10,0.22)]"
            >
              <div className="h-20 px-6 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="font-display italic text-lg text-text-primary">Safira</span>
                  <span className="font-body text-[12px] tracking-widest uppercase text-text-secondary">Business</span>
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
                <nav className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-body text-[13px] tracking-wide uppercase font-semibold text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col gap-3">
                  <a
                    href="#demo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-body text-[13px] tracking-wide uppercase font-semibold text-text-secondary hover:text-text-primary transition-colors px-5 py-4 rounded-full border border-border bg-ivory/60 hover:bg-ivory-dark text-center"
                  >
                    Acessar Demo
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[13px] tracking-wide uppercase font-semibold text-text-inverse px-6 py-4 rounded-full bg-gradient-to-r from-obsidian to-obsidian-soft hover:from-obsidian-soft hover:to-obsidian transition-all duration-500 shadow-sm hover:shadow-md text-center"
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
