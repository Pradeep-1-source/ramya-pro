import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function ResumePage({ onOpenDoc }) {
  const resumeUrl = '/documents/RAMYA CV.pdf';

  return (
    <div className="section-spacing">
      <div className="content-wrapper">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Official Curriculum Vitae"
          title="Curriculum Vitae / Resume"
          subtitle="Authentic undergraduate curriculum vitae of M Ramya for higher studies and university admissions review."
        />

        {/* Action Header Card */}
        <div
          className="academic-card"
          style={{
            padding: '2rem 2.5rem',
            marginBottom: '2.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderColor: '#cbd5e1'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span className="badge badge-verified">
                <ShieldCheck size={12} />
                <span>Original Document</span>
              </span>
              <span className="badge badge-default">
                <span>PDF Format</span>
              </span>
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.65rem', margin: '0 0 0.35rem 0' }}>
              RAMYA CV.pdf
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', margin: 0 }}>
              Primary curriculum vitae detailing education, technical skillset, internships, and certifications.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <ExternalLink size={18} />
              <span>View Resume</span>
            </a>

            <a
              href={resumeUrl}
              download="RAMYA_CV.pdf"
              className="btn btn-secondary btn-lg"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Embedded Document Previewer */}
        <div
          className="academic-card"
          style={{
            padding: '1.5rem',
            background: '#ffffff',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.95rem' }}>
              <FileText size={18} style={{ color: 'var(--color-primary)' }} />
              <span>Document Preview: RAMYA CV.pdf</span>
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <span>Fullscreen View</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* PDF Viewer Frame */}
          <div
            style={{
              width: '100%',
              height: '850px',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              background: '#f1f5f9',
              border: '1px solid var(--color-border-light)'
            }}
          >
            <object
              data={resumeUrl}
              type="application/pdf"
              width="100%"
              height="100%"
              aria-label="Ramya CV Preview"
            >
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3rem',
                  textAlign: 'center'
                }}
              >
                <FileText size={56} style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }} />
                <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>RAMYA CV.pdf</h4>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: 460, marginBottom: '2rem', fontSize: '0.95rem' }}>
                  If the embedded preview does not render in your current browser, you can directly open or download the authentic CV file below.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={16} />
                    <span>Open in New Tab</span>
                  </a>
                  <a
                    href={resumeUrl}
                    download="RAMYA_CV.pdf"
                    className="btn btn-secondary"
                  >
                    <Download size={16} />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>

      </div>
    </div>
  );
}
