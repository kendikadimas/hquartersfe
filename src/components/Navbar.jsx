import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentPage = 'home', setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page, href) => {
    setMobileMenuOpen(false);
    if (page && setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    } else if (href && setCurrentPage) {
      setCurrentPage('home');
      setTimeout(() => {
        const elem = document.querySelector(href);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const isSpacesActive = [
    'spaces',
    'space-premium-office',
    'space-soho-duplex',
    'space-soho',
    'space-[#soho-duplex]',
    'space-serviced-office',
    'space-virtual-office',
  ].includes(currentPage);

  const isEventActive = [
    'event',
    'events',
    'function-room',
    'space-event',
    'space-function-room',
  ].includes(currentPage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 sm:py-4 bg-white/90 backdrop-blur-md shadow-md'
          : 'py-5 sm:py-6 bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center group text-left cursor-pointer"
          >
            <img
              src="/LOGO/hquarters-logo-wordmark.webp?v=20260825"
              alt="HQuarters Logo"
              width="460"
              height="76"
              className="h-8 sm:h-9.5 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick('spaces')}
                className={`text-sm font-semibold transition-all px-4 py-2 rounded-full cursor-pointer ${
                  isSpacesActive
                    ? 'bg-[#FEF3E2] text-[#B86807] border border-[#E8860B]/40 shadow-sm font-bold'
                    : 'text-slate-800 hover:text-[#E8860B] hover:bg-slate-100/80'
                }`}
              >
                Spaces
              </button>

              <button
                onClick={() => handleNavClick('building')}
                className={`text-sm font-semibold transition-all px-4 py-2 rounded-full cursor-pointer ${
                  currentPage === 'building'
                    ? 'bg-[#FEF3E2] text-[#B86807] border border-[#E8860B]/40 shadow-sm font-bold'
                    : 'text-slate-800 hover:text-[#E8860B] hover:bg-slate-100/80'
                }`}
              >
                Building
              </button>

              <button
                onClick={() => handleNavClick('location')}
                className={`text-sm font-semibold transition-all px-4 py-2 rounded-full cursor-pointer ${
                  currentPage === 'location'
                    ? 'bg-[#FEF3E2] text-[#B86807] border border-[#E8860B]/40 shadow-sm font-bold'
                    : 'text-slate-800 hover:text-[#E8860B] hover:bg-slate-100/80'
                }`}
              >
                Location
              </button>

              <button
                onClick={() => handleNavClick('companies')}
                className={`text-sm font-semibold transition-all px-4 py-2 rounded-full cursor-pointer ${
                  currentPage === 'companies'
                    ? 'bg-[#FEF3E2] text-[#B86807] border border-[#E8860B]/40 shadow-sm font-bold'
                    : 'text-slate-800 hover:text-[#E8860B] hover:bg-slate-100/80'
                }`}
              >
                Companies
              </button>

              <button
                onClick={() => handleNavClick('insights')}
                className={`text-sm font-semibold transition-all px-4 py-2 rounded-full cursor-pointer ${
                  currentPage === 'insights'
                    ? 'bg-[#FEF3E2] text-[#B86807] border border-[#E8860B]/40 shadow-sm font-bold'
                    : 'text-slate-800 hover:text-[#E8860B] hover:bg-slate-100/80'
                }`}
              >
                Insights
              </button>

              <button
                onClick={() => handleNavClick('event')}
                className={`text-sm font-semibold transition-all px-4 py-2 rounded-full cursor-pointer ${
                  isEventActive
                    ? 'bg-[#FEF3E2] text-[#B86807] border border-[#E8860B]/40 shadow-sm font-bold'
                    : 'text-slate-800 hover:text-[#E8860B] hover:bg-slate-100/80'
                }`}
              >
                Events
              </button>
            </nav>

            <button
              onClick={() => handleNavClick('find-space')}
              className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer ${
                currentPage === 'find-space'
                  ? 'bg-slate-900 text-white'
                  : 'bg-[#E8860B] hover:bg-[#d67a0a] text-white'
              }`}
            >
              Find My Space
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100 font-bold cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-200 px-5 py-6 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2 font-semibold">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left text-base py-2.5 px-3 rounded-lg ${
                  currentPage === 'home' ? 'bg-[#FEF3E2] text-[#B86807]' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('spaces')}
                className={`text-left text-base py-2.5 px-3 rounded-lg ${
                  isSpacesActive ? 'bg-[#FEF3E2] text-[#B86807]' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                Spaces
              </button>

              <button
                onClick={() => handleNavClick('building')}
                className={`text-left text-base py-2.5 px-3 rounded-lg ${
                  currentPage === 'building' ? 'bg-[#FEF3E2] text-[#B86807]' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                Building
              </button>
              <button
                onClick={() => handleNavClick('location')}
                className={`text-left text-base py-2.5 px-3 rounded-lg ${
                  currentPage === 'location' ? 'bg-[#FEF3E2] text-[#B86807]' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                Location
              </button>
              <button
                onClick={() => handleNavClick('companies')}
                className={`text-left text-base py-2.5 px-3 rounded-lg ${
                  currentPage === 'companies' ? 'bg-[#FEF3E2] text-[#B86807]' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                Companies
              </button>
              <button
                onClick={() => handleNavClick('insights')}
                className={`text-left text-base py-2.5 px-3 rounded-lg ${
                  currentPage === 'insights' ? 'bg-[#FEF3E2] text-[#B86807]' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                Insights
              </button>
              <button
                onClick={() => handleNavClick('event')}
                className={`text-left text-base py-2.5 px-3 rounded-lg ${
                  isEventActive ? 'bg-[#FEF3E2] text-[#B86807]' : 'text-slate-900 hover:bg-slate-100'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => handleNavClick('find-space')}
                className="w-full text-center py-3.5 rounded-full bg-[#E8860B] text-white font-bold text-sm uppercase tracking-wider mt-3 shadow-md"
              >
                Find My Space
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
