import type {Metadata} from 'next';
import {Toaster} from "@/components/ui/toaster";
import './globals.css';
import WhatsappButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Salkeri Expeditions | Unforgettable Safari Experiences',
  description: 'Boutique tour operator specializing in private, tailor-made safaris in Tanzania.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Barlow:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
