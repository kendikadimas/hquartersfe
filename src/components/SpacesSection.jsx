import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase,
  Home,
  Sparkles,
  MapPin,
  ShieldCheck,
  Zap,
  TrendingUp,
  Compass,
  Award,
  Layers
} from 'lucide-react';

export default function SpacesSection({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('premium');

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
      bestFor: 'Entrepreneurs, founders, creative agencies, tech teams, lifestyle business owners.',
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
      bestFor: 'Small teams, project offices, satellite offices, new market entry.',
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
      bestFor: 'New companies, remote businesses, independent professionals, branch representation.',
      linkText: 'Explore Virtual Office Detail',
      image: '/SPACES/SERVICED OFFICE/2.png',
      icon: Building2,
    },
  };

  const currentSpace = spacesData[activeTab];

  const handleGoToDetail = (pageTarget) => {
    if (setCurrentPage && pageTarget) {
      setCurrentPage(pageTarget);
      window.scrollTo(0, 0);
    }
  };

  const tabs = [
    { id: 'premium', label: 'Premium Offices', icon: Layers },
    { id: 'soho', label: 'SOHO', icon: Home },
    { id: 'serviced', label: 'Serviced Office', icon: Briefcase },
    { id: 'virtual', label: 'Virtual Office', icon: Building2 },
  ];

  const whyChooseUs = [
    {
      title: 'Precision in Design',
      desc: 'Ergonomic layouts engineered to maximize natural lighting, spatial flow, and acoustic privacy for high-focus work.',
      icon: Compass,
    },
    {
      title: 'Strategic CBD Address',
      desc: 'Prime location at Asia Afrika CBD, providing immediate prestige and seamless access to financial & commercial hubs.',
      icon: MapPin,
    },
    {
      title: 'Flexible Capital Options',
      desc: 'Tailored leasing terms and strata-title ownership models designed to adapt to your capital allocation strategy.',
      icon: TrendingUp,
    },
    {
      title: 'Turnkey Hospitality',
      desc: 'Dedicated concierge, professional mail management, ultra-fast fiber internet, and daily executive housekeeping.',
      icon: Zap,
    },
    {
      title: 'Client-Centric Floorplans',
      desc: 'Modular wall systems allow seamless expansion as your company headcount scales over time.',
      icon: Building2,
    },
    {
      title: 'High Investment Yield',
      desc: 'Strong rental demand in Bandung’s core business district ensures sustainable long-term asset value growth.',
      icon: Award,
    },
  ];

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
        {/* 2. INTERACTIVE SPACE CATEGORY TABS */}
        {/* ========================================================================= */}
        <div className="flex justify-center">
          <div className="bg-slate-100/90 p-1.5 rounded-full flex flex-wrap justify-center gap-1.5 border border-slate-200/80 max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#EA8E18] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. DYNAMIC HERO SHOWCASE CARD FOR SELECTED SPACE */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-[28px] sm:rounded-[40px] overflow-hidden border border-slate-200/80 shadow-2xl group bg-slate-950 min-h-[480px] sm:min-h-[540px] flex items-end"
          >
            {/* Full-Bleed Architectural Image */}
            <img
              src={currentSpace.image}
              alt={currentSpace.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Dark Gradient Overlay for Crisp Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 via-40% to-transparent" />

            {/* Top Overlay Badges */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow">
                {currentSpace.type}
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#EA8E18] text-white font-extrabold text-xs uppercase tracking-wider shadow">
                {currentSpace.badge}
              </span>
            </div>

            {/* Bottom Card Content */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl text-white space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white leading-tight">
                {currentSpace.titlePrefix}
                <span className="text-[#EA8E18]">{currentSpace.titleHighlight}</span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                {currentSpace.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 text-xs text-amber-200/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#EA8E18] shrink-0" />
                <span><strong className="text-white font-semibold">Best for:</strong> {currentSpace.bestFor}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleGoToDetail(currentSpace.pageTarget)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-bold text-sm shadow-lg transition-all group/btn cursor-pointer"
                >
                  <span>{currentSpace.linkText}</span>
                  <ArrowRight className="w-4 h-4 text-[#EA8E18] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* 4. ALL SPACES COMPARISON GRID */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              Explore All Spaces at HQuarters
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(spacesData).map((space) => {
              const Icon = space.icon;
              const isSelected = activeTab === space.id;
              return (
                <div
                  key={space.id}
                  onClick={() => handleGoToDetail(space.pageTarget)}
                  className={`bg-white rounded-[24px] border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group hover:border-[#EA8E18] hover:ring-2 hover:ring-[#EA8E18]/30 hover:shadow-xl ${
                    isSelected
                      ? 'border-[#EA8E18] ring-2 ring-[#EA8E18]/30 shadow-md'
                      : 'border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={space.image}
                        alt={space.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider shadow">
                          {space.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-2.5">
                      <h4 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors leading-snug">
                        {space.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {space.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-[#EA8E18] group-hover:underline">
                    <span>View Detail Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. WHY CHOOSE US / ARCHITECTURAL BENTO GRID */}
        {/* ========================================================================= */}
        <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[44px] p-6 sm:p-12 lg:p-14 border border-slate-200/80 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-heading tracking-tight">
              Why Choose <span className="text-[#EA8E18]">HQuarters</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built to empower startups, established enterprises, and investors with flexible luxury space solutions.
            </p>
          </div>

          {/* Bento Box Container Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Large 2-Column Hero Card (CBD Location) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 relative rounded-[28px] overflow-hidden bg-slate-950 p-8 sm:p-10 text-white flex flex-col justify-between min-h-[260px] border border-slate-800 group shadow-lg"
            >
              <img
                src="/BUILDING/ChatGPT%20Image%20Jul%2029,%202026,%2003_09_51%20PM.png"
                alt="Asia Afrika CBD"
                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              <div className="relative z-10 w-10 h-10 rounded-xl bg-white/10 text-[#EA8E18] flex items-center justify-center backdrop-blur-md border border-white/10 mb-8">
                <MapPin className="w-5 h-5" />
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-[#EA8E18] transition-colors">
                  Strategic CBD Address
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Prime location at Asia Afrika CBD, providing immediate prestige and seamless access to Bandung’s financial & commercial hubs.
                </p>
              </div>
            </motion.div>

            {/* Bento Card 2: Solid Warm Card (Investment Yield) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-[28px] bg-[#FEF3E2] p-8 border border-[#EA8E18]/30 shadow-sm flex flex-col justify-between space-y-6 group hover:shadow-xl transition-all min-h-[260px]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/80 text-[#B86807] flex items-center justify-center shadow-sm">
                <Award className="w-5 h-5" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors">
                  High Investment Yield
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  Strong rental demand in Bandung’s core business district ensures sustainable long-term asset value growth.
                </p>
              </div>
            </motion.div>

            {/* Bento Card 3: Standard White Bento (Precision Design) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-[28px] bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#EA8E18] text-slate-800 group-hover:text-white flex items-center justify-center transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors">
                Precision in Design
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Ergonomic layouts engineered to maximize natural lighting, spatial flow, and acoustic privacy for high-focus work.
              </p>
            </motion.div>

            {/* Bento Card 4: Standard White Bento (Flexible Capital) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-[28px] bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#EA8E18] text-slate-800 group-hover:text-white flex items-center justify-center transition-colors">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors">
                Flexible Capital Options
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tailored leasing terms and strata-title ownership models designed to adapt to your capital allocation strategy.
              </p>
            </motion.div>

            {/* Bento Card 5: Standard White Bento (Client-Centric Floorplans) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="rounded-[28px] bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#EA8E18] text-slate-800 group-hover:text-white flex items-center justify-center transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors">
                Client-Centric Floorplans
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Modular wall systems allow seamless expansion as your company headcount scales over time.
              </p>
            </motion.div>

            {/* Bento Card 6: Large 3-Column Dark Slate Bento (Turnkey Hospitality) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="lg:col-span-3 rounded-[28px] bg-slate-900 text-white p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group shadow-lg"
            >
              <div className="space-y-2 max-w-2xl">
                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-[#EA8E18] transition-colors">
                  Turnkey Hospitality & Support
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Dedicated concierge, professional mail management, ultra-fast fiber internet, and daily executive housekeeping included.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-bold text-slate-200 backdrop-blur-sm">
                  Fiber Internet Redundancy
                </span>
                <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-bold text-slate-200 backdrop-blur-sm">
                  24/7 Concierge & Security
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
