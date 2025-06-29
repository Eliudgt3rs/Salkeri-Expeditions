const logos = [
  "Forbes",
  "Travel + Leisure",
  "Condé Nast Traveler",
  "National Geographic",
  "Bloomberg",
];

export default function FeaturedIn() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-sm font-semibold text-foreground/60 tracking-widest uppercase mb-8">
          As Featured In
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-semibold text-foreground/70 text-center">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
