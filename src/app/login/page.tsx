"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const onLogin = async () => {
        toast.success("Login Successfull");
        console.log(user);
    };

    return (
        <div className="flex min-h-screen bg-gray-900">
            <div className="flex flex-col justify-center items-center w-full sm:w-[40%] mx-auto p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                    <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
                        Welcome to <span className="text-green-500">Save Before Spoil</span>
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Reduce food waste with our expiration alerts, recipe suggestions, donation connections, and waste analytics.
                    </p>

                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                        </div>

                        <button onClick={onLogin} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                            Login
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-green-500 hover:text-green-600 font-semibold">
                                Sign up today!
                            </Link>
                        </p>
                    </div>
                </div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
}