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
    <div className="min-h-screen flex flex-col bg-black selection:bg-black selection:text-white overflow-x-hidden w-full">
      
      {/* --- Top White Section (Header) --- */}
      <div className="relative bg-white w-full pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 xl:px-20 z-10 flex justify-center">
        
        {/* Max-width container to align everything */}
        <div className="w-full max-w-[1200px] flex flex-col items-start">
          
          {/* Typography Container - Natural Flow without overlap */}
          <div className="flex flex-col">
            
            {/* Flex row keeps them side-by-side, wrapping only on tiny mobile screens */}
            <div className="flex flex-row flex-wrap items-baseline gap-x-2 md:gap-x-5">
              
              {/* "Thought" */}
              <h1 
                className="text-[clamp(4rem,9vw,9rem)] text-black tracking-[-0.04em] leading-[0.9] m-0 p-0 font-normal"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Thought
              </h1>
              
              {/* "leadership" */}
              <h1 
                className="text-[clamp(4.5rem,10vw,10.5rem)] text-black leading-[0.8] m-0 p-0 md:-ml-2"
                style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic' }}
              >
                leadership
              </h1>

            </div>

            {/* Subtitle */}
            <div className="mt-6 md:mt-10 ml-1 md:ml-2">
              <TypewriterText 
                text="MARKETING INSIGHTS FOR REAL ESTATE DEVELOPERS" 
                className="text-gray-500 text-[9px] md:text-[11px] tracking-[0.25em] font-medium uppercase"
              />
            </div>
            
          </div>

        </div>
      </div>

      {/* --- Bottom Black Section (Main Content) --- */}
      <div className="relative bg-black w-full pt-24 pb-32 px-6 md:px-12 xl:px-20 flex justify-center z-0">
        
        <div className="w-full max-w-[1200px] flex flex-col items-start">
          
          {/* Blog Post Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-[340px] bg-white group cursor-pointer rounded-none"
          >
            {/* Card Image */}
            <div className="w-full h-[220px] overflow-hidden bg-gray-100 relative">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Real Estate Architecture" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-8 pb-10">
              <h2 
                className="text-black font-extrabold text-[12px] leading-[1.4] mb-4 tracking-[-0.01em]"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                REAL ESTATE DEVELOPER BRANDING BLUEPRINT:<br/>
                POSITIONING, IDENTITY AND STORY
              </h2>
              
              <p 
                className="text-black font-medium text-[12px] leading-[1.5] mb-8"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                Most real estate developers still treat branding as a visual
                accessory. Modern buyers do not decide this way. They buy
                clarity. They buy confidence. They buy emotional certainty long
                before they buy a unit.
              </p>

              <div 
                className="text-gray-400 text-[11px] font-normal"
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