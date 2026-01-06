import React from 'react';

const Footer = () => {
    return (
        <footer className="py-16 border-t border-white/5 relative overflow-hidden bg-bg-dark">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-cgu-red/50 to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="mb-8">
                    <span className="text-2xl font-heading font-semibold text-text-primary-dark">
                        Drucker<span className="text-cgu-red">AI</span>
                    </span>
                    <p className="mt-4 text-sm text-text-secondary-dark max-w-md mx-auto">
                        Exploring the future of management through the lens of Peter Drucker's philosophy.
                    </p>
                </div>

                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="text-text-secondary-dark hover:text-white transition-colors text-sm">About CGU</a>
                    <a href="#" className="text-text-secondary-dark hover:text-white transition-colors text-sm">The Drucker Institute</a>
                    <a href="#" className="text-text-secondary-dark hover:text-white transition-colors text-sm">Privacy Policy</a>
                </div>

                <div className="text-xs text-text-tertiary">
                    &copy; {new Date().getFullYear()} Drucker AI Research Project. All rights reserved.
                    <br />
                    In collaboration with Claremont Graduate University.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
