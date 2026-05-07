"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductWithNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000//data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        const cats = ["All", ...new Set(data.map((p) => p.category))];
        setCategories(cats);
      });
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <div className="bg-white border-b overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 items-center">
          <span className="text-gray-400 font-medium text-sm pr-2 border-r hidden md:block">
            Categories:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-5 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="rounded-2xl overflow-hidden mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
              </div>

              {/* Brand Name */}
              <p className="text-orange-500 text-xs font-semibold mb-1">
                {product.brand || "BreezeCo"}
              </p>

              {/* Product Title */}
              <h3 className="text-gray-800 font-bold text-lg mb-2">
                {product.name}
              </h3>

              {/* Rating & Stock */}
              <div className="flex items-center gap-1 mb-4 text-sm">
                <span className="text-orange-400">★</span>
                <span className="text-gray-600 font-medium">
                  {product.rating || "4.5"}
                </span>
                <span className="text-gray-400">
                  ({product.stock || "10"} in stock)
                </span>
              </div>

              {/* Price */}
              <div className="mt-auto">
                <p className="text-orange-600 text-2xl font-extrabold mb-4">
                  ${product.price}
                </p>

                {/* Gradient Button */}
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
      </div>
    </div>
  );
};

export default ProductWithNavbar;
