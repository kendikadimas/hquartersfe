import React, { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import SpacesPage from './pages/SpacesPage.jsx';
import BuildingPage from './pages/BuildingPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import CompaniesPage from './pages/CompaniesPage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';
import FindSpacePage from './pages/FindSpacePage.jsx';
import ArticleDetailPage from './pages/ArticleDetailPage.jsx';

import SpacePremiumOfficePage from './pages/SpacePremiumOfficePage.jsx';
import SpaceSohoDuplexPage from './pages/SpaceSohoDuplexPage.jsx';
import SpaceServicedOfficePage from './pages/SpaceServicedOfficePage.jsx';
import SpaceVirtualOfficePage from './pages/SpaceVirtualOfficePage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticleId, setSelectedArticleId] = useState('art-1');

  return (
    <>
      {currentPage === 'space-premium-office' ? (
        <SpacePremiumOfficePage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'space-soho-duplex' ? (
        <SpaceSohoDuplexPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'space-[#soho-duplex]' ? (
        <SpaceSohoDuplexPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'space-soho' ? (
        <SpaceSohoDuplexPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'space-serviced-office' ? (
        <SpaceServicedOfficePage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'space-virtual-office' ? (
        <SpaceVirtualOfficePage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'find-space' ? (
        <FindSpacePage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'article-detail' ? (
        <ArticleDetailPage
          setCurrentPage={setCurrentPage}
          articleId={selectedArticleId}
          setSelectedArticleId={setSelectedArticleId}
        />
      ) : currentPage === 'insights' ? (
        <InsightsPage
          setCurrentPage={setCurrentPage}
          setSelectedArticleId={setSelectedArticleId}
        />
      ) : currentPage === 'companies' ? (
        <CompaniesPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'location' ? (
        <LocationPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'building' ? (
        <BuildingPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'spaces' ? (
        <SpacesPage setCurrentPage={setCurrentPage} />
      ) : (
        <HomePage setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}
