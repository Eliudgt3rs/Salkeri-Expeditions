
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { destinations } from '@/lib/destinations';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export default function DestinationDetailPage({ params }: Props) {
  const { slug } = params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const whatsappNumber = "255123456789"; 
  const message = `Hello Salkeri Expeditions! I'm interested in planning a trip to ${destination.title}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url('${destination.image}')` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white p-4">
             <span className="text-lg font-bold uppercase text-primary tracking-widest">{destination.country}</span>
            <h1
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              {destination.title}
            </h1>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg md:prose-xl prose-invert text-foreground/80 prose-headings:text-primary prose-headings:font-headline">
                <p className="lead text-xl md:text-2xl !text-foreground/90 !mb-8">
                  {destination.description}
                </p>
                <p>{destination.longDescription}</p>
              </div>
              <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/#contact">Plan via Enquiry Form</Link>
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

      </main>
      <SiteFooter />
    </div>
  );
}
