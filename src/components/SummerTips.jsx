import React from 'react';

const SummerTips = () => {
    const tips = [
        {
            title: "UV Protection",
            description: "Always wear sunscreen with SPF 50+ and reapply every 2 hours. Protect your skin from harmful UV rays.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728L12 12m0 0l-4-4m4 4l4-4m-4 4l-4 4m4-4l4 4" />
                </svg>
            ),
            bgColor: "bg-orange-100"
        },
        {
            title: "Stay Hydrated",
            description: "Drink at least 8 glasses of water daily. Keep your skin moisturized with hydrating face mists.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.157 1.347l-2.903.727a2 2 0 01-1.414-1.96l.477-2.387a2 2 0 00-.547-1.022l-1.428-1.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.157 1.347l-2.903.727a2 2 0 01-1.414-1.96l.477-2.387a2 2 0 00-.547-1.022l-1.428-1.428z" />
                </svg>
            ),
            bgColor: "bg-blue-100"
        },
        {
            title: "Skin Protection",
            description: "Wear protective clothing and accessories like hats and sunglasses when outdoors for extended periods.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            bgColor: "bg-green-100"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                    Summer Care Tips
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tips.map((tip, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            <div className={`${tip.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SummerTips;