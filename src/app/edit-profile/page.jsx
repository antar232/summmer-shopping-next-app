"use client";
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { User, Camera, ArrowLeft, Save, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    
    // Form States
    const [name, setName] = useState(session?.user?.name || "");
    const [image, setImage] = useState(session?.user?.image || "");
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        try {
            await authClient.user.update({
                name: name,
                image: image, // এখানে ছবির URL দিতে হবে
            });
            
            toast.success("Profile updated successfully!");
            router.push("/profile"); // আপডেট শেষে প্রোফাইল পেজে ব্যাক করবে
            router.refresh();
        } catch (error) {
            toast.error("Failed to update profile. Try again.");
            console.error(error);
        } finally {
            setIsUpdating(false);
        }
    };

    if (!session) return null;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-md mx-auto bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-50 flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full transition-all">
                        <ArrowLeft size={20} className="text-gray-600" />
                    </button>
                    <h2 className="text-xl font-black text-slate-800">Edit Profile</h2>
                </div>

                <form onSubmit={handleUpdate} className="p-8 space-y-6">
                    
                    {/* Profile Picture Section */}
                    <div className="flex flex-col items-center">
                        <div className="relative group">
                            <img 
                                src={image || "https://ui-avatars.com/api/?name=" + name} 
                                alt="Profile" 
                                className="w-28 h-28 rounded-full object-cover border-4 border-orange-50 shadow-inner"
                            />
                            <label className="absolute bottom-1 right-1 bg-orange-600 p-2 rounded-full text-white cursor-pointer hover:bg-orange-700 transition-all shadow-md">
                                <Camera size={16} />
                                <input 
                                    type="text" 
                                    placeholder="Image URL" 
                                    className="hidden" 
                                    // ছবি আপলোডের জন্য এখানে Cloudinary বা Firebase লজিক বসাতে পারেন
                                />
                            </label>
                        </div>
                        <p className="text-xs text-gray-400 mt-3 font-medium">Click icon to change photo URL</p>
                    </div>

                    {/* Input Fields */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-semibold text-slate-700"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Profile Image URL</label>
                            <div className="relative">
                                <Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input 
                                    type="text" 
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all font-semibold text-slate-700"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={isUpdating}
                        className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-900 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isUpdating ? (
                            <>
                                <Loader2 className="animate-spin" size={20} /> Updating...
                            </>
                        ) : (
                            <>
                                <Save size={20} /> Save Changes
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;