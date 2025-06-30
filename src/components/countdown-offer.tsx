"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownOffer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const targetDateRef = useRef<Date | null>(null);

  useEffect(() => {
    setIsMounted(true);

    if (!targetDateRef.current) {
      const target = new Date();
      target.setHours(target.getHours() + 34);
      targetDateRef.current = target;
    }
    
    const calculateTimeLeft = (): TimeLeft | null => {
      if (!targetDateRef.current) return null;
      const difference = +targetDateRef.current - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const renderCountdown = () => {
    if (!isMounted) {
      // Server-side render or initial client render before mount
      return (
        <div className="flex justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center"><span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tighter">--</span><span className="text-xs uppercase text-foreground/80 tracking-widest">days</span></div>
          <div className="flex flex-col items-center"><span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tighter">--</span><span className="text-xs uppercase text-foreground/80 tracking-widest">hours</span></div>
          <div className="flex flex-col items-center"><span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tighter">--</span><span className="text-xs uppercase text-foreground/80 tracking-widest">minutes</span></div>
          <div className="flex flex-col items-center"><span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tighter">--</span><span className="text-xs uppercase text-foreground/80 tracking-widest">seconds</span></div>
        </div>
      );
    }

    if (timeLeft) {
      return (
        <div className="flex justify-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([interval, value]) => (
            <div key={interval} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tighter">
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase text-foreground/80 tracking-widest">{interval}</span>
            </div>
          ))}
        </div>
      );
    }

    return <span className="text-xl font-bold">Offer has expired!</span>;
  };

  return (
    <section id="offer" className="w-full py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Limited Time Offer
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Book your dream 2025 safari adventure before the end of the year and receive an exclusive 15% discount on most packages.
          </p>
          <div className="my-8 h-20 flex items-center justify-center">
            {renderCountdown()}
          </div>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-white">
            <Link href="#contact">Claim Your Discount</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CountdownOffer;
