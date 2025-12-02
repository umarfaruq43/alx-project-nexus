// pages/signup.tsx
import { useRouter } from "next/router";
import { useState } from "react";
import { Google, Apple } from "iconsax-reactjs";

export default function Signup() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-tr from-purple-950 via-black to-gray-950 flex items-center justify-center px-6">
            <div className="max-w-md w-full">
                {/* Card */}
                <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-purple-800/30">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Create Account
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-purple-300 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-5 py-4 bg-gray-800/50 border border-purple-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                            />
                        </div>

                        <div>
                            <label className="block text-purple-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-5 py-4 bg-gray-800/50 border border-purple-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                            />
                        </div>

                        <div>
                            <label className="block text-purple-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create strong password"
                                className="w-full px-5 py-4 bg-gray-800/50 border border-purple-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => router.push("/")}
                            className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl text-xl font-bold text-white shadow-lg transform hover:scale-105 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center mt-8 text-gray-400">
                        Already have an account?{" "}
                        <button
                            onClick={() => router.push("/login")}
                            className="text-purple-400 hover:text-purple-300 font-bold"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
