import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

// importing icons
import { GiToken } from "react-icons/gi";
import { MdOutlineBarChart } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import { coinDetailStyle } from '../constants';
import { TfiSupport } from "react-icons/tfi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";

import { IoReturnDownBackOutline } from "react-icons/io5";
import Footer from './footer';
import Header from './header';



const CryptoDetails = () => {

    const params = useParams();  
    const id = params.id    // grab id from url
    const [crypto, setCrypto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('data feteched ', params.id);

    // Fetching data by Id
    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
                console.log('returned data ', response.data.data.data);
                setCrypto(response.data.data);
                setLoading(false);  // data received
            } catch (error) {
                setError(`Error can\'t find coin with ${id}`);
                setLoading(false); 
            }
        };

        fetchCoin();
    }, [id])

    // TODO: Reacthot toast should work here
    
    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
    console.log(crypto);

  return (
    <div className='h-screen bg-gray-50'>
      <Header />
      <div className="container mx-auto p-4 max-w-[500px] pt-[120px] h-[70vh]">
      {crypto && (
        <div className="bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold border-b py-3 md:py-5"><span className='pl-5'>{crypto.name}</span></h1>
          <div className="p-6 pt-4 space-y-1">
            <p className={`${coinDetailStyle}`}><span className='flex items-center font-semibold'><GiToken className='mx-2 text-[12px]'/>Symbol:</span> {crypto.symbol}</p>
            <p className={`${coinDetailStyle}`}><span className='flex items-center'><MdOutlineBarChart className='mx-2 text-[12px]'/>Rank:</span> {crypto.rank}</p>
            <p className={`${coinDetailStyle}`}>
            <span className='flex items-center'><CiBadgeDollar className='mx-2 text-[12px]'/>Price:</span> ${crypto.priceUsd ? parseFloat(crypto.priceUsd).toFixed(2) : 'N/A'}
            </p>
            <p className={`${coinDetailStyle}`}><span className='flex items-center'><TfiSupport className='mx-2 text-[12px]'/>Market Cap:</span> ${crypto.marketCapUsd}</p>
            <p className={`${coinDetailStyle}`}><span className='flex items-center'><BiMoneyWithdraw className='mx-2 text-[12px]' />Volume (24Hr):</span> ${crypto.volumeUsd24Hr}</p>
            <p className={`${coinDetailStyle}`}>
              <span className='flex items-center'><AiOutlinePercentage className='mx-2 text-[12px]'/>Change (24Hr):</span> <span className={`${parseInt(crypto.changePercent24H) > 0 ? 'text-green-500' : 'text-red-500'}`}>{crypto.changePercent24Hr}%</span></p>
          </div>
        </div>
      )}
      <div className="flex items-center my-4 justify-center">
        <Link to='/'><button className="flex items-center border rounded px-2 p-1 border-gray-600 hover:text-gray-500 hover:bg-gray-200">Back <IoReturnDownBackOutline className='ml-2' /></button></Link>
      </div>
    </div>
      <div className="fixed bottom-0 ${box} ${fixed} w-full">
        <Footer />
      </div>
    </div>
  )
}

export default CryptoDetails