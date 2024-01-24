import React from 'react'
import Navbar from '../componets/Navbar'
import { Link, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import pho from "../assets/photo_6163451737218859107_x-removebg-preview.png"

function HomePage() {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/buy');
    };

    const handleSellClick = () => {
        navigate('/sell');
    };
  return (
    <>
    <div style={{ backgroundColor: '#e6d8ad', padding: '10px' }}>
      <Navbar />
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:"25px"}}>
      <div style={{width:"50%"}}>
        <Typography variant="h2" align="center" fontWeight="bold" mb={2} textAlign="left">
            From Used to Useful..
        </Typography>
        <Typography variant="h5" align="center" mb={1} textAlign="left">
            More than a marketplace: Where old components find new home.. 
        </Typography>
        <Typography variant="h5" align="center" mb={4} textAlign="left">
            Get your gadgets at the best price!! We bring gadgets for a lower price and reputated company assured. 
        </Typography>
      
        <div
            style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            }}
        >
            <button
            style={{
                padding: '10px 20px',
                fontSize: '1rem',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginBottom: "70px"
            }}
            onClick={handleBuyClick}
            >
            Go to Marketplace
            </button>
            <button
            style={{
                padding: '10px 20px',
                fontSize: '1rem',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                marginLeft: "60px",
                marginBottom: "70px"
            }}
            onClick={handleSellClick}
            >
            Sell your Device!!
            </button>
        </div>
      </div>
      <img src={pho} style={{width:"500px"}} alt="parts" />
      </div>
    </div>
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
        <Typography variant="h5" align="center" mb={4} textAlign="left" color="white" maxWidth="300px" marginLeft="50px">
            Trusted by World's leading companies..
        </Typography>
        <div style={{display:"flex", flexDirection:"row"}}>
            <Typography variant="h5" align="center" mb={4} color="white"  marginLeft="150px">
                APPLE
            </Typography>
             <Typography variant="h5" align="center" mb={4} color="white" marginLeft="200px">
                ARDUINO
            </Typography>
             <Typography variant="h5" align="center" mb={4} color="white"  marginLeft="200px">
                JAMECO
            </Typography>
            <Typography variant="h5" align="center" mb={4} color="white"  marginLeft="200px">
                AMD 
            </Typography>
            <Typography variant="h5" align="center" mb={4} color="white"  marginLeft="200px">
                INTEL
            </Typography>
        </div>

    </div>
    </>
  )
}

export default HomePage
