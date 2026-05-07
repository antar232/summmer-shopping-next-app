"use client";
import React from 'react';
import Link from 'next/link';
import { Home, ShoppingBag, Search } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                
                {/* Animated 404 Illustration */}
                <div className="relative mb-8">
                    <h1 className="text-[120px] md:text-[180px] font-black text-gray-100 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-full shadow-2xl shadow-orange-200 animate-bounce">
                            <Search size={60} className="text-orange-500" />
                        </div>
                    </div>
                </div>

                {/* Message Section */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        href="/" 
                        className="btn bg-gradient-to-r from-orange-600 to-pink-500 text-white border-none px-8 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-orange-200"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    
                    <Link 
                        href="/products" 
                        className="btn btn-outline border-orange-500 text-orange-600 hover:bg-orange-50 px-8 rounded-2xl flex items-center gap-2 transition-all"
                    >
                        <ShoppingBag size={18} />
                        View Products
                    </Link>
                </div>

                {/* Footer Link */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-sm">
                        Need help? <Link href="/contact" className="text-orange-500 font-bold hover:underline">Contact Support</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;