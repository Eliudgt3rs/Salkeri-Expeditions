import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-card border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center text-center">
            <Link href="/" className="flex flex-col items-center gap-1 mb-4" prefetch={false}>
              <span className="font-headline text-4xl font-bold tracking-wider text-primary">ONGERI</span>
              <span className="text-sm tracking-[0.3em] text-white/70">EXPEDITIONS</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Specializing in bespoke, private safaris in Tanzania, we create unforgettable journeys into the heart of the wild.
            </p>
          <div className="flex gap-6 my-6">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
             <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="#guides" className="hover:text-primary transition-colors">Our Guides</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ongeri Expeditions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
