"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopGenerations = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:3000/data.json") 
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 8)))
            .catch((err) => console.log("Fetch Error:", err));
    }, []);

    return (
        <section className="py-12 px-4 bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-10">
                Popular Products
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
                    >
                        {/* IMAGE */}
                        <div className="h-64 w-full overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 flex-grow">
                            <p className="text-orange-500 text-sm font-medium">
                                {product.brand}
                            </p>

                            <h2 className="text-lg font-semibold mt-1">
                                {product.name}
                            </h2>

                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                                <span className="text-yellow-400 text-lg">★</span>
                                {product.rating}
                                <span className="text-gray-400">
                                    ({product.stock} in stock)
                                </span>
                            </div>

                            <p className="text-2xl font-bold text-orange-600 mt-3">
                                ${product.price}
                            </p>

                            
                            <Link 
                                href={`/details/${product.id}`}
                                className="block text-center mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-full font-semibold hover:opacity-90 transition active:scale-95"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* VIEW ALL BUTTON */}
            <div className="text-center mt-10">
                <Link
                    href="/products"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-xl hover:opacity-90 transition"
                >
                    View All Products
                </Link>
            </div>
        </section>
    );
};

export default TopGenerations;