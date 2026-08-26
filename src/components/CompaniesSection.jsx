import React from 'react';
import { motion } from 'framer-motion';
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
  const industrySectors = [
    {
      id: 'financial',
      title: 'Insurance & Financial Services',
      icon: ShieldCheck,
      partners: [
        { name: 'Allianz', logo: '/tenants/allianz.webp?v=20260825', scale: 'scale-120' },
        { name: 'AXA', logo: '/tenants/axa.webp?v=20260825', scale: 'scale-125' },
        { name: 'MSIG', logo: '/tenants/msig.webp?v=20260825', scale: 'scale-120' },
        { name: 'FWD Insurance', logo: '/tenants/fwd.webp?v=20260825', scale: 'scale-120' },
        { name: 'Avrist Assurance', logo: '/tenants/avrist.webp?v=20260825', scale: 'scale-120' },
        { name: 'NH Korindo Sekuritas', logo: '/tenants/korindo-sekuritas.webp?v=20260825', scale: 'scale-125' },
        { name: 'Bmoney', logo: '/tenants/bmoney.webp?v=20260825', scale: 'scale-125' },
        { name: 'Henan Sekuritas', logo: '/tenants/henan.webp?v=20260825', scale: 'scale-125' },
        { name: 'DANA Indonesia', logo: '/tenants/19 OP Dana-Logo.webp?v=20260825', scale: 'scale-125' },
        { name: 'Interpan Tradepro', logo: '/tenants/6i interpan tradepro.webp?v=20260825', scale: 'scale-125' },
        { name: 'Mega Menara Mas', logo: '/tenants/3I mega menara mas a5.webp?v=20260825', scale: 'scale-125' },
      ],
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      partners: [
        { name: 'Roche', logo: '/tenants/roche.webp?v=20260825', scale: 'scale-125' },
        { name: 'Medion', logo: '/tenants/medion.webp?v=20260825', scale: 'scale-125' },
        { name: 'Hasna Medika', logo: '/tenants/12ij Hasna copy 2.webp?v=20260825', scale: 'scale-125' },
        { name: 'Amoures Clinic', logo: '/tenants/12m amoures.webp?v=20260825', scale: 'scale-125' },
      ],
    },
    {
      id: 'tech',
      title: 'Technology & Media',
      icon: Cpu,
      partners: [
        { name: 'Huawei', logo: '/tenants/19 EFHIJK Huawei-Logo.webp?v=20260825', scale: 'scale-120' },
        { name: 'Datacolor', logo: '/tenants/datacolor.webp?v=20260825', scale: 'scale-120' },
        { name: 'Garuda TV', logo: '/tenants/garuda-tv.webp?v=20260825', scale: 'scale-85' },
        { name: 'INET Media', logo: '/tenants/inet-media.webp?v=20260825', scale: 'scale-125' },
        { name: 'VML Agency', logo: '/tenants/vml.webp?v=20260825', scale: 'scale-125' },
        { name: 'Social Bread', logo: '/tenants/5Q Social Bread Logo A4 CMYK.webp?v=20260825', scale: 'scale-125' },
        { name: 'Hubton Studio', logo: '/tenants/8D hubton-totem-hq-B.webp?v=20260825', scale: 'scale-125' },
        { name: 'Senjakara Media', logo: '/tenants/8p senjakara.webp?v=20260825', scale: 'scale-125' },
        { name: 'Inpam Tekno', logo: '/tenants/7J Inpam Mini Riset.webp?v=20260825', scale: 'scale-120' },
        { name: 'Neo IT', logo: '/tenants/10 neo.webp?v=20260825', scale: 'scale-125' },
      ],
    },
    {
      id: 'industrial',
      title: 'Industrial, Logistics & Engineering',
      icon: Factory,
      partners: [
        { name: 'Mitsubishi Chemical', logo: '/tenants/mitsubishi.webp?v=20260825', scale: 'scale-125' },
        { name: 'Hyosung Corp', logo: '/tenants/hyusung.webp?v=20260825', scale: 'scale-125' },
        { name: 'PT Integra Dayacipta Grahatama', logo: '/tenants/10F PT Integra Dayacipta grahatama.webp?v=20260825', scale: 'scale-125' },
        { name: 'GSS Engineering', logo: '/tenants/10h gss.webp?v=20260825', scale: 'scale-125' },
        { name: 'HGS Sourcing', logo: '/tenants/10Q HGS.webp?v=20260825', scale: 'scale-125' },
        { name: 'Aero Logistics', logo: '/tenants/aero.webp?v=20260825', scale: 'scale-125' },
        { name: 'PT Biru Global', logo: '/tenants/17 ABCDEFLMNOP PT Biru.webp?v=20260825', scale: 'scale-125' },
        { name: 'PT Bagja', logo: '/tenants/8fgh pt bagja.webp?v=20260825', scale: 'scale-125' },
        { name: 'Kreasi Perdana', logo: '/tenants/15O kreasi perdana.webp?v=20260825', scale: 'scale-125' },
        { name: 'Daya Inara', logo: '/tenants/15i Daya Inara.webp?v=20260825', scale: 'scale-120' },
      ],
    },
    {
      id: 'property',
      title: 'Property, Education & Professional Services',
      icon: Building,
      partners: [
        { name: 'Ray White', logo: '/tenants/raywhite.webp?v=20260825', scale: 'scale-125' },
        { name: 'IWG Workspace', logo: '/tenants/iwg.webp?v=20260825', scale: 'scale-120' },
        { name: 'Kozystay', logo: '/tenants/kozystay.webp?v=20260825', scale: 'scale-125' },
        { name: 'Investaland', logo: '/tenants/Logo Investaland.webp?v=20260825', scale: 'scale-125' },
        { name: 'Artaloka', logo: '/tenants/artaloka.webp?v=20260825', scale: 'scale-125' },
        { name: 'TDE Design', logo: '/tenants/12K Logo TDE - Totem Pylon HQuarters (2).webp?v=20260825', scale: 'scale-125' },
        { name: 'Kobi Education', logo: '/tenants/11h kobi.webp?v=20260825', scale: 'scale-120' },
        { name: 'Australia Int. College', logo: '/tenants/6L Australia International College.webp?v=20260825', scale: 'scale-120' },
        { name: 'Universal Consulting', logo: '/tenants/universal.webp?v=20260825', scale: 'scale-125' },
        { name: 'ASA Consulting', logo: '/tenants/9Q ASA.webp?v=20260825', scale: 'scale-125' },
        { name: 'CAS Services', logo: '/tenants/5s cas.webp?v=20260825', scale: 'scale-125' },
        { name: 'AZ Pro Services', logo: '/tenants/UG AZ PRo.webp?v=20260825', scale: 'scale-120' },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Travel & Lifestyle',
      icon: Coffee,
      partners: [
        { name: 'HIS Travel', logo: '/tenants/his-travel.webp?v=20260825', scale: 'scale-125' },
        { name: 'Hamidah Tour & Travel', logo: '/tenants/9m Hamidah tour new.webp?v=20260825', scale: 'scale-125' },
        { name: 'Tomoro Coffee', logo: '/tenants/tomoro.webp?v=20260825', scale: 'scale-125' },
        { name: 'Rejuve Juice', logo: '/tenants/GF [CMYK] Rejuve New Logo_2025_Color.webp?v=20260825', scale: 'scale-125' },
        { name: 'Jus Gaban', logo: '/tenants/GF Jus Gaban.webp?v=20260825', scale: 'scale-125' },
        { name: 'Sal Corner', logo: '/tenants/GF sal corner.webp?v=20260825', scale: 'scale-125' },
      ],
    },
  ];

  return (
    <section id="companies" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        
        
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-6xl font-medium text-slate-900 font-heading tracking-tight">
            You're In <br /><span className="text-[#EA8E18]">Good Company.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Businesses choose buildings. But great businesses also create communities.
          </p>
        </div>

        
        
        
        <div className="space-y-12">
          {industrySectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50/70 rounded-2xl sm:rounded-[40px] p-8 sm:p-10 border border-slate-200/80 shadow-sm"
              >
                
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/70">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-sm">
                    <Icon className="w-5 h-5 text-[#EA8E18]" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-medium font-heading text-slate-900">
                      {sector.title}
                    </h2>
                  </div>
                </div>

                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                  {sector.partners.map((partner) => (
                    <motion.div
                      key={partner.name}
                      className="bg-white h-28 sm:h-32 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-center p-3 sm:p-4 overflow-hidden group"
                    >
                      <img loading="lazy"
                        src={partner.logo}
                        alt={partner.name}
                        className={`w-full h-full object-contain transition-transform duration-300 ${partner.scale || 'scale-125'}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#FAF8F5] rounded-2xl sm:rounded-[40px] p-8 sm:p-16 text-center border border-slate-200/80 relative overflow-hidden"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-medium font-heading text-slate-900 tracking-tight leading-tight">
              Why It Matters Who Your <br />
              <span className="text-[#EA8E18] font-medium">Neighbours Are.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              A strong business environment builds confidence — for your clients, your employees, your partners, and everyone considering doing business with you.
            </p>

            <div className="pt-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#EA8E18]/40" />
              <span className="text-base sm:text-lg font-medium text-slate-900 font-heading italic tracking-wide">
                "Credibility lives in context."
              </span>
              <span className="h-px w-10 bg-[#EA8E18]/40" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
