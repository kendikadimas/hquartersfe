import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import BuildingSection from '../components/BuildingSection.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

export default function BuildingPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="building" setCurrentPage={setCurrentPage} />
      <main className="pt-24 sm:pt-28">
        <BuildingSection setCurrentPage={setCurrentPage} />
        <CTA
          setCurrentPage={setCurrentPage}
          titlePrefix="This Is What A Modern Workplace "
          titleHighlight="Should Feel Like."
          description=""
          buttonText="Find A Space"
          pageTarget="find-space"
        />
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
