import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Building,
  GraduationCap,
  Mail,
  Phone,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { LOR_LIST } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function LORPage({ onOpenDoc }) {
  return (
    <div className="section-spacing">
      <div className="content-wrapper">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Academic Endorsements &amp; References"
          title="Letters of Recommendation (LOR)"
          subtitle="Confidential academic reference letters issued by faculty leadership and undergraduate research mentors at R.M.K. Engineering College."
        />

        {/* Committee Verification Banner */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border-strong)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ padding: '0.65rem', background: '#ecfdf5', borderRadius: 'var(--radius-sm)', color: '#047857' }}>
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.2rem 0' }}>
              Institutional Letters of Support
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', margin: 0, lineHeight: 1.5 }}>
              The letters below are authentic copies provided on official institutional letterhead with administrative seal and signatures. Interested parties may contact the recommenders directly using their official institutional email and phone numbers listed.
            </p>
          </div>
        </div>

        {/* LOR Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '3.5rem' }}>
          {LOR_LIST.map((lor, idx) => (
            <div key={lor.id} className="academic-card" style={{ padding: '2.5rem' }}>
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-default">
                      <FileText size={12} />
                      <span>Letter of Recommendation #{idx + 1}</span>
                    </span>
                    <span className="badge badge-verified">
                      <CheckCircle2 size={12} />
                      <span>Faculty Letterhead &amp; Seal</span>
                    </span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.85rem', marginBottom: '0.35rem' }}>
                    {lor.recommender}
                  </h3>

                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
                    {lor.role}
                  </div>

                  <div style={{ fontSize: '0.95rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                    {lor.department}
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    {lor.institution}
                  </div>
                </div>

                {/* Contact Box */}
                <div style={{ background: 'var(--color-bg-subtle)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)', minWidth: '240px' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Official Recommender Contact
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
                    <a
                      href={`mailto:${lor.contact.email}`}
                      style={{ color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}
                    >
                      <Mail size={13} />
                      <span>{lor.contact.email}</span>
                    </a>
                    <a
                      href={`tel:${lor.contact.phone}`}
                      style={{ color: 'var(--color-text-body)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <Phone size={13} />
                      <span>{lor.contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="divider-line" style={{ margin: '1.5rem 0' }} />

              {/* Recommendation Focus Context */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Quote size={18} style={{ color: 'var(--color-accent)' }} />
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', margin: 0, fontWeight: 700 }}>
                    Key Recommender Observations ({lor.relationshipPeriod})
                  </h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {lor.keyObservations.map((obs, oIdx) => (
                    <div
                      key={oIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.75rem 1rem',
                        background: 'var(--color-bg-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border-light)'
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--color-accent)', marginTop: '0.2rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.925rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                        "{obs}"
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-light)' }}>
                <button
                  type="button"
                  onClick={() => onOpenDoc(lor.pdf, `Letter of Recommendation - ${lor.recommender}`, `${lor.role}, ${lor.institution}`)}
                  className="btn btn-primary"
                >
                  <FileText size={16} />
                  <span>View LOR Modal</span>
                </button>

                <a
                  href={lor.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalLink size={16} />
                  <span>View LOR (New Tab)</span>
                </a>

                <a
                  href={lor.pdf}
                  download
                  className="btn btn-secondary"
                >
                  <Download size={16} />
                  <span>Download LOR (PDF)</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
