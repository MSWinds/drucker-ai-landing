import React from 'react';
import Button from '../../components/ui/Button';

const QuestionForm = () => {
    return (
        <section id="connect" className="section-padding relative overflow-hidden bg-bg-dark">
            {/* Background Glow - Subtle Red pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-cgu-red/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-12">

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-tight text-text-primary-dark">
                            What would you ask <br />
                            <span className="text-cgu-red italic">Peter Drucker</span>?
                        </h2>
                        <p className="text-lg text-text-secondary-dark font-light max-w-xl mx-auto">
                            Your input helps training our model. We are building the knowledge base around the real problems managers face today.
                        </p>
                    </div>

                    <form className="glass-panel-dark p-2 rounded-full flex flex-col sm:flex-row items-center gap-2 max-w-2xl mx-auto focus-within:ring-1 focus-within:ring-cgu-red/30 transition-all shadow-2xl shadow-black/50">
                        <input
                            type="text"
                            placeholder="e.g., How do I handle rapid organizational change?"
                            className="w-full bg-transparent border-none text-white px-8 py-4 rounded-full focus:outline-none placeholder:text-gray-600 font-light text-base h-16"
                        />
                        <Button className="w-full sm:w-auto h-14 whitespace-nowrap px-8 text-base shadow-lg shadow-cgu-red/20">
                            Submit Question
                        </Button>
                    </form>

                    <div className="flex justify-center gap-12 text-xs font-medium text-gray-500 uppercase tracking-widest pt-8 border-t border-white/5 w-fit mx-auto">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            Secure
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            Quick
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-purple-500/80 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                            Anonymous
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionForm;
