import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ethers } from 'ethers';
import { useSigner } from "@thirdweb-dev/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

import Navbar from '../componets/Navbar'

const contractAddress = '0x4a638E273242c7aE1487304bedCAD8dFd3a79811';
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "mintToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

function BuyPage() {

  const signer = useSigner();
  // console.log(signer.getAddress());

  const [loading, setLoading] = useState(false);

  const cardData = [
  {
    image:'src/assets/capacitor2.jpg',
    title: 'Microprocessors 1',
    description: 'Intel Pentium (1993)',
    price: '2',
    verificationLink: 'https://polygon-mumbai.easscan.org/attestation/view/0xbd680e65223b7a2c85756cebb82bc721f718b300cefcf325558ccc89d620ea90',
  },
  {
    image: 'src/assets/capacitor1.jpg',
    title: 'Capacitor 1',
    description: '296A42 - Power index pro capacitor',
    price: '5',
    verificationLink: 'https://polygon-mumbai.easscan.org/attestation/view/0x611e7306705a0ac6be03e91e04dd83d54832dabc78310939eb62c684e34802df',
  },
  {
    image: 'src/assets/transistor4.jpg',
    title: 'Microprocessor 2',
    description: 'AIM PowerPC 601 (1992)',
    price: '4',
    verificationLink: 'https://polygon-mumbai.easscan.org/offchain/url/#attestation=eNq9VsuOIzcM%2FBefBwuSEknpOB6PfyLIofU65ZZLPj8k1XYmi0USxMDaQLdboopFiVXuXy74jb7B5e1SAADtDn8cn%2FeMkN4hQwVQROG7llvmW7HBD9BCna50RLAc3Ftaa0oBnVALZRRcDHPUzHg06tha5p4paU9tKBeV3gBWV8IaICyzUR2kTVrvcyJJWjxGTUiJuPS%2Bcpmoku3J4AZQoZrggDxGQWNC6jgfV0YcmET67fNG6f5Z79frKPd3uNUmKHD9YH7%2F2EnbsExcGgtjXXOuAt0qyIR49HnkssoQ1EVVYZaDPD%2FQMcfkxY0CpAhyxdyO2hqIMRssNSvTaLUeaIC1tM6kXQYvOhQWlVFnO0BWW7t8KfmdEh%2BlwM0ii9CdQK7vayXLf8%2FyCQsU0uUNFQQIMOc3sJWXt3X89vt0DHjpc7y2nODF9fnF9eXF9f219ZiBsxRhgoy55kHAdr6qwkoM1rWQJIF1s1FNmKp9iaodclWbs8ac%2FluSLJl%2Bt6fhdyVDAb%2FaHGtSi1Cy2WZxju%2Fr5Byrmh3NolltTLqyZkNxTFRSz%2BcN5fnIxruvsLvhkuHk7L%2Fs2VCFJQcjG3%2Fy7TuHXZf4hz1TxCXPFFhTlIaPGgoHN7aMJohg5XVZVmPvcyVyFRpWF1jcxsoeL7ZT39W9sXvsDBrCfn4wivizVnZmD%2FZ6nktwRcs%2BNv9%2F3uGvO6KRIxifO2w4Xl0%2F0eMMbcctnzM%2FK%2FezHAono%2Bksg4Oz98h0shZnpRxn0oOpM2dn82R6Yp3nueuOvPa84mTniwqU3be7S%2BHnfw7rMqJlV4hrdNxPzO%2BqZMvsGvX89FOrR0V%2BdtL%2FcRCPs%2B7pNHTr33uZVEJT%2FeygGSrKodsv6vlR90Znbd1uJXiPOsNlneqadcRuEVuZEh0bOnQ0os3CnCA86mRBT7WyllA%2FPRU1glENdbiuTh%2BKudBAVIiha3NLz%2BWajJEdXyKX%2B1v6vjrXn2wPOmcUdbuBR1Sv8OHfvnO%2Bk6eHoCGmWImRr4eLbqdMgffwNWMVc%2B7LObz8i6Z%2F4IOnZ4dH%2BKhHpIdfW0R%2FOGCczVP3hkGRy30Jw1Gmrat%2F7Uu4TfpbtWdtQjZaozINDj4f%2Fx4y9vlp7FT0TnRAPD12c5%2FDs0%2B%2FOtB%2F%2BM%2F6F4e62AsNxdsnaTnm6pV4Hh2rvxjB7G3BOGbiwsNUYO9Wi5rYa2VKRza6yV607Ox50uXXPwHo9GA7',
  },
  {
    image: 'src/assets/Seven_segment_01_Pengo.jpg',
    title: 'Transistor1',
    description: 'SS9014 Transistor Pinout Configuration',
    price: '6',
    verificationLink: 'https://polygon-mumbai.easscan.org/offchain/url/#attestation=eNrFVsmSGzcM%2FRedp1zYCJLH0Wj0E6kcuJ5yyyWfHwDdssfxXFJy2V0lNZsEHh7W7j8u%2BIW%2BwOXlUgAA7Q7%2FtPe7IPArCFSAjKjpnstN0q3Y5hvkQoOu1EJ4wWwiUpgJpcmAkUutIq0xjD4mJV2jp02tS09VYememDXh1JJIAoRTqoytKwqyrpKbVOoz101zzlpKQROYiqllbZNb37C6QqKGc2q%2BvFB2nLdrQpwGoeP2fiO%2Bv9f79TrL%2FRVu1dAVrm8pvb4dRidKUcY9mbsOEsLWFm5uNFeDNEHK4NUntT01NZ4tl7JRJstSGgFSjFNF6a32Dtr7nEmr5ESz19oQxqqlj0R56PQgZNhUZl29ge6%2Ba4BokVfi1EqBm0kWpTuBXl%2F3ZsV8F32HDRn48oIZFAio6guY5uVlt7%2F%2BXo4BT13tOXWSJ%2FXLk%2FrjOX1%2BTh0w1yRaNBEkTsyVgZGFIEsmK7uVWWvmLLozWWptbf9o56opU%2FY0i1YdjqDJ78qhu3XZvkuzrael33esp7KjZzsTl8%2FVnpLhJBXH1%2BX4IT%2FsSe2XwrLzIMO2KjV8JpOTY2UF5nrGMDl22FuhmW2HToY7kOPs4VP4slXdWy0mmdwLW7vWDEw0hmx9dWiOh38RjWG7jm7cY23RCh%2BS6xp64DjPlP1ZS8TvYMwmg45ne%2BpoOmOF%2Bi3WJ17w8ligWYs4m7%2FO8NQLuZND%2FjSXB25kyXlgMONgqhEnP3tkxtf58PyHTPB3sTxy9XnOrd1PvQ86ZtMxnXGP6OYjImdFWS5My%2FHwzHgxrRq%2BnVGyu%2B%2BRUq4fcviIFAQHr0wOP%2FYjgyHjbLphLfiZl36MNfz6qzCx0jb7yf6J%2BZfbR3uDuv3yO%2ByPkj6ZVEfGvXOionfkXmjGedS%2FnXsXHFWdvqsiyTUmCh8d6hPKZL3mc9SqvTl9%2Bp1Ve1iX6KyvFWcvOjrn0IcTokfXPPrU56f1Q4qJiGEJz4lWjAU%2FWMScIm1np8X0O%2Bb2qROefptuesywY6aq9dSKufKBn3f0g0dgTJ9%2BMQFiz6ftf7r7KxeLop%2Fwj1PBmf3fDF7sg4Dii2SsRbgt%2BLSwzVVgS0Fi2TxBMwwG2Rb8ApV7WnWltqDMwXVZwKRf%2FvwXN4Y13g%3D%3D',
    
  },
  {
    image: 'src/assets/processor.jpg',
    title: '7 segment display',
    description: '2SA1943 --7 segment display',
    price: '3',
    verificationLink: 'https://polygon-mumbai.easscan.org/offchain/url/#attestation=eNq9Vstu7DYM%2FZdZBxcUKZLSMslkfqLoQs9Vd93080vSntw0TYELTBEP7LEl8vDwaf92ST%2FwB1yeLgUAkv3DX%2B3tlhPQM2SoAJqS8E3LNfO12OIraMGBL9hCeBdspTZamxs0Iph599Rk6GSQJsRAQJvm7koInVofaSHbc9atJUBAeE02S0qpYNGy5ui9oInAhJozFy611iKUpFeiVSetwthmAalGH9VxXl84pZlIZFzfrki3t3p7eZnl9gzX2iUJvLwyP7%2BGUQUDJ%2BCxK%2BjSugGlLF5InRYT5Z67Ylu6yu5IK09eySyKivSJGiBFEteUe6u9g%2FQ%2BJ0vNyjh7rS3BWLX0wahDJm9sChvLrKs3kN13DRAp%2BRmJWylwNckieEOQl%2Be9SZLesrzBNrJ0eUoKAghc8xOY5uVptz%2F%2BXBHCh472mDrmB%2FXLg%2FrjMX16TB2SDs5ShBEImXKiRJUyWcFL9bKXZGeRarVTcFoSt6qwoqUS8mJLqWZFK9Cl5BqaTcJ2hWTLtN%2BWZS1VbYXF9YftV7vPbkGWW1B7svvt96dMFbGTT6RqFsikqtlyTnLauD%2BzSMiT6xgTwzYU0z4kjYXxs11Gs5e3W9XTa9uPu8ArIZdtSITfpOaxaZnv847rTM1L55jCq%2FcoWXP5DhvGOHwLr7wRzpgoB1oO6%2BatMWM9rvSOvwxhBnfTDe%2BNVUTYY2vrZs%2B9MCvBfCtHbgzddA0rmOWw4zzw8PCeEc%2BgMQtrSufqihxWQWOYPSonv3uMxLHDfg3t5BkyHfd%2Fi0QGhp0UOC4R3C0aR0V45uk93zmyK%2BHjPVvq0TSZ4VrhlUbkKOKoH7h4%2FOWIw69wMAw4K%2BrIRHjgMYT%2F59B%2F9g1899HMMuK2VxXbFe0fv5WF23fLB4vvtp8Q%2BYv5c%2FRk9PIvdPEh7dUY1bejWrJrGVo6OuLL7hkx%2FarCUV2mF5POarfeezOq%2B2CYY%2FW9gxAQj%2B77uBPd7dP1mEr1J7OzU70j8tk7%2BevejE6Te88Ehnt%2BcvE1n6ifOub0ILrWd%2BicwZ%2B6xiZP9btDJmJ5TmNbKR7Ln0jGM8XstTfGMVOPjBzsvLM9voEyPrI9J4Cz%2B9ckDxTyWNhT%2FjAd9iffckxVf2%2Bt%2F47UOUEemgUX%2B6BB%2F5Ch2e0zyT4nkwr0Mv27b6nSrDx8Y6VqpWIffpgmMOaGndso1S6jTM2X3%2F8Gs1Vg3g%3D%3D',
  },
  {
    image: 'src/assets/s-l500__23389.jpg',
    title: 'Diode',
    description: '2S643r -- surface mount diode',
    price: '2',
    verificationLink: 'https://polygon-mumbai.easscan.org/offchain/url/#attestation=eNrlVjuSIzcMvYviqS0ABAEylEajS7gc8Bs5c7LHX4DsHqvW43KgYIOVqloUiM97IIDmHxf8Rt%2Fg8nZJAID2C9%2FLx4MRwhUYMoAiSnxounO8JxO%2BgyZqdKOylGEmRJ2DsqQsTKF1iDnXIqPlhIossWsrDaNoYaZCUoJSKrFUmm05CXHaMg%2BIoTOlXGIEnLO22JMyqM7eKeDsI7UZJUOOXAGJodeW2OBTcj%2Fvt4jYMYi0%2B8edwuMjP263nh5XuOcqKHB7j%2FH6voLm0LRxL6Rh8MQWGTNRraVm5B4xdy6SOuioEShj4pDBYFYSnDLycpIEo6nXkmsFqbV3g8caqdecC0IbORkN0ibdSBaFSannUQvIrHM7kcRXCrGkBHfTTEIPArld5wyC%2BmD5gAkK4fKGCgIESvwGZnl5m%2BWvv8c6h5c%2B5TVzohft5UX7V%2FGP1%2ByRQ2RJEgkCxRAkcLAat0PMGuyJdmRBo5KIFWFwPekyNcpQtjVLlmlPl1cZtqMybC222l54%2BQmm1a0EzMdhFzWY7dZGs3RpFP9k8Z0jgkWObmOSvYO6Y5qd%2Bu40r4ZvSc0nmTyGJXH9Ier%2BTy7miQy7%2B0dpT7jM3xnRrRaWtiN7DNu12Es%2F23%2FLyMGsbY6LQ7Ov8fdYeuTUMC8ZeQRZ8R0Z%2FRRrRd%2FZfOLrHG2XjxxavvqOcuZX%2BlqtnB75do268nDg0gOryckZPZ1N3ydnfv6br%2B%2FvvMeDrWdsLK0slsuFdGXZMZzMnYfzMlv3%2F4na6%2BYfdkvu7PKrZfzKAAkYAs0AIdqT7JdC%2BM3ii0XGQL8gPiLy5ww5Ksw74KwprzarEZsOXb1uvPvjV3XpVaSwJ4RXm9WUa3kP6eo0e995NR4zjVdV8uqMz1okex3s%2Bn7eITr79Oxq9Rh9rdS85nPCWPxkKMKJYnW2XRqOvtqzafk4bGjh2R3lVrsb45qFX%2FTKwiEnjuXDUNiKf%2Bq7517%2BxGL5853w70m6kXH21dZZGTvmxBesePFHm94x1BOV52jNGbduTzPw6R1hXtJ6ezTnuCf30yzbc3r7iesUPBf%2FMxsudqGgdfsjQkx2n%2BNYzNJKoBe7vNBgzr31XqSXAVlLlz5nsZuSGu8xko3sYXaXP38A%2FhlEwA%3D%3D',
  },
  {
    image: 'src/assets/processor2.jpg',
    title: 'Capacitor 2',
    description: '29698G - Power Flex capacitor',
    price: '4',
    verificationLink: 'https://polygon-mumbai.easscan.org/attestation/view/0xbd680e65223b7a2c85756cebb82bc721f718b300cefcf325558ccc89d620ea90',
  },
  {
    image: 'src/assets/smd-rectifier-diode-1.jpg',
    title: 'transistor4',
    description: '2SA1943 - BNP Plus Ultra max Transistor',
    price: '5',
    verificationLink: 'https://polygon-mumbai.easscan.org/attestation/view/0xbd680e65223b7a2c85756cebb82bc721f718b300cefcf325558ccc89d620ea90',
  },
  
  ];

  const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',
  };

   const handleBuy = async (price) => {
    try {
      setLoading(true);

      const recipientAddress = '0xCB511d1366cDED23FE9FBBd8FA0D9b6160BC55AC';
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const priceInWei = ethers.utils.parseEther(price);

      const approveTx = await contract.approve(signer.getAddress(), priceInWei);
      await approveTx.wait();

      // Call transferFrom function
      const transaction = await contract.transferFrom(
        signer.getAddress(),
        recipientAddress,
        priceInWei
      );

      // Wait for the transaction to be mined
      await transaction.wait();

      console.log(`Tokens transferred successfully to ${recipientAddress}`);
      toast.success('Transaction completed successfully');
    } catch (error) {
      console.error('Error transferring tokens:', error);
    }
    finally {
      setLoading(false);
    }
  };

  
  return (
    <div>
      <Navbar/>
      <br/>
      <h2>Marketplace</h2>
      <div style={cardContainerStyle}>
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345, flex: '1 0 calc(33.33% - 16px)' }}>
            <CardMedia sx={{ height: 240 }} image={card.image} title={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price-{card.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleBuy(card.price)}>{loading ? <CircularProgress size={20} /> : 'Buy'}</Button>
              <Button size="small" href={card.verificationLink} target="_blank" rel="noopener noreferrer">Verification</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default BuyPage
