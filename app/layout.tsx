import type {Metadata} from 'next';
import { Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Safira Business | AI Concierge',
  description: 'Atendimento de luxo, em escala infinita.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${playfair.variable} ${geistMono.variable} font-body bg-ivory text-text-primary antialiased selection:bg-gold/25`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
