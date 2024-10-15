import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen landing-background"
    >
      <div className="flex flex-col justify-center items-center px-4 h-[100vh] bg-cover bg-center text-center text-white bg-gradient-to-t from-black ">
        <div className="p-4 py-6 border-b-[1px] bg-gradient-to-t from-gray-800 backdrop-blur-md  border-white rounded-lg">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-orange-400">Save </span>
            <span>Before </span>
            <span className="text-green-500">Spoil</span>
          </h1>
          <p className="text-lg max-w-2xl my-8">
            Welcome to Save Before Spoil! Reduce food waste with our expiration alerts, recipe suggestions, donation connections, and waste analytics. Join us to make smarter food choices and help nourish our communities. Sign up today!
          </p>
          <Link href={"/login"}
            className="bg-green-500 hover:bg-orange-400 text-white py-2 px-6 rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
