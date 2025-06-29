
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "The Miller Family",
    quote: "Salkeri Expeditions gave us the family trip of a lifetime. The attention to detail was incredible, and our guide's knowledge of the wildlife was simply astounding. Unforgettable!",
    image: "/Millers.jpg",
    imageHint: "happy family"
  },
  {
    name: "Sarah & Tom",
    quote: "Our honeymoon was pure magic. From the luxury lodges to the private dinners under the stars, every moment felt like a dream. Thank you for the perfect romantic getaway.",
    image: "/Sarah.jpg",
    imageHint: "happy couple"
  },
  {
    name: "Chen Wei",
    quote: "As a photographer, I had high expectations. Salkeri Expeditions exceeded them all. They knew exactly where to go for the best light and wildlife encounters. I came back with my best portfolio yet.",
    image: "/Chun.jpg",
    imageHint: "wildlife photographer"
  },
];


export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary">What Our Clients Say</h2>
          <p className="max-w-[900px] text-lg text-foreground/80">
            Real stories from travelers who have experienced the magic of Tanzania with us.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card className="bg-card border-primary/50">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <Avatar className="w-20 h-20 mb-4 border-4 border-primary">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-lg italic text-foreground/90 mb-4">"{testimonial.quote}"</p>
                      <cite className="font-headline text-xl font-bold not-italic text-primary">{testimonial.name}</cite>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
