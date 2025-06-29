
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Richard Ouko",
    role: "Founder & Lead Guide",
    specialty: "Expert in wildlife tracking and photographic safaris.",
    image: "/Game_Rangers.webp",
    imageHint: "safari guide"
  },
  {
    name: "Amy Kuki",
    role: "Safari Operations Manager",
    specialty: "Ensures every detail of your journey is seamless and perfect.",
    image: "/Amina.webp",
    imageHint: "travel planner"
  },
  {
    name: "David Kimani",
    role: "Senior Safari Guide",
    specialty: "Specialist in ornithology and cultural expeditions.",
    image: "/David.webp",
    imageHint: "kenyan man"
  },
];

export default function Team() {
  return (
    <section id="guides" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">Meet Our Expert Guides</h2>
          <p className="max-w-[900px] text-lg text-foreground/80">
            Our team is the heart of your safari. Passionate, knowledgeable, and deeply connected to Tanzania.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center overflow-hidden border-transparent hover:shadow-2xl hover:border-primary transition-all duration-300">
              <CardHeader className="p-0">
                 <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover object-top"
                    data-ai-hint={member.imageHint}
                  />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                <p className="text-primary font-semibold mt-1">{member.role}</p>
                <CardDescription className="mt-2 text-sm">{member.specialty}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
