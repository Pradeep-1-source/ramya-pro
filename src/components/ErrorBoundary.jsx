import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem 1.5rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
          <h2 style={{ color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Something went wrong loading this section</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: 'var(--color-primary)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
