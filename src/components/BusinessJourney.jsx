import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BusinessJourney({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('expansion');

  const tabs = [
    { id: 'startup', label: 'Starting Out' },
    { id: 'expansion', label: 'Growing Team' },
    { id: 'enterprise', label: 'Established Firm' },
    { id: 'investor', label: 'Property Investor' },
  ];

  const contentMap = {
    startup: {
      badge: 'FLEXIBILITY & SPEED',
      title: 'Low Overhead, High Prestige.',
      description: 'Establish a credible Asia Afrika business address without heavy capital expenditure. Perfect for lean teams and early-stage ventures.',
      features: [
        'Virtual office & mail handling',
        'Turnkey serviced desks',
        'On-demand executive meeting rooms',
      ],
      ctaText: 'Explore Virtual & Serviced Offices',
      page: 'spaces',
    },
    expansion: {
      badge: 'SCALABILITY & IMAGE',
      title: 'Spaces Built to Scale With You.',
      description: 'Modular floor plans and SOHO duplexes designed for expanding companies that need flexibility and an inspiring team environment.',
      features: [
        'SOHO living & working duplexes',
        'Customizable office footprints',
        'Automated parking & biometric access',
      ],
      ctaText: 'Explore SOHO & Office Spaces',
      page: 'spaces',
    },
    enterprise: {
      badge: 'PRESTIGE & ZERO-TRUST SECURITY',
      title: 'Full Floor & Corporate HQ Options.',
      description: 'Dedicated floors with high-speed fiber redundancy, zero-trust security, and private executive elevators for market leaders.',
      features: [
        'Private elevator access & lobbies',
        '24/7 dedicated facility engineering',
        'Rooftop executive wellness amenities',
      ],
      ctaText: 'Explore Premium Offices',
      page: 'spaces',
    },
    investor: {
      badge: 'HIGH ASSET YIELD',
      title: 'Strata-Title Commercial Asset.',
      description: 'Capitalize on Bandung’s central business district growth with premium strata-title office ownership offering strong rental yields.',
      features: [
        'Strata-title ownership structure',
        'High tenant retention rate',
        'Prime Asia Afrika CBD location',
      ],
      ctaText: 'Inquire Investment Dossier',
      page: 'find-space',
    },
  };

  const activeContent = contentMap[activeTab];

  return (
    <section id="business-journey" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block">
            TAILORED SOLUTIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-heading tracking-tight">
            Where Are You in Your <span className="text-[#E8860B]">Business Journey?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your current business stage to see how HQuarters accommodates your growth.
          </p>
        </div>

        {/* Clean Pill Tabs */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1.5 rounded-full flex flex-wrap justify-center gap-1 border border-slate-200/80">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50/80 rounded-[32px] p-8 sm:p-12 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start justify-between gap-8"
            >
              <div className="space-y-4 max-w-xl">
                <span className="px-3 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block">
                  {activeContent.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                  {activeContent.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeContent.description}
                </p>

                <div className="space-y-2 pt-2">
                  {activeContent.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#E8860B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="self-end md:self-center shrink-0 w-full md:w-auto">
                <button
                  onClick={() => setCurrentPage && setCurrentPage(activeContent.page)}
                  className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>{activeContent.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
