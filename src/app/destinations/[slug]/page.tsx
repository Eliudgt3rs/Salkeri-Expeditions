"use client";

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import SiteHeader from '@/components/site-header';
import Enquiry from '@/components/enquiry'; 
import { destinations, Destination } from '@/lib/destinations';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import SiteFooter from '@/components/site-footer';

type Props = {
  params: { slug: string };
};

export default function DestinationDetailPage({ params }: Props) {
  const { slug } = params;
  const destination: Destination | undefined = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const [showAdditionalImages, setShowAdditionalImages] = useState(false);

  const whatsappNumber = "+254719790026";
  const message = `Hello Salkeri Expeditions! I'm interested in planning a trip to ${destination.title}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover"
            data-ai-hint={destination.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white p-4">
            <span className="text-lg font-bold uppercase text-accent tracking-widest">{destination.country}</span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {destination.title}
            </h1>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg md:prose-xl dark:prose-invert text-foreground/80 prose-headings:text-primary prose-headings:font-headline">
                <p className="lead text-xl md:text-2xl !text-foreground/90 !mb-8">
                  {destination.description}
                </p>
                <p>{destination.longDescription}</p>
              </div>

              <div className="mt-12 text-center">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Starting from</p>
                  <p className="font-headline text-4xl md:text-5xl font-bold text-primary">${destination.price.toLocaleString()}</p>
                  <p className="text-muted-foreground">per person</p>
              </div>

              <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                  <Link href="#contact">
                    Fill Enquiry Form
                  </Link>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Plan via WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {destination.additionalImages && destination.additionalImages.length > 0 && (
          <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6 text-center">
              {!showAdditionalImages ? (
                <Button size="lg" onClick={() => setShowAdditionalImages(true)}>
                  View More Images ({destination.additionalImages.length})
                </Button>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {destination.additionalImages.map((image, index) => (
                    <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${destination.title} additional image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <Enquiry defaultDestination={destination.title} />

      </main>
      <SiteFooter />
    </div>
  );
}
