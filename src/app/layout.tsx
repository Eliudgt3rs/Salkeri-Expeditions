import type {Metadata} from 'next';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import {Toaster} from "@/components/ui/toaster";
import './globals.css';
import WhatsappButton from '@/components/whatsapp-button';
import { cn } from '@/lib/utils';
import CookieBanner from '@/components/cookie-banner';

const fontHeadline = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headline',
});

const fontBody = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Salkeri Expeditions | Unforgettable Safari Experiences',
  description: 'Boutique tour operator specializing in private, tailor-made safaris in Tanzania & Kenya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontHeadline.variable,
          fontBody.variable
        )}>
        {children}
        <Toaster />
        <WhatsappButton />
        <CookieBanner />
      </body>
    </html>
  );
}
