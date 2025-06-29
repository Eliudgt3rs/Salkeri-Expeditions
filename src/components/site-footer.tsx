import Link from 'next/link';
import { MountainIcon, Instagram, Facebook, Twitter } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
             <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">Simba Trails</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your adventure of a lifetime awaits.</p>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#packages" className="text-sm hover:text-primary transition-colors">Safari Packages</Link></li>
              <li><Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+254712345678" className="hover:text-primary transition-colors">+254 712 345 678</a></li>
              <li><a href="mailto:booking@simbatrails.com" className="hover:text-primary transition-colors">booking@simbatrails.com</a></li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Simba Trails. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
