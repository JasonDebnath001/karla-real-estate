import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";
import FeaturesSection from "./components/FeaturesSection";
import HorizontalScrollSection from "./components/HorizontalHeroSection";
import UnlockPotentialSection from "./components/UnlockPotentialSection";
import HoldingBackSection from "./components/HoldingBackSection";
import SelectedWorkVertical from "./components/SelectedWorkVertical";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <VisionSection />
      <FeaturesSection />
      <HorizontalScrollSection />
      <UnlockPotentialSection/>
      <HoldingBackSection />
      <SelectedWorkVertical />
      <FAQSection />
      <Footer />

    </div>
  );
};

export default App;
