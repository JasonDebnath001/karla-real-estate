import React from 'react';
import { motion } from 'framer-motion';

// Reusable component for the typing animation effect
const TypewriterText = ({ text, className }) => {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, 
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-black selection:text-white overflow-hidden">
      
      {/* --- Top White Section (Header) --- */}
      <div className="bg-white w-full pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 flex justify-center">
        {/* max-w-6xl keeps everything contained and aligned with the card below */}
        <div className="w-full max-w-6xl flex flex-col">
          
          {/* Typography Container - Scaled down to prevent screen overflow */}
          <div className="flex flex-row items-baseline flex-wrap gap-10 sm:flex-nowrap">
            
            {/* "Thought" */}
            <h1 
              className="text-5xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] text-black tracking-tighter leading-none m-0 p-0"
              style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: 500 }}
            >
              Thought
            </h1>
            
            {/* "leadership" */}
            <h1 
              className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[8.5rem] text-black leading-none m-0 p-0 sm:-ml-2 md:-ml-5 mt-2 sm:mt-0"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}
            >
              leadership
            </h1>

          </div>

          {/* Typing Animated Subtitle */}
          <div className="mt-6 md:mt-8 ml-1 sm:ml-12 md:ml-32">
            <TypewriterText 
              text="MARKETING INSIGHTS FOR REAL ESTATE DEVELOPERS" 
              className="text-gray-500 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-medium uppercase"
            />
          </div>

        </div>
      </div>

      {/* --- Bottom Black Section (Main Content) --- */}
      <div className="bg-black w-full pt-16 md:pt-20 pb-32 px-6 md:px-12 flex justify-center">
        
        <div className="w-full max-w-6xl flex flex-col items-start">
          
          {/* Blog Post Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-[380px] bg-white group cursor-pointer"
          >
            {/* Card Image */}
            <div className="w-full h-[260px] overflow-hidden bg-gray-100 relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Real Estate Architecture" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-8">
              <h2 
                className="text-black font-bold text-[13px] leading-snug mb-4 tracking-wide uppercase"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Real Estate Developer Branding Blueprint:<br/>
                Positioning, Identity And Story
              </h2>
              
              <p 
                className="text-black/80 text-[13px] leading-relaxed mb-8"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Most real estate developers still treat branding as a visual
                accessory. Modern buyers do not decide this way. They buy
                clarity. They buy confidence. They buy emotional certainty long
                before they buy a unit.
              </p>

              <div 
                className="text-gray-400 text-xs font-medium"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                11.12.2025
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}