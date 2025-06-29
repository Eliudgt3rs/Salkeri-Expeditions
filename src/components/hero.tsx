import { Button } from '@/components/ui/button';
import { ArrowDown, Mouse } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://source.unsplash.com/1920x1080/?tanzania,safari')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center text-white p-4">
        <h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-in-up"
        >
          Unforgettable Safari Experiences
        </h1>
        <p
          className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
        >
          We are a boutique tour operator specializing in private, tailor-made safaris in Tanzania.
        </p>
        <div
          className="animate-fade-in-up"
           style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">Plan Your Trip</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label="Scroll to about section">
          <div className="text-white flex flex-col items-center gap-2">
            <Mouse className="h-10 w-10" />
            <span className="text-sm tracking-widest uppercase">Scroll Down</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
