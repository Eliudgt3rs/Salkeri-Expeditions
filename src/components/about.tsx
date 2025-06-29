import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 flex flex-col justify-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">
              Rooted in Africa, Perfected for You
            </h2>
            <p className="text-lg text-foreground/80">
              Simba Trails is more than a travel company; we are custodians of East Africa's natural heritage. With generations of local knowledge, we craft deeply personal and sustainable safari itineraries. Our expert guides are not just navigators but storytellers, connecting you to the soul of the wild. We believe in travel that respects the environment, supports local communities, and creates lifelong memories.
            </p>
            <p className="text-lg text-foreground/80">
              From the vast plains of the Serengeti to the misty mountains of Rwanda, every journey is a masterpiece of bespoke luxury and authentic adventure.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Acacia tree in savannah"
              width={600}
              height={450}
              className="rounded-lg object-cover shadow-2xl"
              data-ai-hint="acacia tree"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
