// src/components/VisionSection.jsx
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, X, Mouse } from "lucide-react";

const VisionSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef(null);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax: Moves the image UP (-y) as you scroll down
  // Range is [-200px] to ensure it moves smoothly behind text
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Opacity for text fade-in
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full min-h-screen bg-white text-black overflow-hidden pt-24 flex flex-col items-center"
    >
      {/* 1. Main Text Content (z-20 ensures it stays ON TOP of the image) */}
      <div className="relative z-20 text-center px-4 mt-12 md:mt-16 w-full pointer-events-none">
        <motion.p
          style={{ opacity }}
          className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-8"
        >
          Help buyers see their future home—before it's built
        </motion.p>

        <motion.h2
          style={{ opacity }}
          className="text-6xl md:text-[8rem] leading-[0.85] tracking-tight font-medium w-full mx-auto flex flex-col items-center"
        >
          {/* Line 1: Bring your real estate */}
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6">
            <span className="font-sans">Bring</span>
            <span className="font-serif italic font-normal">your real estate</span>
          </div>

          {/* Line 2: vision to life */}
          <div className="font-sans mt-2 md:mt-4">
            vision to life
          </div>
        </motion.h2>
      </div>

      {/* 2. Floating Elements (Showreel & Scroll Indicator) */}
      <div className="relative z-30 w-full max-w-[90%] mx-auto flex justify-between items-end mt-16 md:mt-24 mb-10 pointer-events-none">
        
        {/* Watch Showreel (Left) - Enable pointer events for click */}
        <div
          className="pointer-events-auto flex items-center gap-6 cursor-pointer group"
          onClick={() => setIsVideoOpen(true)}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase hidden md:block group-hover:opacity-60 transition-opacity">
            Watch
          </span>

          {/* Circle Button */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-gray-200 group-hover:scale-105 transition-transform duration-300">
            {/* Thumbnail */}
            <img
               src="https://optim.tildacdn.one/tild3239-3135-4431-b632-343630633965/-/format/webp/2.webp"
               alt="Showreel Thumbnail"
               className="w-full h-full object-cover opacity-80"
             /> 
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                 <Play size={20} fill="white" className="text-white ml-1" />
              </div>
            </div>
          </div>

          <span className="text-[10px] font-bold tracking-[0.2em] uppercase hidden md:block group-hover:opacity-60 transition-opacity">
            Showreel
          </span>
        </div>

        {/* Keep Scrolling (Right) */}
        <div className="flex flex-col items-center gap-3 text-black">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase hidden md:block opacity-40">
            Keep Scrolling
          </span>
          <div className="border border-black/20 rounded-full p-2">
             <Mouse size={20} className="text-black" />
          </div>
        </div>
      </div>

      {/* 3. The Reveal Image (Full Screen Width) */}
      {/* FIXES:
          1. h-[150vh]: Increased height prevents the gap at the bottom when parallax moves it up.
          2. object-top: Ensures the top of the building is never cut off.
          3. -mt-20 md:-mt-32: Balanced overlap so it tucks just right.
      */}
      <div className="relative w-full -mt-20 md:-mt-32 z-10">
        <motion.div style={{ y }} className="w-full h-[150vh]">
          <img
            src="https://optim.tildacdn.one/tild3239-3135-4431-b632-343630633965/-/format/webp/2.webp"
            alt="Luxury Architecture"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>

      {/* 4. Video Lightbox */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
          >
            <X size={40} className="mt-10 sm:mt-20" />
          </button>

          <div className="w-full max-w-7xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/20">
            <video controls autoPlay className="w-full h-full">
              <source src="/vision.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default VisionSection;