
import { Mouse } from 'lucide-react';
import Link from 'next/link';
import AISuggester from './ai-suggester';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          
        >
          <source src="/HeroVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center text-white p-4">
        <h1
          className="font-headline text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-in-up"
        >
          Unforgettable Safari Experiences
        </h1>
        <p
          className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
        >
          We are a boutique tour operator specializing in private, tailor-made safaris in Tanzania & Kenya.
        </p>
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
           style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
        >
          <AISuggester />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#about" aria-label="Scroll to about section">
          <div className="text-white flex flex-col items-center gap-2 animate-bounce">
            <Mouse className="h-10 w-10" />
            <span className="text-sm tracking-widest uppercase">Scroll Down</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
