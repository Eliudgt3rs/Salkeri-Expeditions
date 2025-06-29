import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="safari landscape"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center text-white p-4">
        <h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 animate-fade-in-up"
        >
          Explore the Heart of East Africa
        </h1>
        <p
          className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
        >
          Bespoke safari experiences curated by local experts. Your adventure of a lifetime awaits.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
           style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="tel:+254712345678">Call Us Anytime</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-accent bg-accent/90 hover:bg-accent text-accent-foreground hover:border-accent">
            <Link href="#contact">Build Your Itinerary</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label="Scroll to about section">
          <div className="text-white animate-bounce">
            <ArrowDown className="h-8 w-8" />
          </div>
        </Link>
      </div>
    </section>
  );
}
