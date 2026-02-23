import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";
import FeaturesSection from "./components/FeaturesSection";
import HorizontalScrollSection from "./components/HorizontalHeroSection";
import UnlockPotentialSection from "./components/UnlockPotentialSection";

const App = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <VisionSection />
      <FeaturesSection />
      <HorizontalScrollSection />
      <UnlockPotentialSection/>

      {/* Placeholder for next sections */}
      <div className="h-screen flex items-center justify-center bg-brand-black">
        <h2 className="text-2xl text-brand-gray">
          Next Section: Expertise Grid
        </h2>
      </div>
    </div>
  );
};

export default App;
