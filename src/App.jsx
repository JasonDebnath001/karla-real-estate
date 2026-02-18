import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";

const App = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <VisionSection />

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
