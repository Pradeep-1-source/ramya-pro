import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Award,
  Briefcase,
  Layers,
  ArrowRight,
  FileText,
  Mail,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Globe,
  Sparkles,
  ShieldCheck,
  Download,
  Calendar,
  Building
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, PROJECTS, CERTIFICATIONS, INTERNSHIPS } from '../data/portfolioData';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenDoc }) {
  return (
    <div className="section-spacing" style={{ paddingTop: '2.5rem' }}>
      <div className="content-wrapper">
        
        {/* Academic Hero Section */}
        <section
          className="academic-card"
          style={{
            padding: '3rem 2.5rem',
            marginBottom: '3.5rem',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
            borderColor: '#cbd5e1',
          }}
        >
          <div style={{ maxWidth: '920px' }}>
            {/* Academic Status Eyebrow */}
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>
              <span className="eyebrow-dot" />
              <span>Computer Science &amp; Business Systems Student</span>
            </div>

            {/* Main Heading */}
            <h1
              className="academic-title font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                marginBottom: '0.75rem',
                letterSpacing: '-0.03em',
                lineHeight: 1.15
              }}
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-accent)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em'
              }}
            >
              {PERSONAL_INFO.title}
            </p>

            {/* Official Description */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--color-text-body)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '820px'
              }}
            >
              "{PERSONAL_INFO.summary}"
            </p>

            {/* Academic Information Block */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                padding: '1.5rem',
                background: '#ffffff',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2.25rem',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  <GraduationCap size={15} style={{ color: 'var(--color-primary)' }} />
                  <span>Institution</span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.95rem' }}>
                  {EDUCATION.institution}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Autonomous • Anna University
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  <BookOpen size={15} style={{ color: 'var(--color-primary)' }} />
                  <span>Program</span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--color-text-main)', fontSize: '0.95rem' }}>
                  {EDUCATION.degree}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Period: {EDUCATION.period}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  <Award size={15} style={{ color: 'var(--color-primary)' }} />
                  <span>Cumulative GPA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-primary)' }}>
                    {EDUCATION.cgpa}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>/ 10.0 scale</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-verified)', fontWeight: 600 }}>
                  Consistent Academic Standing
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link to="/projects" className="btn btn-primary btn-lg">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </Link>

              <Link to="/resume" className="btn btn-secondary btn-lg">
                <FileText size={18} />
                <span>View Resume</span>
              </Link>

              <a href="#contact" className="btn btn-outline btn-lg">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </section>

        {/* Academic Key Metrics Grid */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div className="metric-pill">
              <div style={{ padding: '0.75rem', background: '#eff6ff', borderRadius: 'var(--radius-sm)', color: '#1d4ed8' }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="metric-pill-val">7.88 CGPA</div>
                <div className="metric-pill-label">B.Tech. CSBS Academic Standing</div>
              </div>
            </div>

            <div className="metric-pill">
              <div style={{ padding: '0.75rem', background: '#fffbeb', borderRadius: 'var(--radius-sm)', color: '#b45309' }}>
                <Award size={22} />
              </div>
              <div>
                <div className="metric-pill-val">Elite 79%</div>
                <div className="metric-pill-label">NPTEL Human Computer Interaction</div>
              </div>
            </div>

            <div className="metric-pill">
              <div style={{ padding: '0.75rem', background: '#ecfdf5', borderRadius: 'var(--radius-sm)', color: '#047857' }}>
                <Globe size={22} />
              </div>
              <div>
                <div className="metric-pill-val">82 / 100</div>
                <div className="metric-pill-label">Goethe-Zertifikat A2 German (Good)</div>
              </div>
            </div>

            <div className="metric-pill">
              <div style={{ padding: '0.75rem', background: '#f5f3ff', borderRadius: 'var(--radius-sm)', color: '#6d28d9' }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="metric-pill-val">Oracle AI</div>
                <div className="metric-pill-label">OCI 2025 Certified AI Associate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars / Navigation Pathways for Reviewers */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Dossier Overview</span>
            </div>
            <h2 className="academic-title font-serif" style={{ fontSize: '2rem' }}>
              Academic Portfolio Dossier
            </h2>
            <p className="academic-subtitle">
              Structured sections detailing undergraduate education, technical development, industry internships, and formal recommendations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* About Card */}
            <div className="academic-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.6rem', background: '#f1f5f9', borderRadius: 'var(--radius-sm)', color: 'var(--color-primary)' }}>
                  <GraduationCap size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Academic Background</h3>
              </div>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                Computer Science &amp; Business Systems at R.M.K. Engineering College. Detailed coursework covering Web Development, DBMS, Business Strategy, and Marketing.
              </p>
              <Link to="/about" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>Read Profile &amp; Education</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Projects Card */}
            <div className="academic-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.6rem', background: '#eff6ff', borderRadius: 'var(--radius-sm)', color: '#1d4ed8' }}>
                  <Layers size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Projects &amp; Deployments</h3>
              </div>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                Live production web platforms including SkillMate, Multi Agent Shopping System for Farmers, and the academic CareWise healthcare comparator.
              </p>
              <Link to="/projects" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>Explore Live Projects</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Certifications Card */}
            <div className="academic-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.6rem', background: '#fffbeb', borderRadius: 'var(--radius-sm)', color: '#b45309' }}>
                  <Award size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Certifications</h3>
              </div>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                Rigorous credential gallery featuring NPTEL HCI (Elite), Oracle AI Associate, Goethe-Zertifikat A2 German, and Infosys Springboard Web Development.
              </p>
              <Link to="/certifications" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>View Certifications Gallery</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* LOR Card */}
            <div className="academic-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ padding: '0.6rem', background: '#ecfdf5', borderRadius: 'var(--radius-sm)', color: '#047857' }}>
                  <FileText size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Letters of Recommendation</h3>
              </div>
              <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                Formal letters of recommendation from Dr. K. Chidambarathanu (Head of Department) and Prof. C. Mary Shiba (Project Mentor) attesting to academic capabilities.
              </p>
              <Link to="/lor" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>Review Recommendation Letters</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Internship Certificates Section */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Industry Experience</span>
              </div>
              <h2 className="academic-title font-serif" style={{ fontSize: '2rem', margin: 0 }}>
                Internship Certificates
              </h2>
            </div>
            <Link to="/internships" className="btn btn-outline btn-sm">
              <span>View All Internships</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {INTERNSHIPS.map((intern) => (
              <div key={intern.id} className="academic-card" style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                {/* Header badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-accent">
                    <Briefcase size={12} />
                    <span>Internship</span>
                  </span>
                  <span className="badge badge-verified">
                    <CheckCircle2 size={12} />
                    <span>Certificate Verified</span>
                  </span>
                </div>

                {/* Certificate icon area */}
                <div style={{
                  width: '100%',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    background: 'var(--color-primary)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileText size={26} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-text-main)', lineHeight: 1.3 }}>
                      {intern.role}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                      Certificate of Completion
                    </div>
                  </div>
                </div>

                {/* Organization & Period */}
                <div style={{ marginBottom: '1.25rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Building size={15} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                      {intern.organization}
                    </span>
                  </div>
                  {intern.organizationNote && (
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.4rem', paddingLeft: '1.45rem' }}>
                      {intern.organizationNote}
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.45rem' }}>
                    <Calendar size={13} style={{ color: 'var(--color-text-muted)' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      {intern.period}
                    </span>
                  </div>
                  {intern.project && (
                    <div style={{ marginTop: '0.75rem', padding: '0.65rem 0.85rem', background: 'var(--color-accent-soft)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-accent-border)', fontSize: '0.8rem' }}>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Project: </span>
                      <span style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>{intern.project}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <button
                    type="button"
                    onClick={() => onOpenDoc(intern.pdf, `${intern.role} Certificate`, `${intern.organization} • ${intern.period}`)}
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1, minWidth: '130px' }}
                  >
                    <FileText size={14} />
                    <span>View Certificate</span>
                  </button>
                  <a
                    href={intern.pdf}
                    download
                    className="btn btn-secondary btn-sm"
                    title="Download certificate PDF"
                    style={{ flex: 1, minWidth: '130px' }}
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Featured Systems</span>
              </div>
              <h2 className="academic-title font-serif" style={{ fontSize: '2rem', margin: 0 }}>
                Deployed Applications
              </h2>
            </div>
            <Link to="/projects" className="btn btn-outline btn-sm">
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {PROJECTS.filter(p => p.deployed).map((proj) => (
              <div key={proj.id} className="academic-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="badge badge-verified">
                    <span>Live on Vercel</span>
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {proj.year}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{proj.title}</h3>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                  "{proj.description}"
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

      </div>
    </div>
  );
}
