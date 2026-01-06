import React from 'react';

const Context = () => {
    const topics = [
        "Management Decision",
        "Organization & Strategy",
        "Knowledge Worker & Productivity",
        "Technology & Organizational Change",
        "Personal Career & Responsibility"
    ];

    return (
        <section style={{
            padding: 'var(--spacing-lg) var(--spacing-md)',
            background: 'var(--bg-primary)'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--color-black)'
                }}>Why We Are Building This</h2>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    We are developing "Drucker AI"—a system designed to deliver management insights grounded in the philosophy of Peter Drucker.
                </p>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    Before building the system, we are collecting real-world questions from decision-makers to model our knowledge base effectively. We are focusing on:
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-sm)'
                }}>
                    {topics.map((topic, index) => (
                        <div key={index} style={{
                            padding: 'var(--spacing-sm)',
                            background: 'var(--bg-secondary)',
                            borderLeft: '3px solid var(--color-cgu-red)',
                            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                            fontWeight: '500',
                            color: 'var(--text-primary)'
                        }}>
                            {topic}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Context;
