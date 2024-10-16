"use client";
import React, { useEffect, useState } from 'react';
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Dashboard1 from '@/components/Dashboard1/Dashboard1';
import Dashboard2 from '@/components/Dashboard2/Dashboard2';
import axios from 'axios';

const dashboard = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me');
      setUser(res.data.data);
    }
    getUserDetails();
  }, []);
  
  
  return (
    <div className='bg-gray-900 h-full w-full text-white'>
      <Header />
      {user.role==="food_bank" ? <Dashboard1 /> : <Dashboard2 />}
      <Footer/>
    </div>
  )
}

export default dashboard
