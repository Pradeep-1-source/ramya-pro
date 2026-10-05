import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DocumentModal from './components/DocumentModal';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import CertificationsPage from './pages/CertificationsPage';
import InternshipsPage from './pages/InternshipsPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import LORPage from './pages/LORPage';

// SEO Title & Meta updater
function RouteMetaManager() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'M Ramya | Academic Portfolio & Higher Studies',
      '/about': 'About & Academic Profile | M Ramya',
      '/achievements': 'Achievements & Symposium Presentations | M Ramya',
      '/certifications': 'Certifications & Accreditations | M Ramya',
      '/internships': 'Industrial Internships & Training | M Ramya',
      '/projects': 'Engineering Projects & Systems | M Ramya',
      '/resume': 'Curriculum Vitae / Resume | M Ramya',
      '/lor': 'Letters of Recommendation (LOR) | M Ramya',
    };

    const title = titles[location.pathname] || 'M Ramya | Computer Science & Business Systems';
    document.title = title;
  }, [location.pathname]);

  return null;
}

export default function App() {
  // Global modal state for viewing PDF documents
  const [modalState, setModalState] = useState({
    isOpen: false,
    url: '',
    title: '',
    subtitle: '',
  });

  const handleOpenDoc = (url, title, subtitle = '') => {
    setModalState({
      isOpen: true,
      url,
      title,
      subtitle,
    });
  };

  const handleCloseDoc = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMetaManager />

      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage onOpenDoc={handleOpenDoc} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/achievements" element={<AchievementsPage onOpenDoc={handleOpenDoc} />} />
            <Route path="/certifications" element={<CertificationsPage onOpenDoc={handleOpenDoc} />} />
            <Route path="/internships" element={<InternshipsPage onOpenDoc={handleOpenDoc} />} />
            <Route path="/projects" element={<ProjectsPage onOpenDoc={handleOpenDoc} />} />
            <Route path="/resume" element={<ResumePage onOpenDoc={handleOpenDoc} />} />
            <Route path="/lor" element={<LORPage onOpenDoc={handleOpenDoc} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenDoc={handleOpenDoc} />} />
          </Routes>
        </main>

        <Footer />
        <BackToTopButton />

        {/* Global Academic Document Viewer Modal */}
        <DocumentModal
          isOpen={modalState.isOpen}
          onClose={handleCloseDoc}
          docUrl={modalState.url}
          docTitle={modalState.title}
          subtitle={modalState.subtitle}
        />
      </div>
    </BrowserRouter>
  );
}
