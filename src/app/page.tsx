import SiteHeader from '@/components/site-header';
import Hero from '@/components/hero';
import Team from '@/components/team';
import About from '@/components/about';
import SafariPackages from '@/components/safari-packages';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/why-choose-us';
import Enquiry from '@/components/enquiry';
import SiteFooter from '@/components/site-footer';
import FeaturedIn from '@/components/featured-in';
import CountdownOffer from '@/components/countdown-offer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <CountdownOffer />
        <FeaturedIn />
        <About />
        <SafariPackages />
        <WhyChooseUs />
        <Testimonials />
        <Team />
        <Enquiry />
      </main>
      <SiteFooter />
    </div>
  );
}
