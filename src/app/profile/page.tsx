"use client";
import React, { useState } from 'react';

export default function Profile() {
    const transactions = [
        { id: 1, date: '2024-09-01', type: 'Sell', item: 'Apples', quantity: 50, amount: 100, buyer: 'John Doe' },
        { id: 2, date: '2024-09-02', type: 'Buy', item: 'Oranges', quantity: 30, amount: 60, seller: 'Jane Smith' },
        { id: 3, date: '2024-09-03', type: 'Sell', item: 'Bananas', quantity: 20, amount: 40, buyer: 'Alice Johnson' },
        { id: 4, date: '2024-09-04', type: 'Buy', item: 'Grapes', quantity: 25, amount: 50, seller: 'Bob Brown' },
        { id: 5, date: '2024-09-05', type: 'Sell', item: 'Tomatoes', quantity: 40, amount: 80, buyer: 'Charlie Green' },
        { id: 6, date: '2024-09-06', type: 'Buy', item: 'Potatoes', quantity: 35, amount: 70, seller: 'Diana White' },
        { id: 7, date: '2024-09-01', type: 'Sell', item: 'Apples', quantity: 50, amount: 100, buyer: 'John Doe' },
        { id: 8, date: '2024-09-02', type: 'Buy', item: 'Oranges', quantity: 30, amount: 60, seller: 'Jane Smith' },
        { id: 9, date: '2024-09-03', type: 'Sell', item: 'Bananas', quantity: 20, amount: 40, buyer: 'Alice Johnson' },
        { id: 10, date: '2024-09-04', type: 'Buy', item: 'Grapes', quantity: 25, amount: 50, seller: 'Bob Brown' },
        { id: 11, date: '2024-09-05', type: 'Sell', item: 'Tomatoes', quantity: 40, amount: 80, buyer: 'Charlie Green' },
        { id: 12, date: '2024-09-06', type: 'Buy', item: 'Potatoes', quantity: 35, amount: 70, seller: 'Diana White' },
    ];

    const [user, setUser] = useState({
        username: 'John Doe',
        email: 'johndoe@example.com',
        location: 'New York, USA',
        phone: '+1234567890',
    });

    const handleUpdateProfile = () => {
        console.log(user);
    };

    return (
            <div className=" flex sm:flex-row flex-col justify-around items-center w-full sm:h-screen h-full overflow-hidden bg-gray-900 gap-6 p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 sm:w-[35vw] w-full h-max">
                    <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
                        Your Profile
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Manage your profile information below.
                    </p>

                    <div>
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

                        <button
                            onClick={handleUpdateProfile}
                            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
                <div className="sm:w-[50vw] bg-white shadow-lg rounded-lg w-full  p-8 h-max">
                            <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
                                Transaction History
                            </h1>
                            <p className="text-gray-600 text-center mb-6">
                                Overview of your recent transactions.
                            </p>

                            <div className="overflow-y-scroll h-96">
                                <table className="min-w-full bg-white">
                                    <thead>
                                        <tr>
                                            <th className="py-2 text-gray-700 text-left">Date</th>
                                            <th className="py-2 text-gray-700 text-left">Type</th>
                                            <th className="py-2 text-gray-700 text-left">Item</th>
                                            <th className="py-2 text-gray-700 text-left">Quantity</th>
                                            <th className="py-2 text-gray-700 text-left">Amount</th>
                                            <th className="py-2 text-gray-700 text-left">Person</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id} className="border-b border-gray-200">
                                                <td className="py-2 text-gray-700">{transaction.date}</td>
                                                <td className={`py-2 ${transaction.type === 'Sell' ? 'text-green-500' : 'text-red-500'}`}>
                                                    {transaction.type}
                                                </td>
                                                <td className="py-2 text-gray-700">{transaction.item}</td>
                                                <td className="py-2 text-gray-700">{transaction.quantity}</td>
                                                <td className="py-2 text-gray-700">${transaction.amount}</td>
                                                <td className="py-2 text-gray-700">{transaction.type === 'Sell' ? `Buyer: ${transaction.buyer}` : `Seller: ${transaction.seller}`}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                </div>
            </div>
    );
}
