import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4 glass-panel border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-cgu-red flex items-center justify-center font-serif text-white font-bold text-lg">
            D
          </div>
          <span className="text-xl font-heading font-semibold tracking-tight">
            Drucker<span className="text-cgu-red">AI</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Mission</a>
          <a href="#research" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Research</a>
          <a href="#connect" className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium">
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
