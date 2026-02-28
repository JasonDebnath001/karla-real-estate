import React from 'react';
import { motion } from 'framer-motion';
import { Triangle, Box, Layers, CircleOff, LayoutDashboard, Diamond } from 'lucide-react';

// Reusable component for the smaller pill-shaped text nodes
const SubNode = ({ text, x, y }) => (
  <motion.div
    className="absolute px-4 py-1.5 rounded-full border border-gray-700 bg-black text-gray-300 text-[10px] tracking-[0.1em] z-20 whitespace-nowrap shadow-[0_0_15px_rgba(0,0,0,1)] cursor-pointer"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    whileHover={{ scale: 1.05, borderColor: '#fff', color: '#fff' }}
  >
    {text}
  </motion.div>
);

// Reusable component for the main circular nodes
const MainNode = ({ icon: Icon, title, x, y, delay = 0 }) => (
  <div 
    className="absolute flex flex-col items-center justify-center z-20 bg-black rounded-full"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
  >
    <motion.div
      className="flex flex-col items-center justify-center"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
    >
      <div className="w-[88px] h-[88px] rounded-full border border-dashed border-gray-600 flex items-center justify-center bg-black mb-3 z-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Icon size={24} className="text-white" strokeWidth={1} />
        </motion.div>
      </div>
      <span className="text-white text-lg font-medium tracking-wide z-20">{title}</span>
    </motion.div>
  </div>
);

export default function Expertise() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-20 font-sans overflow-hidden">
      
      {/* Top Banner section - Forced inline black text to prevent CSS overrides */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl px-6 py-4 md:px-8 md:py-4 mb-12 text-lg md:text-2xl font-medium tracking-tight flex flex-wrap justify-center items-center gap-2 z-20 shadow-lg"
        style={{ color: '#000000' }}
      >
        <span style={{ color: '#000000' }}>Learn what it takes to build a successful</span>
        <span 
          className="bg-[#b3ffce] px-4 py-1.5 rounded-lg ml-1 font-semibold"
          style={{ color: '#000000' }}
        >
          digital RE developer brand
        </span>
      </motion.div>

      <div className="text-gray-500 text-[10px] tracking-[0.4em] mb-8 flex flex-col items-center z-20 font-semibold">
        KEEP SCROLLING
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-3 text-lg"
        >
          ↓
        </motion.span>
      </div>

      {/* Responsive Wrapper: 
        Forces horizontal scroll only on small screens. 
        On large screens, 'mx-auto' perfectly centers the 1200px canvas. 
      */}
      <div className="w-full overflow-x-auto pb-32" style={{ scrollbarWidth: 'none' }}>
        
        {/* Fixed Coordinate Canvas */}
        <div className="relative w-[1200px] h-[1000px] mx-auto mt-4">

          {/* S-Curve SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Structural Backbone Lines */}
            <path d="M 250 250 L 250 650" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 950 250 L 950 650" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 250 450 L 950 450" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 600 450 L 600 850" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 250 650 L 250 850 L 600 850" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 950 650 L 950 850 L 600 850" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            
            {/* Visual Node Connectors */}
            <path d="M 250 250 C 250 150, 150 150, 100 150" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 250 250 C 250 150, 350 150, 400 150" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 250 250 C 250 350, 350 350, 400 350" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            
            {/* Interactive Node Connectors */}
            <path d="M 950 250 C 950 150, 850 150, 800 150" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 950 250 C 950 150, 1050 150, 1100 150" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 950 250 C 950 350, 850 350, 800 350" stroke="#2a2a2a" strokeWidth="1" fill="none" />

            {/* Brand Node Connectors */}
            <path d="M 250 650 C 250 550, 150 550, 100 550" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 250 650 C 250 550, 350 550, 400 550" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 250 650 C 250 750, 150 750, 100 750" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 250 650 C 250 750, 350 750, 400 750" stroke="#2a2a2a" strokeWidth="1" fill="none" />

            {/* Ads Node Connectors */}
            <path d="M 950 650 C 950 550, 850 550, 800 550" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 950 650 C 950 550, 1050 550, 1100 550" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 950 650 C 950 750, 850 750, 800 750" stroke="#2a2a2a" strokeWidth="1" fill="none" />
            <path d="M 950 650 C 950 750, 1050 750, 1100 750" stroke="#2a2a2a" strokeWidth="1" fill="none" />
          </svg>

          {/* --- Precise Centralized Nodes --- */}

          {/* Core Hub Nodes */}
          <MainNode icon={Triangle} title="Visual" x={250} y={250} delay={0} />
          <MainNode icon={Box} title="Interactive" x={950} y={250} delay={0.2} />
          <MainNode icon={Layers} title="Web Design" x={600} y={450} delay={0.5} />
          <MainNode icon={CircleOff} title="Brand" x={250} y={650} delay={1} />
          <MainNode icon={LayoutDashboard} title="Ads" x={950} y={650} delay={1.2} />
          <MainNode icon={Diamond} title="Sales" x={600} y={850} delay={1.5} />

          {/* Visual Sub-nodes */}
          <SubNode text="PHOTO RENDERING" x={100} y={150} />
          <SubNode text="3D MODELING" x={400} y={150} />
          <SubNode text="VIDEO RENDERING" x={400} y={350} />

          {/* Interactive Sub-nodes */}
          <SubNode text="VIRTUAL 3D TOURS" x={800} y={150} />
          <SubNode text="UNIT SELECTOR" x={1100} y={150} />
          <SubNode text="WEB 3D EXPERIENCES" x={800} y={350} />

          {/* Brand Sub-nodes */}
          <SubNode text="CONTENT" x={100} y={550} />
          <SubNode text="SOCIAL MEDIA" x={400} y={550} />
          <SubNode text="REPUTATION" x={100} y={750} />
          <SubNode text="IDENTITY" x={400} y={750} />

          {/* Ads Sub-nodes */}
          <SubNode text="META" x={800} y={550} />
          <SubNode text="GOOGLE" x={1100} y={550} />
          <SubNode text="MANAGEMENT" x={800} y={750} />
          <SubNode text="ANALYTICS" x={1100} y={750} />

          {/* Lead Connecting Tags */}
          <SubNode text="LEADS" x={600} y={680} />
          <SubNode text="LEADS" x={425} y={850} />
          <SubNode text="LEADS" x={775} y={850} />

        </div>
      </div>
    </div>
  );
}