import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { fetchArticles } from '../lib/wp.js';
import { FALLBACK_ARTICLES } from '../lib/archivePlaceholderData.js';

export default function InsightsSection({ setCurrentPage, setSelectedArticleId }) {
  const [articles, setArticles] = useState(FALLBACK_ARTICLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((data) => setArticles(data))
      .catch(() => setArticles(FALLBACK_ARTICLES))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="insights" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        
        
        
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 font-heading tracking-tight text-balance">
            Better Space. Better Decisions.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto text-balance">
            Insights for businesses, entrepreneurs and professionals choosing where and how they work.
          </p>
        </div>

        
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            if (articles[0]) {
              if (setSelectedArticleId) setSelectedArticleId(articles[0].id);
              if (setCurrentPage) setCurrentPage('article-detail');
              window.scrollTo(0, 0);
            }
          }}
          className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl group bg-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-0 cursor-pointer"
        >
          
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 z-10 text-white">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-md bg-[#E8860B] text-white font-bold text-xs uppercase tracking-wider">
                    FEATURED ARTICLE
                  </span>
                </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-white leading-tight mb-4 group-hover:text-amber-300 transition-colors">
                {articles[0] ? articles[0].title : 'Loading latest articles...'}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {articles[0] ? articles[0].excerpt : ''}
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-end gap-4 text-xs text-slate-300">
              {articles[0] && (
                <div className="flex items-center gap-4 text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {articles[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {articles[0].readTime}
                  </span>
                </div>
              )}
            </div>
          </div>

          
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img loading="lazy"
              src={articles[0] ? articles[0].image : '/SPACES/PREMIUM OFFICE/Premium Office 04.webp?v=20260825'}
              alt="Featured Insights Article"
              className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
          </div>
        </motion.div>

        
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {articles.map((article, idx) => (
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
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                <div>
                  
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img loading="lazy"
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {article.date}
                      </span>
                      <span>—</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-slate-900 font-heading leading-snug group-hover:text-[#E8860B] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                
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

      </div>
    </section>
  );
}
