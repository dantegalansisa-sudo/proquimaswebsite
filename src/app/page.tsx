import HeroSection from "@/components/home/HeroSection";
import BenefitsBar from "@/components/home/BenefitsBar";
import ProductCategories from "@/components/home/ProductCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DeliverySection from "@/components/home/DeliverySection";
import CorporateClients from "@/components/home/CorporateClients";
import StatsCounter from "@/components/home/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PromoSection from "@/components/home/PromoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsBar />
      <ProductCategories />
      <FeaturedProducts />
      <DeliverySection />
      <CorporateClients />
      <StatsCounter />
      <WhyChooseUs />
      <PromoSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
