import React from 'react'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

function Navbar() {
  return (
    <ThirdwebProvider activeChain="mumbai" >
        <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#e6d8ad",
        borderBottomLeftRadius: "10px", // Adjust the values to your preference
        borderBottomRightRadius: "10px", // Adjust the values to your preference
        padding: "10px", // Add padding for better appearance
      }}>
        <h1>ReviveByteX</h1>
        <ConnectWallet dropdownPosition={{
                side: "right",
                align: "start",
              }} switchToActiveChain={true}/>
      </div>
    </ThirdwebProvider>
  )
}

export default Navbar
