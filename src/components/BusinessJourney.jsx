import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Briefcase, Home, Layers } from 'lucide-react';

export default function BusinessJourney({ setCurrentPage }) {
  const journeys = [
    {
      id: 'virtual-office',
      category: 'VIRTUAL OFFICE',
      title: 'Start Here.',
      description: 'Professional business presence without a permanent office.',
      icon: Building2,
      page: 'space-virtual-office',
      cta: 'Explore Virtual Office',
    },
    {
      id: 'serviced-office',
      category: 'SERVICED OFFICE',
      title: 'Work Here.',
      description: 'Ready-to-use workspace with facilities and service included.',
      icon: Briefcase,
      page: 'space-serviced-office',
      cta: 'Explore Serviced Office',
    },
    {
      id: 'soho',
      category: 'SOHO',
      title: 'Own Here.',
      description: 'Office. Home office. Living space. One space that grows with you. #FleksibelAja',
      icon: Home,
      page: 'space-soho-duplex',
      cta: 'Explore SOHO Spaces',
    },
    {
      id: 'premium-office',
      category: 'PREMIUM OFFICE',
      title: 'Grow Here.',
      description: 'Representative, professional space built to support your next chapter.',
      icon: Layers,
      page: 'space-premium-office',
      cta: 'Explore Premium Office',
    },
  ];

  return (
    <section id="business-journey" className="py-24 sm:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#EA8E18]">
            <span>ONE BUILDING. MANY POSSIBILITIES.</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-medium text-slate-900 font-heading tracking-tight leading-tight">
            Where Are You in<span className="text-[#EA8E18]"> <br/> Your Business Journey?</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Whatever comes next, there is a space for you at HQuarters.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeys.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setCurrentPage && setCurrentPage(item.page)}
                className="group relative bg-slate-50/80 hover:bg-[#EA8E18] rounded-[24px] p-7 border border-slate-200/80 hover:border-[#EA8E18] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#EA8E18] group-hover:text-white/90 transition-colors">
                      {item.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-white/20 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors shadow-sm border border-slate-200/60 group-hover:border-white/30 backdrop-blur-sm">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  
                  <div>
                    <h3 className="text-2xl font-medium text-slate-900 font-heading group-hover:text-white transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                
                <div className="pt-6 mt-6 border-t border-slate-200/60 group-hover:border-white/30 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-white transition-colors">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
