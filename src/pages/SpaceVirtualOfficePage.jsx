import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FindSpaceSection from '../components/FindSpaceSection.jsx';

export default function SpaceVirtualOfficePage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const includedItems = [
    'Professional Business Address',
    'Mail Handling',
    'Reception Support',
    'Meeting Room Access',
    'Call Handling*',
    'Business Domicile Support*',
  ];

  const perfectForPills = [
    'Entrepreneurs', 'New Companies', 'Consultants',
    'Remote Businesses', 'Regional Representatives', 'Independent Professionals'
  ];

  const packages = [
    { title: 'Basic Address', desc: 'Prestigious Asia Afrika CBD address & mail receipt' },
    { title: 'Business', desc: 'Address + Mail handling + Legal business domicile letter' },
    { title: 'Professional', desc: 'Full address + Domicile + Phone line & monthly meeting room hours' },
    { title: 'Custom', desc: 'Tailored Enterprise virtual office & multi-city representation' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="spaces" setCurrentPage={setCurrentPage} />

      <main className="pt-24 sm:pt-28 pb-28 space-y-28 sm:space-y-36">
        
        {/* BREADCRUMBS & HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('home');
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-1.5 hover:text-[#EA8E18] transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('spaces');
                window.scrollTo(0, 0);
              }}
              className="hover:text-[#EA8E18] transition-colors cursor-pointer"
            >
              Spaces
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">Virtual Office</span>
          </nav>

          {/* Hero Card */}
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block">
                HQUARTERS VIRTUAL OFFICE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.12]">
                A Better Address for <br className="hidden sm:inline" />
                <span className="text-[#EA8E18]">Your Business.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Build your professional presence at HQuarters without maintaining a permanent office.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const pkgElem = document.getElementById('vo-packages');
                    if (pkgElem) pkgElem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>See Virtual Office Packages</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1 text-[#EA8E18]">✓ Asia Afrika CBD Domicile</span>
                <span>•</span>
                <span>Mail & Reception Handling</span>
                <span>•</span>
                <span>Meeting Room Hours Included</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[24px] overflow-hidden border border-slate-200/80 aspect-[4/3] shadow-xl group bg-slate-100">
                <img
                  src="/SPACES/SERVICED OFFICE/2.png"
                  alt="HQuarters Virtual Office Domicile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATEMENT 1: YOU DON'T ALWAYS NEED AN OFFICE */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            You Don’t Always Need An Office. <br className="hidden sm:inline" />
            <span className="text-[#EA8E18]">But Your Business Still Needs A Presence.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Remote business? New company? Independent professional? Branch representation? Build credibility with a professional business address at HQuarters.
          </p>
        </section>

        {/* INCLUDED: MORE THAN JUST AN ADDRESS */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 border border-slate-200/80 space-y-8 max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                More Than Just An Address.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {includedItems.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="w-5 h-[2px] bg-[#EA8E18] rounded-full shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 text-center font-medium">
              *Available depending on selected package.
            </p>
          </div>
        </section>

        {/* DARK STATEMENT BANNER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Work From Anywhere. Be Present Here.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              Your team may work remotely. Your business address doesn't have to look temporary.
            </p>
            <div className="font-bold text-[#EA8E18] text-base sm:text-lg font-heading">
              Professional presence without permanent overhead.
            </div>
          </div>
        </section>

        {/* PERFECT FOR */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Perfect For
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {perfectForPills.map((pill) => (
              <span
                key={pill}
                className="px-5 py-2.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 font-bold text-xs sm:text-sm hover:bg-[#EA8E18] hover:text-white transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </section>

        {/* CHOOSE YOUR PACKAGE */}
        <section id="vo-packages" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Choose Your Package.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white p-7 rounded-[24px] border border-slate-200/80 shadow-sm text-center space-y-3 hover:border-[#EA8E18]/40 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (setCurrentPage) setCurrentPage('find-space');
                      window.scrollTo(0, 0);
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#EA8E18] text-slate-800 hover:text-white font-bold text-xs transition-colors"
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center pt-4">
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('find-space');
                window.scrollTo(0, 0);
              }}
              className="px-8 py-3.5 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2 group"
            >
              <span>Compare Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div> */}
        </section>

        <FindSpaceSection initialSpace="Virtual Office" />

        {/* BOTTOM DARK BANNER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Every Business Needs Somewhere To Begin.
            </h2>
            <div>
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('find-space');
                  window.scrollTo(0, 0);
                }}
                className="font-bold text-[#EA8E18] hover:text-[#d88010] text-lg font-heading underline underline-offset-4 cursor-pointer"
              >
                Begin at HQuarters.
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
