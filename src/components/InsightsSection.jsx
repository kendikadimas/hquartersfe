import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowUpRight,
  Search,
  BookOpen,
  Send,
  CheckCircle2,
  Tag,
  User
} from 'lucide-react';

export default function InsightsSection({ setCurrentPage, setSelectedArticleId }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'workplace', label: 'Workplace Trends' },
    { id: 'market', label: 'Bandung CBD Market' },
    { id: 'architecture', label: 'Architecture & Design' },
    { id: 'sustainability', label: 'Sustainability' },
  ];

  const articles = [
    {
      id: 'art-1',
      category: 'market',
      categoryLabel: 'Bandung CBD Market',
      title: 'Why Asia Afrika Remains Bandung’s Preeminent Business Address',
      excerpt: 'Exploring the historical significance, infrastructure density, and psychological advantage of establishing a corporate presence in Bandung’s financial heart.',
      author: 'Hendrik Wijaya, Lead Market Analyst',
      date: 'July 28, 2026',
      readTime: '4 min read',
      image: '/location_map.png',
    },
    {
      id: 'art-2',
      category: 'sustainability',
      categoryLabel: 'Sustainability',
      title: 'Net-Zero Energy Buildings: Integrating Solar Membranes & Passive Cooling',
      excerpt: 'How modern architectural engineering reduces thermal load, lowers HVAC power consumption, and achieves LEED Platinum standards in tropical urban centers.',
      author: 'Dr. Sarah Lin, Principal Environmental Engineer',
      date: 'July 22, 2026',
      readTime: '6 min read',
      image: '/architectural_hero_bg.png',
    },
    {
      id: 'art-3',
      category: 'architecture',
      categoryLabel: 'Architecture & Design',
      title: 'The SOHO Revolution: Blending Private Residence & Corporate Office',
      excerpt: 'A deep dive into dual-purpose spatial planning, acoustics, and zoning strategies for modern entrepreneurs who live and work under one roof.',
      author: 'Marcus Vance, Senior Architect',
      date: 'July 15, 2026',
      readTime: '5 min read',
      image: '/soho_office.png',
    },
    {
      id: 'art-4',
      category: 'workplace',
      categoryLabel: 'Workplace Trends',
      title: 'Acoustic Ergonomics: Designing Noise-Controlled Executive Spaces',
      excerpt: 'Balancing collaborative open layouts with private acoustic focus pods to maximize cognitive focus and eliminate workplace fatigue.',
      author: 'Elena Rostova, Workplace Ergonomist',
      date: 'July 08, 2026',
      readTime: '4 min read',
      image: '/serviced_office.png',
    },
    {
      id: 'art-5',
      category: 'architecture',
      categoryLabel: 'Architecture & Design',
      title: 'Smart Automated Parking: The Future of High-Density Commercial Real Estate',
      excerpt: 'How vertical mechanical car lifts increase parking capacity by 300% while offering smooth, contactless vehicle delivery for tenants.',
      author: 'Ir. Budi Santoso, Infrastructure Lead',
      date: 'June 30, 2026',
      readTime: '3 min read',
      image: '/LOGO/parking-lift.png',
    },
    {
      id: 'art-6',
      category: 'market',
      categoryLabel: 'Bandung CBD Market',
      title: 'Tenant Ecosystem Dynamics: How Shared Corporate Neighbors Drive Value',
      excerpt: 'Analyzing how co-locating near multinational financial institutions, tech firms, and legal advisories boosts brand credibility and referral networks.',
      author: 'Hendrik Wijaya, Lead Market Analyst',
      date: 'June 20, 2026',
      readTime: '5 min read',
      image: '/premium_office.png',
    },
  ];

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section id="insights" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 font-heading tracking-tight">
            Perspectives on <span className="text-[#E8860B]">Modern Architecture</span> & Business.
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Curated analysis on workplace evolution, urban real estate trends, sustainable engineering, and commercial CBD growth.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. FEATURED ARTICLE HERO CARD */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            if (setSelectedArticleId) setSelectedArticleId('featured');
            if (setCurrentPage) setCurrentPage('article-detail');
            window.scrollTo(0, 0);
          }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/80 shadow-xl group bg-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-0 cursor-pointer"
        >
          {/* Left Text Information */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 z-10 text-white">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-md bg-[#E8860B] text-white font-bold text-xs uppercase tracking-wider">
                  FEATURED ARTICLE
                </span>
                <span className="px-3 py-1 rounded-md bg-white/10 text-amber-200 text-xs font-bold uppercase tracking-wider border border-white/15">
                  WORKPLACE TRENDS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-4 group-hover:text-amber-300 transition-colors">
                The Evolution of Hybrid Headquarters: Designing Offices for the Next Decade
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                How modern corporations are shifting from static workstations to dynamic, hospitality-driven hub offices that foster collaboration, high focus, and employee wellness.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#E8860B]" />
                <span className="font-semibold text-white">Marcus Vance, Principal Architect</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> August 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 5 min read
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src="/blog_hero.png"
              alt="Featured Insights Article"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. CATEGORY FILTER TABS */}
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
        {/* 4. ARTICLES GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => {
                  if (setSelectedArticleId) setSelectedArticleId(article.id);
                  if (setCurrentPage) setCurrentPage('article-detail');
                  window.scrollTo(0, 0);
                }}
                className="bg-white rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-wider shadow">
                        {article.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-heading leading-snug group-hover:text-[#E8860B] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
                  <span>Read Article</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#E8860B] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* 5. NEWSLETTER SUBSCRIPTION BANNER */}
        {/* ========================================================================= */}
        <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-4 border border-white/15">
              HQUARTERS QUARTERLY JOURNAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Stay Ahead of <span className="text-amber-400">Modern Design Trends.</span>
            </h2>
            <p className="mt-3 text-slate-300 text-base">
              Get curated architectural analysis and commercial property trends delivered directly to your inbox.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold inline-flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Subscribed! You will receive our next quarterly architectural journal.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#E8860B] text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
