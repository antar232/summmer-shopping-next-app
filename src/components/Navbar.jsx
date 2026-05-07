// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (
//         <div className="navbar bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white shadow-lg px-4 md:px-8">
            
//             {/* 1. START: Logo (Desktop) & Hamburger (Mobile) */}
//             <div className="navbar-start">
//                 {/* Mobile Dropdown */}
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
//                         <li><Link href="/">Home</Link></li>
//                         <li><Link href="/products">Product</Link></li>
//                         <li><Link href="/login">Login</Link></li>
//                         <li><Link href="/register">Register</Link></li>
//                     </ul>
//                 </div>

//                 {/* Logo - Always on the left for desktop */}
//                 <div className="hidden lg:flex items-center gap-2">
//                     <div className="text-3xl">
//                         <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
//                         </svg>
//                     </div>
//                     <Link href="/" className="text-2xl font-bold tracking-tight">SunCart</Link>
//                 </div>
//             </div>

//             {/* 2. CENTER: Home and Product Links */}
//             <div className="navbar-center">
//                 {/* Mobile Logo appears here if you want it centered on small screens */}
//                 <Link href="/" className="text-xl font-bold lg:hidden">SunCart</Link>

//                 {/* Desktop Menu Links */}
//                 <div className="hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1 gap-8 font-medium">
//                         <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
//                         <li><Link href="/products" className="hover:text-gray-200">Product</Link></li>
//                     </ul>
//                 </div>
//             </div>

//             {/* 3. END: Login and Register Buttons (Right Side) */}
//             <div className="navbar-end">
//                 <div className="hidden lg:flex gap-3">
//                     <Link href="/login" className="btn btn-sm bg-white text-orange-600 border-none hover:bg-gray-100 px-6 normal-case font-bold">
//                         Login
//                     </Link>
//                     <Link href="/register" className="btn btn-sm btn-outline text-white hover:bg-white hover:text-pink-600 px-6 normal-case font-bold">
//                         Register
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white shadow-lg px-4 md:px-8 sticky top-0 z-50">
            
            {/* 1. START: Logo & Hamburger */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-medium">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/register">Register</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center gap-2">
                    <div className="text-3xl">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                    </div>
                    <Link href="/" className="text-2xl font-bold tracking-tight">SunCart</Link>
                </div>
            </div>

            {/* 2. CENTER: Mobile Logo & Desktop Links */}
            <div className="navbar-center">
                <Link href="/" className="text-xl font-bold lg:hidden">SunCart</Link>

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 font-medium">
                        <li><Link href="/" className="hover:text-gray-200 transition">Home</Link></li>
                        <li><Link href="/products" className="hover:text-gray-200 transition">Product</Link></li>
                    </ul>
                </div>
            </div>

            {/* 3. END: Cart, Login, and Register */}
            <div className="navbar-end gap-2 md:gap-4">
                
                {/* --- CART ICON START --- */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item bg-white text-orange-600 border-none font-bold">8</span>
                        </div>
                    </div>
                    {/* কার্ট ড্রপডাউন মেনু (অপশনাল) */}
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow text-black">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info font-medium">Subtotal: $999</span>
                            <div className="card-actions">
                                <Link href="/cart" className="btn btn-orange-600 bg-orange-600 text-white btn-block hover:bg-orange-700 border-none">View Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- CART ICON END --- */}

                <div className="hidden sm:flex gap-3">
                    <Link href="/login" className="btn btn-sm bg-white text-orange-600 border-none hover:bg-gray-100 px-6 normal-case font-bold shadow-md">
                        Login
                    </Link>
                    <Link href="/register" className="btn btn-sm btn-outline text-white hover:bg-white hover:text-pink-600 px-6 normal-case font-bold border-white">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;