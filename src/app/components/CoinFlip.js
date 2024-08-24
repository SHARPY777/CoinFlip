"use client";
import React, { useEffect, useRef, useState } from "react";

import { connectWallet, flipCoin } from "./solana";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const Button = styled(motion.button)`
  background: darkblue;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 18px;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: blue;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px; 
`;


const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;

function Skills() {
  

  const [walletAddress, setWalletAddress] = useState(null);
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState("heads");
  const [result, setResult] = useState(null);

  const handleConnectWallet = async () => {
    const address = await connectWallet();
    setWalletAddress(address);
  };

  const handleFlip = async () => {
    const flipResult = await flipCoin(walletAddress, amount, side);
    setResult(flipResult);
  };


  return (
    <div className="pt-32">
      <h3 className="tracking-[20px] text-center uppercase text-white text-2xl">
        Let's Start
      </h3>

      <ButtonWrapper>
        {!walletAddress ? (
          <Button
            onClick={handleConnectWallet}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Connect Wallet
          </Button>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount to risk"
              />
              <Select value={side} onChange={(e) => setSide(e.target.value)}>
                <option value="heads">Heads</option>
                <option value="tails">Tails</option>
              </Select>
            </motion.div>
            <Button
              onClick={handleFlip}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Flip Coin
            </Button>
            {result && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {result === 'win' ? 'You won!' : result === 'lose' ? 'You lost.' : 'An error occurred.'}
              </motion.p>
            )}
          </>
        )}
      </ButtonWrapper>

     
    </div>
  );
}

export default Skills;
