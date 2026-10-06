import React from 'react';
import {
  ExternalLink,
  Layers,
  Calendar,
  CheckCircle2,
  FileText,
  Award,
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function ProjectsPage({ onOpenDoc }) {
  return (
    <div className="section-spacing">
      <div className="content-wrapper">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Engineering Implementations &amp; Academic Systems"
          title="Projects"
          subtitle="Production web applications and academic software systems designed and developed to address real-world business and societal challenges."
        />

        {/* Live Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '3.5rem' }}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="academic-card"
              style={{
                padding: '2.5rem',
                borderLeft: project.deployed ? '5px solid var(--color-primary)' : '5px solid var(--color-accent)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    {project.deployed ? (
                      <span className="badge badge-verified">
                        <Globe size={12} />
                        <span>Live Production Deployment</span>
                      </span>
                    ) : (
                      <span className="badge badge-honor">
                        <Award size={12} />
                        <span>Academic Project (Rated 8/10)</span>
                      </span>
                    )}
                    <span className="badge badge-default">
                      <span>{project.type}</span>
                    </span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                    <Calendar size={14} />
                    <span>Project Year: {project.year}</span>
                  </div>
                </div>

                {project.deployed && (
                  <div style={{ textAlign: 'right' }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <span>View Live Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>

              <div className="divider-line" style={{ margin: '1.25rem 0' }} />

              {/* Exact Description */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Project Overview
                </h4>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.7, background: 'var(--color-bg-subtle)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                  "{project.description}"
                </p>
              </div>

              {/* Academic Evaluation / Mentor Endorsement if CareWise */}
              {project.academicEvaluation && (
                <div style={{ marginBottom: '1.5rem', padding: '1.15rem 1.25rem', background: 'var(--color-honor-bg)', border: '1px solid var(--color-honor-border)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-honor)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                    <Award size={16} />
                    <span>Faculty Evaluation &amp; Recommendation</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                    {project.academicEvaluation}
                  </p>
                  <div style={{ marginTop: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={() => onOpenDoc('/documents/LOR SHIBA.pdf', 'Letter of Recommendation - Prof. C. Mary Shiba', 'Project Work Mentor Evaluation')}
                      className="btn btn-secondary btn-sm"
                    >
                      <FileText size={13} />
                      <span>View Mentor LOR Endorsement</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Key Documented Highlights */}
              {project.highlights && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '0.65rem', fontWeight: 700 }}>
                    Key Architectural Highlights
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Link Verification Box */}
              {project.deployed && (
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--color-verified)' }} />
                    <span>Live URL: <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>{project.liveUrl}</a></span>
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Launch in New Window</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
