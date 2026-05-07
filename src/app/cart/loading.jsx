import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <div className="max-w-5xl w-full mx-auto">
                
                {/* Header Skeleton */}
                <div className="h-8 w-48 bg-gray-200 rounded-full mb-10 animate-pulse mx-auto md:mx-0"></div>

                {/* Main Card Skeleton */}
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                    
                    {/* Left Side (Image Skeleton) */}
                    <div className="md:w-1/2 bg-gray-200 animate-pulse flex items-center justify-center">
                        <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                        </svg>
                    </div>

                    {/* Right Side (Content Skeleton) */}
                    <div className="md:w-1/2 p-8 md:p-14 space-y-6">
                        {/* Brand */}
                        <div className="h-4 w-24 bg-orange-100 rounded animate-pulse"></div>
                        
                        {/* Title */}
                        <div className="space-y-3">
                            <div className="h-10 w-full bg-gray-200 rounded-xl animate-pulse"></div>
                            <div className="h-10 w-3/4 bg-gray-200 rounded-xl animate-pulse"></div>
                        </div>

                        {/* Rating & Stock Row */}
                        <div className="flex gap-4">
                            <div className="h-6 w-16 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-6 w-32 bg-gray-100 rounded animate-pulse"></div>
                        </div>

                        {/* Price */}
                        <div className="h-12 w-32 bg-orange-50 rounded-2xl animate-pulse mt-4"></div>

                        {/* Description */}
                        <div className="space-y-2 mt-8">
                            <div className="h-3 w-full bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-3 w-full bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-3 w-2/3 bg-gray-100 rounded animate-pulse"></div>
                        </div>

                        {/* Button Skeleton */}
                        <div className="pt-10">
                            <div className="h-14 w-full bg-gray-200 rounded-2xl animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Loading Spinner */}
                <div className="mt-12 flex flex-col items-center gap-3">
                    <span className="loading loading-ring loading-lg text-orange-500"></span>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em] animate-bounce">
                        Finding your product...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loading;