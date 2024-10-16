"use client";
import React, { useState, useEffect } from 'react';

const Dashboard2 = () => {
    const [shopkeepers, setShopkeepers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Dashboard</h1>
                
            </div>
    );
};

export default Dashboard2;