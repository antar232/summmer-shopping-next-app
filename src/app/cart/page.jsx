"use client";
import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';

const CartDetails = () => {
    const { cartItems, totalPrice, totalCount, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();

    const handlePurchase = () => {
        toast.success("Successfully Purchased! Thank you for shopping.", {
            icon: <CheckCircle className="text-green-500" />,
            position: "top-center",
            autoClose: 3000,
        });
        clearCart(); 
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
                <div className="bg-orange-50 p-6 rounded-full animate-bounce">
                    <ShoppingBag size={80} className="text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Your cart is empty!</h2>
                <Link href="/" className="btn bg-orange-600 hover:bg-orange-700 text-white border-none px-8 rounded-xl transition-all">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-black text-slate-800 mb-8">
                    Shopping Cart <span className="text-orange-600">({totalCount})</span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 flex items-center gap-6 transition-hover hover:shadow-md">
                                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                </div>

                                <div className="flex-grow">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-xl">
                                            <button 
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="hover:text-orange-600 transition disabled:opacity-30"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={18} />
                                            </button>
                                            <span className="font-bold text-lg w-4 text-center">{item.quantity}</span>
                                            <button 
                                                onClick={() => addToCart(item)}
                                                className="hover:text-orange-600 transition"
                                            >
                                                <Plus size={18} />
                                            </button>
                                        </div>
                                        <p className="font-black text-slate-800 text-xl">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 sticky top-28">
                            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-slate-500">
                                    <span>Subtotal</span>
                                    <span className="font-bold text-slate-800">${totalPrice}</span>
                                </div>
                                <div className="flex justify-between text-slate-500">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-bold">Free</span>
                                </div>
                                <div className="h-px bg-gray-100 my-4"></div>
                                <div className="flex justify-between text-2xl font-black text-slate-800">
                                    <span>Total</span>
                                    <span className="text-orange-600">${totalPrice}</span>
                                </div>
                            </div>

                            <button 
                                onClick={handlePurchase}
                                className="w-full bg-gradient-to-r from-orange-600 to-pink-500 text-white font-bold py-4 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform active:scale-95"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;