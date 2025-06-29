"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary"
  >
    {children}
  </Link>
);

const SiteLogo = () => (
  <Link href="/" className="flex flex-col items-center justify-center flex-shrink-0" aria-label="Home">
    <span className="font-headline text-3xl font-bold tracking-wider text-primary">SALKERI</span>
    <span className="text-xs tracking-[0.3em] text-foreground/80">EXPEDITIONS</span>
  </Link>
);


export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialThemeIsDark = storedTheme ? storedTheme === 'dark' : prefersDark;

    setIsDarkMode(initialThemeIsDark);
    document.documentElement.classList.toggle('dark', initialThemeIsDark);
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <div className="hidden md:flex">
          <SiteLogo />
        </div>

        {/* Mobile Logo & Menu Trigger */}
        <div className="md:hidden flex items-center gap-4">
           <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background w-full">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                <Link href="/" className="flex flex-col items-center mb-8" onClick={() => setIsMenuOpen(false)} aria-label="Home">
                  <span className="font-headline text-3xl font-bold tracking-wider text-primary">SALKERI</span>
                  <span className="text-xs tracking-[0.3em] text-foreground/80">EXPEDITIONS</span>
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Home</Link>
                <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Destinations</Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">About</Link>
                <Link href="/#guides" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Guides</Link>
                <Button asChild size="lg" className="mt-8 bg-accent text-white" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/#contact">Plan Your Trip</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
           <div className="md:hidden">
            <SiteLogo />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/destinations">Destinations</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/#guides">Guides</NavLink>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
           <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-white">
            <Link href="/#contact">Plan Your Trip</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
}
