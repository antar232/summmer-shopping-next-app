"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaUser, FaLink, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegisterFunc = async (data) => {
    setLoading(true);
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
    }

    if (res) {
      toast.success("Account created successfully! Welcome to SunCart.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4 py-12">
      <div className="p-8 rounded-[2.5rem] bg-white shadow-2xl shadow-gray-100 w-full max-w-lg border border-gray-100">
        
        <div className="text-center mb-8">
            <h2 className="font-black text-4xl text-slate-800 mb-2">Join SunCart</h2>
            <p className="text-slate-500 font-medium">Create your account to start shopping</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(handleRegisterFunc)}>
          
          {/* Name Field */}
          <div className="form-control w-full">
            <label className="label font-bold text-slate-700">Full Name</label>
            <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                type="text"
                className="input input-bordered w-full pl-12 rounded-2xl focus:outline-orange-500"
                placeholder="John Doe"
                {...register("name", { required: "Name field is required" })}
                />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name.message}</p>}
          </div>

          {/* Photo URL Field */}
          <div className="form-control w-full">
            <label className="label font-bold text-slate-700">Photo URL</label>
            <div className="relative">
                <FaLink className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                type="text"
                className="input input-bordered w-full pl-12 rounded-2xl focus:outline-orange-500"
                placeholder="https://example.com/photo.jpg"
                {...register("photo", { required: "Photo URL is required" })}
                />
            </div>
            {errors.photo && <p className="text-red-500 text-xs mt-1 ml-2">{errors.photo.message}</p>}
          </div>

          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label font-bold text-slate-700">Email Address</label>
            <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                type="email"
                className="input input-bordered w-full pl-12 rounded-2xl focus:outline-orange-500"
                placeholder="example@mail.com"
                {...register("email", { required: "Email field is required" })}
                />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="label font-bold text-slate-700">Password</label>
            <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                type={isShowPassword ? "text" : "password"}
                className="input input-bordered w-full px-12 rounded-2xl focus:outline-orange-500"
                placeholder="••••••••"
                {...register("password", { 
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters required" }
                })}
                />
                <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                >
                    {isShowPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password.message}</p>}
          </div>

          <button 
            disabled={loading}
            className="btn w-full bg-gradient-to-r from-orange-600 to-pink-500 text-white border-none rounded-2xl text-lg font-bold shadow-xl shadow-orange-100 hover:scale-[1.02] active:scale-95 transition-all mt-4"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
            <p className="text-slate-500 font-medium">
                Already have an account?{" "}
                <Link href="/login" className="text-orange-600 font-black hover:underline">
                    Login here
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;