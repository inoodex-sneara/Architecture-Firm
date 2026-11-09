import Hero from "@/components/Hero";
import OurPerfections from "@/components/OurPerfections";
import SpecialOffer from "@/components/SpecialOffer";
import FeaturedProperties from "@/components/FeaturedProperties";
import StatementOfArrival from "@/components/StatementOfArrival";
import CustomerTestimonials from "@/components/CustomerTestimonials";

export default function Home() {
  return (
    <main className="relative z-10 flex-1 bg-black overflow-x-hidden">
      <Hero />
      <OurPerfections />
      <SpecialOffer />
      <FeaturedProperties />
      <StatementOfArrival />
      <CustomerTestimonials />
    
    </main>
  );
}
