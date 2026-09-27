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
        { name: 'Allianz', logo: '/tenants/alllogo-gf-allianz.webp?v=20260826', scale: 'scale-120' },
        { name: 'AXA', logo: '/tenants/alllogo-7de-axa.webp?v=20260826', scale: 'scale-125' },
        { name: 'MSIG', logo: '/tenants/alllogo-9ef-msig.webp?v=20260826', scale: 'scale-120' },
        { name: 'FWD Insurance', logo: '/tenants/alllogo-6fgh-fwd.webp?v=20260826', scale: 'scale-120' },
        { name: 'Avrist Assurance', logo: '/tenants/alllogo-19r-avrist.webp?v=20260826', scale: 'scale-120' },
        { name: 'NH Korindo Sekuritas', logo: '/tenants/alllogo-5d-nh-korindo-sekuritas.webp?v=20260826', scale: 'scale-125' },
        { name: 'Bmoney', logo: '/tenants/alllogo-6k-b-money.webp?v=20260826', scale: 'scale-125' },
        { name: 'Henan Sekuritas', logo: '/tenants/alllogo-16e-henan-sekuritas-copy.webp?v=20260826', scale: 'scale-125' },
        { name: 'DANA Indonesia', logo: '/tenants/alllogo-19-op-dana-logo.webp?v=20260826', scale: 'scale-125' },
        { name: 'Interpan Tradepro', logo: '/tenants/alllogo-6i-interpan-tradepro.webp?v=20260826', scale: 'scale-125' },
        { name: 'Mega Menara Mas', logo: '/tenants/alllogo-3i-mega-menara-mas-a5-copy.webp?v=20260826', scale: 'scale-125' },
      ],
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      partners: [
        { name: 'Roche', logo: '/tenants/alllogo-16j-roche.webp?v=20260826', scale: 'scale-125' },
        { name: 'Medion', logo: '/tenants/alllogo-15-rstkj-medion-logo.webp?v=20260826', scale: 'scale-125' },
        { name: 'Hasna Medika', logo: '/tenants/alllogo-12ij-hasna-copy-2.webp?v=20260826', scale: 'scale-125' },
        { name: 'Amoures Clinic', logo: '/tenants/alllogo-12m-amoures.webp?v=20260826', scale: 'scale-125' },
        { name: 'Dispendix', logo: '/tenants/alllogo-dispendixbicocompany.webp?v=20260826', scale: 'scale-125' },
      ],
    },
    {
      id: 'tech',
      title: 'Technology & Media',
      icon: Cpu,
      partners: [
        { name: 'Huawei', logo: '/tenants/alllogo-19-efhijk-huawei-logo.webp?v=20260826', scale: 'scale-120' },
        { name: 'Datacolor', logo: '/tenants/alllogo-6a-data-color.webp?v=20260826', scale: 'scale-120' },
        { name: 'Garuda TV', logo: '/tenants/alllogo-gf-b-garuda.webp?v=20260826', scale: 'scale-85' },
        { name: 'INET Media', logo: '/tenants/alllogo-6d-inet-media.webp?v=20260826', scale: 'scale-125' },
        { name: 'VML Agency', logo: '/tenants/alllogo-7q-vml.webp?v=20260826', scale: 'scale-125' },
        { name: 'Social Bread', logo: '/tenants/alllogo-5q-social-bread-logo-a4-cmyk.webp?v=20260826', scale: 'scale-125' },
        { name: 'Hubton Studio', logo: '/tenants/8D hubton-totem-hq-B.webp?v=20260825', scale: 'scale-125' },
        { name: 'Senjakara Media', logo: '/tenants/alllogo-8p-senjakara.webp?v=20260826', scale: 'scale-125' },
        { name: 'Inpam Tekno', logo: '/tenants/alllogo-7j-inpam-mini-riset.webp?v=20260826', scale: 'scale-120' },
        { name: 'Neo IT', logo: '/tenants/10 neo.webp?v=20260825', scale: 'scale-125' },
      ],
    },
    {
      id: 'industrial',
      title: 'Industrial, Logistics & Engineering',
      icon: Factory,
      partners: [
        { name: 'Mitsubishi Chemical', logo: '/tenants/alllogo-7i-mitsubishi.webp?v=20260826', scale: 'scale-125' },
        { name: 'Hyosung Corp', logo: '/tenants/alllogo-8q-hyusung.webp?v=20260826', scale: 'scale-125' },
        { name: 'PT Integra Dayacipta Grahatama', logo: '/tenants/alllogo-5n-integra-logo-baru001.webp?v=20260826', scale: 'scale-125' },
        { name: 'GSS Engineering', logo: '/tenants/alllogo-10h-gss.webp?v=20260826', scale: 'scale-125' },
        { name: 'HGS Sourcing', logo: '/tenants/alllogo-10q-hgs.webp?v=20260826', scale: 'scale-125' },
        { name: 'Aero Logistics', logo: '/tenants/alllogo-ug-aero.webp?v=20260826', scale: 'scale-125' },
        { name: 'PT Biru Global', logo: '/tenants/alllogo-17-abcdeflmnop-pt-biru.webp?v=20260826', scale: 'scale-125' },
        { name: 'PT Bagja', logo: '/tenants/alllogo-8fgh-pt-bagja.webp?v=20260826', scale: 'scale-125' },
        { name: 'Kreasi Perdana', logo: '/tenants/alllogo-15o-kreasi-perdana.webp?v=20260826', scale: 'scale-125' },
        { name: 'Daya Inara', logo: '/tenants/alllogo-15i-daya-inara.webp?v=20260826', scale: 'scale-120' },
      ],
    },
    {
      id: 'property',
      title: 'Property, Education & Professional Services',
      icon: Building,
      partners: [
        { name: 'Ray White', logo: '/tenants/raywhite.webp?v=20260825', scale: 'scale-125' },
        { name: 'IWG Workspace', logo: '/tenants/alllogo-20-iwg-hq.webp?v=20260826', scale: 'scale-120' },
        { name: 'Kozystay', logo: '/tenants/alllogo-kozystay.webp?v=20260826', scale: 'scale-125' },
        { name: 'Investaland', logo: '/tenants/alllogo-logo-investaland.webp?v=20260826', scale: 'scale-125' },
        { name: 'Artaloka', logo: '/tenants/alllogo-12c-artaloka.webp?v=20260826', scale: 'scale-125' },
        { name: 'TDE Design', logo: '/tenants/alllogo-12k-logo-tde---totem-pylon-hquarters-2.webp?v=20260826', scale: 'scale-125' },
        { name: 'Kobi Education', logo: '/tenants/alllogo-11h-kobi.webp?v=20260826', scale: 'scale-120' },
        { name: 'Australia Int. College', logo: '/tenants/alllogo-6l-australia-international-college.webp?v=20260826', scale: 'scale-120' },
        { name: 'Universal Consulting', logo: '/tenants/alllogo-6q-universal.webp?v=20260826', scale: 'scale-125' },
        { name: 'ASA Consulting', logo: '/tenants/alllogo-9q-asa.webp?v=20260826', scale: 'scale-125' },
        { name: 'CAS Services', logo: '/tenants/alllogo-5s-cas.webp?v=20260826', scale: 'scale-125' },
        { name: 'AZ Pro Services', logo: '/tenants/alllogo-ug-az-pro.webp?v=20260826', scale: 'scale-120' },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Travel & Lifestyle',
      icon: Coffee,
      partners: [
        { name: 'HIS Travel', logo: '/tenants/alllogo-ug-his-travel.webp?v=20260826', scale: 'scale-125' },
        { name: 'Hamidah Tour & Travel', logo: '/tenants/alllogo-9m-hamidah-tour-new.webp?v=20260826', scale: 'scale-125' },
        { name: 'Tomoro Coffee', logo: '/tenants/alllogo-gf-tomoro.webp?v=20260826', scale: 'scale-125' },
        { name: 'Rejuve Juice', logo: '/tenants/alllogo-gf-cmyk-rejuve-new-logo2025color.webp?v=20260826', scale: 'scale-125' },
        { name: 'Jus Gaban', logo: '/tenants/GF Jus Gaban.webp?v=20260825', scale: 'scale-125' },
        { name: 'Sal Corner', logo: '/tenants/alllogo-gf-sal-corner.webp?v=20260826', scale: 'scale-125' },
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
