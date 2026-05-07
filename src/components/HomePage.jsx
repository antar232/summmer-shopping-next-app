import React from 'react';

const HomePage = () => {
    return (
        /* Remove min-h-screen from here */
        <div className="bg-base-100"> 
            {/* Summer Sale Hero Banner */}
            <section className="relative w-full h-[400px] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white">
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-3">
                    Summer Sale 50% OFF! 
                    <span role="img" aria-label="fire" className="text-4xl md:text-5xl">🔥</span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-95">
                    Beat the heat with our exclusive collection of summer essentials. 
                    Limited time offer!
                </p>

                <button className="btn btn-wide bg-white text-orange-600 border-none hover:bg-gray-100 rounded-full text-lg font-bold shadow-lg transition-transform hover:scale-105">
                    Shop Now
                </button>
            </section>
        </div>
    );
};

export default HomePage;