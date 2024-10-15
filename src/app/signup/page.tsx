"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast,{ Toaster } from 'react-hot-toast';
import Link from 'next/link';
import axios from 'axios';

export default function SignUp() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        location: '',
        role: 'shop_keeper',
        phone: '',
    });
    

    const router = useRouter();

    const handleSignUp = async () => {
        try {
            const response = await axios.post("/api/users/signup", user);
            toast.success("Signup Completed");
            router.push("/dashboard");
        } catch (error:any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-900">
            <div className="flex flex-col justify-center items-center sm:w-[60%] w-full mx-auto sm:p-6 p-0">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                    <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
                        Sign Up for <span className="text-green-500">Save Before Spoil</span>
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Join us to reduce food waste and make a difference with our tools and community.
                    </p>

                    <div className=' grid grid-cols-2 gap-2'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                            />
                        </div>
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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="location">
                                Location
                            </label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="text"
                                id="location"
                                placeholder="Enter your location"
                                value={user.location}
                                onChange={(e) => setUser({ ...user, location: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Role</label>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="shop_keeper"
                                        checked={user.role === 'shop_keeper'}
                                        onChange={(e) => setUser({ ...user, role: e.target.value })}
                                        className="form-radio text-green-500 focus:ring-green-500"
                                    />
                                    <span className="ml-2 text-gray-700">Shop Keeper</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="food_bank"
                                        checked={user.role === 'food_bank'}
                                        onChange={(e) => setUser({ ...user, role: e.target.value })}
                                        className="form-radio text-green-500 focus:ring-green-500"
                                    />
                                    <span className="ml-2 text-gray-700">Food Bank (NGO)</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={user.phone}
                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSignUp}
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Sign Up
                    </button>
                    <div className="text-center mt-6 w-full ">
                        <p className="text-gray-600 w-full">
                            Already have an account?{' '}
                            <Link href="/login" className="text-green-500 hover:text-green-600 font-semibold">
                                Login here!
                            </Link>
                        </p>
                    </div>
                </div>
                <Toaster position="top-right" reverseOrder={false} />
            </div>
        </div>
    );
}
