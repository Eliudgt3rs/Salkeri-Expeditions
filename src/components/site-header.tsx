"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MountainIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">Simba Trails</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>About</Link>
          <Link href="#packages" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>Safaris</Link>
          <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>Our Team</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>Contact</Link>
        </nav>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="tel:+254712345678">Call Us Anytime</a>
        </Button>
      </div>
    </header>
  );
}
