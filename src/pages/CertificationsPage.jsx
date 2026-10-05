import React from 'react';
import {
  Award,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Download,
  FileText,
  ShieldCheck,
  Globe,
  Sparkles
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function CertificationsPage({ onOpenDoc }) {
  return (
    <div className="section-spacing">
      <div className="content-wrapper">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Accredited Qualifications &amp; Diplomas"
          title="Certifications &amp; Credentials"
          subtitle="Official certifications verified by academic bodies, premier technical institutions, and global language assessment authorities."
        />

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="academic-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                borderTop: cert.type && cert.type.includes('Elite')
                  ? '4px solid #b45309'
                  : cert.id === 'goethe-a2'
                  ? '4px solid #047857'
                  : '4px solid var(--color-primary)'
              }}
            >
              <div>
                {/* Header Tags */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span className={cert.type && cert.type.includes('Elite') ? 'badge badge-honor' : 'badge badge-default'}>
                    <Award size={12} />
                    <span>{cert.type || 'Certification'}</span>
                  </span>

                  {cert.score && (
                    <span className="badge badge-verified">
                      <span>Score: {cert.score}</span>
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <h3 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Building size={15} />
                  <span>{cert.provider}</span>
                </div>

                {cert.partnerInstitutions && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    Partner Institutions: {cert.partnerInstitutions}
                  </div>
                )}

                {/* Date & Validity */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                  {cert.duration && <span>• {cert.duration}</span>}
                  {cert.validUntil && <span>• Valid Until {cert.validUntil}</span>}
                </div>

                <div className="divider-line" style={{ margin: '1rem 0' }} />

                {/* Specific Detailed Metadata */}
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', marginBottom: '1.25rem' }}>
                  {/* Candidate Name if different from header */}
                  {cert.candidateName && (
                    <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Registered Name: </span>
                      <span>{cert.candidateName}</span>
                    </div>
                  )}

                  {/* Certificate ID */}
                  {cert.certificateNumber && (
                    <div style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--color-bg-subtle)', padding: '0.35rem 0.6rem', borderRadius: 4, display: 'inline-block' }}>
                      ID / Roll: {cert.certificateNumber}
                    </div>
                  )}

                  {/* Score breakdown if available */}
                  {cert.scoreBreakdown && Array.isArray(cert.scoreBreakdown) ? (
                    <div style={{ margin: '0.75rem 0' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                        Module Breakdown (Total 82/100 • Grade: {cert.grade}):
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
                        {cert.scoreBreakdown.map((item, bIdx) => (
                          <div key={bIdx} style={{ background: 'var(--color-bg-subtle)', padding: '0.35rem 0.5rem', borderRadius: 4, fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{item.section}</span>
                            <strong>{item.score}/{item.max}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : cert.scoreBreakdown ? (
                    <div style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      {cert.scoreBreakdown}
                    </div>
                  ) : null}

                  {/* Description */}
                  {cert.description && (
                    <p style={{ lineHeight: 1.6, fontSize: '0.875rem', color: 'var(--color-text-body)' }}>
                      {cert.description}
                    </p>
                  )}

                  {/* Recommended credits or total certified */}
                  {cert.recommendedCredits && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-verified)', fontWeight: 600, marginTop: '0.5rem' }}>
                      Recommended Credits: {cert.recommendedCredits} • Certified Pool: {cert.totalCertified}
                    </div>
                  )}

                  {/* Source note if CV only */}
                  {cert.sourceNote && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginTop: '0.5rem' }}>
                      Source: {cert.sourceNote}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border-light)' }}>
                {cert.pdf ? (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => onOpenDoc(cert.pdf, cert.title, `${cert.provider} • ${cert.date}`)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, minWidth: '140px' }}
                    >
                      <FileText size={14} />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="Open actual PDF in new tab"
                    >
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={cert.pdf}
                      download
                      className="btn btn-secondary btn-sm"
                      title="Download authentic PDF"
                    >
                      <Download size={14} />
                    </a>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.825rem' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-verified)' }} />
                    <span>Verified in Official Academic Curriculum Vitae</span>
                  </div>
                )}

                {/* External Verification Link if applicable */}
                {cert.verificationLink && (
                  <div style={{ marginTop: '0.65rem' }}>
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.78rem', color: 'var(--color-accent)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}
                    >
                      <span>Issuer Verification Portal</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Callout */}
        <div className="academic-card" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={20} style={{ color: 'var(--color-accent)' }} />
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Certificate Verification</h4>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
            Every certification card connects directly to the high-resolution scanned certificate PDF issued by the respective authority (NPTEL, Oracle University, Goethe-Institut, Infosys Limited). QR codes and certificate verification numbers can be cross-checked directly via the respective issuer verification links.
          </p>
        </div>

      </div>
    </div>
  );
}
