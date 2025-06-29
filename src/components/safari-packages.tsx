import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { MapPin, Sun } from 'lucide-react';
import Link from "next/link";

const packages = [
  {
    title: "Serengeti Great Migration",
    destinations: "Tanzania",
    duration: "7 Days / 6 Nights",
    image: "https://placehold.co/600x400.png",
    hint: "wildebeest migration"
  },
  {
    title: "Gorillas in the Mist",
    destinations: "Rwanda & Uganda",
    duration: "5 Days / 4 Nights",
    image: "https://placehold.co/600x400.png",
    hint: "mountain gorilla"
  },
  {
    title: "Kenya's Classic Safari",
    destinations: "Masai Mara, Amboseli",
    duration: "8 Days / 7 Nights",
    image: "https://placehold.co/600x400.png",
    hint: "elephants kilimanjaro"
  },
  {
    title: "Zanzibar Spice & Stone",
    destinations: "Zanzibar Archipelago",
    duration: "4 Days / 3 Nights",
    image: "https://placehold.co/600x400.png",
    hint: "zanzibar beach"
  },
];

export default function SafariPackages() {
  return (
    <section id="packages" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">Featured Safari Packages</h2>
          <p className="max-w-[900px] text-lg text-foreground/80">
            Discover our curated journeys, or let us design a custom adventure just for you.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {packages.map((pkg, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                    <CardHeader className="p-0 relative">
                       <Image
                          src={pkg.image}
                          alt={pkg.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover"
                          data-ai-hint={pkg.hint}
                        />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="font-headline text-2xl mb-2">{pkg.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{pkg.destinations}</span>
                      </div>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sun className="h-4 w-4 text-accent" />
                        <span>{pkg.duration}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="#contact">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 sm:translate-x-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
