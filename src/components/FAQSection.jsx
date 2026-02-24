import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// FAQ DATA (19 Questions)
// ==========================================
const faqData = [
  {
    id: 1,
    question: "HOW LONG DOES IT TAKE?",
    answer:
      "Typically, our comprehensive digital campaigns take between 4 to 8 weeks from initial strategy to final launch, depending on the scope of 3D rendering required.",
  },
  {
    id: 2,
    question: "ARE THESE TOOLS CUSTOMIZABLE?",
    answer:
      "Yes, every tool and digital experience we build is entirely bespoke and tailored to perfectly align with your specific development's brand guidelines.",
  },
  {
    id: 3,
    question:
      "CAN YOU HANDLE BOTH PRE-CONSTRUCTION AND POST-CONSTRUCTION MARKETING?",
    answer:
      "Absolutely. We seamlessly transition your campaign from high-end 3D pre-construction hype to real-world, post-construction sales pipelines.",
  },
  {
    id: 4,
    question: "WHAT KIND OF 3D VISUALIZATIONS DO YOU OFFER?",
    answer:
      "We offer photorealistic interior and exterior renderings, 3D floor plans, interactive virtual tours, and full architectural walkthrough videos.",
  },
  {
    id: 5,
    question: "DO YOU OFFER BRANDING AND NAMING SERVICES?",
    answer:
      "Yes. Our creative team can develop your property's entire identity from scratch, including naming, logo design, brand messaging, and typography.",
  },
  {
    id: 6,
    question: "WHAT'S INCLUDED IN THE TURNKEY WEBSITE SOLUTION?",
    answer:
      "It includes custom UI/UX design, interactive floor plan viewers, lead capture forms, CRM integrations, and premium hosting.",
  },
  {
    id: 7,
    question: "HOW DO YOU SUPPORT THE SALES PROCESS?",
    answer:
      "By creating interactive sales gallery applications and providing your agents with iPad-ready presentation tools to close deals on site.",
  },
  {
    id: 8,
    question: "DO I OWN THE 3D ASSETS AFTER COMPLETION?",
    answer:
      "Yes, once the project is completed and paid in full, you retain full ownership of all final rendered images and videos.",
  },
  {
    id: 9,
    question: "CAN YOU HANDLE LARGE-SCALE PROJECTS?",
    answer:
      "Yes, our pipeline is built to handle everything from boutique single-family luxury homes to multi-tower master-planned communities.",
  },
  {
    id: 10,
    question: "WHAT'S UNIQUE ABOUT YOUR SERVICES?",
    answer:
      "We offer a one-stop solution combining digital marketing, high-caliber design, and latest technology under one roof.", // From your screenshot
  },
  {
    id: 11,
    question: "DO YOU CREATE PROMOTIONAL VIDEOS?",
    answer:
      "Yes, we mix 3D fly-throughs with live-action lifestyle footage to create compelling sizzle reels for your social media and sales teams.",
  },
  {
    id: 12,
    question: "ARE YOUR SERVICES SUITABLE FOR SMALL DEVELOPERS?",
    answer:
      "Yes, we scale our service packages to match the needs and budgets of boutique developers without compromising on quality.",
  },
  {
    id: 13,
    question: "WHAT'S THE PROCESS FOR CREATING A VIRTUAL TOUR?",
    answer:
      "We take your CAD files or architectural plans, build the 3D geometry, apply photorealistic materials, and bake it into a 360-degree interactive web viewer.",
  },
  {
    id: 14,
    question: "DO YOU INTEGRATE WITH CRM PLATFORMS?",
    answer:
      "Yes, our lead generation pipelines route directly into Salesforce, HubSpot, Follow Up Boss, or your preferred real estate CRM.",
  },
  {
    id: 15,
    question: "HOW DO WE TRACK MARKETING PERFORMANCE?",
    answer:
      "We provide real-time dashboards tracking website traffic, lead conversion rates, and cost-per-acquisition across all digital channels.",
  },
  {
    id: 16,
    question: "CAN YOU DO PHYSICAL PRINT MATERIALS?",
    answer:
      "While we specialize in digital, we also design high-end physical brochures, hoarding, and sales gallery signage for a cohesive brand experience.",
  },
  {
    id: 17,
    question: "WHAT ARE YOUR PAYMENT TERMS?",
    answer:
      "We typically structure payments in milestones: 30% upfront, 40% upon approval of visual assets, and 30% right before final launch.",
  },
  {
    id: 18,
    question: "IS HOSTING INCLUDED FOR THE INTERACTIVE TOOLS?",
    answer:
      "Yes, we provide the first year of enterprise-grade hosting for all virtual tours and websites free of charge.",
  },
  {
    id: 19,
    question: "HOW DO WE GET STARTED?",
    answer:
      "Simply click the 'Schedule a Call' button. We'll review your floor plans and project goals, and provide a customized proposal within 48 hours.",
  },
];

// ==========================================
// INDIVIDUAL ACCORDION ITEM COMPONENT
// ==========================================
const AccordionItem = ({ index, question, answer, isOpen, onClick }) => {
  // Format the number to always have two digits (e.g., 01, 02)
  const formattedNumber = index < 10 ? `0${index}` : index;

  return (
    <div className="border-b border-black/10 w-full group">
      <button
        onClick={onClick}
        className="w-full flex items-start text-left py-6 md:py-8 cursor-pointer focus:outline-none"
      >
        {/* Number (Left) */}
        <div className="w-12 md:w-24 flex-shrink-0 text-[10px] md:text-xs text-black/50 font-medium">
          {formattedNumber}
        </div>

        {/* Content (Center) */}
        <div className="flex-1 pr-6 md:pr-12">
          {/* Question */}
          <h3 className="text-xs md:text-sm font-medium uppercase tracking-[0.05em] text-black hover:text-black/70 transition-colors">
            {question}
          </h3>

          {/* Answer (Animated reveal) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Smooth easing
                className="overflow-hidden"
              >
                {/* The large answer text from the screenshot */}
                <p className="pt-6 pb-2 text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-[1.15]">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Plus/Close Icon (Right) */}
        <div className="w-6 md:w-8 flex-shrink-0 flex justify-end items-start mt-[-2px]">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-2xl md:text-3xl font-light text-black flex items-center justify-center w-6 h-6 md:w-8 md:h-8"
          >
            +
          </motion.div>
        </div>
      </button>
    </div>
  );
};

// ==========================================
// MAIN FAQ SECTION COMPONENT
// ==========================================
const FAQSection = () => {
  // State to track which accordion is open. Default to the first item so the
  // section shows content immediately (helps with visibility behind the
  // fixed header and makes the section obvious on page load).
  const [openIndex, setOpenIndex] = useState(1);

  // Ensure the FAQ stays visible after client-side scripts run (some
  // animation libraries may adjust scroll during hydration). If the user
  // has navigated to `#faq` or the section was visible briefly, this will
  // re-align the viewport so the FAQ is not hidden behind the fixed header.
  React.useEffect(() => {
    // Small timeout to let other mounts/measurements complete, then scroll.
    const t = setTimeout(() => {
      const el = document.getElementById("faq");
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }, 120);

    return () => clearTimeout(t);
  }, []);

  const handleToggle = (index) => {
    // If clicking the already open item, close it. Otherwise, open the new one.
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      // Ensure the section sits above any transient overlays and has an
      // explicit white background (inline style as a runtime fallback to
      // guard against tooling/hydration issues).
      className="relative z-30 w-full bg-white text-black py-24 md:py-32 font-sans selection:bg-black selection:text-white scroll-mt-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-16 md:mb-24">
          <h2 className="text-6xl md:text-7xl lg:text-[100px] tracking-tight font-medium leading-none">
            Have Questions?
          </h2>
          <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-black/60 pt-2 md:pt-4 font-medium">
            Here are the answers
          </span>
        </div>

        {/* Accordion List */}
        <div className="w-full border-t border-black/10">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              index={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
