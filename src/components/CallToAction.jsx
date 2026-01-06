import React from 'react';

const CallToAction = () => {
    return (
        <section style={{
            padding: 'var(--spacing-xl) var(--spacing-md)',
            background: 'var(--bg-secondary)',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--color-black)'
                }}>What would you ask Peter Drucker?</h2>

                <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    Your input will directly shape the design of the Drucker AI Knowledge Base.
                </p>

                <a
                    href="https://forms.google.com" // Placeholder, user to update
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        background: 'var(--color-cgu-red)',
                        color: 'var(--color-white)',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-md)',
                        transition: 'transform 0.2s ease',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    Submit Your Question
                </a>
            </div>
        </section>
    );
};

export default CallToAction;
