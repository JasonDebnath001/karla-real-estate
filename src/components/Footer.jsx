import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-white text-black pt-16 pb-8 md:pt-24 md:pb-12 relative overflow-hidden flex flex-col min-h-[800px]"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Slightly transparent overlay so the map remains visible but text stays readable */}
      <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col h-full flex-1">
        
        {/* ==========================================
            TOP SECTION: Services and Headline
        ========================================== */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-24 lg:mb-32">
          {/* Left Column: Marketing Solutions List */}
          <div className="flex-shrink-0">
            <h4 className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/60 mb-6 font-medium">
              Marketing Solutions
            </h4>
            <ul className="space-y-3 text-lg md:text-xl lg:text-2xl font-light leading-snug">
              <li className="hover:text-black/60 transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-black/60 transition-colors cursor-pointer">3D Rendering</li>
              <li className="hover:text-black/60 transition-colors cursor-pointer">Branding</li>
              <li className="hover:text-black/60 transition-colors cursor-pointer">Advertising</li>
              <li className="hover:text-black/60 transition-colors cursor-pointer">Social Media</li>
              <li className="hover:text-black/60 transition-colors cursor-pointer">Web 3D</li>
            </ul>
          </div>

          {/* Right Column: Main Headline */}
          <div className="flex-1 lg:text-right">
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-light leading-[1.1] tracking-tight">
              Empowering Developers
              <br className="hidden md:block" />
              with{" "}
              <span className="font-serif italic font-light">
                Streamlined Solutions
              </span>
            </h2>
          </div>
        </div>

        {/* ==========================================
            MIDDLE SECTION: Mail & Contact Button
        ========================================== */}
        <div className="mb-auto">
          <h4 className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/60 mb-4 font-medium">
            Mail
          </h4>
          <a
            href="mailto:hello@marketika.com"
            className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight hover:opacity-70 transition-opacity inline-block mb-10"
          >
            hello@marketika.com
          </a>

          <br />

          {/* Contact Button with Corner Brackets */}
          <div className="relative inline-block group cursor-pointer">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/40 group-hover:border-black transition-colors"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/40 group-hover:border-black transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/40 group-hover:border-black transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/40 group-hover:border-black transition-colors"></div>
            
            <button className="bg-[#f8f8f8]/80 hover:bg-[#f0f0f0] transition-colors px-8 py-5 flex items-center gap-4 border border-transparent">
              <span className="text-lg font-light leading-none mb-0.5">+</span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-black/80">
                Contact Us
              </span>
            </button>
          </div>
        </div>

        {/* ==========================================
            BOTTOM SECTION: Logo, Copyright, Division
        ========================================== */}
        <div className="mt-24 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* Left: Logo */}
          <div className="w-full lg:w-1/3 flex flex-col items-start">
            <h3 className="text-2xl font-bold tracking-tighter leading-none mb-1">
              markétika
            </h3>
            <p className="text-[7px] font-bold tracking-[0.4em] uppercase text-black/80 ml-0.5">
              FOR DEVELOPERS
            </p>
          </div>

          {/* Center: Copyright */}
          <div className="w-full lg:w-1/3 flex justify-start lg:justify-center text-[9px] md:text-[10px] font-medium tracking-[0.1em] uppercase text-black/50">
            2025 © MARKETIKA. ALL RIGHTS RESERVED
          </div>

          {/* Right: Division */}
          <div className="w-full lg:w-1/3 flex justify-start lg:justify-end items-center gap-3 text-[9px] md:text-[10px] font-medium tracking-[0.1em] uppercase text-black/70">
            {/* Hollow Triangle Pointer Icon */}
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 20L20 20L4 4Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
              />
            </svg>
            DIVISION OF MARKETIKA
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;