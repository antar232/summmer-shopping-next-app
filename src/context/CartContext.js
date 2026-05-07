"use client";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ১. প্রোডাক্ট শুধুমাত্র একবার অ্যাড করার লজিক
  const addToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);

    if (isExist) {
      // যদি আগে থেকেই থাকে, তবে আর সংখ্যা বাড়বে না বা অ্যাড হবে না
      toast.info(`${product.name} is already in your cart!`, { toastId: product.id });
      return;
    }

    // নতুন প্রোডাক্ট হলে ১টি কোয়ান্টিটিসহ অ্যাড হবে
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    toast.success(`${product.name} added to cart!`);
  };

  // ২. শুধুমাত্র প্লাস বাটনে ক্লিক করলে সংখ্যা বাড়বে
  const increaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ৩. মাইনাস বাটনে ক্লিক করলে সংখ্যা কমবে (১ এর নিচে যাবে না)
  const decreaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ৪. রিমুভ এবং ক্লিয়ার কার্ট
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Product removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // ৫. ক্যালকুলেশন
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity, // নতুন এক্সপোর্ট
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);