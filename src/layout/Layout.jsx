import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Global Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cgu-red rounded-full blur-[120px] opacity-[0.15] animate-aurora"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cgu-red-deep rounded-full blur-[100px] opacity-[0.1] animate-aurora" style={{ animationDelay: '-5s' }}></div>
            </div>

            <Navbar />

            <main className="flex-grow z-10 relative pt-24">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
