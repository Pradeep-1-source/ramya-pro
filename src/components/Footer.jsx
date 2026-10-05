import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';
import GithubIcon, { Github } from './GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="academic-footer">
      <div className="content-wrapper">
        <div className="footer-top">
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: '#0f172a',
                  borderRadius: 6,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}
              >
                MR
              </div>
              <h3 className="footer-brand-title" style={{ margin: 0 }}>M RAMYA</h3>
            </div>
            <p style={{ fontWeight: 600, color: 'var(--color-text-main)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
              Computer Science and Business Systems
            </p>
            <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
              Academic Portfolio • CSBS
            </p>
            <p className="footer-brand-desc">
              Explore my academic background, certifications, internship experience, achievements, and projects.
            </p>
          </div>

          {/* Navigation Links Col */}
          <div>
            <h4 className="footer-col-title">Portfolio Sections</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About &amp; Profile</Link>
              <Link to="/achievements" className="footer-link">Achievements</Link>
              <Link to="/certifications" className="footer-link">Certifications</Link>
              <Link to="/internships" className="footer-link">Internships</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/resume" className="footer-link">Official Resume</Link>
              <Link to="/lor" className="footer-link">Letters of Recommendation</Link>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-links">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="footer-link"
                title="Send email"
              >
                <Mail size={15} style={{ color: 'var(--color-accent)' }} />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                title="GitHub Profile"
              >
                <Github size={15} style={{ color: 'var(--color-accent)' }} />
                <span>github.com/ramya-2407</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="footer-link"
                title="Phone"
              >
                <Phone size={15} style={{ color: 'var(--color-accent)' }} />
                <span>+91 {PERSONAL_INFO.phone}</span>
              </a>

              <div className="footer-link" style={{ cursor: 'default' }}>
                <MapPin size={15} style={{ color: 'var(--color-accent)' }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-verified">
                <ShieldCheck size={12} />
                <span>Source-Verified Records</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © 2026 M Ramya. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <span>R.M.K. Engineering College</span>
            <span>•</span>
            <span>B.Tech. CSBS</span>
            <span>•</span>
            <a
              href="/documents/RAMYA CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <span>Download CV</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
