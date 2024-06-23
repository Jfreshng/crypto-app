import React from 'react'
import Header from '../components/header'
import CoinList from '../components/coinList'
import Footer from '../components/footer'
import Subscriber from '../components/subscriber'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <>
      <Header />
      <Toaster position='top-right' /> 
      <CoinList />
      <Subscriber/>
      <Footer />
    </>
  )
}

export default Home