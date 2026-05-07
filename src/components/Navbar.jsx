// "use client";
// import Link from 'next/link';
// import { useCart } from '@/context/CartContext';

// const Navbar = () => {
//     // Context থেকে ডেটা নিয়ে আসা হচ্ছে
//     const { cartItems, totalCount, totalPrice } = useCart();

//     return (
//         <div className="navbar bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white shadow-lg px-4 md:px-8 sticky top-0 z-50">
            
//             {/* Logo Section */}
//             <div className="navbar-start">
//                 <Link href="/" className="text-2xl font-bold flex items-center gap-2">
//                     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
//                     </svg>
//                     SunCart
//                 </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1 gap-4 font-medium">
//                     <li><Link href="/" className="hover:text-orange-200 transition">Home</Link></li>
//                     <li><Link href="/products" className="hover:text-orange-200 transition">Product</Link></li>
//                     <li><Link href="/products" className="hover:text-orange-200 transition">My Profile</Link></li>
//                 </ul>
//             </div>

//             {/* Cart & Auth Buttons */}
//             <div className="navbar-end gap-3 md:gap-4">
                
//                 {/* --- Dynamic Cart Dropdown --- */}
//                 <div className="dropdown dropdown-end">
//                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
//                         <div className="indicator">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                             </svg>
//                             {/* লাইভ কাউন্ট এখানে আপডেট হবে */}
//                             <span className="badge badge-sm indicator-item bg-white text-orange-600 border-none font-bold">
//                                 {totalCount}
//                             </span>
//                         </div>
//                     </div>
                    
//                     <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow-2xl text-black">
//                         <div className="card-body">
//                             <span className="font-bold text-lg border-b pb-2 text-slate-800">{totalCount} Items</span>
                            
//                             <div className="max-h-48 overflow-y-auto">
//                                 {cartItems.length > 0 ? (
//                                     cartItems.map((item) => (
//                                         <div key={item.id} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
//                                             <div className="flex flex-col">
//                                                 <span className="font-bold text-xs truncate w-32">{item.name}</span>
//                                                 <span className="text-gray-400 text-[10px]">Qty: {item.quantity}</span>
//                                             </div>
//                                             <span className="text-orange-600 font-bold text-xs">
//                                                 ${item.price * item.quantity}
//                                             </span>
//                                         </div>
//                                     ))
//                                 ) : (
//                                     <p className="text-center text-gray-400 py-4">Your cart is empty</p>
//                                 )}
//                             </div>

//                             <div className="pt-2 border-t mt-1">
//                                 <p className="flex justify-between font-bold text-slate-700">
//                                     <span>Total:</span>
//                                     <span>${totalPrice}</span>
//                                 </p>
//                                 <Link href="/cart" className="btn bg-orange-600 text-white btn-block btn-sm mt-3 border-none hover:bg-orange-700">
//                                     View Cart
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Login & Register Buttons */}
//                 <div className="hidden sm:flex gap-2">
//                     <Link href="/login" className="btn btn-sm bg-white text-orange-600 border-none px-6 font-bold hover:bg-gray-100 transition shadow-sm">
//                         Login
//                     </Link>
//                     <Link href="/register" className="btn btn-sm btn-outline text-white hover:bg-white hover:text-orange-600 px-5 font-bold border-white transition">
//                         Register
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
"use client";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Menu } from 'lucide-react'; // আইকনের জন্য

const Navbar = () => {
    const { cartItems, totalCount, totalPrice } = useCart();

    const navLinks = (
        <>
            <li><Link href="/" className="hover:text-orange-200 transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-orange-200 transition">Product</Link></li>
            <li><Link href="/profile" className="hover:text-orange-200 transition">My Profile</Link></li>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white shadow-lg px-4 md:px-8 sticky top-0 z-50">
            
            <div className="navbar-start">
                {/* --- Mobile Menu (Hamburger) --- */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
                        <Menu size={24} />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navLinks}
                    </ul>
                </div>

                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-bold flex items-center gap-2 ml-2 lg:ml-0">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    SunCart
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-medium">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-2 md:gap-4">
                {/* Cart Dropdown */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item bg-white text-orange-600 border-none font-bold">
                                {totalCount}
                            </span>
                        </div>
                    </div>
                    
                    {/* Cart Content (Desktop & Mobile same) */}
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow-2xl text-black">
                        <div className="card-body">
                            <span className="font-bold text-lg border-b pb-2 text-slate-800">{totalCount} Items</span>
                            <div className="max-h-48 overflow-y-auto">
                                {cartItems.length > 0 ? (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-xs truncate w-32">{item.name}</span>
                                                <span className="text-gray-400 text-[10px]">Qty: {item.quantity}</span>
                                            </div>
                                            <span className="text-orange-600 font-bold text-xs">${item.price * item.quantity}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-gray-400 py-4">Your cart is empty</p>
                                )}
                            </div>
                            <div className="pt-2 border-t mt-1">
                                <p className="flex justify-between font-bold text-slate-700">
                                    <span>Total:</span>
                                    <span>${totalPrice}</span>
                                </p>
                                <Link href="/cart" className="btn bg-orange-600 text-white btn-block btn-sm mt-3 border-none hover:bg-orange-700">
                                    View Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Button - Mobile এ ছোট দেখাবে */}
                <div className="flex gap-1 md:gap-2">
                    <Link href="/login" className="btn btn-xs md:btn-sm bg-white text-orange-600 border-none px-3 md:px-6 font-bold hover:bg-gray-100 shadow-sm">
                        Login
                    </Link>
                    <Link href="/register" className="xs:flex btn btn-xs md:btn-sm btn-outline text-white hover:bg-white hover:text-orange-600 px-3 md:px-5 font-bold border-white">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;