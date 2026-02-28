import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  MapPinIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

// --- Constants & Data ---

// Animation variants for the rotating/floating shapes
const shapeVariants = {
  animate: {
    rotate: [0, 360],
    y: [0, -8, 0],
    transition: {
      rotate: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
      y: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
};

const filters = [
  { id: "all", label: "All", shape: "triangle" },
  { id: "sales", label: "Sales Tools", shape: "circle" },
  { id: "project", label: "Project Websites", shape: "triangle-dot" },
  { id: "developer", label: "Developer Websites", shape: "diamond" },
  { id: "interactive", label: "Interactive 3D", shape: "cube" },
];

// Placeholder data for the 12 projects shown in the image
// NOTE: Replace 'https://placehold.co/600x400/222/fff?text=Project+Image' with actual image assets.
const projects = [
  {
    title: "QUATRIMMO",
    category: "PROPERTY DEVELOPER",
    location: "MONTREAL, CANADA",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=Quatrimmo",
  },
  {
    title: "EVOLUTIONS",
    category: "REAL ESTATE INTELLIGENCE HUB",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=Evolutions+Tower",
  },
  {
    title: "SALES TOOLS (3D + INTERACTIVE)",
    category: "PROPERTY DEVELOPER",
    location: "INTERNATIONAL",
    linkType: "SEE DEMO",
    img: "https://placehold.co/600x400/333/ccc?text=Sales+Tools+Demo",
  },
  {
    title: "VIRTUAL TOUR (3D + INTERACTIVE)",
    category: "RESIDENTIAL PROJECT",
    location: "INTERNATIONAL",
    linkType: "SEE DEMO",
    img: "https://placehold.co/600x400/333/ccc?text=Virtual+Tour",
  },
  {
    title: "ALMAL",
    category: "PROPERTY DEVELOPER",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=Almal+Resort",
  },
  {
    title: "MAP & PROJECTS (3D + INTERACTIVE)",
    category: "PROPERTY DEVELOPER",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=Map+Interactive",
  },
  {
    title: "25H",
    category: "RESIDENTIAL PROJECT",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=25H+Dubai",
  },
  {
    title: "VAL",
    category: "RESIDENTIAL PROJECT",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=VAL+Tower",
  },
  {
    title: "VELOS",
    category: "RESIDENTIAL PROJECT",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=Velos+Residence",
  },
  {
    title: "TAVORA",
    category: "RESIDENTIAL PROJECT",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=Tavora+Residences",
  },
  {
    title: "ELYSIAN",
    category: "RESIDENTIAL PROJECT",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=The+Elysian",
  },
  {
    title: "PELAGOS",
    category: "RESIDENTIAL PROJECT",
    location: "DUBAI, UAE",
    linkType: "VISIT WEBSITE",
    img: "https://placehold.co/600x400/333/ccc?text=Pelagos",
  },
];

// --- Sub-Components ---

// Component to render the specific SVG shape based on type
const ShapeIcon = ({ type }) => {
  const strokeColor = "#aaa"; // Light gray for unselected state
  const commonProps = {
    className: "w-8 h-8 mb-4",
    variants: shapeVariants,
    animate: "animate",
  };

  switch (type) {
    case "triangle":
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          {...commonProps}
        >
          <polygon points="12 2 22 22 2 22" />
        </motion.svg>
      );
    case "circle":
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          {...commonProps}
        >
          <circle cx="12" cy="12" r="10" />
        </motion.svg>
      );
    case "triangle-dot":
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          {...commonProps}
        >
          <polygon points="12 2 22 22 2 22" />
          <circle cx="12" cy="14" r="2" fill={strokeColor} stroke="none" />
        </motion.svg>
      );
    case "diamond":
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          {...commonProps}
        >
          <polygon points="12 2 22 12 12 22 2 12" />
        </motion.svg>
      );
    case "cube":
      return (
        <motion.svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          {...commonProps}
        >
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 7V17" />
          <path d="M22 7V17" />
          <path d="M12 12V22" />
        </motion.svg>
      );
    default:
      return null;
  }
};

// The individual filter button component
const FilterItem = ({ label, shape, isActive, onClick }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={onClick}
    >
      {/* The animated shape */}
      <div className="h-16 flex items-center justify-center">
        <ShapeIcon type={shape} />
      </div>

      {/* The label with conditional underline */}
      <div className="relative py-2">
        <span
          className={`text-sm tracking-wider uppercase ${isActive ? "text-black font-medium" : "text-gray-400 group-hover:text-gray-600"}`}
        >
          {label}
        </span>
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-black"
          />
        )}
      </div>
      {/* Vertical connector line shown in image */}
      <div className="h-8 w-[1px] bg-gray-200 mt-2"></div>
    </div>
  );
};

// The Project Card Component
const ProjectCard = ({ data }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#333] group overflow-hidden relative flex flex-col">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4 text-[10px] md:text-xs text-white uppercase tracking-widest z-10 relative">
        <h3 className="font-bold">{data.title}</h3>
        <a
          href="#"
          className="flex items-center gap-1 hover:text-gray-300 transition-colors"
        >
          {data.linkType}
          <ArrowTopRightOnSquareIcon className="w-3 h-3" />
        </a>
      </div>

      {/* Image Container (Aspect Ratio wrapper) */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {/* Using a placeholder image. In reality, replace src with data.img */}
        <img
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        {/* Overlay gradient for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Card Footer */}
      <div className="mt-auto flex justify-between items-center p-4 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest z-10 relative border-t border-[#333]">
        <span>{data.category}</span>
        <span className="flex items-center gap-1">
          {data.location}
          <MapPinIcon className="w-3 h-3 text-red-500" />
        </span>
      </div>
    </div>
  );
};

// --- Main Component ---

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* --- Header Section (White Background) --- */}
      <header className="pt-24 pb-16 px-4 text-center relative overflow-hidden">
        {/* Watch Video Link */}
        <div className="absolute top-1/2 right-[15%] transform -translate-y-1/2 hidden md:flex items-center gap-2 text-xs tracking-widest uppercase cursor-pointer hover:text-gray-600">
          <span>Watch Video</span>
          <PlayIcon className="w-3 h-3" />
        </div>

        {/* Main Title Mix */}
        <h1 className="text-black leading-none flex flex-col items-center justify-center">
          {/* To match exact fonts, you'd need to import specific serif and sans-serif fonts. 
              Using standard tailwind font stacks here for demonstration. */}
          <span className="text-6xl md:text-8xl font-light tracking-tight font-sans">
            Crafted to
          </span>
          {/* Simulating the script/italic font */}
          <span
            className="text-7xl md:text-9xl font-serif italic -mt-4 md:-mt-8 relative z-10"
            style={{ fontFamily: "Georgia, serif" }}
          >
            stand apart
          </span>
        </h1>

        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mt-8">
          Our Selected Work
        </p>
      </header>

      {/* --- Filter Section --- */}
      <section className="px-4 md:px-12 lg:px-24 pb-0 bg-white relative z-20">
        <div className="flex justify-between max-w-4xl mx-auto md:px-12">
          {filters.map((filter) => (
            <FilterItem
              key={filter.id}
              label={filter.label}
              shape={filter.shape}
              isActive={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            />
          ))}
        </div>
      </section>

      {/* --- Projects Grid Section (Dark Background) --- */}
      <section className="bg-[#0f0f0f] px-4 md:px-12 lg:px-24 py-16 min-h-screen relative -mt-8 pt-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
