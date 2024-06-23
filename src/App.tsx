import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CryptoDetails from './components/cryptoDetails'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/coin/:id" element={<CryptoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
