import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  HeartPulse,
  Cpu,
  Factory,
  Building,
  Coffee,
  ArrowRight
} from 'lucide-react';

export default function CompaniesSection({ setCurrentPage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Industries' },
    { id: 'financial', label: 'Insurance & Financial' },
    { id: 'healthcare', label: 'Healthcare & Life Sciences' },
    { id: 'tech', label: 'Technology & Media' },
    { id: 'industrial', label: 'Industrial & Manufacturing' },
    { id: 'property', label: 'Property & Business Services' },
    { id: 'lifestyle', label: 'Travel & Lifestyle' },
  ];

  // Helper renderer for authentic company logos (pure graphics/images, no text cards)
  const renderLogoImage = (name) => {
    switch (name) {
      case 'Allianz':
        return (
          <svg className="h-9 w-auto max-w-[140px]" viewBox="0 0 160 40" fill="none">
            <circle cx="20" cy="20" r="16" fill="#00377B" />
            <path d="M12 26V14L16 26H20L24 14V26H28V14H22L18 24L14 14H8V26H12Z" fill="white" />
            <text x="44" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="22" fill="#00377B" letterSpacing="-0.5">Allianz</text>
          </svg>
        );
      case 'AXA':
        return (
          <svg className="h-9 w-auto max-w-[120px]" viewBox="0 0 120 40" fill="none">
            <rect width="40" height="40" rx="6" fill="#00008F" />
            <path d="M10 30L20 10L30 30H24L20 22L16 30H10Z" fill="white" />
            <line x1="8" y1="34" x2="32" y2="6" stroke="#FF0000" strokeWidth="3" />
            <text x="48" y="28" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="24" fill="#00008F">AXA</text>
          </svg>
        );
      case 'MSIG':
        return (
          <svg className="h-9 w-auto max-w-[130px]" viewBox="0 0 130 40" fill="none">
            <path d="M10 8H30V32H10V8Z" fill="#1C355E" />
            <circle cx="20" cy="20" r="6" fill="#E60012" />
            <text x="38" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="22" fill="#1C355E" letterSpacing="1">MSIG</text>
          </svg>
        );
      case 'FWD Insurance':
        return (
          <svg className="h-9 w-auto max-w-[140px]" viewBox="0 0 150 40" fill="none">
            <path d="M8 10H24V16H14V22H22V28H14V34H8V10Z" fill="#E87722" />
            <text x="32" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="24" fill="#E87722">FWD</text>
          </svg>
        );
      case 'Avrist':
        return (
          <svg className="h-9 w-auto max-w-[130px]" viewBox="0 0 130 40" fill="none">
            <path d="M8 32L20 8L32 32H24L20 22L16 32H8Z" fill="#005A9C" />
            <text x="38" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="22" fill="#005A9C">Avrist</text>
          </svg>
        );
      case 'NH Korindo':
        return (
          <svg className="h-9 w-auto max-w-[150px]" viewBox="0 0 160 40" fill="none">
            <rect width="32" height="32" x="4" y="4" fill="#002D62" rx="4" />
            <text x="11" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="16" fill="white">NH</text>
            <text x="44" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="#002D62">NH KORINDO</text>
          </svg>
        );
      case 'Bmoney':
        return (
          <svg className="h-9 w-auto max-w-[140px]" viewBox="0 0 140 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#2563EB" />
            <path d="M16 12H22C24.2 12 26 13.8 26 16C26 17.5 25.2 18.8 24 19.5C25.5 20.2 26.5 21.7 26.5 23.5C26.5 25.9 24.5 28 22 28H16V12Z" fill="white" />
            <text x="42" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="20" fill="#1E293B">bmoney</text>
          </svg>
        );
      case 'Roche':
        return (
          <svg className="h-9 w-auto max-w-[130px]" viewBox="0 0 130 40" fill="none">
            <polygon points="20,6 34,14 34,26 20,34 6,26 6,14" fill="#0066CC" />
            <text x="42" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="22" fill="#0066CC">Roche</text>
          </svg>
        );
      case 'Medion':
        return (
          <svg className="h-9 w-auto max-w-[130px]" viewBox="0 0 130 40" fill="none">
            <circle cx="20" cy="20" r="14" fill="#DC2626" />
            <path d="M12 26L20 14L28 26H12Z" fill="white" />
            <text x="40" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="22" fill="#DC2626">MEDION</text>
          </svg>
        );
      case 'Datacolor':
        return (
          <svg className="h-9 w-auto max-w-[150px]" viewBox="0 0 160 40" fill="none">
            <rect x="6" y="8" width="10" height="24" fill="#E11D48" />
            <rect x="18" y="8" width="10" height="24" fill="#2563EB" />
            <text x="36" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="19" fill="#0F172A">datacolor</text>
          </svg>
        );
      case 'Garuda Vision TV':
        return (
          <svg className="h-9 w-auto max-w-[160px]" viewBox="0 0 170 40" fill="none">
            <path d="M8 20L20 8L32 20L20 32Z" fill="#D97706" />
            <text x="40" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="16" fill="#1E293B">GARUDA VISION</text>
          </svg>
        );
      case 'INETmedia':
        return (
          <svg className="h-9 w-auto max-w-[140px]" viewBox="0 0 140 40" fill="none">
            <circle cx="18" cy="20" r="12" fill="#0284C7" />
            <text x="36" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="20" fill="#0284C7">INETmedia</text>
          </svg>
        );
      case 'VML':
        return (
          <svg className="h-9 w-auto max-w-[120px]" viewBox="0 0 120 40" fill="none">
            <path d="M6 10L16 30L26 10H34L22 34H10L0 10H6Z" fill="#0F172A" />
            <text x="38" y="28" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="26" fill="#0F172A">VML</text>
          </svg>
        );
      case 'Mitsubishi Chemical':
        return (
          <svg className="h-9 w-auto max-w-[180px]" viewBox="0 0 190 40" fill="none">
            <polygon points="16,6 24,20 8,20" fill="#E11D48" />
            <polygon points="24,20 32,34 16,34" fill="#E11D48" />
            <polygon points="8,20 16,34 0,34" fill="#E11D48" />
            <text x="38" y="25" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="15" fill="#0F172A">MITSUBISHI</text>
          </svg>
        );
      case 'PT Fasic Indonesia':
        return (
          <svg className="h-9 w-auto max-w-[160px]" viewBox="0 0 160 40" fill="none">
            <rect x="6" y="8" width="24" height="24" fill="#0D9488" rx="4" />
            <text x="12" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="16" fill="white">F</text>
            <text x="38" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="#0D9488">FASIC</text>
          </svg>
        );
      case 'Ray White':
        return (
          <svg className="h-9 w-auto max-w-[140px]" viewBox="0 0 140 40" fill="none">
            <rect width="140" height="40" rx="6" fill="#FACC15" />
            <text x="12" y="27" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="20" fill="#0F172A">Ray White</text>
          </svg>
        );
      case 'HQ':
        return (
          <svg className="h-9 w-auto max-w-[100px]" viewBox="0 0 100 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#E8860B" />
            <text x="8" y="28" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="22" fill="white">HQ</text>
            <text x="48" y="28" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="22" fill="#0F172A">HQ</text>
          </svg>
        );
      case 'IDG':
        return (
          <svg className="h-9 w-auto max-w-[110px]" viewBox="0 0 110 40" fill="none">
            <text x="10" y="28" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="28" fill="#1D4ED8" letterSpacing="1">IDG</text>
          </svg>
        );
      case 'Arthaloka':
        return (
          <svg className="h-9 w-auto max-w-[150px]" viewBox="0 0 160 40" fill="none">
            <circle cx="18" cy="20" r="12" fill="#B45309" />
            <text x="38" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="#78350F">ARTHALOKA</text>
          </svg>
        );
      case 'Universal':
        return (
          <svg className="h-9 w-auto max-w-[150px]" viewBox="0 0 160 40" fill="none">
            <circle cx="18" cy="20" r="12" fill="#475569" />
            <text x="36" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="#334155">UNIVERSAL</text>
          </svg>
        );
      case 'HIS Travel':
        return (
          <svg className="h-9 w-auto max-w-[140px]" viewBox="0 0 140 40" fill="none">
            <rect width="36" height="36" x="2" y="2" fill="#1E40AF" rx="6" />
            <text x="8" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="white">HIS</text>
            <text x="44" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="#1E40AF">TRAVEL</text>
          </svg>
        );
      case 'Tomoro Coffee':
        return (
          <svg className="h-9 w-auto max-w-[160px]" viewBox="0 0 170 40" fill="none">
            <rect width="170" height="40" rx="8" fill="#EA580C" />
            <text x="14" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="white" letterSpacing="1">TOMORO COFFEE</text>
          </svg>
        );
      case 'Asra Global Indonesia':
        return (
          <svg className="h-9 w-auto max-w-[160px]" viewBox="0 0 170 40" fill="none">
            <circle cx="18" cy="20" r="12" fill="#059669" />
            <text x="36" y="26" fontFamily="Satoshi, sans-serif" fontWeight="900" fontSize="18" fill="#047857">ASRA GLOBAL</text>
          </svg>
        );
      default:
        return (
          <span className="font-extrabold text-xl text-slate-800 tracking-tight font-heading">
            {name}
          </span>
        );
    }
  };

  const industrySectors = [
    {
      id: 'financial',
      title: 'Insurance & Financial Services',
      icon: ShieldCheck,
      partners: [
        { name: 'Allianz', logo: '/tenants/allianz.png', scale: 'scale-110' },
        { name: 'AXA', logo: '/tenants/axa.png', scale: 'scale-110' },
        { name: 'MSIG', logo: '/tenants/msig.png', scale: 'scale-110' },
        { name: 'FWD Insurance', logo: '/tenants/fwd.png', scale: 'scale-110' },
        { name: 'Avrist', logo: '/tenants/avrist.png', scale: 'scale-110' },
        { name: 'Korindo Sekuritas', logo: '/tenants/korindo-sekuritas.png', scale: 'scale-125' },
        { name: 'Bmoney', logo: '/tenants/bmoney.png', scale: 'scale-125' },
        { name: 'Henan Sekuritas', logo: '/tenants/henan.png', scale: 'scale-125' },
      ],
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      partners: [
        { name: 'Roche', logo: '/tenants/roche.png', scale: 'scale-115' },
        { name: 'Medion', logo: '/tenants/medion.png', scale: 'scale-125' },
      ],
    },
    {
      id: 'tech',
      title: 'Technology & Media',
      icon: Cpu,
      partners: [
        { name: 'Datacolor', logo: '/tenants/datacolor.png', scale: 'scale-120' },
        { name: 'Garuda TV', logo: '/tenants/garuda-tv.png', scale: 'scale-100' },
        { name: 'INET Media', logo: '/tenants/inet-media.png', scale: 'scale-[1.5]' },
        { name: 'VML', logo: '/tenants/vml.png', scale: 'scale-120' },
      ],
    },
    {
      id: 'industrial',
      title: 'Industrial & Manufacturing',
      icon: Factory,
      partners: [
        { name: 'Mitsubishi', logo: '/tenants/mitsubishi.png', scale: 'scale-115' },
        { name: 'Hyosung', logo: '/tenants/hyusung.png', scale: 'scale-[1.6]' },
        { name: 'Integra', logo: '/tenants/integra.png', scale: 'scale-[1.5]' },
      ],
    },
    {
      id: 'property',
      title: 'Property & Business Services',
      icon: Building,
      partners: [
        { name: 'Ray White', logo: '/tenants/raywhite.png', scale: 'scale-[1.3]' },
        { name: 'IWG Workspace', logo: '/tenants/iwg.png', scale: 'scale-115' },
        { name: 'Artaloka', logo: '/tenants/artaloka.png', scale: 'scale-[1.3]' },
        { name: 'Universal', logo: '/tenants/universal.png', scale: 'scale-[1.3]' },
        { name: 'Aero', logo: '/tenants/aero.png', scale: 'scale-[1.3]' },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Travel & Lifestyle',
      icon: Coffee,
      partners: [
        { name: 'HIS Travel', logo: '/tenants/his-travel.png', scale: 'scale-115' },
        { name: 'Tomoro Coffee', logo: '/tenants/tomoro.png', scale: 'scale-115' },
      ],
    },
  ];

  const filteredSectors = activeCategory === 'all'
    ? industrySectors
    : industrySectors.filter((s) => s.id === activeCategory);

  return (
    <section id="companies" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 font-heading tracking-tight">
            You’re In <span className="text-[#E8860B]">Good Company.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Businesses choose buildings. But great businesses also create communities.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. CATEGORY TABS */}
        {/* ========================================================================= */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1.5 rounded-full flex flex-wrap justify-center gap-1 border border-slate-200/80">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. INDUSTRY SECTORS TENANT LOGO CARDS */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50/70 rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 border border-slate-200/80 shadow-sm"
                >
                  {/* Sector Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/70">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-sm">
                      <Icon className="w-5 h-5 text-[#E8860B]" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                        {sector.title}
                      </h2>
                      <p className="text-xs text-slate-500 font-medium">
                        {sector.partners.length} Enterprise Tenants & Partners
                      </p>
                    </div>
                  </div>

                  {/* Partner Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {sector.partners.map((partner) => (
                      <motion.div
                        key={partner.name}
                        whileHover={{ scale: 1.04 }}
                        className="bg-white h-32 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#E8860B]/40 transition-all duration-300 flex items-center justify-center p-4 sm:p-5 overflow-hidden group cursor-pointer"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className={`w-full h-full max-h-20 object-contain transition-transform duration-300 group-hover:scale-105 ${partner.scale || 'scale-125'}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* 4. WHY IT MATTERS WHO YOUR NEIGHBOURS ARE */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#f6f4f0] rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 text-center border border-slate-200/80 relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight">
              Why It Matters Who Your <span className="text-[#E8860B]">Neighbours Are.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              A strong business environment builds confidence — for your clients, your employees, your partners, and everyone considering doing business with you.
            </p>

            <div className="pt-4">
              <span className="inline-block px-6 py-2.5 rounded-full bg-slate-900 text-white font-extrabold text-sm sm:text-base font-heading tracking-wide shadow-md">
                Credibility lives in context.
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 5. JOIN THE BUSINESSES GROWING FROM HQUARTERS CTA BANNER */}
        {/* ========================================================================= */}
        <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-4 border border-white/15">
              GROW YOUR BUSINESS WITH US
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Join The Businesses <span className="text-amber-400">Growing From HQuarters.</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Position your company among global enterprise tenants and market leaders in Bandung CBD.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage && setCurrentPage('spaces')}
                className="px-8 py-4 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Find Your Space</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Schedule Private Consultation
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
