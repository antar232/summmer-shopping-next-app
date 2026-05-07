import React from 'react';

const TopBrands = () => {
    const brands = ["SunShade", "BeachLife", "SunGuard", "SummerVies"];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
                    Top Summer Brands
                </h2>

                {/* Brands Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {brands.map((brand, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center h-24 rounded-xl shadow-sm border border-orange-50 bg-gradient-to-br from-orange-50 via-white to-pink-50 hover:shadow-md transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-lg font-bold text-slate-800">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopBrands;