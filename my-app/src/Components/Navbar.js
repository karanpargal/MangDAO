import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "@particle-network/connect-react-ui/dist/index.css";
import {
  ConnectButton,
  useParticleProvider,
} from "@particle-network/connect-react-ui";
import { useAccount } from "@particle-network/connect-react-ui";
import Web3 from "web3";
import axios from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const provider = useParticleProvider();
  const account = useAccount();
  const handleClose = () => setNav(!nav);

  async function handleConnect() {
    const { data } = await axios.post("http://localhost:8000/createUser", {
      publicKey: account,
    });
    console.log(data);
  }

  useEffect(() => {
    if (account) {
      handleConnect();
    }
  }, [account]);

  return (
    <div className="w-screen h-[80px] z-10 bg-slate-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 ml-10 sm:text-4xl">LOGO</h1>
          <ul className="hidden text-black md:flex ml-[460px] border-2 border-violet-300 rounded-xl px-12 z-2 ">
            <li className="hover:underline underline-offset-2 decoration-violet-500">
              Home
            </li>
            <li className="hover:underline underline-offset-2 decoration-violet-500">
              About
            </li>

            <li className="hover:underline underline-offset-2 decoration-violet-500">
              Services
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 ">
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
        <li className="border-b-2 border-zinc-300 w-full">Home</li>
        <li className="border-b-2 border-zinc-300 w-full">About</li>

        <li className="border-b-2 border-zinc-300 w-full">Services</li>

        <div className="flex flex-col my-4">
          <ConnectButton />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
