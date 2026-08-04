import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Partners({ setCurrentPage }) {
  const featuredPartners = [
    { name: 'Allianz', src: '/tenants/allianz.png', scale: 'scale-110' },
    { name: 'AXA', src: '/tenants/axa.png', scale: 'scale-110' },
    { name: 'MSIG', src: '/tenants/msig.png', scale: 'scale-110' },
    { name: 'Mitsubishi', src: '/tenants/mitsubishi.png', scale: 'scale-115' },
    { name: 'Roche', src: '/tenants/roche.png', scale: 'scale-115' },
    { name: 'FWD', src: '/tenants/fwd.png', scale: 'scale-110' },
    { name: 'Tomoro Coffee', src: '/tenants/tomoro.png', scale: 'scale-115' },
    { name: 'Ray White', src: '/tenants/raywhite.png', scale: 'scale-[1.3]' },
    { name: 'HIS Travel', src: '/tenants/his-travel.png', scale: 'scale-115' },
    { name: 'Bmoney', src: '/tenants/bmoney.png', scale: 'scale-125' },
    { name: 'IWG', src: '/tenants/iwg.png', scale: 'scale-115' },
    { name: 'Garuda TV', src: '/tenants/garuda-tv.png', scale: 'scale-100' },
  ];

  const handleCommunityClick = (e) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage('companies');
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Overline & Main Title */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#EA8E18] inline-block">
            YOU'RE IN GOOD COMPANY
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight leading-tight">
            Trusted by Businesses That Know the Value of the Right Address.
          </h2>
        </div>

        {/* Featured Tenant Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-2 max-w-6xl mx-auto">
          {featuredPartners.map((brand) => (
            <div
              key={brand.name}
              onClick={handleCommunityClick}
              className="bg-slate-50/70 hover:bg-white p-4.5 rounded-2xl border border-slate-200/80 hover:border-[#EA8E18]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-20 w-36 sm:w-44 overflow-hidden group cursor-pointer"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className={`w-full h-full max-h-14 object-contain transition-all duration-300 group-hover:scale-105 ${brand.scale || 'scale-125'}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Community Link */}
        <div className="pt-2">
          <button
            onClick={handleCommunityClick}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#EA8E18] hover:text-[#d88010] transition-colors group cursor-pointer"
          >
            <span>Meet The HQuarters Business Community</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
