
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import Team from '@/components/team';
import WhyChooseUs from '@/components/why-choose-us';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                Our Story: The Heart of the Safari
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/80">
                We are a boutique, family-owned tour operator with a singular passion: sharing the magic of our homeland, Tanzania and Kenya, with the world. Our roots run deep in this soil, and our connection to its wildlife and communities is the foundation of every journey we craft.
              </p>
            </div>
          </div>
        </section>

        <section id="about-details" className="w-full pb-16 md:pb-24 lg:pb-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
                  More Than a Tour, It's a Connection
                </h2>
                <p className="text-lg text-foreground/80">
                  Salkeri Expeditions was born from a desire to offer something more than a standard safari. We wanted to create immersive experiences that connect our guests to the soul of East Africa. We believe that a true safari is not just about seeing animals; it's about feeling the pulse of the wild, understanding the delicate balance of the ecosystem, and engaging with the vibrant cultures that have thrived here for centuries.
                </p>
                <p className="text-lg text-foreground/80">
                  Your journey is a personal story waiting to unfold. Whether it's the thrill of witnessing the Great Migration, the tranquility of a dawn hot-air balloon ride over the Mara, or the warmth of a shared meal in a local village, we meticulously handle every detail to ensure your adventure is seamless, authentic, and truly unforgettable.
                </p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/destinations">Explore Our Destinations</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/maasai-guide.jpg"
                  alt="A Maasai guide looking over the savanna"
                  width={600}
                  height={700}
                  className="rounded-lg object-cover shadow-2xl"
                  data-ai-hint="maasai guide"
                />
              </div>
            </div>
          </div>
        </section>
        
        <WhyChooseUs />
        <Team />

      </main>
      <SiteFooter />
    </div>
  );
}
