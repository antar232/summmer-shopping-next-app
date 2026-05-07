"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star, Box, ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const ViewDetails = ({ params: paramsPromise }) => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const params = await paramsPromise;
      const res = await fetch("http://localhost:3000/data.json");
      const products = await res.json();
      const found = products.find((p) => p.id === Number(params.id));
      setProduct(found);
      setLoading(false);
    };
    fetchData();
  }, [paramsPromise]);

  if (loading)
    return (
      <div className="text-center p-20 font-bold text-orange-500">
        Loading...
      </div>
    );
  if (!product)
    return <div className="text-center p-20">Product not found!</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/products"
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold mb-6"
        >
          <ArrowLeft size={18} /> Back to Products
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-96 object-contain rounded-3xl"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 p-10 md:p-14">
          <span className="text-orange-500 text-xs font-black uppercase tracking-[3px]">
            {product.brand}
          </span>
          <h1 className="text-4xl font-black text-slate-800 mt-2 mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-1">
              <Star className="text-orange-400 fill-orange-400" size={20} />
              <span className="font-bold text-slate-700">{product.rating}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Box size={18} />
              <span className="text-sm font-medium">
                {product.stock} in stock
              </span>
            </div>
          </div>

          <div className="text-4xl font-black text-orange-600 mb-8">
            ${product.price}
          </div>

          <p className="text-slate-500 text-sm leading-relaxed mb-10">
            {product.description}
          </p>

          {/* Add to Cart Action */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-orange-100"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
