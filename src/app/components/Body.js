"use client";
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


function Body() {
  const animationData = require("../../../public/assets/projects.json");
  
  const [text, count] = useTypewriter({
    words: ["Welcome to the Crypto Coinflip Arena", "Your Gateway to Thrilling Blockchain Bets", "Boost Your Crypto with Every Coin Flip Win"],
    loop: true,
    delaySpeed: 2000,
  });
  const container = useRef(null);
 
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        {/* First part */}
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col  item-start  md:w-3/4 mt-0 md:mt-28">
            <h1 className="text-4xl lg:text-4xl font-semibold">
              <span className="mr-3 text-blue-600 ">{text}</span>
              <Cursor />
            </h1>
          
            <p className="text-white text-xl md:text-2xl mb-3 mt-2 ">
            Welcome to our Coinflip Game! 
            Dive into a thrilling experience where you can test your luck with blockchain technology. 
            Connect your wallet and choose how many tokens (SOL, ETH, or BTC) you want to risk. 
            Select your preferred side—Heads or Tails—and flip the coin. 
            If the coin lands on your chosen side, you’ll double your tokens; if not, you’ll walk away with nothing. 
            Try your luck today and see if you can win big on our secure and decentralized platform!
            </p>
            <div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600">
                Learn More
              </button>

              <button className="bg-white text-gray-700 px-4 py-1 rounded hover:bg-gray-400">
                Contact Us
              </button>
            </div>
            <p className="text-blue-500 text-small font-normal mt-2">
              Ethereum | Solana | Bitcoin
            </p>
         
          </div>

          <div className="md:w-1/2 z-auto pt-2 md:mt-10">
          <img src="/Crypto.png" alt="Description of Image" className="w-full h-auto" />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
