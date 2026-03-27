import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PracticeAreasSection from "./components/PracticeAreasSection";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";
import HowToArriveSection from "./components/HowToArriveSection";
import Footer from "./components/Footer";
import FloatingSocialBar from "./components/FloatingSocialBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <TeamSection />
      <HowToArriveSection />
      <ContactSection />
      <Footer />
      <FloatingSocialBar />
    </div>
  );
}
