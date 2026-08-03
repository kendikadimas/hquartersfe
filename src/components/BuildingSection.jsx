import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  Zap,
  Lock,
  Car,
  Waves,
  Dumbbell,
  ArrowRight,
  Flame
} from 'lucide-react';

export default function BuildingSection({ setCurrentPage }) {
  const buildingFeatures = [
    {
      id: 'infrastructure',
      badge: 'INFRASTRUCTURE',
      title: 'Everything Business Needs.',
      titleAccented: <>Everything <span className="text-[#E8860B]">Business Needs.</span></>,
      description: 'Comprehensive business facilities built to support corporate events, executive meetings, and daily operational excellence.',
      items: [
        { title: 'Meeting Rooms', desc: 'Executive boardrooms & private conference suites' },
        { title: 'Multi-Function Ballroom', desc: 'Spacious hall for galas, seminars, & corporate launches' },
        { title: 'Free High-Speed Wi-Fi', desc: 'Redundant fiber connectivity across common areas' },
        { title: 'Professional Property Management', desc: 'Dedicated concierge & 24/7 facility engineering' },
      ],
      image: '/ballroom.png',
      imageLeft: false,
    },
    {
      id: 'security',
      badge: 'ZERO-TRUST SECURITY',
      title: 'Confidence Comes From Feeling Secure.',
      titleAccented: <>Confidence Comes From <span className="text-[#E8860B]">Feeling Secure.</span></>,
      description: 'State-of-the-art protection systems ensuring peace of mind for tenants, visitors, and high-value corporate assets.',
      items: [
        { title: '24-Hour Security Patrol', desc: 'Round-the-clock trained security personnel on-site' },
        { title: 'High-Definition CCTV', desc: 'Complete surveillance coverage across access points' },
        { title: 'Controlled Biometric Access', desc: 'Smartcard & biometric turnstiles for tenant floors' },
        { title: 'Advanced Fire Protection', desc: 'Automated sprinklers, smoke sensors, & fire escapes' },
        { title: 'Full Building Insurance', desc: 'Certified to international safety & hazard standards' },
      ],
      image: '/security.png',
      imageLeft: true,
      note: 'Designed and maintained in accordance with high standards of safety and international building standards.',
    },
    {
      id: 'parking',
      badge: 'SMART MOBILITY',
      title: 'Arrive Without The Hassle.',
      titleAccented: <>Arrive Without <span className="text-[#E8860B]">The Hassle.</span></>,
      description: 'Next-generation automated parking infrastructure engineered to eliminate parking delays and maximize convenience.',
      items: [
        { title: 'Smart Automated Car Elevator', desc: 'Fast mechanical lift system delivering cars to reserved slots automatically' },
        { title: 'Ample Multi-Level Capacity', desc: 'Generous parking allocation for tenants, executives, and visiting clients' },
      ],
      image: '/parking.png',
      imageLeft: false,
    },
    {
      id: 'wellness',
      badge: 'LIFESTYLE & WELLNESS',
      title: 'Work Better, Recharge Better.',
      titleAccented: <>Work Better, <span className="text-[#E8860B]">Recharge Better.</span></>,
      description: 'Premium rooftop relaxation amenities providing the perfect balance between high-intensity work and personal wellness.',
      items: [
        { title: 'Executive Fitness Gym', desc: 'State-of-the-art cardio & strength training equipment' },
        { title: 'Thermal Sauna Suite', desc: 'Rejuvenating dry & wet sauna rooms for post-work recovery' },
        { title: 'Rooftop Infinity Swimming Pool', desc: 'Unobstructed panoramic view of Bandung city & mountain horizon' },
        { title: 'Outdoor Sky Deck Lounge', desc: 'Landscaped open-air deck for informal meetings & evening relaxation' },
      ],
      image: '/rooftop_pool.png',
      imageLeft: true,
    },
  ];

  return (
    <section id="building" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            BUILDING & AMENITIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 font-heading tracking-tight">
            Built for Business. <span className="text-[#E8860B]">Designed for Life.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            HQuarters combines professional infrastructure, security and lifestyle amenities for a modern business environment.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. ALTERNATING FEATURE SHOWCASE BLOCKS */}
        {/* ========================================================================= */}
        <div className="space-y-16">
          {buildingFeatures.map((block) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50/70 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left or Right Image */}
              <div className={`lg:col-span-6 ${block.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-[24px] overflow-hidden shadow-md border border-slate-200/80 aspect-[16/11]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs uppercase tracking-wider shadow">
                      {block.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Left or Right Text Content */}
              <div className={`lg:col-span-6 space-y-6 ${block.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                    {block.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900">
                    {block.titleAccented}
                  </h2>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {block.description}
                  </p>
                </div>

                {/* Feature Checklist Grid */}
                <div className="space-y-3 pt-2 border-t border-slate-200/60">
                  {block.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FEF3E2] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8860B]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500 font-normal">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {block.note && (
                  <p className="text-xs italic text-slate-500 bg-white p-3.5 rounded-xl border border-slate-200/70">
                    💡 {block.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM CTA BANNER */}
        {/* ========================================================================= */}
        <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-4 border border-white/15">
              THE HQUARTERS EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              This Is What A <span className="text-amber-400">Modern Workplace</span> Should Feel Like.
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              Experience the pinnacle of corporate infrastructure, automated mobility, and lifestyle amenities in Bandung CBD.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage && setCurrentPage('spaces')}
                className="px-7 py-3.5 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Find A Space</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
