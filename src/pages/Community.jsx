import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

const Community = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen font-figtree py-10'>
        <h1 className='md:text-6xl text-4xl tracking-wider pl-8 leading-tight'>Welcome to our<br></br>Community page!</h1>
        <h5 className='md:text-xl text-base pl-8 tracking-wider max-w-screen-lg pr-3 py-3'>We are thrilled to have you here and would love to hear from you. Join our community today and be a part of something meaningful. As a member, you'll be able to see all the amazing people who are
        contributing to making our community a better place. Together, we can create positive change and make a real impact. Your voice matters-become a member now!</h5>

        <div className='flex flex-col justify-center items-center py-32 px-6'>
        <ChevronDoubleDownIcon class="h-12 w-12 text-gray-900 animate-bounce" />
        <h4 className='md:text-lg text-sm font-semibold text-center'>Scroll down to see what our community members have to say!</h4>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Community
