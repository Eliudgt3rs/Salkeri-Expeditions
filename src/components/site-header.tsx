
"use client";

import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm font-medium uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-primary after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
  >
    {children}
  </Link>
);

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme

  useEffect(() => {
    const handleScroll = () => {
 setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize theme from local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
 setIsDarkMode(true);
 document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6 relative md:gap-16">
        {/* Theme Toggle Button */}
        <button
          onClick={() => {
 setIsDarkMode(!isDarkMode);
 document.documentElement.classList.toggle('dark', !isDarkMode);
 localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
          }}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb text-foreground"><path d="M15 14c.2-1 .7-2 1.5-3 .8-.8 1.4-2 1.8-3 .2-.8.4-2 .6-2.8.2-.8.3-2 .5-2.8-.2-.1-.5-.2-.7-.3-1.6-.8-3.6-1.3-6-1.3a4.2 4.2 0 0 0-2.7 1.1c-.5.3-1.1.8-1.5 1.4L3 7c-.8.8-1.2 1.9-1.2 3.2 0 1.2.4 2.3 1.2 3.3l2 2c.8.8 1.8 1.2 2.8 1.2H9M8 18h1M14 18h1M9 21h6"/></svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/destinations">Destinations</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/#guides">Guides</NavLink>
        </nav>

        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
 <Link href="/" className="flex flex-col items-center justify-center flex-shrink-0" aria-label="Home">
            <span className="font-headline text-3xl font-bold tracking-wider text-foreground">SALKERI</span>
            <span className="text-xs tracking-[0.3em] text-foreground/80">EXPEDITIONS</span>
          </Link>
        </div>

        <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground ml-auto">
          <Link href="/#contact">Plan Your Trip</Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="md:hidden">
 <Link href="/" className="flex flex-col items-center" aria-label="Home">
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
                <Link href="/" className="flex flex-col items-center mb-8" onClick={() => setIsMenuOpen(false)} aria-label="Home">
                  <span className="font-headline text-3xl font-bold tracking-wider text-primary">SALKERI</span>
                  <span className="text-xs tracking-[0.3em] text-foreground/80">EXPEDITIONS</span>
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Home</Link>
                <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Destinations</Link>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">About</Link>
                <Link href="/#guides" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Guides</Link>
                <Button asChild size="lg" className="mt-8" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/#contact">Plan Your Trip</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
