import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Building,
  Landmark,
  ShoppingBag,
  Navigation,
  Landmark as BankIcon,
  Utensils,
  Train,
  Car,
  Coffee,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function LocationSection({ setCurrentPage }) {
  const nearbyCategories = [
    { name: 'Hotels', desc: '5-Star Luxury Accommodations & Executive Suites', icon: Building },
    { name: 'Government', desc: 'Civic Offices, Municipal Halls & Regional Depts', icon: Landmark },
    { name: 'Shopping', desc: 'Heritage Plazas, Modern Malls & Retail Outlets', icon: ShoppingBag },
    { name: 'Main Roads', desc: 'Direct Arterial Access to Major City Thoroughfares', icon: Navigation },
    { name: 'Banks', desc: 'National Financial Headquarters & ATM Centers', icon: BankIcon },
    { name: 'Restaurants', desc: 'Fine Dining, Executive Bistros & Culinary Landmarks', icon: Utensils },
    { name: 'Railway Station', desc: '5 Minutes to Bandung Central Train Station', icon: Train },
    { name: 'Toll Access*', desc: 'Fast Direct Express Connection to Pasteur & Buah Batu Toll Gates', icon: Car },
  ];

  const businessOutsideItems = [
    { title: 'Client Lunch', subtitle: 'Fine dining & executive bistros', icon: Utensils },
    { title: 'Hotel Meetings', subtitle: 'Luxury hotel ballrooms & lounges', icon: Building },
    { title: 'Coffee', subtitle: 'Artisanal cafes & meeting spots', icon: Coffee },
    { title: 'Banking', subtitle: 'Major bank HQs & wealth hubs', icon: BankIcon },
    { title: 'Government Affairs', subtitle: 'Civic offices & municipal halls', icon: Landmark },
    { title: 'Shopping', subtitle: 'Lifestyle malls & retail centers', icon: ShoppingBag },
  ];

  return (
    <section id="location" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            PRIME LOCATION & CBD
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 font-heading tracking-tight">
            At The Centre Of <span className="text-[#E8860B]">Bandung Business.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Asia Afrika — an address connected to the city's commerce, history, hospitality and everyday life.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAP & CLOSER TO EVERYTHING THAT MATTERS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50/80 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Interactive Map Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[24px] overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] group bg-slate-900">
              <img
                src="/location_map.png"
                alt="HQuarters Asia Afrika CBD Location Map"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              
              {/* Overlay Pins & Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-xs shadow flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E8860B]" /> Asia Afrika CBD
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#E8860B] text-white font-bold text-xs shadow">
                    HQuarters Tower
                  </span>
                </div>

                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200/60">
                  <div className="flex items-center justify-between text-slate-900 font-bold text-xs mb-1">
                    <span>HQuarters Business Residence</span>
                    <span className="text-[#E8860B]">Core CBD</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Jl. Asia Afrika No. 158, Bandung, Jawa Barat 40261
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text: Closer To Everything That Matters */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                ACCESSIBILITY & REACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900">
                Closer To <span className="text-[#E8860B]">Everything That Matters.</span>
              </h2>
            </div>

            {/* 8 Nearby Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {nearbyCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#E8860B]/40 hover:shadow-md transition-all flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#E8860B] text-slate-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#E8860B] transition-colors">
                        — {item.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-snug">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. YOUR CLIENTS ALREADY KNOW THE ADDRESS */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#f6f4f0] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 text-center border border-slate-200/80 relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-white text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block shadow-sm">
              PRESTIGE & RECOGNITION
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight">
              Your Clients Already Know <span className="text-[#E8860B]">The Address.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              There's a real psychological advantage when a company address doesn't need explaining. Asia Afrika is familiar and recognisable.
            </p>

            <div className="pt-4">
              <span className="inline-block px-6 py-2.5 rounded-full bg-slate-900 text-white font-extrabold text-sm sm:text-base font-heading tracking-wide shadow-md">
                Easy to find. Easy to remember.
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 4. BUSINESS OUTSIDE THE OFFICE */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider">
              SURROUNDING ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight mt-3">
              Business Outside <span className="text-[#E8860B]">The Office.</span>
            </h2>
            <p className="text-[#64748b] text-base mt-2">
              Client lunch. Hotel meetings. Coffee. Banking. Government affairs. Shopping. All close by.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessOutsideItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#E8860B] text-slate-800 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#E8860B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. CTA BANNER */}
        {/* ========================================================================= */}
        <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-4 border border-white/15">
              THE STRATEGIC ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              A Better Business Address <span className="text-amber-400">Starts With Location.</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Position your company at the prestige center of Bandung Asia Afrika CBD.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage && setCurrentPage('spaces')}
                className="px-7 py-3.5 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Find A Space</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Get Directions & Map
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
