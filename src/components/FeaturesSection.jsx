// src/components/FeaturesSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Data for the 3 slides
const features = [
  {
    id: 1,
    title: "Smart Visuals.",
    video: "https://static.tildacdn.one/tild6137-6262-4733-b866-623531323565/1giphy.gif", // Replace with your file path
    shape: "cube",
  },
  {
    id: 2,
    title: "Digital Experiences.",
    video: "https://static.tildacdn.one/tild3336-6162-4766-a139-666634316466/e9d36b7b6e09a8b87b7d.gif", // Replace with your file path
    shape: "sphere",
  },
  {
    id: 3,
    title: "Integrated Campaigns.",
    video: "https://static.tildacdn.one/tild3637-3663-4132-a538-626436646130/tumblr_mw92euJD4A1ss.gif", // Replace with your file path
    shape: "pyramid",
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // MAIN CONTAINER:
    // - z-20 to sit ON TOP of Vision (which is z-10)
    // - h-[400vh] creates the scroll distance (scrolling space)
    <section
      ref={containerRef}
      className="relative z-20 bg-black text-white h-[400vh]"
    >
      {/* PINNED CONTENT:
          - sticky top-0 h-screen: This keeps the visual locked in place 
            while we scroll through the 400vh parent
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        {/* Top Progress Bar */}
        <div className="absolute top-12 md:top-24 w-full flex justify-center z-30">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
              Keep Scrolling
            </span>
            <div className="w-[1px] h-12 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                style={{
                  height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                }}
                className="w-full bg-white"
              />
            </div>
          </div>
        </div>

        {/* SLIDES */}
        <div className="relative w-full h-full flex items-center justify-center">
          {features.map((feature, index) => {
            // Calculate opacity based on scroll range
            // Slide 1: 0.0 - 0.3
            // Slide 2: 0.3 - 0.6
            // Slide 3: 0.6 - 1.0
            const start = index * 0.3;
            const end = start + 0.3;

            // Fades in and then out
            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 0],
            );

            // Special case for last slide: keep it visible until the end
            const finalOpacity =
              index === features.length - 1
                ? useTransform(scrollYProgress, [start, start + 0.1], [0, 1])
                : opacity;

            return (
              <motion.div
                key={feature.id}
                style={{ opacity: finalOpacity }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                {/* Background GIF/Video */}
                <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen flex items-center justify-center pointer-events-none">
                  {/* If you have transparent GIFs/WEBMs, this works great. 
                     If MP4s, the black background blends with the section bg.
                   */}
                  <img
                    src={feature.video}
                    alt="features"
                    className="max-w-[80%] max-h-[80%] object-contain opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Text Content */}
                <h2 className="relative z-10 text-5xl md:text-9xl font-semibold tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2 md:pb-4">
                  {feature.title}
                </h2>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-12 w-full z-30 flex justify-center items-center text-white/50 hover:text-white transition-colors">
          <div className="flex items-center gap-12 cursor-pointer">
            <span className="text-xs tracking-[0.2em] uppercase">Our Work</span>
            {/* Diamond Icon */}
            <div className="w-3 h-3 border border-current rotate-45" />
            <span className="text-xs tracking-[0.2em] uppercase">
              Work With Us
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
