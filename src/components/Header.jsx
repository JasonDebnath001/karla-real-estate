// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center text-white">
        
        {/* Logo - Stays on the far left */}
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold tracking-tight lowercase">
            marketika
          </span>
        </div>

        {/* Right Side Group: Nav + CTA */}
        <div className="hidden md:flex items-center gap-12">
          {/* Desktop Navigation */}
          <nav className="flex items-center gap-10 text-[10px] font-semibold tracking-[0.15em] uppercase">
            {['Projects', 'Expertise', 'Insights'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="flex items-center gap-1 hover:text-white/70 transition-colors"
              >
                <span className="text-white/60 font-light">+</span> {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="border border-white/30 px-6 py-3 text-[10px] tracking-[0.15em] font-semibold hover:bg-white hover:text-black transition-all duration-300 uppercase">
            Book 30 min. Intro Call
          </button>
        </div>

        {/* Mobile Toggle - Only visible on mobile */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 z-40">
          {['Projects', 'Expertise', 'Insights'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-2xl uppercase tracking-widest text-white/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;