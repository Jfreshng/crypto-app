import React, { useEffect, useRef, useState } from 'react'
import { box } from '../constants'
import { CiSearch } from "react-icons/ci";
import { RiCoinsFill } from "react-icons/ri";
import axios from 'axios';
import { Link } from 'react-router-dom';

const CoinList = () => {

    const [isInputVisible, setInputVisible] = useState(false);
    const inputRef = useRef(null);

    // search
    const [searchTerm, setSearchTerm] = useState('');

    // data variables
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    // search icon and field
    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
        if (!isInputVisible) {
        // Focus the input field when it becomes visible
            inputRef.current.focus();
        }
    };

    

    // get data and populate coinList when component is mounted
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.coincap.io/v2/assets');
            setCryptoData(response.data.data);
            setLoading(false);
          } catch (error) {
            setError("Error fetching data");
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);

    // search method
    const filteredCryptoData = cryptoData.filter(crypto =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

  return ( 
    <div className='pt-[50px]'>
    <div className={`${box} bg-gray-100`}>
        <div className="flex justify-between items-center my-1 px-6">
            <h1 className="text-xl font-semibold mb-4 flex">Crypto List <RiCoinsFill /></h1>
            
            {/* search functionality */}
            {/* TODO: this is currently affecting the UI which shouldn't be*/}
            <div className="flex gap-2 items-center">
                {isInputVisible && (<input 
                    type="text" 
                    className={`rounded-xl border border-gray-400 p-1 focus:outline-gray-500 focus:border-1`} 
                    ref={inputRef} 
                    placeholder='search coin. . .' 
                    onChange={e => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />)}
                {/* search icon */}
                {/* <CiSearch className={`text-gray-600 text-[20px]`}/> */}
                <button
                    className="text-gray-500 focus:outline-none"
                    onClick={toggleInputVisibility}
                >
                    <CiSearch className="h-5 w-5" />
                </button>
            </div>
        </div>

        {/* Getting coin data */}

        {/* What if there is no result query */}
        {filteredCryptoData.length === 0 && searchTerm && (
            <div className="flex flex-col text-center">
              <div className='text-gray-700 text-[18px]'>No results found for <span className='text-red-500'>"{searchTerm}"</span></div>
              <button onClick={()=>{setSearchTerm('')}} className='border w-[100px] mx-auto hover:shadow-lg rounded-md my-2 text-gray-600 border-gray-600 p-1'>Clear Search</button>
            </div>
        )}

        {/* result */}
        <div className="container mx-auto p-4">
        {loading && <div className='text-center'>loading coinlist...</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCryptoData.map(coin => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
                <div key={crypto.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl">
                    <h2 className="text-xl font-semibold">{coin.name}</h2>
                    <p className="text-gray-600">Symbol: {coin.symbol}</p>
                    <p className="text-gray-600">
                    Price: ${coin.priceUsd ? parseFloat(coin.priceUsd).toFixed(2) : 'N/A'}
                    </p>
                </div>
            </Link>
            ))}
        </div>
        </div>

    </div>
    </div>
  )
}

export default CoinList