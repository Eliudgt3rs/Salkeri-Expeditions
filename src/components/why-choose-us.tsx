import { ShieldCheck, Leaf, Users, Clock, Wrench } from 'lucide-react';

const features = [
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Tailor-Made Itineraries",
    description: "Your adventure, your way. We customize every detail to match your travel style and dreams."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert Local Guides",
    description: "Our guides are born and raised in East Africa, offering unmatched local insights."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24/7 Support",
    description: "Peace of mind is part of the package. Our team is available around the clock to assist you."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Fully Insured & Bonded",
    description: "Travel with confidence knowing you are fully covered by our comprehensive insurance."
  },
   {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Ethical & Sustainable",
    description: "We are committed to conservation and supporting local communities on every trip we design."
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full py-16 md:py-24 lg:py-32 bg-card">
       <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">Why Choose Salkeri Expeditions</h2>
          <p className="max-w-[900px] text-lg text-foreground/80">
            We go beyond the ordinary to deliver extraordinary safari experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
