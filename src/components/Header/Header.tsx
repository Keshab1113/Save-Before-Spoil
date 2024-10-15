import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                        <Link href="/logout" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                            Logout
                        </Link>
                        </nav>
                        :
                        <nav className={`space-x-4 lg:flex ${isOpen ? 'block' : 'hidden'} lg:block h-full items-center`}>
                            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                                Home
                            </Link>
                            <Link href="/dashboard" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                                Dashboard
                            </Link>
                            <Link href="/profile" className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-500">
                                Profile
                            </Link>
                            <Link href="/logout" className="flex text-red-700 border border-red-700 px-2 h-[60%] text-center items-center justify-center hover:text-red-500 hover:border-red-500">
                                <h1 className=''>Logout</h1>
                            </Link>
                        </nav>
                }
                
            </div>
        </header>
    );
}
