import React from 'react';
import { Building2, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white text-slate-600 text-sm border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-heading">
                Archeo<span className="text-[#E8860B]">HQ</span>
              </span>
            </button>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              HQuarters Business Residence — Asia Afrika CBD, Bandung. Space for Every Stage of Business.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4 font-heading">Pages</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-[#E8860B] transition-colors">Home Page</button></li>
              <li><button onClick={() => handleNavClick('spaces')} className="hover:text-[#E8860B] transition-colors">Spaces Offered</button></li>
              <li><button onClick={() => handleNavClick('building')} className="hover:text-[#E8860B] transition-colors">Building & Amenities</button></li>
              <li><button onClick={() => handleNavClick('location')} className="hover:text-[#E8860B] transition-colors">Location & CBD</button></li>
              <li><button onClick={() => handleNavClick('companies')} className="hover:text-[#E8860B] transition-colors">Companies & Tenants</button></li>
              <li><button onClick={() => handleNavClick('insights')} className="hover:text-[#E8860B] transition-colors">Insights & Journal</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4 font-heading">Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-slate-900 transition-colors">Architectural Design</button></li>
              <li><button onClick={() => handleNavClick('home')} className="hover:text-slate-900 transition-colors">Interior Architecture</button></li>
              <li><button onClick={() => handleNavClick('home')} className="hover:text-slate-900 transition-colors">Sustainable Engineering</button></li>
              <li><button onClick={() => handleNavClick('home')} className="hover:text-slate-900 transition-colors">Structural Advisory</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4 font-heading">Firm</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-slate-900 transition-colors">About Archeo HQ</button></li>
              <li><button onClick={() => handleNavClick('home')} className="hover:text-slate-900 transition-colors">Leadership & Partners</button></li>
              <li><button onClick={() => handleNavClick('home')} className="hover:text-slate-900 transition-colors">Press & Awards</button></li>
              <li><button onClick={() => handleNavClick('spaces')} className="hover:text-slate-900 transition-colors">Contact Studio</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Archeo HQ Business Residence. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
