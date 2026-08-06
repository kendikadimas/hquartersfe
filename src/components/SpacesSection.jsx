import React from 'react';
import {
  ArrowRight,
  Building2,
  Briefcase,
  Home,
  Layers
} from 'lucide-react';

export default function SpacesSection({ setCurrentPage }) {
  const spacesData = {
    premium: {
      id: 'premium',
      pageTarget: 'space-premium-office',
      type: 'FOR LEASE / STRATA',
      badge: 'PREMIUM OFFICES',
      title: 'For Companies Going Places.',
      titleHighlight: 'Going Places.',
      titlePrefix: 'For Companies ',
      description: 'Premium offices for companies that need corporate image, strategic location and a professional working environment.',
      bestFor: 'Established companies, regional offices, MNCs, corporate headquarters, growing teams.',
      linkText: 'Explore Premium Offices Detail',
      image: '/SPACES/PREMIUM OFFICE/Premium Office.png',
      icon: Layers,
    },
    soho: {
      id: 'soho',
      pageTarget: 'space-soho-duplex',
      type: 'FOR SALE / LEASE',
      badge: 'SOHO',
      title: 'For People Who Don’t Fit Into One Box.',
      titleHighlight: 'Don’t Fit Into One Box.',
      titlePrefix: 'For People Who ',
      description: 'Work here. Live here. Build here. Own it. A flexible fusion of private living and professional office environment.',
      bestFor: 'entrepreneurs, startups, professionals, SMEs, investors.',
      linkText: 'Explore SOHO Spaces Detail',
      image: '/SPACES/SOHO/SOHO 01.png',
      icon: Home,
    },
    serviced: {
      id: 'serviced',
      pageTarget: 'space-serviced-office',
      type: 'FOR LEASE',
      badge: 'SERVICED OFFICE',
      title: 'For Teams That Need To Move Fast.',
      titleHighlight: 'To Move Fast.',
      titlePrefix: 'For Teams That Need ',
      description: 'Fully equipped office without the time and capital required to build your own workspace. Turnkey solution with full reception.',
      bestFor: 'small teams, project offices, satellite offices, new market entry.',
      linkText: 'Explore Serviced Office Detail',
      image: '/SPACES/SERVICED OFFICE/1.png',
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
      description: 'Professional business address, mail handling, and call redirection without the overhead of a physical office lease.',
      bestFor: 'new companies, remote businesses, independent professionals, branch representation.',
      linkText: 'Explore Virtual Office Detail',
      image: '/SPACES/SERVICED OFFICE/2.png',
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
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-heading tracking-tight leading-[1.12]">
            Find The Space <br className="hidden sm:inline" />
            <span className="text-[#EA8E18]">That Fits You.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Not every business works the same way. That's why HQuarters offers space for different needs, business sizes and stages of growth.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. ALL SPACES COMPARISON GRID */}
        {/* ========================================================================= */}
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
                    {/* Card Image - Slim Height, Wide Aspect */}
                    <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-white font-bold text-[11px] uppercase tracking-wider shadow">
                          {space.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors leading-snug">
                        {space.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
                        {space.description}
                      </p>
                      <div className="pt-1.5 text-xs text-slate-500 border-t border-slate-100">
                        <span className="font-semibold text-slate-700">Best for: </span>
                        <span>{space.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-5 sm:px-6 pb-5 pt-0 flex items-center justify-between text-xs sm:text-sm font-bold text-[#EA8E18] group-hover:underline">
                    <span>View Detail Page</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. WHY CHOOSE US / ARCHITECTURAL BENTO GRID */}
        {/* ========================================================================= */}

      </div>
    </section>
  );
}
