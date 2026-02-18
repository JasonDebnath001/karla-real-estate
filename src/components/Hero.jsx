// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react"; // Using Play icon as the geometric separator

const Hero = () => {
  return (
    <section className="hidden md:block sticky top-0 z-0 h-screen w-full overflow-hidden">
      {/* 1. Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* The overlay darkens the video slightly so text pops */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Ensure 'hero.mp4' is in your 'public' folder */}
          <source src="/hero.webm" type="video/webm" />
        </video>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white pb-20">
        {/* Center Text Group */}
        <div className="flex flex-col items-center gap-8 ml-10">
          {/* Subheadline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] md:text-sm font-medium tracking-widest uppercase text-center max-w-md leading-relaxed"
          >
            Marketing Solutions for Real Estate Developers
          </motion.h2>

          {/* "+ START" Interaction */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="group relative flex flex-col items-center gap-2 mt-4 cursor-pointer"
          >
            <span className="text-xs tracking-[0.2em] font-medium flex items-center gap-2">
              <span className="opacity-60">+</span> START
            </span>
            {/* The Loading Line */}
            <div className="h-[1px] w-12 bg-white/30 group-hover:w-24 transition-all duration-500 ease-out relative overflow-hidden">
              <div className="absolute inset-0 bg-white w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* 3. Bottom Navigation */}
      <div className="absolute bottom-12 left-0 w-full z-20 flex justify-center items-center text-white">
        <div className="flex items-center gap-6 md:gap-12">
          <a
            href="#work"
            className="text-[10px] md:text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          >
            Our Work
          </a>

          {/* Geometric Separator (Diamond/Play shape) */}
          <div className="border border-white/30 rounded-full p-3 hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
            {/* Using a rotated square to mimic the diamond logo in your screenshot */}
            <div className="w-2 h-2 border border-white rotate-45 transform" />
          </div>

          <a
            href="#contact"
            className="text-[10px] md:text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
