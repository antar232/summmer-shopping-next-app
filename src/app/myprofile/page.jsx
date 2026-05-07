"use client";
import React from "react";
import { authClient } from "@/lib/auth-client"; 
import { User, Mail, ShieldCheck, LogOut, Camera } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-orange-500"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">
          Please login to view your profile
        </h2>
        <button
          onClick={() => router.push("/login")}
          className="btn bg-orange-600 text-white hover:bg-orange-700 border-none px-8"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-[32px] shadow-xl overflow-hidden border border-gray-100">
        
        <div className="h-32 bg-gradient-to-r from-orange-500 to-pink-500 relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img
                src={
                  user.image || "https://ui-avatars.com/api/?name=" + user.name
                }
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover bg-white shadow-md"
              />
              <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
                <Camera size={14} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="pt-16 pb-8 px-8 text-center">
          <h2 className="text-2xl font-black text-slate-800">{user.name}</h2>
          <p className="text-orange-600 font-medium text-sm flex items-center justify-center gap-1 mt-1">
            <ShieldCheck size={16} /> Verified Account
          </p>

          <div className="mt-8 space-y-4">
           
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="bg-white p-2 rounded-xl shadow-sm text-orange-500">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase">
                  Email Address
                </p>
                <p className="text-slate-700 font-semibold">{user.email}</p>
              </div>
            </div>

            
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <div className="bg-white p-2 rounded-xl shadow-sm text-orange-500">
                <User size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase">
                  Full Name
                </p>
                <p className="text-slate-700 font-semibold">{user.name}</p>
              </div>
            </div>
          </div>

        
          <div className="mt-10 space-y-3">
            <Link href="/edit-profile">
              {" "}
              
              <button className="w-full py-3 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-900 transition-all active:scale-95 shadow-lg mb-3 text-center">
                Edit Profile
              </button>
            </Link>
            <button
              onClick={async () => {
                await authClient.signOut();
                router.push("/");
              }}
              className="w-full py-3 flex items-center justify-center gap-2 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all"
            >
              <LogOut size={18} /> Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
