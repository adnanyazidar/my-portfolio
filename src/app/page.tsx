import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import TechStackSection from "@/components/TechStackSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <TechStackSection />
        <SelectedWorkSection />
        <WhyHireMeSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
