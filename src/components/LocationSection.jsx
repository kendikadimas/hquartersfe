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

  return (
    <section id="location" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        
        
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 font-heading tracking-tight leading-[1.12]">
            At The Centre Of <br />
            <span className="text-[#EA8E18]">Bandung Business.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            Asia Afrika — an address connected to the city's commerce, history, hospitality and everyday life.
          </p>
        </div>

        
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50/80 rounded-2xl sm:rounded-[40px] p-8 sm:p-12 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] bg-slate-100">
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

          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium font-heading text-slate-900">
                Closer To <br /><span className="text-[#EA8E18]">Everything That Matters.</span>
              </h2>
            </div>

            
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
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#FAF8F5] rounded-2xl sm:rounded-[40px] p-8 sm:p-16 text-center border border-slate-200/80 relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-medium font-heading text-slate-900 tracking-tight leading-[1.15]">
              Your Clients Already Know <br />
              <span className="text-[#EA8E18]">The Address.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              There's a real psychological advantage when a company address doesn't need explaining. Asia Afrika is familiar and recognisable.
            </p>

            <div className="pt-2 font-bold text-[#EA8E18] text-base sm:text-lg font-heading">
              Easy to find. Easy to remember.
            </div>
          </div>
        </motion.div>

        
        
        
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-6 sm:pt-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-slate-900 tracking-tight leading-tight">
            Business Outside <br /><span className="text-[#EA8E18]">The Office.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Client lunch. Hotel meetings. Coffee. Banking. Government affairs. <br />
            Shopping. All close by.
          </p>
        </div>

      </div>
    </section>
  );
}
