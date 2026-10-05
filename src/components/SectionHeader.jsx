import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  return (
    <div style={{ marginBottom: '2.5rem', textAlign: centered ? 'center' : 'left' }}>
      {eyebrow && (
        <div className="eyebrow" style={centered ? { justifyContent: 'center' } : {}}>
          <span className="eyebrow-dot" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="academic-title font-serif">{title}</h2>
      {subtitle && (
        <p
          className="academic-subtitle"
          style={centered ? { margin: '0 auto', textAlign: 'center' } : {}}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
