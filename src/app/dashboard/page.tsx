"use client";
import React from 'react'
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Dashboard1 from '@/components/Dashboard1/Dashboard1';
import Dashboard2 from '@/components/Dashboard2/Dashboard2';

const isSeller = false;

const dashboard = () => {
  
  return (
    <div className='bg-gray-900 h-full w-full text-white'>
      <Header />
      {isSeller ? <Dashboard1 /> : <Dashboard2 />}
      <Footer/>
    </div>
  )
}

export default dashboard
