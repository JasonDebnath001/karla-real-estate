import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [wowLevel, setWowLevel] = useState(5);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState(null);

  if (!isOpen) return null;

  const services = [
    '3D Renderings', 'Virtual Tours', 'Interactive Unit Selector', 'Website',
    'Branding', 'Lead Generation', 'Campaigns / Social Media'
  ];

  const budgets = [
    '> $50,000', '$50,000 - 100,000', '$100,000 - 250,000',
    '$250,000 - 500,000', '$500,000 >'
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    // Outer Backdrop - Centers the modal on the screen
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8">
      
      {/* Modal Container - Constrained size with scrolling if needed */}
      <div className="relative w-full max-w-[1150px] max-h-[95vh] bg-white rounded-xl shadow-2xl overflow-y-auto flex flex-col md:flex-row p-8 lg:p-14 font-sans text-black">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-black hover:opacity-60 transition-opacity z-50"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        {/* --- Background Wireframe Elements (SVG) --- */}
        {/* Top Left Small Wireframe */}
        <div className="absolute top-4 left-[35%] opacity-80 pointer-events-none hidden lg:block">
          <svg width="50" height="60" viewBox="0 0 100 100">
            <polygon points="10,20 90,30 50,90" fill="none" stroke="black" strokeWidth="2" />
            <line x1="10" y1="20" x2="50" y2="90" stroke="black" strokeWidth="2" />
            <line x1="90" y1="30" x2="60" y2="40" stroke="black" strokeWidth="2" />
            <line x1="10" y1="20" x2="60" y2="40" stroke="black" strokeWidth="2" />
            <line x1="50" y1="90" x2="60" y2="40" stroke="black" strokeWidth="2" />
          </svg>
        </div>

        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full md:w-5/12 flex flex-col z-10 lg:pr-10 relative">
          
          {/* Header */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-1">
            Let's make <br /> your project
          </h1>
          <h2 className="text-5xl lg:text-[4rem] italic font-serif leading-[1.1] mb-6 tracking-tight">
            impossible to ignore
          </h2>
          <p className="text-gray-800 text-sm lg:text-base mb-12 font-light">
            Complete this quick brief and see if we're the right fit.
          </p>

          {/* Form Inputs */}
          <div className="space-y-6 w-full lg:w-[85%] mt-auto lg:mt-16">
            <div className="relative">
              <input type="text" placeholder="Name" className="w-full pb-2 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black bg-transparent text-sm" />
            </div>
            <div className="relative">
              <input type="text" placeholder="Company" className="w-full pb-2 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black bg-transparent text-sm" />
            </div>
            <div className="relative">
              <input type="email" placeholder="Email" className="w-full pb-2 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black bg-transparent text-sm" />
            </div>
            <div className="relative">
              <input type="tel" placeholder="Phone" className="w-full pb-2 border-b border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:border-black bg-transparent text-sm" />
            </div>

            {/* Dropdown & Small Input Row */}
            <div className="flex gap-4 pt-4">
              <div className="flex-1">
                <label className="block text-black font-semibold text-sm mb-2">Type of project</label>
                <div className="relative">
                  <select className="w-full border border-gray-400 rounded-md py-2 px-3 appearance-none focus:outline-none focus:border-black text-sm text-black bg-transparent">
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={16} />
                </div>
              </div>
              <div className="w-28">
                <label className="block text-black font-semibold text-sm mb-2"># of doors</label>
                <input type="number" defaultValue="250" className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-black text-sm text-black bg-transparent" />
              </div>
            </div>
          </div>
        </div>


        {/* ================= RIGHT COLUMN ================= */}
        <div className="w-full md:w-7/12 flex flex-col mt-12 md:mt-0 lg:pl-12 z-10 relative">
          
          {/* Level of WOW Slider */}
          <div className="mb-10">
            <label className="block text-black font-semibold mb-4 text-sm lg:text-base">Level of WOW</label>
            <div className="relative w-full max-w-sm mt-4">
              <div className="flex justify-between text-[10px] text-gray-500 mb-1 absolute -bottom-5 w-full font-medium">
                <span>1</span>
                <span>10</span>
              </div>
              <input 
                type="range" 
                min="1" max="10" 
                value={wowLevel} 
                onChange={(e) => setWowLevel(e.target.value)}
                className="w-full h-[2px] bg-black/30 appearance-none cursor-pointer outline-none rounded-full"
                style={{ WebkitAppearance: 'none' }}
              />
              {/* Custom Fire Thumb Visual representation */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 text-3xl pointer-events-none transition-all duration-150 -ml-4"
                style={{ left: `${((wowLevel - 1) / 9) * 100}%` }}
              >
                🔥
              </div>
            </div>
          </div>

          {/* Services Selection */}
          <div className="mb-8">
            <label className="block text-black font-semibold mb-3 text-sm lg:text-base">
              What services are you interested in? <span className="text-gray-400 font-normal">(multiple selection)</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {services.map(service => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`px-4 py-1.5 rounded-md border text-xs lg:text-sm transition-colors ${
                    selectedServices.includes(service) 
                    ? 'border-black text-black bg-gray-50' 
                    : 'border-gray-300 text-gray-400 hover:border-gray-400'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div className="mb-10">
            <label className="block text-black font-semibold mb-3 text-sm lg:text-base">What is your estimated budget?</label>
            <div className="flex flex-wrap gap-2.5">
              {budgets.map(budget => (
                <button
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`px-4 py-1.5 rounded-md border text-xs lg:text-sm transition-colors ${
                    selectedBudget === budget 
                    ? 'border-teal-400 text-teal-600 bg-teal-50/30' 
                    : 'border-gray-300 text-gray-400 hover:border-gray-400'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Area: Dropdowns + Send Button side-by-side */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 w-full mt-auto">
            
            {/* Dropdowns */}
            <div className="w-full sm:w-1/2 space-y-6">
              <div>
                <label className="block text-black font-semibold mb-2 text-sm">Why now?</label>
                <div className="relative">
                  <select className="w-full border border-black rounded-md py-2.5 px-3 appearance-none focus:outline-none text-sm text-black bg-transparent">
                    <option>I'm not in a rush</option>
                    <option>ASAP</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label className="block text-black font-semibold mb-2 text-sm">Why us?</label>
                <div className="relative">
                  <select className="w-full border border-black rounded-md py-2.5 px-3 appearance-none focus:outline-none text-sm text-black bg-transparent">
                    <option>I don't settle for average</option>
                    <option>Saw your portfolio</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={18} />
                </div>
              </div>
            </div>

            {/* SEND BUTTON - Now flexed beside the dropdowns so they don't overlap */}
            <div className="relative flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center mt-8 sm:mt-0 lg:mr-4">
              {/* Green Glow */}
              <div className="absolute inset-[-40%] bg-[radial-gradient(circle,rgba(32,255,180,0.6)_0%,rgba(32,255,180,0)_65%)] -z-10 rounded-full"></div>
              
              {/* Dashed Circle Button */}
              <button className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-dashed border-gray-800 flex items-center justify-center group hover:scale-105 transition-transform duration-300 z-10 bg-transparent">
                <span className="text-black font-medium text-base lg:text-lg tracking-wide group-hover:font-semibold transition-all">
                  Send request
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingModal;