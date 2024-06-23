import React, { useEffect, useState } from 'react'
import { box, fixed } from '../constants'
import { FaBeer, FaCoins } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {

  // adding shadow onscroll 
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  
  return (
    <div className={`flex justify-between h-[50px] bg-gray-600 items-center ${box} ${fixed} w-full transition-shadow duration-300 ${hasShadow ? 'shadow-xl' : ''}`}>
        {/* icon here TODO: add icon here -- crypto related */}
        <Link to='/'><h1 className='font-bold font-mono text-white flex'><FaCoins />Crypto-App</h1></Link>
        <ul className='flex gap-6'>
            <li className='hover:border-gray-400 hover:border rounded p-2 h-[40px] hover:font-semibold hover:text-white text-gray-300'>Login</li>
            <li className='hover:border-gray-400 hover:border rounded p-2 h-[40px] hover:font-semibold hover:text-white text-gray-300'>Signup</li>
        </ul>
    </div>
  )
}

export default Header