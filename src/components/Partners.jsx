import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Hexagon, Layers, Compass, Triangle, Command, ShieldCheck, Globe, Zap, Cpu } from 'lucide-react';

export default function Partners() {
  const partnersList = [
    { name: 'SUMMIT', icon: Building2 },
    { name: 'VERTEX', icon: Hexagon },
    { name: 'NORDIC', icon: Layers },
    { name: 'AETHER', icon: Command },
    { name: 'METROPOLIS', icon: Compass },
    { name: 'APEX', icon: Triangle },
    { name: 'LOGISTICS', icon: ShieldCheck },
    { name: 'HORIZON', icon: Globe },
    { name: 'STRATA', icon: Zap },
    { name: 'KINETIC', icon: Cpu },
  ];

  const marqueeItems = [...partnersList, ...partnersList];

  return (
    <section className="py-8 bg-white border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center">
          <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-[11px] font-bold uppercase tracking-wider inline-block">
            TRUSTED COLLABORATORS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight mt-3">
            Trusted by Global Enterprise Tenants & Iconic Brands
          </h3>
        </div>
      </div>

      {/* Edge-faded Infinite Marquee Track on Pure White Canvas */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 22,
            ease: 'linear',
          }}
          className="flex items-center gap-12 w-max py-2"
        >
          {marqueeItems.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm text-slate-500 hover:text-slate-900 hover:bg-white hover:border-[#E8860B]/40 transition-all cursor-pointer group shrink-0 select-none"
              >
                <Icon className="w-4 h-4 text-slate-500 group-hover:text-[#E8860B] transition-colors" />
                <span className="font-extrabold text-sm tracking-wider font-heading uppercase text-slate-700 group-hover:text-slate-900 transition-colors">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
