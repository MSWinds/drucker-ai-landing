import React from 'react';
import Card from '../../components/ui/Card';

const MissionGrid = () => {
    const pillars = [
        {
            title: "Management Decision",
            description: "Strategic thinking and decision-making frameworks for the modern executive.",
            icon: "📊",
            colSpan: "md:col-span-2",
            gradient: "from-cgu-red/10 to-transparent"
        },
        {
            title: "Organization & Strategy",
            description: "Building effective organizational structures that adapt to change.",
            icon: "🏛️",
            colSpan: "md:col-span-1",
            gradient: "from-blue-500/5 to-transparent"
        },
        {
            title: "Knowledge Worker",
            description: "Maximizing productivity in the age of information and AI.",
            icon: "🧠",
            colSpan: "md:col-span-1",
            gradient: "from-purple-500/5 to-transparent"
        },
        {
            title: "Technology & Change",
            description: "Navigating organizational transformation driven by AI and automation.",
            icon: "🔄",
            colSpan: "md:col-span-1",
            gradient: "from-emerald-500/5 to-transparent"
        },
        {
            title: "Personal Responsibility",
            description: "Career development and self-management for the individual contributor.",
            icon: "👤",
            colSpan: "md:col-span-2",
            gradient: "from-orange-500/5 to-transparent"
        }
    ];

    return (
        <section id="mission" className="section-padding bg-bg-paper text-text-primary-light relative">
            <div className="container mx-auto px-6">
                <div className="mb-32 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6 text-black">
                        Why We Are Building This
                    </h2>
                    <p className="text-text-secondary-light text-lg">
                        Before building the system, we are collecting real-world questions from decision-makers
                        to model our knowledge base effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 auto-rows-[minmax(250px,auto)]">
                    {pillars.map((item, idx) => (
                        <Card
                            key={idx}
                            className={`${item.colSpan} glass-panel-light flex flex-col justify-between group overflow-hidden border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
                            hoverEffect={false} /* Custom light hover handled by class above */
                        >
                            {/* Background Gradient - Subtle for Light Mode */}
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-radial ${item.gradient} opacity-60 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

                            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 text-black flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                {item.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-heading font-bold mb-4 text-black">
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary-light leading-relaxed text-base">
                                    {item.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionGrid;
