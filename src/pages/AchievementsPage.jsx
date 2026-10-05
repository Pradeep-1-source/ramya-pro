import React from 'react';
import {
  Award,
  Calendar,
  Building,
  FileText,
  ExternalLink,
  Download,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function AchievementsPage({ onOpenDoc }) {
  return (
    <div className="section-spacing">
      <div className="content-wrapper">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Academic Competitions &amp; Presentations"
          title="Achievements"
          subtitle="Verifiable academic symposium participations and paper presentations supported strictly by official institutional records."
        />

        {/* Notice of Authenticity */}
        <div
          style={{
            padding: '1rem 1.25rem',
            background: 'var(--color-accent-soft)',
            border: '1px solid var(--color-accent-border)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          <ShieldCheck size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)', margin: 0 }}>
            <strong>Authenticity Guarantee:</strong> All entries listed below are supported directly by the uploaded institutional certificates and letters. No awards, rankings, or paper titles have been fabricated.
          </p>
        </div>

        {/* Achievements List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
          {ACHIEVEMENTS.map((item) => (
            <div key={item.id} className="academic-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-honor">
                      <Award size={13} />
                      <span>{item.eventType}</span>
                    </span>
                    <span className="badge badge-verified">
                      <CheckCircle2 size={13} />
                      <span>Verified Certificate</span>
                    </span>
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>
                    {item.event}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                    {item.organizer}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    {item.department}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Calendar size={15} />
                    <span>{item.dates}</span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    Location: {item.location}
                  </div>
                </div>
              </div>

              <div className="divider-line" style={{ margin: '1.5rem 0' }} />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Official Certificate Text &amp; Scope
                  </h4>
                  <p style={{ color: 'var(--color-text-body)', fontSize: '0.925rem', lineHeight: 1.7, background: 'var(--color-bg-subtle)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                    "This is to certify that <strong>M Ramya</strong> of <strong>RMK Engineering College</strong> has attended Paper Presentation conducted at Invente '24 - a national level tech-fest organized by ECE Department, SSN College of Engineering, Chennai &amp; Shiv Nadar University Chennai."
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Institutional Signatories
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {item.signatories.map((sig, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          padding: '0.75rem 1rem',
                          background: 'var(--color-bg-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--color-border-light)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}
                      >
                        <Users size={16} style={{ color: 'var(--color-primary)' }} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                            {sig.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                            {sig.role}, SSN &amp; Shiv Nadar University
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => onOpenDoc(item.pdf, item.title, `${item.event} • ${item.organizer}`)}
                  className="btn btn-primary"
                >
                  <FileText size={16} />
                  <span>View Certificate Modal</span>
                </button>

                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalLink size={16} />
                  <span>Open PDF in New Tab</span>
                </a>

                <a
                  href={item.pdf}
                  download
                  className="btn btn-secondary"
                >
                  <Download size={16} />
                  <span>Download Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Document-Supported Academic Milestones */}
        <section className="academic-card" style={{ background: '#ffffff' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Document-Verified Academic Recognitions</span>
          </div>
          <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>
            Academic Milestone Highlights
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            <div style={{ padding: '1.25rem', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Award size={16} style={{ color: 'var(--color-honor)' }} />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>NPTEL Elite Certification</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Achieved Elite standing in <strong>Human Computer Interaction</strong> funded by Ministry of Education (MoE), scoring 79% across 12 weeks of coursework.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-verified)' }} />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Faculty Project Rating (8/10)</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Project performance formally evaluated and rated at <strong>8 out of 10</strong> by Assistant Professor C. Mary Shiba for analytical and documentation excellence.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Building size={16} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>CEFR German A2 Distinction</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Attained grade <strong>"gut / good" (82/100)</strong> in the official Goethe-Zertifikat A2 examination administered by the Goethe-Institut.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
