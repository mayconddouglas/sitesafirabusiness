import type {Metadata} from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Safira Business | AI Concierge',
  description: 'Atendimento de luxo, em escala infinita.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${dmSans.variable} ${cormorant.variable} font-body bg-bg-primary text-text-primary antialiased selection:bg-safira-bright/40`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
