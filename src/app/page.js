import Image from "next/image";
import Body from "./components/Body";

import Header from "./components/Header";
import Skills from "./components/CoinFlip";



export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-blue-900 to-black">

      <Header/>
      <Body/>
      <Skills/>
      

    </main>
  );
}
