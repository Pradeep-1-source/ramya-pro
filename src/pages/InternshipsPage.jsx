import React from 'react';
import {
  Briefcase,
  Calendar,
  Building,
  MapPin,
  CheckCircle2,
  FileText,
  ExternalLink,
  Download,
  FolderGit2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { INTERNSHIPS } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function InternshipsPage({ onOpenDoc }) {
  return (
    <div className="section-spacing">
      <div className="content-wrapper">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Industry Experience &amp; Practical Training"
          title="Internships"
          subtitle="Documented industrial internships demonstrating web development engineering and enterprise information systems coordination."
        />

        {/* Internships List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '3.5rem' }}>
          {INTERNSHIPS.map((intern, idx) => (
            <div key={intern.id} className="academic-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-accent">
                      <Briefcase size={12} />
                      <span>Internship #{idx + 1}</span>
                    </span>
                    <span className="badge badge-verified">
                      <CheckCircle2 size={12} />
                      <span>Certificate Verified</span>
                    </span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>
                    {intern.role}
                  </h3>

                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>
                    {intern.organization}
                  </div>

                  {intern.organizationNote && (
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {intern.organizationNote}
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                    <MapPin size={14} />
                    <span>{intern.location}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Calendar size={15} />
                    <span>{intern.period}</span>
                  </div>
                  {intern.certificateDate && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                      Certificate Date: {intern.certificateDate}
                    </div>
                  )}
                  {intern.regNo && (
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                      College Reg No: {intern.regNo}
                    </div>
                  )}
                </div>
              </div>

              <div className="divider-line" style={{ margin: '1.5rem 0' }} />

              {/* Associated Project if applicable */}
              {intern.project && (
                <div style={{ marginBottom: '1.5rem', padding: '1rem 1.25rem', background: 'var(--color-accent-soft)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-accent-border)' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent)', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Assigned Internship Project
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>
                    "{intern.project}"
                  </div>
                </div>
              )}

              {/* Supported Responsibilities */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  Supported Responsibilities &amp; Outcomes
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {intern.cvResponsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
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
                      <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Appraisal Note */}
              {intern.certificateNote && (
                <div style={{ marginBottom: '1.75rem', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontStyle: 'italic', background: 'var(--color-bg-base)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--color-border-strong)' }}>
                  Note from Official Certificate: "{intern.certificateNote}"
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => onOpenDoc(intern.pdf, `${intern.role} Certificate`, `${intern.organization} • ${intern.period}`)}
                  className="btn btn-primary"
                >
                  <FileText size={16} />
                  <span>View Certificate</span>
                </button>

                <a
                  href={intern.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalLink size={16} />
                  <span>Open PDF in New Tab</span>
                </a>

                <a
                  href={intern.pdf}
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

      </div>
    </div>
  );
}
