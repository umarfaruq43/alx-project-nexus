// pages/login.tsx

import { useRouter } from "next/router";
import { useState } from "react";
import { LoginCurve, Google, Apple } from "iconsax-reactjs";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="h-full bg-gradient-to-br from-purple-950 via-gray-950 to-black flex items-center justify-center px-6">
            <div className="max-w-md w-full">
                {/* 
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-white mb-2">
                        WATCH
                    </h1>
                    <p className="text-purple-400 text-xl">Welcome back</p>
                </div> */}
                {/* Card */}
                <div className="bg-gray-900/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-purple-800/30">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Sign In
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-purple-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-5 py-4 bg-gray-800/50 border border-purple-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
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
                                placeholder="••••••••"
                                className="w-full px-5 py-4 bg-gray-800/50 border border-purple-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => router.push("/")}
                            className="w-full py-5 bg-purple-600 hover:bg-purple-500 rounded-xl text-xl font-bold text-white shadow-lg hover:shadow-purple-600/50 transform hover:scale-105 transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center mt-8 text-gray-400">
                        Don't have an account?{" "}
                        <button
                            onClick={() => router.push("/signup")}
                            className="text-purple-400 hover:text-purple-300 font-bold"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
