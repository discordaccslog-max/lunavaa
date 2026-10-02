import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TrustpilotSection from "@/components/TrustpilotSection";
import Footer from "@/components/Footer";
import StatusNotification from "@/components/StatusNotification";
import LiveStats from "@/components/LiveStats";
import NoticePopup from "@/components/NoticePopup";
import SmokeBackground from "@/components/SmokeBackground";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <div className="relative min-h-screen">
      <SmokeBackground />
      <NoticePopup />
      <Navbar />
      <StatusNotification />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TrustpilotSection />
      <LiveStats />
      <Footer />
    </div>
  );
};

export default Index;
