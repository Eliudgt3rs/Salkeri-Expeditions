
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/destinations";

const primeDestinations = destinations.filter(d => d.isPrime).slice(0, 5);

export default function SafariPackages() {
  return (
    <section id="destinations" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">Explore Our Prime Destinations</h2>
          <p className="max-w-[900px] text-lg text-foreground/80">
            Tanzania and Kenya offer a diverse range of safari experiences. Here are some of our most requested destinations to ignite your imagination.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {primeDestinations.map((dest) => (
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
        <div className="mt-16 text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/destinations">View All Destinations</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
