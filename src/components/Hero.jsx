import React from 'react';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            padding: 'var(--spacing-xl) var(--spacing-md)',
            background: 'linear-gradient(135deg, var(--bg-secondary) 0%, #fff 100%)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            overflow: 'hidden'
        }}>
            {/* Decorative Brand Accent */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'var(--color-cgu-red)'
            }} />

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--color-black)',
                    letterSpacing: '-0.02em'
                }}>
                    Drucker AI
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    marginBottom: 'var(--spacing-lg)',
                    fontFamily: 'var(--font-serif)',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Exploring the future of management through the lens of Peter Drucker’s philosophy.
                </p>

                <div style={{
                    display: 'inline-block',
                    padding: 'var(--spacing-xs) var(--spacing-sm)',
                    background: 'rgba(175, 29, 39, 0.1)',
                    color: 'var(--color-cgu-red)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    Research Preview
                </div>
            </div>
        </section>
    );
};

export default Hero;
