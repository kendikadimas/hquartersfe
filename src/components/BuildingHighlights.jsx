import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Briefcase,
  ShieldCheck,
  Car,
  Waves,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function BuildingHighlights({ setCurrentPage }) {
  const handleHighlightClick = (page = 'building', anchor) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      if (anchor) {
        setTimeout(() => {
          const elem = document.querySelector(anchor);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const highlights = [
    {
      id: 'premium-arrival',
      title: 'Premium Arrival',
      desc: 'Representative lobby & professional environment.',
      icon: Sparkles,
      targetPage: 'building',
      targetAnchor: '#infrastructure',
    },
    {
      id: 'business-ready',
      title: 'Business Ready',
      desc: 'Meeting facilities, connectivity and professional building management.',
      icon: Briefcase,
      targetPage: 'building',
      targetAnchor: '#infrastructure',
    },
    {
      id: 'security',
      title: '24/7 Security',
      desc: 'Layered building security and controlled access.',
      icon: ShieldCheck,
      targetPage: 'building',
      targetAnchor: '#security',
    },
    {
      id: 'easy-parking',
      title: 'Easy Parking',
      desc: 'Large-capacity parking supported by mechanical parking systems.',
      icon: Car,
      targetPage: 'building',
      targetAnchor: '#parking',
    },
    {
      id: 'health-wellness',
      title: 'Health & Wellness',
      desc: 'Gym, sauna and heated swimming pool.',
      icon: Waves,
      targetPage: 'building',
      targetAnchor: '#building-amenities',
    },
    {
      id: 'connected',
      title: 'Connected',
      desc: "At the centre of Bandung's business and city activity.",
      icon: MapPin,
      targetPage: 'location',
      targetAnchor: null,
    },
  ];

  return (
    <section id="building-highlights" className="py-24 sm:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        
        
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA8E18] inline-block">
            THE BUILDING
          </span>

          <h2 className="text-4xl sm:text-5xl font-medium text-slate-900 font-heading tracking-tight">
            Built for Business. <br />
            <span className="text-[#EA8E18]">Designed for Life.</span>
          </h2>
        </div>

        
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-slate-50/80 p-8 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#EA8E18] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => handleHighlightClick(item.targetPage, item.targetAnchor)}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-[#EA8E18] group-hover:text-white transition-colors mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-medium text-slate-900 font-heading group-hover:text-[#E8860B] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-[#EA8E18] group-hover:text-[#d67a0a]">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        
        
        
        <div className="text-center pt-2">
          <button
            onClick={() => handleHighlightClick('building')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#EA8E18] hover:text-[#d67a0a] transition-colors group cursor-pointer"
          >
            <span>Explore The Building</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
