import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">

            {/* Background Decor - Abstract World/Net */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cgu-red-light uppercase tracking-wider mb-4 animate-[slide-up_1s_ease-out]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cgu-red animate-pulse"></span>
                    Research Preview
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold tracking-tighter leading-[1.1] text-text-primary-dark">
                    The <span className="text-gradient-red italic pr-2">Future</span> of <br />
                    Management
                </h1>

                <p className="text-lg md:text-xl text-text-secondary-dark max-w-2xl mx-auto font-light leading-relaxed">
                    We are building the first AI system grounded in the philosophy of <span className="text-white hover:text-cgu-red transition-colors cursor-default">Peter Drucker</span>.
                    Help us model the knowledge base by asking the right questions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Button variant="primary" className="md:px-10">
                        Ask Peter Drucker
                    </Button>
                    <Button variant="secondary" className="md:px-10">
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
