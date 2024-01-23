import React from 'react'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

function Navbar() {
  return (
    <ThirdwebProvider activeChain="mumbai">
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <h1>ReviveBitX</h1>
        <ConnectWallet dropdownPosition={{
                side: "right",
                align: "start",
              }} switchToActiveChain={true}/>
      </div>
    </ThirdwebProvider>
  )
}

export default Navbar
