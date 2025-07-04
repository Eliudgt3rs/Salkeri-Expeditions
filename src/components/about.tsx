
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
              Welcome to Salkeri Expeditions
            </h2>
            <p className="text-lg text-foreground/80">
              We are a proressional, family-owned tour operator specializing in private, tailor-made safaris in Tanzania and Kenya. Our deep-rooted connection to this land and its wildlife allows us to craft truly authentic and unforgettable experiences.
            </p>
            <p className="text-lg text-foreground/80">
              Your journey is more than just a trip; it's a story waiting to be written. From the endless plains of the Serengeti to the pristine beaches of Diani, we handle every detail with care, ensuring a seamless and extraordinary adventure.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/hero1.jpg"
              alt="A lion resting in the Serengeti"
              width={600}
              height={450}
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint="lion serengeti"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
