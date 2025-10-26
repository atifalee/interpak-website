import React from 'react';

const QuickStats = () => {
    const stats = [
        {
            title: 'Vision',
            description: 'To be the leading suppliers in oil field through commitment and enhancement of customer\'s productivity with best solutions.'
        },
        {
            title: 'Core Values',
            description: 'Integrity, Supportive Team Work, Professionalism, Commitment'
        },
        {
            title: 'Business Focus',
            description: 'Profitable growth through superior customer services, quality, and commitment.'
        }
    ];

    return (
        <section className="py-12 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 border-l-4 border-yellow-400" style={{ background: 'rgba(255,255,255,0.7)' }}>
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">{stat.title}</h3>
                            <p className="text-gray-700">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickStats;
