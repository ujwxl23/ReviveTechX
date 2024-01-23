import React from 'react'
import Navbar from '../componets/Navbar'
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/buy');
    };

    const handleSellClick = () => {
        navigate('/sell');
    };
  return (
    <div>
      <Navbar/>
      <p>Image</p>
      <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
        <button onClick={handleBuyClick}>Go to Marketplace</button>
        <button onClick={handleSellClick}>Sell your Device!!</button>
      </div>
    </div>
  )
}

export default HomePage
