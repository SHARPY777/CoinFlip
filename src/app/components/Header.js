import React from "react";
import Link from 'next/link'


function Header() {
  
  
    //window.location.href = "https://www.linkedin.com/in/prasad-shelar-a86399235";
  
  return (
    <header className="py-0">
    <div className="mx-10 sm:mx-auto max-w-10xl px-56 flex items-center justify-between border border-blue-500 p-4">

        {/* Left Part */}
        <div>
          <span className="text-xl text-white cursor-pointer font-bold ml-2">
           Crypto  <span className="text-blue-400 font-bold">Flip Coin App</span>
          </span>
        </div>

        {/* Mid Part */}
        <div className="hidden sm:flex flex-row space-x-4">
          <p className="text-white cursor-pointer">About</p>

          <p className="text-white cursor-pointer">Home</p>

          <p className="text-white cursor-pointer">Contact Us</p>
        </div>

        {/* Right Part */}
        <div className="flex space-x-3 items-center">
           <Link href="https://www.linkedin.com/in/prasad-shelar-a86399235" passHref legacyBehavior>
           <button className="hidden md:inline-block text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-800"
          >
            Download App
          </button>
          </Link>

        
          {/* <Link href="https://github.com/SHARPY777" passHref legacyBehavior>
          <button className="border cursor-pointer border-gray-500 px-4 py-2 text-white rounded-full hover:bg-black">
            G
          </button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
