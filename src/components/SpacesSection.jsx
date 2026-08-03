import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Award
} from 'lucide-react';

export default function SpacesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const spacesList = [
    {
      id: 'soho',
      type: 'FOR SALE',
      badge: 'SOHO',
      title: 'For People Who Don’t Fit Into One Box.',
      description: 'Work here. Live here. Build here. Own it. A flexible fusion of private living and professional office environment.',
      bestFor: 'Entrepreneurs, startups, professionals, SMEs, investors.',
      linkText: 'Explore SOHO',
      image: '/soho_office.png',
    },
    {
      id: 'serviced',
      type: 'FOR LEASE',
      badge: 'SERVICED OFFICE',
      title: 'For Teams That Need To Move Fast.',
      description: 'Fully equipped office without the time and capital required to build your own workspace. Turnkey solution with full reception.',
      bestFor: 'Small teams, project offices, satellite offices, new market entry.',
      linkText: 'Explore Serviced Office',
      image: '/serviced_office.png',
    },
    {
      id: 'virtual',
      type: 'PRESENCE',
      badge: 'VIRTUAL OFFICE',
      title: 'For Businesses That Need Presence Before Space.',
      description: 'Professional business address, mail handling, and call redirection without the overhead of a physical office lease.',
      bestFor: 'New companies, remote businesses, independent professionals, branch representation.',
      linkText: 'Explore Virtual Office',
      image: '/virtual_office.png',
    },
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER (Clean Archeo Title & Badge Style with Orange Accent Span) */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            ALL SPACES & PROPERTIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 font-heading tracking-tight">
            Find The <span className="text-[#E8860B]">Space That Fits</span> You.
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Not every business works the same way. That's why HQuarters offers space for different needs, business sizes and stages of growth.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. TOP FEATURED CARD: PREMIUM OFFICES */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/80 shadow-xl group bg-slate-900 min-h-[460px] sm:min-h-[520px] flex items-end"
        >
          {/* Full-Bleed Architectural Image */}
          <img
            src="/premium_office.png"
            alt="Premium Offices Space"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Gradient Overlay for Crisp Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Top Overlay Badges */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs uppercase tracking-wider shadow">
              FOR LEASE
            </span>
            <span className="px-3 py-1 rounded-md bg-[#E8860B] text-white font-bold text-xs uppercase tracking-wider shadow">
              PREMIUM OFFICES
            </span>
          </div>

          {/* Bottom Card Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl text-white">
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mb-3">
              For Companies <span className="text-amber-400">Going Places.</span>
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
              Premium offices for companies that need corporate image, strategic location and a professional working environment.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-amber-200/90 font-medium mb-6">
              <CheckCircle2 className="w-4 h-4 text-[#E8860B]" />
              <span>Best for: Established companies, regional offices, MNCs, corporate headquarters, growing teams.</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-bold text-sm shadow-md transition-all group/btn"
            >
              <span>Explore Premium Offices</span>
              <ArrowRight className="w-4 h-4 text-[#E8860B] group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. THREE-COLUMN CARDS GRID */}
        {/* ========================================================================= */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spacesList.map((space, idx) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Image Container with Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-wider shadow">
                        {space.type}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white font-bold text-[10px] uppercase tracking-wider shadow">
                        {space.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 font-heading mb-2.5 group-hover:text-[#E8860B] transition-colors">
                      {space.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {space.description}
                    </p>
                    <p className="text-xs text-slate-500 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <strong className="text-slate-700 font-bold">Best for:</strong> {space.bestFor.replace('Best for: ', '')}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#E8860B] transition-colors"
                  >
                    <span>{space.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E8860B] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. WHY CHOOSE US / BENTO GRID */}
        {/* ========================================================================= */}
        <div className="bg-[#f6f4f0] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full bg-white text-[#B86807] text-xs font-bold uppercase tracking-wider shadow-sm">
              EXCELLENCE STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-heading tracking-tight mt-3">
              Why Choose <span className="text-[#E8860B]">HQuarters</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Built to empower startups, established enterprises, and investors with flexible luxury space solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-5 group-hover:bg-[#E8860B] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-[#E8860B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. UNLOCK YOUR IDEAL SPACE CTA BANNER */}
        {/* ========================================================================= */}
        <div className="bg-slate-900 text-white rounded-[32px] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-4 border border-white/15">
              GET IN TOUCH TODAY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Unlock Your <span className="text-amber-400">Ideal Space.</span>
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg">
              Connecting with our advisors to find and customize your project space.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-bold text-sm shadow-lg transition-all"
              >
                Inquire Space Availability
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Schedule Site Tour
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
