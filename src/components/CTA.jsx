import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-[32px] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 text-white mx-auto mb-6 flex items-center justify-center border border-white/20">
              <Building2 className="w-7 h-7 text-[#E8860B]" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight">
              Unlock Your Ideal Space.
            </h2>

            <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
              Schedule a private design consultation with our principal architects and discover how we transform visionary concepts into iconic structures.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold inline-flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you! Our architectural team will contact you within 24 hours.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#E8860B] text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#E8860B]/20"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
