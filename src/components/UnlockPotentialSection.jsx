import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Streamlined\nProcesses",
    desc: "SIMPLIFIED WORKFLOWS WITH CRM AND COHESIVE STRATEGIES.",
  },
  {
    num: "02",
    title: "Increased\nEngagement",
    desc: "INTERACTIVE TOOLS THAT KEEP BUYERS ENGAGED AND COMMITTED.",
  },
  {
    num: "03",
    title: "Faster Sales",
    desc: "STREAMLINED TOOLS AND STRATEGIES TO REDUCE PRE-SALE TIMELINES.",
  },
  {
    num: "04",
    title: "Trusted Partnership",
    desc: "A DEPENDABLE TEAM FOCUSED ON YOUR SUCCESS.",
  },
  {
    num: "05",
    title: "Stunning Visuals",
    desc: "IMMERSIVE 3D DESIGNS AND VIRTUAL TOURS THAT INSPIRE CONFIDENCE AND FAST DECISIONS.",
  },
  {
    num: "06",
    title: "Turnkey Marketing",
    desc: "ALL IN ONE SOLUTION, FROM MARKETING TO LEAD GENERATION, MADE SIMPLE.",
  },
  {
    num: "07",
    title: "Improved ROI",
    desc: "PRECISION CAMPAIGNS DESIGNED TO DELIVER MEASURABLE RETURNS",
  }
  // Removed the 8th duplicate feature to replace it with the CTA box
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Smooth easing
  },
};

// Custom SVG component for the widely-spaced dotted ring
const DottedCircle = ({ num }) => (
  <div className="relative w-16 h-16 flex items-center justify-center mb-10">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 8" 
        strokeLinecap="round"
        className="text-black/20"
      />
    </svg>
    <span className="text-[11px] font-medium tracking-[0.1em] text-black">
      {num}
    </span>
  </div>
);

const UnlockPotentialSection = () => {
  return (
    <section className="relative z-30 w-full bg-white text-black py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 flex justify-center overflow-hidden">
      
      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 lg:gap-y-32 gap-x-12 lg:gap-x-16">
        
        {/* =========================================
            ROW 1
        ========================================= */}
        {/* Item 01 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-1 lg:row-start-1 flex flex-col"
        >
          <DottedCircle num={features[0].num} />
          <h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium leading-[1.1] whitespace-pre-line">
            {features[0].title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold text-black/80 leading-[1.6] max-w-[260px]">
            {features[0].desc}
          </p>
        </motion.div>

        {/* Item 02 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-2 lg:row-start-1 flex flex-col"
        >
          <DottedCircle num={features[1].num} />
          <h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium leading-[1.1] whitespace-pre-line">
            {features[1].title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold text-black/80 leading-[1.6] max-w-[260px]">
            {features[1].desc}
          </p>
        </motion.div>

        {/* Big Header (Positioned Top Right on Desktop) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-3 lg:row-start-1 flex flex-col justify-start pt-2"
        >
          <h2 className="text-[clamp(3.5rem,5vw,6rem)] tracking-tight leading-[1] font-medium">
            Unlock Your <br />
            Project's <span className="italic font-serif font-light">Full</span>{" "}
            <br />
            <span className="italic font-serif font-light">Potential</span>
          </h2>
        </motion.div>

        {/* =========================================
            ROW 2
        ========================================= */}
        {/* Item 03 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-1 lg:row-start-2 flex flex-col"
        >
          <DottedCircle num={features[2].num} />
          <h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium leading-[1.1] whitespace-pre-line">
            {features[2].title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold text-black/80 leading-[1.6] max-w-[260px]">
            {features[2].desc}
          </p>
        </motion.div>

        {/* Item 04 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-2 lg:row-start-2 flex flex-col"
        >
          <DottedCircle num={features[3].num} />
          <h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium leading-[1.1] whitespace-pre-line">
            {features[3].title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold text-black/80 leading-[1.6] max-w-[260px]">
            {features[3].desc}
          </p>
        </motion.div>

        {/* Item 05 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-3 lg:row-start-2 flex flex-col"
        >
          <DottedCircle num={features[4].num} />
          <h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium leading-[1.1] whitespace-pre-line">
            {features[4].title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold text-black/80 leading-[1.6] max-w-[280px]">
            {features[4].desc}
          </p>
        </motion.div>

        {/* =========================================
            ROW 3
        ========================================= */}
        {/* Item 06 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-1 lg:row-start-3 flex flex-col"
        >
          <DottedCircle num={features[5].num} />
          <h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium leading-[1.1] whitespace-pre-line">
            {features[5].title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold text-black/80 leading-[1.6] max-w-[260px]">
            {features[5].desc}
          </p>
        </motion.div>

        {/* Item 07 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-2 lg:row-start-3 flex flex-col"
        >
          <DottedCircle num={features[6].num} />
          <h3 className="text-3xl md:text-4xl tracking-tight mb-6 font-medium leading-[1.1] whitespace-pre-line">
            {features[6].title}
          </h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold text-black/80 leading-[1.6] max-w-[260px]">
            {features[6].desc}
          </p>
        </motion.div>

        {/* CTA BOX (Replaces Item 08) */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="lg:col-start-3 lg:row-start-3 w-full h-full min-h-[220px] bg-[#f8f8f8] flex items-center justify-center relative group cursor-pointer hover:bg-[#f0f0f0] transition-colors duration-300"
        >
          {/* Corner Brackets */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black/30 transition-colors group-hover:border-black/60"></div>
          <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-black/30 transition-colors group-hover:border-black/60"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-black/30 transition-colors group-hover:border-black/60"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-black/30 transition-colors group-hover:border-black/60"></div>

          {/* Center Text */}
          <div className="flex items-center gap-3 text-black/70 group-hover:text-black transition-colors">
            <span className="text-lg font-light">+</span>
            <span className="text-[11px] md:text-xs tracking-[0.15em] font-medium">
              LET'S GET STARTED
            </span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default UnlockPotentialSection;