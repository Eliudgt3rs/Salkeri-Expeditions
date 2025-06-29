
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { destinations } from '@/lib/destinations';
import { ArrowRight } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-primary">
                Our Destinations
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/80">
                From the legendary plains of the Serengeti to the pristine beaches of Zanzibar, East Africa offers a lifetime of adventures. Explore our handpicked destinations and let us craft your perfect journey.
              </p>
            </div>
          </div>
        </section>

        <section id="all-destinations" className="w-full pb-16 md:pb-24 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <Card key={dest.slug} className="group h-full flex flex-col overflow-hidden bg-card border-border hover:border-primary transition-all duration-300">
                  <CardHeader className="p-0 relative">
                    <Link href={`/destinations/${dest.slug}`}>
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        width={600}
                        height={400}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={dest.imageHint}
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                     <span className="text-sm font-bold uppercase text-primary tracking-wider">{dest.country}</span>
                    <h3 className="font-headline text-2xl mt-1 mb-2 text-foreground">{dest.title}</h3>
                    <p className="text-muted-foreground">{dest.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link href={`/destinations/${dest.slug}`} className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-[gap]">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
