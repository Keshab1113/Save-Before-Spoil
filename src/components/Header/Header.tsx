"use client";
import axios from 'axios';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout successful");
            router.push('/login');
        } catch (error: any) {
            console.log("Logout Error", error.message);
            toast.error(error.message);
        }
    }

    return (
        <header className="bg-gray-800 text-white shadow-lg">
            <div className="max-w-6xl mx-auto h-16 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/" className="">
                        <span className="text-orange-400">Save </span>
                        <span>Before </span>
                        <span className="text-green-500">Spoil</span>
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <RxCross2 className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
                    </button>
                </div>
                {
                    isOpen ?
                        <nav className={`absolute top-16 right-0 bg-slate-600 justify-center items-start flex-col ${isOpen ? 'flex' : 'hidden'} p-6`}>
                        <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                            Home
                        </Link>
                        <Link href="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                            Dashboard
                        </Link>
                        <Link href="/profile" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                            Profile
                        </Link>
                            <button onClick={logout} className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                            Logout
                            </button>
                        </nav>
                        :
                        <nav className={`space-x-4 lg:flex ${isOpen ? 'block' : 'hidden'} lg:block h-full items-center`}>
                            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500 text-orange-400">
                                Home
                            </Link>
                            <Link href="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500 text-orange-400">
                                Dashboard
                            </Link>
                            <Link href="/profile" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500 text-orange-400">
                                Profile
                            </Link>
                            <button onClick={logout} className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-700 text-orange-400">
                                Logout
                            </button>
                        </nav>
                }
                
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </header>
    );
}
