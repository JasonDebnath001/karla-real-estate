import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SelectedWorkVertical = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ==========================================
  // TEXT CROSSFADE TIMINGS
  // ==========================================
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-5%"]);

  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], ["5%", "-5%"]);

  const opacity3 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.65], ["5%", "-5%"]);

  const opacity4 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.55, 0.85], ["5%", "-5%"]);

  const opacity5 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const y5 = useTransform(scrollYProgress, [0.75, 1], ["5%", "0%"]);

  // ==========================================
  // SVG LINE DRAWING TIMINGS
  // ==========================================
  const drawHex = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const drawLine1 = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const drawLine2 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const drawLine3 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const cubeOpacity = useTransform(scrollYProgress, [0.75, 0.85], [1, 0]);

  const slides = [
    {
      id: 1,
      leftEyebrow: "YOUR MISTAKES",
      leftTitle: "Underestimating the\nImpact of Visuals",
      rightEyebrow: "YOUR OPPORTUNITIES",
      rightText: "BUYERS NEED PHOTOREALISTIC\nRENDERINGS AND IMMERSIVE TOOLS\nTO MAKE CONFIDENT DECISIONS.",
      opacity: opacity1,
      y: y1,
    },
    {
      id: 2,
      leftEyebrow: "YOUR MISTAKES",
      leftTitle: "Relying on Outdated\nFloor Plans",
      rightEyebrow: "YOUR OPPORTUNITIES",
      rightText: "INTERACTIVE 3D TOURS ALLOW\nCLIENTS TO EXPERIENCE THE SPACE\nBEFORE IT IS BUILT.",
      opacity: opacity2,
      y: y2,
    },
    {
      id: 3,
      leftEyebrow: "YOUR MISTAKES",
      leftTitle: "Ignoring the Power\nof Brand Identity",
      rightEyebrow: "YOUR OPPORTUNITIES",
      rightText: "A COHESIVE DIGITAL PRESENCE\nBUILDS TRUST AND ACCELERATES\nTHE SALES PIPELINE.",
      opacity: opacity3,
      y: y3,
    },
    {
      id: 4,
      leftEyebrow: "YOUR MISTAKES",
      leftTitle: "Failing to Engage\nMobile Buyers",
      rightEyebrow: "YOUR OPPORTUNITIES",
      rightText: "RESPONSIVE, HIGH-FIDELITY\nEXPERIENCES CAPTURE ATTENTION\nON EVERY DEVICE.",
      opacity: opacity4,
      y: y4,
    },
    {
      id: 5,
      isFinalCTA: true,
      opacity: opacity5,
      y: y5,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[500vh] bg-black text-white font-sans"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* TOP LEFT INDICATORS */}
        <div className="absolute top-24 left-24 z-50 flex items-center gap-12 pointer-events-none hidden md:flex">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-5 h-5 rounded-full border border-dashed border-white/50"></div>
        </div>

        {/* =========================================
            THE ANIMATED CENTER CUBE
        ========================================= */}
        <motion.div 
          style={{ opacity: cubeOpacity }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-0"
        >
          {/* Subtle vertical background line */}
          <div className="absolute top-[-50vh] bottom-[-50vh] left-1/2 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 244 276" 
            fill="none"
            /* Smaller width on mobile (w-[200px]), standard on desktop (md:w-[280px]) */
            className="relative z-10 drop-shadow-lg w-[200px] md:w-[280px] h-auto"
          >
            {/* Outer Hexagon */}
            <motion.path 
              style={{ pathLength: drawHex }}
              d="M122 275 L8 199 L0 65 L122 1 L242 65 L237 199 Z" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinejoin="round"
            />
            {/* Top Left Line */}
            <motion.path 
              style={{ pathLength: drawLine1 }}
              d="M122 138 L0 65" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            {/* Top Right Line */}
            <motion.path 
              style={{ pathLength: drawLine2 }}
              d="M122 138 L242 65" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
            {/* Bottom Center Line */}
            <motion.path 
              style={{ pathLength: drawLine3 }}
              d="M122 138 L122 275" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* =========================================
            CROSSFADING SLIDES
        ========================================= */}
        <div className="relative w-full h-full flex items-center justify-center">
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              style={{ opacity: slide.opacity, y: slide.y }}
              className="absolute inset-0 flex flex-col justify-center items-center w-full h-full pointer-events-auto"
            >
              
              {slide.isFinalCTA ? (
                /* === FINAL SLIDE CTA === */
                <div className="relative w-full h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 md:opacity-30 pointer-events-none">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 244 276" 
                      fill="none"
                      className="w-[600px] md:w-[1000px] max-w-none mix-blend-screen"
                    >
                      <path d="M122 275 L8 199 L0 65 L122 1 L242 65 L237 199 Z M122 138 L0 65 M122 138 L242 65 M122 138 L122 275" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="absolute top-24 md:top-32 flex flex-col items-center gap-3 opacity-60">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Keep Scrolling</span>
                    <div className="w-4 h-6 border border-white rounded-full flex justify-center p-1">
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                    </div>
                  </div>

                  <h2 className="relative z-10 text-3xl md:text-6xl lg:text-[80px] leading-[1.2] md:leading-[1.1] font-medium tracking-tight max-w-[1200px] mx-auto">
                    Your vision deserves to shine, <br className="hidden md:block"/>
                    <span className="font-serif italic font-light">your projects deserve success,</span> <br className="hidden md:block"/>
                    and your buyers deserve confident decisions.
                  </h2>

                  <div className="absolute bottom-24 md:bottom-32 z-10">
                    <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 text-white px-6 md:px-8 py-4 md:py-5 text-[9px] md:text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-4 group cursor-pointer">
                      <div className="w-1.5 h-1.5 border border-white rotate-45 group-hover:bg-white transition-colors"></div>
                      Schedule a free 30 min intro
                      <div className="w-1.5 h-1.5 border border-white rotate-45 group-hover:bg-white transition-colors"></div>
                    </button>
                  </div>
                </div>
              ) : (
                /* === STANDARD 3-COLUMN SLIDE === */
                /* CHANGED: Added h-full py-28 to stretch the flexbox out on mobile */
                <div className="w-full h-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-28 md:py-0 md:px-24">
                  
                  {/* LEFT TEXT (Pushed to top on mobile) */}
                  <div className="w-full flex-none md:flex-1 flex flex-col items-center text-center md:items-start md:text-left z-10">
                    <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 md:mb-6 text-white">
                      {slide.leftEyebrow}
                    </h4>
                    {/* CHANGED: Made text slightly smaller on mobile (text-2xl) */}
                    <h2 className="text-2xl md:text-5xl lg:text-[56px] font-medium text-[#888888] leading-[1.1] tracking-tight whitespace-pre-line">
                      {slide.leftTitle}
                    </h2>
                  </div>

                  {/* CENTER PLACEHOLDER (Expands on mobile to push top/bottom texts apart) */}
                  <div className="w-full flex-1 flex justify-center items-center md:py-0 relative z-0"></div>

                  {/* RIGHT TEXT (Pushed to bottom on mobile) */}
                  <div className="w-full flex-none md:flex-1 flex flex-col items-center text-center md:items-end md:text-right z-10">
                    <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 md:mb-6 text-white">
                      {slide.rightEyebrow}
                    </h4>
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.15em] leading-[2] text-white whitespace-pre-line max-w-[300px]">
                      {slide.rightText}
                    </p>
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkVertical;