import React, { useEffect } from 'react';
import { X, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function DocumentModal({ isOpen, onClose, docUrl, docTitle, subtitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !docUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ minWidth: 0, flex: 1, paddingRight: '1rem' }}>
            <div className="modal-title" id="modal-title">
              <FileText size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {docTitle || 'Academic Document'}
              </span>
            </div>
            {subtitle && (
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0.2rem 0 0 1.6rem' }}>
                {subtitle}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a
              href={docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Open document in new browser tab"
            >
              <ExternalLink size={14} />
              <span className="hidden-mobile">New Tab</span>
            </a>
            <a
              href={docUrl}
              download
              className="btn btn-primary btn-sm"
              title="Download document file"
            >
              <Download size={14} />
              <span className="hidden-mobile">Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.45rem', minWidth: '32px' }}
              aria-label="Close document viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body with PDF Viewer */}
        <div className="modal-body">
          <object
            data={docUrl}
            type="application/pdf"
            className="modal-iframe"
            aria-label={docTitle}
          >
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center',
                background: 'var(--color-bg-subtle)',
              }}
            >
              <FileText size={48} style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Viewing PDF Document</h4>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: 450, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Your browser may not support inline embedded PDF previews. You can view or download the authentic file directly below.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a
                  href={docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} />
                  <span>Open PDF in New Tab</span>
                </a>
                <a
                  href={docUrl}
                  download
                  className="btn btn-secondary"
                >
                  <Download size={16} />
                  <span>Download Document</span>
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <CheckCircle2 size={14} style={{ color: 'var(--color-verified)' }} />
            <span>Official University Application Supporting Record</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary btn-sm"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
