
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveMarket from "@/components/LiveMarket";
import ProductFeatures from "@/components/ProductFeatures";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0B0F] text-white pt-20">
        <HeroSection />
        <LiveMarket />
        <ProductFeatures />
        <TrustSection />
        <HowItWorks />
        <MobileApp />
      </main>
      <Footer />
    </>
  );
};

export default Index;
