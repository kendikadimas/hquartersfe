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
  ArrowRight
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
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-heading tracking-tight leading-[1.12]">
            At The Centre Of <br className="hidden sm:inline" />
            <span className="text-[#EA8E18]">Bandung Business.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
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
            <div className="relative rounded-[24px] overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7328941393102!2d107.61305377499647!3d-6.922500093077204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62eaa6b6423%3A0xb2cdc805dd650314!2sHQuarters%20Business%20Residence!5e0!3m2!1sid!2sid!4v1785903189677!5m2!1sid!2sid"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HQuarters Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Text: Closer To Everything That Matters */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900">
                Closer To <span className="text-[#EA8E18]">Everything That Matters.</span>
              </h2>
            </div>

            {/* 8 Nearby Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {nearbyCategories.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#EA8E18]/40 hover:shadow-md transition-all flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#EA8E18] text-slate-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#EA8E18] transition-colors">
                      — {item.name}
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
          className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 text-center border border-slate-200/80 relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-[1.15]">
              Your Clients Already Know <br className="hidden sm:inline" />
              <span className="text-[#EA8E18]">The Address.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
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
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Business Outside <span className="text-[#EA8E18]">The Office.</span>
            </h2>
            <p className="text-slate-600 text-base font-normal">
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
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-[#EA8E18] text-slate-800 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors">
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

      </div>
    </section>
  );
}
