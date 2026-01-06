import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: 'var(--spacing-md)',
            background: 'var(--color-black)',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
            fontSize: '0.9rem'
        }}>
            <p style={{ marginBottom: '0.5rem' }}>
                &copy; {new Date().getFullYear()} Drucker AI Research Project
            </p>
            <p style={{ fontSize: '0.8rem' }}>
                In collaboration with Claremont Graduate University
            </p>
        </footer>
    );
};

export default Footer;
