import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronRight,
  FileText,
  Home,
  User,
  Trophy,
  Award,
  Briefcase,
  Layers,
  BookOpen,
  MessageSquare,
  Download
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',           path: '/',               icon: Home },
  { name: 'About',          path: '/about',           icon: User },
  { name: 'Achievements',   path: '/achievements',    icon: Trophy },
  { name: 'Certifications', path: '/certifications',  icon: Award },
  { name: 'Internships',    path: '/internships',     icon: Briefcase },
  { name: 'Projects',       path: '/projects',        icon: Layers },
  { name: 'Resume',         path: '/resume',          icon: FileText },
  { name: 'LOR',            path: '/lor',             icon: MessageSquare },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header
      className="navbar-wrapper"
      style={{
        boxShadow:        scrolled ? '0 4px 25px -2px rgba(0, 0, 0, 0.5)' : 'none',
        borderBottomColor: scrolled ? 'var(--color-border-strong)' : 'var(--color-border-light)',
      }}
    >
      <div className="navbar-inner">

        {/* ── Brand / Logo ── */}
        <NavLink to="/" className="navbar-brand" aria-label="M Ramya Academic Portfolio Home">
          <div className="navbar-brand-seal">
            <span>MR</span>
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">M RAMYA</span>
            <span className="navbar-brand-role">Academic Portfolio • CSBS</span>
          </div>
        </NavLink>

        {/* ── Desktop Navigation ── */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {NAV_LINKS.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              end={path === '/'}
            >
              <Icon size={14} style={{ flexShrink: 0 }} />
              <span>{name}</span>
            </NavLink>
          ))}

          {/* Quick download CV button beside nav links */}
          <a
            href="/documents/RAMYA CV.pdf"
            download
            className="btn btn-primary btn-sm nav-cv-btn"
            title="Download CV"
            style={{ marginLeft: '0.5rem', gap: '0.4rem', padding: '0.45rem 0.9rem' }}
          >
            <Download size={13} />
            <span>CV</span>
          </a>
        </nav>

        {/* ── Mobile Hamburger Toggle ── */}
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

      {/* ── Mobile Overlay ── */}
      {mobileOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <aside className="mobile-drawer" aria-label="Mobile Navigation Menu">

          {/* Drawer Header */}
          <div className="mobile-drawer-header">
            <div className="navbar-brand">
              <div className="navbar-brand-seal" style={{ width: 32, height: 32, fontSize: '0.85rem' }}>
                <span>MR</span>
              </div>
              <div className="navbar-brand-text">
                <span className="navbar-brand-name" style={{ fontSize: '1rem' }}>M RAMYA</span>
                <span className="navbar-brand-role" style={{ fontSize: '0.7rem' }}>Academic Portfolio • CSBS</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{ padding: '0.35rem', borderRadius: 4, color: 'var(--color-text-muted)' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav className="mobile-nav-links">
            {NAV_LINKS.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                end={path === '/'}
                onClick={() => setMobileOpen(false)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      background: 'var(--color-bg-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} style={{ color: 'var(--color-primary)' }} />
                  </span>
                  <span>{name}</span>
                </span>
                <ChevronRight size={16} style={{ opacity: 0.4 }} />
              </NavLink>
            ))}
          </nav>

          {/* Drawer Footer — CV Download */}
          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-light)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <a
              href="/documents/RAMYA CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', gap: '0.5rem' }}
            >
              <FileText size={16} />
              <span>View Official CV</span>
            </a>
            <a
              href="/documents/RAMYA CV.pdf"
              download
              className="btn btn-secondary"
              style={{ width: '100%', gap: '0.5rem' }}
            >
              <Download size={16} />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </aside>
      )}
    </header>
  );
}
