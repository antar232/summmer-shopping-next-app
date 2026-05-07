import React from 'react';

const LoadingPage = () => {
    
    return (
        <div className="bg-gray-50 min-h-screen">
            
            <div className="max-w-7xl mx-auto p-6 md:p-8 animate-pulse">
                
                
                <div className="h-10 w-64 bg-gray-200 rounded-full mb-10"></div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                 
                    {[...Array(4)].map((_, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-5 flex flex-col h-full"
                        >
                           
                            <div className="rounded-2xl bg-gray-200 h-52 w-full mb-5"></div>

                            
                            <div className="h-3 w-20 bg-gray-100 rounded-full mb-2"></div>

                           
                            <div className="space-y-2 mb-3">
                                <div className="h-5 w-full bg-gray-200 rounded-full"></div>
                                <div className="h-5 w-3/4 bg-gray-200 rounded-full"></div>
                            </div>

                            
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-4 w-4 bg-yellow-100 rounded-full"></div>
                                <div className="h-4 w-10 bg-gray-100 rounded-full"></div>
                                <div className="h-4 w-20 bg-gray-100 rounded-full"></div>
                            </div>

                            
                            <div className="mt-auto pt-4 border-t border-gray-50">
                                <div className="flex justify-between items-end gap-4">
                                    <div className="space-y-2">
                                        <div className="h-3 w-10 bg-gray-100 rounded-full"></div>
                                        <div className="h-8 w-24 bg-orange-100 rounded-full"></div>
                                    </div>
                                  
                                    <div className="h-12 w-12 bg-gray-900 rounded-2xl flex-shrink-0"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

          
            <div className="fixed inset-0 flex items-center justify-center bg-gray-50/70 backdrop-blur-sm z-50">
                <div className="text-center p-8 bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100">
                    <div className="w-16 h-16 border-4 border-dashed border-orange-500 rounded-full animate-spin mx-auto mb-6"></div>
                    <h2 className="text-2xl font-black tracking-tight text-gray-800">
                        Sun<span className="text-orange-500">Cart</span>
                    </h2>
                    <p className="text-sm font-medium text-gray-400 mt-1">Loading premium products...</p>
                </div>
            </div>

        </div>
    );
};

export default LoadingPage;