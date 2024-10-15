import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 bottom-0 w-full">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold ">
                            <span className="text-orange-400">Save </span>
                            <span>Before </span>
                            <span className="text-green-500">Spoil</span>
                        </h2>
                        <p className="text-gray-400 mt-2">
                            Reduce food waste with our expiration alerts, recipe suggestions, donation connections, and waste analytics.
                        </p>
                    </div>
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="hover:text-green-500">
                            Home
                        </Link>
                        <Link href="/dashboard" className="hover:text-green-500">
                            Dashboard
                        </Link>
                        <Link href="/profile" className="hover:text-green-500">
                            Profile
                        </Link>
                        <Link href="/contact" className="hover:text-green-500">
                            Contact Us
                        </Link>
                    </nav>
                </div>
                <div className="text-center mt-6 text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Save Before Spoil. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
