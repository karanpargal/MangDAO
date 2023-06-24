import React, { useEffect, useState, useContext } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "@particle-network/connect-react-ui/dist/index.css";
import { ConnectButton } from "@particle-network/connect-react-ui";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-slate-100 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <a href="/" className="text-3xl font-bold mr-4 ml-10 sm:text-4xl">
            GateBounty
          </a>
        </div>
        <div className="hidden md:flex pr-4 justify-between">
          <ConnectButton />
        </div>
        <div className="md:hidden mr-4 ">
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 text-left"
        }
      >
        <div className="flex flex-col my-4 justify-between" >
          <ConnectButton />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
