import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AddressStatement({ setCurrentPage }) {
  const handleLocationClick = (e) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage('location');
      window.scrollTo(0, 0);
    }
  };

  return (
    <section id="address-statement" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER SECTION (Balanced 2-Row Layout) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-extrabold uppercase tracking-widest inline-block">
            HQUARTERS • ASIA AFRIKA • BANDUNG
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-heading tracking-tight leading-[1.15]">
            Your Address Says Something <br className="hidden md:inline" />
            <span className="text-[#E8860B]">About Your Business.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            When clients, partners or candidates walk in, they form an impression before the meeting even starts. HQuarters offers a modern, professional business environment in one of Bandung's most iconic districts.
          </p>

          <div className="pt-2">
            <button
              onClick={handleLocationClick}
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#E8860B] hover:text-[#d67a0a] transition-colors group cursor-pointer"
            >
              <span>Discover The Location</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ARCHITECTURAL SHOWCASE IMAGE CARD */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900 aspect-[16/9] sm:aspect-[21/9] group"
        >
          <img
            src="/premium_office.png"
            alt="HQuarters Executive Boardroom & Office Interior"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
          />

          {/* Bottom Overlay Label */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8860B] animate-pulse" />
                <span className="text-xs sm:text-sm font-extrabold tracking-wider font-heading uppercase">
                  HQUARTERS BUSINESS RESIDENCE — ASIA AFRIKA CBD
                </span>
              </div>
              <button
                onClick={handleLocationClick}
                className="px-5 py-2 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-slate-900 font-bold text-xs uppercase tracking-wider transition-all self-start sm:self-auto shadow"
              >
                View Location Dossier
              </button>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM STATEMENT */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50/80 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-slate-200/80 text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="px-3.5 py-1 rounded-full bg-white text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block shadow-sm">
            THE IMPRESSION FACTOR
          </span>

          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight">
            Make The <span className="text-[#E8860B]">Right First Impression.</span>
          </h3>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            A good building isn't just good-looking. It makes clients feel assured, makes teams feel proud, and makes a business look ready for something bigger.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
