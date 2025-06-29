"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
    prefetch={false}
  >
    {children}
  </Link>
);

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6 relative">
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#destinations">Destinations</NavLink>
        </nav>

        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex flex-col items-center" prefetch={false}>
            <span className="font-headline text-3xl font-bold tracking-wider text-foreground">SALKERI</span>
            <span className="text-xs tracking-[0.3em] text-foreground/80">EXPEDITIONS</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#team">Guides</NavLink>
        </nav>

        <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="#contact">Plan Your Trip</Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="md:hidden">
           <Link href="/" className="flex flex-col items-center" prefetch={false}>
            <span className="font-headline text-2xl font-bold tracking-wider text-foreground">SALKERI</span>
            <span className="text-[0.6rem] tracking-[0.2em] text-foreground/80">EXPEDITIONS</span>
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-full">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                <Link href="/" className="flex flex-col items-center mb-8" prefetch={false} onClick={() => setIsMenuOpen(false)}>
                  <span className="font-headline text-3xl font-bold tracking-wider text-primary">SALKERI</span>
                  <span className="text-xs tracking-[0.3em] text-foreground/80">EXPEDITIONS</span>
                </Link>
                <Link href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Home</Link>
                <Link href="#destinations" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Destinations</Link>
                <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">About</Link>
                <Link href="#team" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Guides</Link>
                <Button asChild size="lg" className="mt-8" onClick={() => setIsMenuOpen(false)}>
                  <Link href="#contact">Plan Your Trip</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
