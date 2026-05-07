"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);

    if (isExist) {
     
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    
      toast.info(`${product.name} quantity increased!`, { toastId: product.id });
    } else {
    
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`, { toastId: product.id });
    }
  };

  // ২. সংখ্যা কমানো
  const decreaseQuantity = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
   
    toast.error("Item removed from cart", { toastId: "remove-item" });
  };

  
  const clearCart = () => setCartItems([]);

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);