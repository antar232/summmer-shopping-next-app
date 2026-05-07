"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginFunc = async (data) => {
    setLoading(true);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed!", { position: "top-center", toastId: "login-err" });
    }

    if (res) {
      toast.success("Welcome back to SunCart!", { position: "top-center", toastId: "login-success" });
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="p-8 rounded-[2rem] bg-white shadow-xl shadow-gray-100 w-full max-w-md border border-gray-100">
        
        {/* SunCart Logo/Icon */}
        <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-4 rounded-2xl">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="32" width="32" className="text-orange-600" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
            </div>
        </div>

        <h2 className="font-black text-3xl text-center text-slate-800 mb-2">Welcome Back</h2>
        <p className="text-center text-slate-500 mb-8 text-sm">Please enter your details to login.</p>

        <form className="space-y-5" onSubmit={handleSubmit(handleLoginFunc)}>
          
          {/* Email Field */}
          <div className="form-control">
            <label className="label font-bold text-slate-700 py-1">Email</label>
            <input
              type="email"
              className={`input input-bordered w-full rounded-xl focus:outline-orange-500 ${errors.email ? 'input-error' : ''}`}
              placeholder="name@example.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label font-bold text-slate-700 py-1">Password</label>
            <div className="relative">
              <input
                type={isShowPassword ? "text" : "password"}
                className={`input input-bordered w-full rounded-xl pr-12 focus:outline-orange-500 ${errors.password ? 'input-error' : ''}`}
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.password && <span className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</span>}
          </div>

          {/* Login Button */}
          <button 
            disabled={loading}
            className="btn w-full bg-gradient-to-r from-orange-600 to-pink-500 text-white border-none rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-orange-100"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-8 text-gray-400 text-xs uppercase tracking-widest">Or continue with</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full rounded-xl flex items-center justify-center gap-3 border-gray-200 hover:bg-gray-50 hover:text-slate-800 hover:border-gray-300 transition"
        >
          <FaGoogle className="text-red-500" /> Google
        </button>

        {/* Register Link */}
        <p className="mt-8 text-center text-sm text-slate-500 font-medium">
          New here?{" "}
          <Link href="/register" className="text-orange-600 font-bold hover:underline ml-1">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;