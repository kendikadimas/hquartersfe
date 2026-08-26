import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Partners({ setCurrentPage }) {
  const featuredPartners = [
    { name: 'Allianz', src: '/homepagelogobaru/GF allianz.webp?v=20260825', scale: 'scale-125' },
    { name: 'AXA', src: '/homepagelogobaru/7de axa.webp?v=20260825', scale: 'scale-130' },
    { name: 'MSIG', src: '/homepagelogobaru/9ef MSIG.webp?v=20260825', scale: 'scale-125' },
    { name: 'Mitsubishi', src: '/homepagelogobaru/7i mitsubishi.webp?v=20260825', scale: 'scale-135' },
    { name: 'Roche', src: '/homepagelogobaru/16j roche.webp?v=20260825', scale: 'scale-135' },
    { name: 'FWD', src: '/homepagelogobaru/6FGH fwd.webp?v=20260825', scale: 'scale-130' },
    { name: 'Avrist', src: '/homepagelogobaru/19r avrist.webp?v=20260825', scale: 'scale-130' },
    { name: 'DANA', src: '/homepagelogobaru/19 OP Dana-Logo.webp?v=20260825', scale: 'scale-130' },
    { name: 'HIS Travel', src: '/homepagelogobaru/UG his travel.webp?v=20260825', scale: 'scale-135' },
    { name: 'Henan Sekuritas', src: '/homepagelogobaru/16E henan sekuritas.webp?v=20260825', scale: 'scale-135' },
    { name: 'Huawei', src: '/homepagelogobaru/huawei.webp?v=20260825', scale: 'scale-125' },
    { name: 'Garuda TV', src: '/homepagelogobaru/GF B garuda.webp?v=20260825', scale: 'scale-115' },
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
        
        
        <div className="space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA8E18] inline-block">
            YOU'RE IN GOOD COMPANY
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium text-slate-900 font-heading tracking-tight leading-tight">
            Trusted by Businesses That Know the Value of the Right Address.
          </h2>
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-2 max-w-6xl mx-auto">
          {featuredPartners.map((brand) => (
            <div
              key={brand.name}
              onClick={handleCommunityClick}
              className="bg-slate-50/70 hover:bg-white p-3 rounded-2xl border border-slate-200/80 hover:border-[#EA8E18]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-28 w-[calc(50%-0.5rem)] sm:w-56 overflow-hidden group cursor-pointer"
            >
              <img loading="lazy"
                src={brand.src}
                alt={brand.name}
                className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110 ${brand.scale || 'scale-130'}`}
              />
            </div>
          ))}
        </div>

        
        <div className="pt-2">
          <button
            onClick={handleCommunityClick}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#EA8E18] hover:text-[#d88010] transition-colors group cursor-pointer"
          >
            <span>Meet The HQuarters Business Community</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
