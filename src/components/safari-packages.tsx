import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Northern Circuit",
    description: "The iconic heart of Tanzania, home to the Serengeti, Ngorongoro Crater, and Kilimanjaro.",
    image: "https://placehold.co/600x400.png",
    hint: "serengeti safari"
  },
  {
    title: "Southern Circuit",
    description: "Discover the wild, untouched landscapes of Selous and Ruaha, perfect for off-the-beaten-path adventures.",
    image: "https://placehold.co/600x400.png",
    hint: "wildlife river"
  },
  {
    title: "Western Circuit",
    description: "Remote and wild, offering chimpanzee trekking in Mahale and Gombe and the vast Katavi plains.",
    image: "https://placehold.co/600x400.png",
    hint: "chimpanzee tanzania"
  },
   {
    title: "Zanzibar & Coast",
    description: "Pristine white-sand beaches, rich history in Stone Town, and turquoise waters perfect for relaxation.",
    image: "https://placehold.co/600x400.png",
    hint: "zanzibar beach"
  },
];

export default function SafariPackages() {
  return (
    <section id="destinations" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">Explore Our Destinations</h2>
          <p className="max-w-[900px] text-lg text-foreground/80">
            Tanzania offers a diverse range of safari experiences, from classic wildlife viewing to remote wilderness adventures.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
                <Card key={index} className="group h-full flex flex-col overflow-hidden bg-card border-border hover:border-primary transition-all duration-300">
                  <CardHeader className="p-0 relative">
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        width={600}
                        height={400}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={dest.hint}
                      />
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="font-headline text-2xl mb-2 text-foreground">{dest.title}</CardTitle>
                    <p className="text-muted-foreground">{dest.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link href="#contact" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-[gap]">
                      Explore <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
