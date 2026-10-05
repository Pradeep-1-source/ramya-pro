import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Award,
  Code2,
  Users,
  CheckCircle2,
  Calendar,
  Building,
  Languages,
  FileText,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, SKILLS } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

export default function AboutPage() {
  return (
    <div className="section-spacing">
      <div className="content-wrapper">
        
        {/* Header */}
        <SectionHeader
          eyebrow="Academic Background &amp; Profile"
          title="About M Ramya"
          subtitle="Undergraduate education in Computer Science and Business Systems, technical competencies, core curriculum, and professional capabilities."
        />

        {/* Profile Summary Card */}
        <section className="academic-card" style={{ marginBottom: '2.5rem', background: '#ffffff', borderColor: '#cbd5e1' }}>
          <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
            <span className="eyebrow-dot" />
            <span>Profile Summary</span>
          </div>
          <h3 className="font-serif" style={{ fontSize: '1.65rem', marginBottom: '1rem' }}>
            Candidate Profile
          </h3>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--color-text-body)',
              fontStyle: 'normal',
              padding: '1.25rem 1.5rem',
              background: 'var(--color-bg-subtle)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-primary)',
              marginBottom: '1.5rem'
            }}
          >
            "{PERSONAL_INFO.summary}"
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <span className="badge badge-default">
              <span>Candidate: {PERSONAL_INFO.name}</span>
            </span>
            <span className="badge badge-default">
              <span>Official Record: {PERSONAL_INFO.fullNameOfficial}</span>
            </span>
            <span className="badge badge-verified">
              <CheckCircle2 size={12} />
              <span>Higher Studies Applicant</span>
            </span>
            <Link to="/resume" className="btn btn-secondary btn-sm" style={{ marginLeft: 'auto' }}>
              <FileText size={14} />
              <span>View Official Resume</span>
            </Link>
          </div>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Academic Institution</span>
          </div>
          <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
            Undergraduate Education
          </h3>

          <div className="academic-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Building size={18} style={{ color: 'var(--color-primary)' }} />
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0 }}>
                    {EDUCATION.institution}
                  </h4>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-accent)' }}>
                  {EDUCATION.degree}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  {PERSONAL_INFO.institutionDetails}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="badge badge-honor" style={{ fontSize: '0.85rem', padding: '0.4rem 0.85rem', marginBottom: '0.5rem' }}>
                  CGPA: {EDUCATION.cgpa}
                </span>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', justifyContent: 'flex-end' }}>
                  <Calendar size={14} />
                  <span>{EDUCATION.period}</span>
                </div>
              </div>
            </div>

            <div className="divider-line" style={{ margin: '1.5rem 0' }} />

            {/* Relevant Coursework */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <BookOpen size={16} style={{ color: 'var(--color-primary)' }} />
                <h5 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Relevant Coursework
                </h5>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                {EDUCATION.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1.15rem',
                      background: 'var(--color-bg-subtle)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem'
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                      {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Core Competencies</span>
          </div>
          <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
            Technical &amp; Professional Skills
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Technical Skills Card */}
            <div className="academic-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.6rem', background: '#eff6ff', borderRadius: 'var(--radius-sm)', color: '#1d4ed8' }}>
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', margin: 0 }}>Technical Skills</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Core Programming &amp; Database Systems
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SKILLS.technical.map((skill, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      background: 'var(--color-bg-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-light)'
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.95rem' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills Card */}
            <div className="academic-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ padding: '0.6rem', background: '#f5f3ff', borderRadius: 'var(--radius-sm)', color: '#6d28d9' }}>
                  <Users size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', margin: 0 }}>Professional Skills</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Soft Skills &amp; Collaborative Attributes
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SKILLS.professional.map((skill, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'var(--color-bg-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-light)'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                      {skill.name}
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Language Proficiency Card */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="academic-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ padding: '0.6rem', background: '#ecfdf5', borderRadius: 'var(--radius-sm)', color: '#047857' }}>
                <Languages size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', margin: 0 }}>Language Proficiency</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Certified International &amp; Academic Communication
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {SKILLS.languages.map((lang, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--color-bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-light)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>
                      {lang.language}
                    </span>
                    <span className="badge badge-verified">
                      {lang.level}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', margin: 0 }}>
                    {lang.credential}
                  </p>
                  {lang.institution && (
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                      Certified by {lang.institution}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Next Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '1rem' }}>
              Explore Achievements &amp; Certifications
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Review verified paper presentations and accredited industry certificates.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Link to="/achievements" className="btn btn-secondary btn-sm">
              <span>Achievements</span>
            </Link>
            <Link to="/certifications" className="btn btn-primary btn-sm">
              <span>Certifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
