import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Summer Sale Hero Banner */}
            <section className="relative w-full h-[400px] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white">
                
                {/* Heading with Emoji */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-3">
                    Summer Sale 50% OFF! 
                    <span role="img" aria-label="fire" className="text-4xl md:text-5xl">🔥</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-95">
                    Beat the heat with our exclusive collection of summer essentials. 
                    Limited time offer!
                </p>

                {/* Shop Now Button */}
                <button className="btn btn-wide bg-white text-orange-600 border-none hover:bg-gray-100 rounded-full text-lg font-bold shadow-lg transition-transform hover:scale-105">
                    Shop Now
                </button>

                {/* Optional bottom fade effect seen in the image */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/20 to-transparent"></div>
            </section>
        </div>
    );
};

export default HomePage;