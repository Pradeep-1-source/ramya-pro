import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronRight, FileText } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Internships', path: '/internships' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'LOR', path: '/lor' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="navbar-wrapper"
      style={{
        boxShadow: scrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.08)' : 'none',
        borderBottomColor: scrolled ? '#cbd5e1' : '#e2e8f0',
      }}
    >
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <NavLink to="/" className="navbar-brand" aria-label="M Ramya Academic Portfolio Home">
          <div className="navbar-brand-seal">
            <span>MR</span>
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">M RAMYA</span>
            <span className="navbar-brand-role">Academic Portfolio • CSBS</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <aside className="mobile-drawer" aria-label="Mobile Navigation Menu">
          <div className="mobile-drawer-header">
            <div className="navbar-brand">
              <div className="navbar-brand-seal" style={{ width: 32, height: 32, fontSize: '0.85rem' }}>
                <span>MR</span>
              </div>
              <div className="navbar-brand-text">
                <span className="navbar-brand-name" style={{ fontSize: '1rem' }}>M RAMYA</span>
                <span className="navbar-brand-role" style={{ fontSize: '0.7rem' }}>Academic Portfolio</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ padding: '0.35rem', borderRadius: 4, color: '#64748b' }}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} style={{ opacity: 0.5 }} />
              </NavLink>
            ))}
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
            <a
              href="/documents/RAMYA CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', gap: '0.5rem' }}
            >
              <FileText size={16} />
              <span>Official CV (PDF)</span>
            </a>
          </div>
        </aside>
      )}
    </header>
  );
}
