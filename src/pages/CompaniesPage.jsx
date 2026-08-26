import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import CompaniesSection from '../components/CompaniesSection.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

export default function CompaniesPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="companies" setCurrentPage={setCurrentPage} />
      <main className="pt-24 sm:pt-28">
        <CompaniesSection setCurrentPage={setCurrentPage} />
        <CTA
          setCurrentPage={setCurrentPage}
          titlePrefix="Join The Businesses "
          titleHighlight="Growing From HQuarters."
          description=""
          buttonText="Find Your Space"
          pageTarget="find-space"
        />
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
