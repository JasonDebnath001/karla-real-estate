import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, CircleDashed } from "lucide-react";

const HorizontalScrollSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 1. PERFECT MATH: Move exactly 5 viewport widths to the left to reveal the 6th slide perfectly
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

  // 2. RECALCULATED TIMINGS for previous animations
  const videoPan = useTransform(scrollYProgress, [0.08, 0.25], ["-20%", "0%"]);
  const slide3Flip = useTransform(
    scrollYProgress,
    [0.25, 0.41],
    ["-100deg", "0deg"],
  );
  const slide4Flip = useTransform(
    scrollYProgress,
    [0.41, 0.58],
    ["-100deg", "0deg"],
  );
  const slide5Flip = useTransform(
    scrollYProgress,
    [0.58, 0.75],
    ["-100deg", "0deg"],
  );

  return (
    // 3. UPDATED HEIGHT: 600vh gives enough scroll duration for 6 sections
    <section
      ref={targetRef}
      className="relative h-[600vh] bg-[#0a0a0a] text-white z-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* 4. UPDATED WIDTH: 600vw because we now have 6 slides! */}
        <motion.div style={{ x }} className="flex h-full w-[600vw]">
          {/* =========================================
              SLIDE 1: Full Background Video
          ========================================= */}
          <div className="relative h-full w-screen flex shrink-0 border-r border-white/10 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://pub-e4b9ba2600d34e9592eac7219142a111.r2.dev/Oak.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="relative z-20 w-full h-full flex flex-col md:flex-row justify-between">
              <div className="max-w-xl w-full flex flex-col justify-start p-8 md:p-20 lg:p-24">
                <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-medium tracking-tight mb-8 leading-[1.05] text-white">
                  Visuals That <br />
                  <span className="text-white/80 italic font-serif">
                    Inspire Confidence
                  </span>
                </h2>
              </div>
              <div className="w-full md:w-[480px] lg:w-[520px] bg-white text-black h-full p-10 lg:p-14 shadow-2xl flex flex-col justify-center shrink-0">
                <div className="flex flex-col gap-1 mb-6 text-2xl md:text-3xl font-medium tracking-tight">
                  <span>3D Modeling</span>
                  <span className="text-black/60">Photo Rendering</span>
                  <span className="text-black/30">Video Rendering</span>
                </div>
                <p className="text-sm md:text-base text-black/70 font-light leading-relaxed mb-8">
                  Stunning 3D models, immersive virtual tours, and
                  photo-realistic renderings that help buyers see their future
                  home and make decisions faster.
                </p>
                <button className="w-fit bg-black text-white px-8 py-4 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-black/80 transition-colors duration-300 mb-12">
                  VIRTUAL TOUR EXAMPLE
                </button>
                <ul className="space-y-4">
                  {[
                    "High-quality visuals that stand out",
                    "Boost buyer confidence",
                    "Accelerate pre-sales",
                    "Showcase properties effectively",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-sm md:text-base font-medium text-black/90"
                    >
                      <Check
                        className="w-5 h-5 text-black shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* =========================================
              SLIDE 2: Complex Layout + 3D Video Reveal
          ========================================= */}
          <div className="relative h-full w-screen flex flex-col md:flex-row shrink-0 bg-white text-black border-r border-black/10 overflow-hidden">
            <div className="w-full md:w-[55%] h-full flex flex-col p-6 md:p-10 lg:p-14 xl:p-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-1 flex flex-col justify-between min-h-max py-4 gap-8">
                <div>
                  <h2 className="text-[clamp(3rem,4.5vw,6rem)] tracking-tight leading-[1.05]">
                    Interactive Tools{" "}
                    <span className="italic font-serif">That</span>
                    <br />
                    <span className="italic font-serif">Drive Decisions</span>
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 my-4 lg:my-8">
                  <div className="flex-1 flex gap-4 md:gap-6">
                    <p className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-light leading-[1.3] tracking-tight">
                      Engage buyers with 3D interactive maps, unit selectors,
                      and tools that simplify property exploration—anytime,
                      anywhere.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    {[
                      "CAPTURES BUYER INTEREST",
                      "SIMPLIFIES DECISION-MAKING",
                      "CREATES PERSONALIZED PROPERTY EXPERIENCES",
                      "ACCELERATES THE SALES PROCESS",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="border-b border-black/20 pb-2 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.1em] text-black/80 uppercase"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex flex-col 2xl:flex-row justify-between 2xl:items-end gap-8">
                  <div className="flex flex-wrap gap-4 lg:gap-6 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-black/50">
                    <span className="hover:text-black cursor-pointer transition-colors">
                      INTERACTIVE 3D TOURS
                    </span>
                    <span className="hover:text-black cursor-pointer transition-colors">
                      UNIT SELECTOR
                    </span>
                    <span className="hover:text-black cursor-pointer transition-colors">
                      3D PROPERTY
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row 2xl:flex-col gap-2 w-full 2xl:w-max">
                    <div className="bg-[#111] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-sm text-[9px] md:text-[10px] font-bold tracking-widest cursor-pointer hover:bg-black transition-colors min-w-[280px]">
                      <span>OUR WORK</span>
                      <span className="text-white/50 text-right leading-tight ml-8">
                        EXPLORE INTERACTIVE TOOLS <br /> WORK WITH US
                      </span>
                    </div>
                    <div className="border border-black/20 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-sm text-[9px] md:text-[10px] font-bold tracking-widest cursor-pointer hover:bg-black/5 transition-colors">
                      <span>+</span>
                      <span>BOOK FREE INTRO CALL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex w-[45%] h-full items-center justify-end perspective-[2000px] bg-white relative">
              <motion.div
                className="w-[110%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative right-[-5%]"
                style={{
                  rotateY: "20deg",
                  transformOrigin: "left center",
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                }}
              >
                <motion.div
                  className="absolute inset-0 w-[140%] h-full"
                  style={{ x: videoPan }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://pub-e4b9ba2600d34e9592eac7219142a111.r2.dev/Interactive%20Tools%20(design)%20%5BFor%20Delevopers%5D.mp4"
                      type="video/mp4"
                    />
                  </video>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* =========================================
              SLIDE 3: Flipping Card Layout (Carries to Slide 4)
          ========================================= */}
          <div className="relative h-full w-screen flex flex-col md:flex-row shrink-0 bg-white text-black border-r border-black/10 overflow-hidden">
            <div className="w-full md:w-[55%] h-full flex flex-col p-6 md:p-10 lg:p-14 xl:p-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-1 flex flex-col justify-between min-h-max py-4 gap-8">
                <div>
                  <h2 className="text-[clamp(3rem,4.5vw,6rem)] tracking-tight leading-[1.05]">
                    Build a Brand{" "}
                    <span className="italic font-serif">Buyers</span>
                    <br />
                    <span className="italic font-serif">Remember</span>
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 my-4 lg:my-8">
                  <div className="flex-1 flex gap-4 md:gap-6">
                    <div className="shrink-0 mt-2">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 2L2 20h20L12 2z" />
                        <path d="M12 2v20" />
                        <path d="M2 20l10-8 10 8" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-light leading-[1.3] tracking-tight">
                      Craft memorable names and identities that help your brand
                      stand out in a crowded market.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    {[
                      "MEMORABLE NAMES",
                      "BUILDS BUYER TRUST",
                      "INCREASES VISIBILITY",
                      "CONSISTENT BRANDING",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="border-b border-black/20 pb-2 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.1em] text-black/80 uppercase"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex flex-col 2xl:flex-row justify-between 2xl:items-end gap-8 relative">
                  <div className="flex flex-wrap gap-4 lg:gap-6 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-black/50">
                    <span className="hover:text-black cursor-pointer transition-colors">
                      NAMING
                    </span>
                    <span className="hover:text-black cursor-pointer transition-colors">
                      DESIGN IDENTITY
                    </span>
                  </div>
                  <div className="flex flex-col w-full 2xl:w-[350px] relative">
                    <div className="border-b border-black/40 flex items-center justify-between px-2 pt-8 pb-3 text-[9px] md:text-[10px] font-bold tracking-widest cursor-pointer hover:bg-black/5 transition-colors">
                      <span className="text-black/50">+</span>
                      <span>BOOK FREE INTRO CALL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* w-[60%] makes it carry over to Slide 4 */}
            <div className="hidden md:flex w-[60%] h-full items-center justify-start perspective-[2500px] bg-white relative py-12">
              <motion.div
                className="w-[120%] h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative"
                style={{
                  rotateY: slide3Flip,
                  transformOrigin: "left center",
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="https://pub-e4b9ba2600d34e9592eac7219142a111.r2.dev/Brands%20Video.webm"
                    type="video/webm"
                  />
                </video>
              </motion.div>
            </div>
          </div>

          {/* =========================================
              SLIDE 4: Flipping Card Layout (Placeholder to carry to Slide 5)
          ========================================= */}
          <div className="relative h-full w-screen flex flex-col md:flex-row shrink-0 bg-white text-black overflow-hidden border-r border-black/10">
            <div className="w-full md:w-[55%] h-full flex flex-col p-6 md:p-10 lg:p-14 xl:p-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-1 flex flex-col justify-between min-h-max py-4 gap-8">
                <div>
                  <h2 className="text-[clamp(3rem,4.5vw,6rem)] tracking-tight leading-[1.05]">
                    Websites That{" "}
                    <span className="italic font-serif">Sell</span>
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 my-4 lg:my-8">
                  <div className="flex-1 flex gap-4 md:gap-6">
                    <p className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-light leading-[1.3] tracking-tight">
                      Your website is your most powerful sales tool. We build
                      fast, mobile-friendly websites designed to generate leads.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    {[
                      "CONVERTS VISITORS INTO LEADS",
                      "HIGHLIGHTS YOUR PROPERTIES",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="border-b border-black/20 pb-2 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.1em] text-black/80 uppercase"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* w-[60%] makes it carry over to Slide 5 */}
            <div className="hidden md:flex w-[60%] h-full items-center justify-start perspective-[2500px] bg-white relative py-12">
              <motion.div
                className="w-[120%] h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative"
                style={{
                  rotateY: slide4Flip,
                  transformOrigin: "left center",
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source
                    src="https://pub-e4b9ba2600d34e9592eac7219142a111.r2.dev/Websites%20that%20sell.webm"
                    type="video/webm"
                  />
                </video>
              </motion.div>
            </div>
          </div>

          {/* =========================================
              SLIDE 5: The Image Grid Layout (Final Slide)
          ========================================= */}
          <div className="relative h-full w-screen flex flex-col md:flex-row shrink-0 bg-white text-black overflow-hidden">
            {/* Left Side: Typography & Grid */}
            <div className="w-full md:w-[55%] h-full flex flex-col p-6 md:p-10 lg:p-14 xl:p-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-1 flex flex-col justify-between min-h-max py-4 gap-8">
                {/* Top: Heading */}
                <div>
                  <h2 className="text-[clamp(3rem,4.5vw,6rem)] tracking-tight leading-[1.05]">
                    Amplify Your Presence
                    <br />
                    <span className="italic font-serif">with Social Media</span>
                  </h2>
                </div>

                {/* Middle: Icon, Paragraph & List Grid */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 my-4 lg:my-8">
                  {/* Paragraph Side */}
                  <div className="flex-1 flex gap-4 md:gap-6">
                    <div className="shrink-0 mt-2">
                      {/* Three Pillars/Graph Icon matching the screenshot */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        className="text-black"
                      >
                        <rect x="4" y="10" width="4" height="6" />
                        <rect x="10" y="6" width="4" height="10" />
                        <rect x="16" y="10" width="4" height="6" />
                        <path d="M2 16h20" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-light leading-[1.3] tracking-tight">
                      Create impactful campaigns that boost visibility, build
                      trust, and drive traffic directly to your sales pipeline.
                    </p>
                  </div>

                  {/* List Side */}
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    {[
                      "EXPANDS YOUR AUDIENCE",
                      "STRENGTHENS YOUR BRAND",
                      "BRINGS LEADS TO YOUR FUNNEL",
                      "BOOSTS ENGAGEMENT",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="border-b border-black/20 pb-2 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.1em] text-black/80 uppercase"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Footer Links & Overlapping Pill Button */}
                <div className="mt-auto flex flex-col 2xl:flex-row justify-between 2xl:items-end gap-8 relative">
                  <div className="flex flex-wrap gap-4 lg:gap-6 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-black/50">
                    <span className="hover:text-black cursor-pointer transition-colors">
                      CONTENT
                    </span>
                    <span className="hover:text-black cursor-pointer transition-colors">
                      MANAGEMENT
                    </span>
                    <span className="hover:text-black cursor-pointer transition-colors">
                      REPUTATION
                    </span>
                    <span className="hover:text-black cursor-pointer transition-colors">
                      ANALYTICS
                    </span>
                  </div>

                  <div className="flex flex-col w-full 2xl:w-[350px] relative">
                    {/* Bottom Underline CTA */}
                    <div className="border-b border-black/40 flex items-center justify-between px-2 pt-8 pb-3 text-[9px] md:text-[10px] font-bold tracking-widest cursor-pointer hover:bg-black/5 transition-colors">
                      <span className="text-black/50">+</span>
                      <span>BOOK FREE INTRO CALL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: 3D Flipping Sharp-Edged Image Collage */}
            <div className="hidden md:flex w-[45%] h-full items-center justify-end perspective-[2500px] bg-white relative pr-8">
              <motion.div
                className="w-full h-[80%] relative"
                style={{
                  rotateY: slide5Flip,
                  transformOrigin: "left center",
                }}
              >
                {/* Unlike the previous slides, these images are NOT wrapped in a rounded grey background. 
                  They sit directly on the white canvas with sharp edges, matching your screenshots perfectly. 
                */}

                {/* Main Wide Image (Top/Center) */}
                <div className="absolute top-0 right-[15%] w-[85%] h-[75%] overflow-hidden shadow-lg">
                  <img
                    src="https://optim.tildacdn.one/tild3663-3162-4562-b362-363135353762/-/resize/828x/-/format/webp/3.webp" // Replace with your glass roof image
                    alt="Social Campaign Example"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Vertical Image (Bottom Right) */}
                <div className="absolute bottom-0 right-0 w-[40%] h-[60%] overflow-hidden shadow-2xl">
                  <img
                    src="https://optim.tildacdn.one/tild3931-6566-4539-a562-306632343263/-/resize/776x/-/format/webp/4.webp" // Replace with your modern building image
                    alt="Social Campaign Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative h-full w-screen flex flex-col md:flex-row shrink-0 bg-white text-black overflow-hidden">
            {/* Left Side: Typography & Grid */}
            <div className="w-full md:w-[55%] h-full flex flex-col p-6 md:p-10 lg:p-14 xl:p-20 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-1 flex flex-col justify-between min-h-max py-4 gap-8">
                {/* Top: Heading */}
                <div>
                  <h2 className="text-[clamp(3rem,4.5vw,6rem)] tracking-tight leading-[1.05]">
                    Drive Sales with{" "}
                    <span className="italic font-serif">Smart</span>
                    <br />
                    <span className="italic font-serif">Lead Strategies</span>
                  </h2>
                </div>

                {/* Middle: Icon, Paragraph & List Grid */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 my-4 lg:my-8">
                  {/* Paragraph Side */}
                  <div className="flex-1 flex gap-4 md:gap-6">
                    <div className="shrink-0 mt-2">
                      {/* Diamond Icon */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M12 2L2 12l10 10 10-10-10-10z" />
                        <path d="M2 12h20" />
                        <path d="M12 2v20" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl xl:text-[1.5rem] font-light leading-[1.3] tracking-tight">
                      Capture, nurture, and convert leads with tailored
                      advertising, smart analytics, and CRM tools.
                    </p>
                  </div>

                  {/* List Side */}
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    {[
                      "CAPTURES MORE LEADS",
                      "TRACKS PERFORMANCE SEAMLESSLY",
                      "MAXIMIZES YOUR ROI",
                      "ACCELERATES YOUR SALES CYCLE",
                    ].map((text, idx) => (
                      <div
                        key={idx}
                        className="border-b border-black/20 pb-2 text-[9px] md:text-[10px] lg:text-xs font-bold tracking-[0.1em] text-black/80 uppercase"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Footer Links & Overlapping Pill Button */}
                <div className="mt-auto flex flex-col 2xl:flex-row justify-between 2xl:items-end gap-8 relative">
                  <div className="flex flex-wrap gap-4 lg:gap-6 text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-black/50">
                    <span className="hover:text-black cursor-pointer transition-colors">
                      ADVERTISING
                    </span>
                    <span className="hover:text-black cursor-pointer transition-colors">
                      ANALYTICS
                    </span>
                  </div>

                  <div className="flex flex-col w-full 2xl:w-[350px] relative">
                    {/* Bottom Underline CTA */}
                    <div className="border-b border-black/40 flex items-center justify-between px-2 pt-8 pb-3 text-[9px] md:text-[10px] font-bold tracking-widest cursor-pointer hover:bg-black/5 transition-colors">
                      <span className="text-black/50">+</span>
                      <span>BOOK FREE INTRO CALL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: STATIC Image Collage (No Animation) */}
            <div className="hidden md:flex w-[45%] h-full items-center justify-end bg-white relative pr-8">
              {/* Replaced motion.div with standard div */}
              <div className="w-full h-[90%] relative">
                {/* Top-Right (Main/Skylight) Image */}
                <div className="absolute top-0 right-[10%] w-[60%] h-[35%] overflow-hidden shadow-lg z-20">
                  <img
                    src="https://optim.tildacdn.one/tild3663-3162-4562-b362-363135353762/-/resize/426x/-/format/webp/3.webp"
                    alt="Modern Building Interior"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Pool overlapping below it */}
                <div className="absolute top-[30%] right-[-5%] w-[45%] h-[25%] overflow-hidden shadow-lg z-10">
                  <img
                    src="https://optim.tildacdn.one/tild6630-6262-4264-a135-303331653632/-/resize/396x/-/format/webp/2.webp"
                    alt="Pool at Sunset"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom-Left Image (Dark Building) */}
                <div className="absolute bottom-[10%] left-[5%] w-[50%] h-[45%] overflow-hidden shadow-2xl z-30">
                  <img
                    src="https://optim.tildacdn.one/tild3861-6461-4632-a364-633364333636/-/resize/654x/-/format/webp/1.webp"
                    alt="Cityscape at Night"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom-Right Image (Balcony) */}
                <div className="absolute bottom-[5%] right-[5%] w-[40%] h-[30%] overflow-hidden shadow-lg z-20">
                  <img
                    src="https://optim.tildacdn.one/tild3939-6335-4364-b535-373062643631/-/resize/396x/-/format/webp/4.webp"
                    alt="Modern Balcony"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
