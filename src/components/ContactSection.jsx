import React from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, GraduationCap } from 'lucide-react';
import GithubIcon, { Github } from './GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section className="academic-card" style={{ background: '#ffffff', borderColor: '#cbd5e1' }} id="contact">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Academic Correspondence</span>
          </div>
          <h3 className="academic-title font-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Get in Touch
          </h3>
          <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Available for inquiries regarding academic collaborations, research assistantships, technology projects, and professional opportunities. Official credentials and reference contacts can be verified directly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="academic-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Primary Email
                </div>
                <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.95rem' }}>
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="academic-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Github size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  GitHub Profile
                </div>
                <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.95rem' }}>
                  github.com/ramya-2407
                </div>
              </div>
            </a>

            {/* Phone & Location */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div
                style={{
                  padding: '1rem',
                  background: 'var(--color-bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '0.25rem' }}>
                  <Phone size={15} />
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
                    Phone
                  </span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.9rem' }}>
                  +91 {PERSONAL_INFO.phone}
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  background: 'var(--color-bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '0.25rem' }}>
                  <MapPin size={15} />
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
                    Location
                  </span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.9rem' }}>
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Profile Snapshot Box */}
        <div
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)',
            border: '1px solid #cbd5e1',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <GraduationCap size={24} style={{ color: 'var(--color-primary)' }} />
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>Academic Standing</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>R.M.K. Engineering College</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Degree Program</span>
              <span style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.875rem', textAlign: 'right' }}>B.Tech. CSBS (2022–2026)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Cumulative GPA</span>
              <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1rem' }}>7.88 / 10.0</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Institution Accreditation</span>
              <span style={{ fontWeight: 700, color: 'var(--color-verified)', fontSize: '0.875rem' }}>NAAC 'A+' &amp; NBA</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Language Proficiency</span>
              <span style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.875rem' }}>German A2 (82/100)</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Academic%20Inquiry%20-%20M%20Ramya`}
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '150px' }}
            >
              <Send size={15} />
              <span>Send Message</span>
            </a>
            <a
              href="/documents/RAMYA CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>View CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
