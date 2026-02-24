import React from "react";
import { motion } from "framer-motion";

const HoldingBackSection = () => {
  return (
    // z-30 ensures it sits correctly below/above other scrolling contexts
    <section className="relative w-full bg-black flex flex-col z-30">
      {/* =========================================
          TOP: Hero Image Area
      ========================================= */}
      <div className="w-full h-[50vh] md:h-[65vh] lg:h-[75vh] relative overflow-hidden">
        {/* Subtle zoom-out effect on scroll-in */}
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          src="https://www.shutterstock.com/image-photo/luxury-penthouse-balcony-overlooking-city-260nw-2670344927.jpg" // Replace with your actual luxury balcony image
          alt="Luxury Real Estate Balcony"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay at the bottom of the image so it blends seamlessly into the black section below */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* =========================================
          BOTTOM: Typography & CTAs
      ========================================= */}
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="w-full flex flex-col xl:flex-row xl:items-end justify-between gap-12 xl:gap-8 max-w-[1600px] mx-auto"
        >
          {/* Left: Big Typography */}
          <div className="flex-1">
            <h2 className="text-[clamp(3rem,5vw,6rem)] leading-[1.05] tracking-tight text-white font-medium">
              What's Holding Back <br />
              Your{" "}
              <span className="italic font-serif font-light text-white/90">
                Real Estate Success?
              </span>
            </h2>
          </div>

          {/* Right: CTA Elements */}
          <div className="flex flex-col sm:flex-row sm:items-center xl:items-end gap-10 sm:gap-16 lg:gap-24 pb-2">
            

            {/* The 'NOTHING' Box */}
            <div className="relative w-full sm:w-[240px] h-[90px] bg-[#111] flex items-center justify-center group cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-300">
              {/* Corner Brackets */}
              <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-white/20 transition-colors group-hover:border-white/60"></div>
              <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/20 transition-colors group-hover:border-white/60"></div>
              <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/20 transition-colors group-hover:border-white/60"></div>
              <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-white/20 transition-colors group-hover:border-white/60"></div>

              {/* Center Text */}
              <span className="text-[10px] md:text-xs tracking-[0.25em] font-medium text-white/70 group-hover:text-white transition-colors">
                NOTHING
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoldingBackSection;
