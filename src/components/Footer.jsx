import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Facebook, MapPin, Phone, Mail, X, ShieldCheck, FileText } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  const handleNavClick = (page, anchor) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      if (anchor) {
        setTimeout(() => {
          const elem = document.querySelector(anchor);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 text-sm border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Address Info */}
          <div className="lg:col-span-2 space-y-5">
            <button onClick={() => handleNavClick('home')} className="flex items-center text-left group cursor-pointer">
              <img
                src="/LOGO/hquarters-logo-wordmark.png"
                alt="HQuarters Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 bg-white/90 px-3 py-1.5 rounded-xl shadow-md"
              />
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              Asia Afrika CBD, Bandung. Space for every stage of your business journey — from virtual office to corporate headquarters.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 font-medium pt-1">
              <a
                href="https://maps.google.com/?q=Jl.+Asia+Afrika+No.+158,+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#EA8E18] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#EA8E18] shrink-0 group-hover:scale-110 transition-transform" />
                <span>Jl. Asia Afrika No. 158, Bandung, Jawa Barat 40261</span>
              </a>
              <a
                href="tel:+62224201888"
                className="flex items-center gap-2.5 hover:text-[#EA8E18] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#EA8E18] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+62 22 420 1888</span>
              </a>
              <a
                href="mailto:info@hquarters.co.id"
                className="flex items-center gap-2.5 hover:text-[#EA8E18] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#EA8E18] shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@hquarters.co.id</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#EA8E18] border border-slate-800 hover:border-[#EA8E18] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#EA8E18] border border-slate-800 hover:border-[#EA8E18] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#EA8E18] border border-slate-800 hover:border-[#EA8E18] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#EA8E18] border border-slate-800 hover:border-[#EA8E18] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column 1: Spaces Offered */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-heading">
              Spaces Offered
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => handleNavClick('space-premium-office')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Premium Offices
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('space-soho-duplex')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  SOHO Duplex
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('space-serviced-office')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Serviced Office
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('space-virtual-office')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Virtual Office
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Building & Location */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-heading">
              Building & Location
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => handleNavClick('building')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Building Amenities
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('building')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Security & Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('building')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Automated Mechanical Parking
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('location')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Asia Afrika CBD Location
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Community & Insights */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-heading">
              Community & Media
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => handleNavClick('companies')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Tenant Community
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('insights')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Insights & Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('find-space')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Inquire For Space
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#EA8E18] transition-colors text-left cursor-pointer">
                  Home Overview
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <span>© {new Date().getFullYear()} HQuarters Business Residence. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => handleNavClick('spaces')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Site Map
            </button>
          </div>
        </div>

      </div>

      {/* LEGAL POLICY MODAL */}
      {modalType && createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-slate-900 rounded-[28px] max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3E2] text-[#EA8E18] flex items-center justify-center">
                    {modalType === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900">
                      {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                    </h3>
                    <p className="text-xs text-slate-500">HQuarters Business Residence • Bandung CBD</p>
                  </div>
                </div>

                <button
                  onClick={() => setModalType(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed font-normal">
                {modalType === 'privacy' ? (
                  <>
                    <p>
                      At HQuarters Business Residence, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or inquire about our workspace solutions.
                    </p>
                    <h4 className="font-bold text-slate-900 text-sm">1. Information Collection</h4>
                    <p>
                      We collect information provided directly by you when filling out inquiry forms, including your name, email address, WhatsApp number, and team workspace requirements.
                    </p>
                    <h4 className="font-bold text-slate-900 text-sm">2. Use of Information</h4>
                    <p>
                      Your information is exclusively used to respond to space inquiries, provide customized pricing quotes, schedule building tours, and deliver tenant support services.
                    </p>
                    <h4 className="font-bold text-slate-900 text-sm">3. Data Protection & Security</h4>
                    <p>
                      We maintain strict administrative and technical security measures to safeguard your personal details against unauthorized access or disclosure. We do not sell or rent customer data to third parties.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Welcome to HQuarters Business Residence. By accessing or using our services and website, you agree to comply with the following Terms of Service.
                    </p>
                    <h4 className="font-bold text-slate-900 text-sm">1. Workspace & Tenancy Agreements</h4>
                    <p>
                      All building visits, office leasing agreements, serviced suites, and virtual office domiciles are governed by formal lease contracts executed directly with HQuarters building management.
                    </p>
                    <h4 className="font-bold text-slate-900 text-sm">2. Domicile & Legal Use</h4>
                    <p>
                      Virtual office and serviced office clients must operate in full compliance with Indonesian corporate laws and regulations. Illegal or fraudulent activities are strictly prohibited.
                    </p>
                    <h4 className="font-bold text-slate-900 text-sm">3. Intellectual Property</h4>
                    <p>
                      All logos, text content, architectural renders, and media displayed on this site are protected by copyright laws owned by HQuarters Business Residence.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-[#EA8E18] text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body
      )}
    </footer>
  );
}
