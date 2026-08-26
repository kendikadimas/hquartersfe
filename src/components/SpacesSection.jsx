import React from 'react';
import {
  ArrowRight,
  Building2,
  Briefcase,
  Home,
  Layers,
  Sparkles
} from 'lucide-react';

export default function SpacesSection({ setCurrentPage }) {
  const spacesData = {
    soho: {
      id: 'soho',
      pageTarget: 'space-soho-duplex',
      type: 'FOR SALE / LEASE',
      badge: 'SOHO',
      popularTag: 'TERPOPULER',
      title: 'For People Who Don’t Fit Into One Box.',
      titleHighlight: 'Don’t Fit Into One Box.',
      titlePrefix: 'For People Who ',
      description: 'Work here. Live here. Build here. Own it.',
      bestFor: 'entrepreneurs, startups, professionals, SMEs, investors.',
      linkText: 'Explore SOHO Spaces Detail',
      image: '/SPACES/SOHO/SOHO 01.webp?v=20260825',
      icon: Home,
    },
    premium: {
      id: 'premium',
      pageTarget: 'space-premium-office',
      type: 'FOR LEASE / STRATA',
      badge: 'PREMIUM OFFICE',
      title: 'For Companies Going Places.',
      titleHighlight: 'Going Places.',
      titlePrefix: 'For Companies ',
      description: 'Premium office for companies that need corporate image, strategic location and a professional working environment.',
      bestFor: 'Established companies, regional offices, MNCs, corporate headquarters, growing teams.',
      linkText: 'Explore Premium Office Detail',
      image: '/SPACES/PREMIUM OFFICE/Premium Office.webp?v=20260825',
      icon: Layers,
    },
    serviced: {
      id: 'serviced',
      pageTarget: 'space-serviced-office',
      type: 'FOR LEASE',
      badge: 'SERVICED OFFICE',
      title: 'For Teams That Need To Move Fast.',
      titleHighlight: 'To Move Fast.',
      titlePrefix: 'For Teams That Need ',
      description: 'Fully equipped office without the time and capital required to build your own workspace.',
      bestFor: 'small teams, project offices, satellite offices, new market entry.',
      linkText: 'Explore Serviced Office Detail',
      image: '/SPACES/SERVICED OFFICE/1.webp?v=20260825',
      icon: Briefcase,
    },
    virtual: {
      id: 'virtual',
      pageTarget: 'space-virtual-office',
      type: 'PRESENCE MEMBERSHIP',
      badge: 'VIRTUAL OFFICE',
      title: 'For Businesses That Need Presence Before Space.',
      titleHighlight: 'Presence Before Space.',
      titlePrefix: 'For Businesses That Need ',
      description: 'Professional business presence without the commitment of a permanent office.',
      bestFor: 'new companies, remote businesses, independent professionals, branch representation.',
      linkText: 'Explore Virtual Office Detail',
      image: '/SPACES/SERVICED OFFICE/6.webp?v=20260825',
      icon: Building2,
    },
  };

  const handleGoToDetail = (pageTarget) => {
    if (setCurrentPage && pageTarget) {
      setCurrentPage(pageTarget);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section id="spaces" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        
        
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 font-heading tracking-tight leading-[1.12]">
            Find The Space <br />
            <span className="text-[#EA8E18]">That Fits You.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Not every business works the same way. That's why HQuarters offers space for different needs, business sizes and stages of growth.
          </p>
        </div>

        
        
        
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {Object.values(spacesData).map((space) => {
              return (
                <div
                  key={space.id}
                  onClick={() => handleGoToDetail(space.pageTarget)}
                  className="bg-white rounded-[24px] border border-slate-200/80 shadow-sm transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group hover:border-[#EA8E18] hover:ring-2 hover:ring-[#EA8E18]/30 hover:shadow-xl"
                >
                  <div>
                    
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <img loading="lazy"
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-white font-bold text-[11px] uppercase tracking-wider shadow">
                          {space.badge}
                        </span>
                        {space.popularTag && (
                          <span className="px-2.5 py-1 rounded-md bg-[#EA8E18] text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1">
                            <Sparkles className="w-3 h-3 fill-white" />
                            {space.popularTag}
                          </span>
                        )}
                      </div>
                    </div>

                    
                    <div className="p-4 sm:p-5 space-y-1.5">
                      <h4 className="text-lg sm:text-xl font-medium text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors leading-snug">
                        {space.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
                        {space.description}
                      </p>
                      <div className="pt-1 text-xs text-slate-500 border-t border-slate-100">
                        <span className="font-semibold text-slate-700">Best for: </span>
                        <span>{space.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  
                  <div className="px-4 sm:px-5 pb-4 pt-0 flex items-center justify-between text-xs sm:text-sm font-bold text-[#EA8E18] group-hover:underline">
                    <span>
                      Explore {space.badge === 'SOHO' ? 'SOHO' : space.badge.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
        
        

      </div>
    </section>
  );
}
