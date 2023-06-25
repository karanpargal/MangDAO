import React, { useEffect } from "react";
import Superteam from "../../Assests/Superteam.jpg";
import testDAO from "../../Assests/testDAO.jpg";
import DogeDAO from "../../Assests/DogeDAO.jpeg";
import DAOcards from "./DAOcards";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
const DAOdetails = () => {
  const navigate = useNavigate();
  const DAOcardsVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const [DAOcardsData, setDAOcardsData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8000/getDAO");
      console.log(data);
      const DAOdata = data.data.map((DAO) => {
        let image = DogeDAO;
        if (DAO.data.name == "TestDAO") {
          image = testDAO;
        }
        return {
          Image: image,
          Heading: DAO.data.name,
          Description: DAO.data.description,
        };
      });
      setDAOcardsData(DAOdata);
      return DAOdata;
    }
    fetchData();
  }, []);

  return (
    <div className="font-Raleway bg-violet-100 h-screen">
      <Navbar />
      <ArrowLeftIcon
        className="h-10 w-10 ml-10 pt-2 text-gray-500 hover:text-gray-900 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <h1 className="text-7xl font-bold text-left pl-14 pt-12">
        DAOs Available
      </h1>
      <p className="text-2xl text-left pl-14 pt-8 font-semibold text-gray-900">
        Click on "Enter" to checkout their bounties. You need to own their NFT
        to be able to enter.
      </p>
      <motion.div
        className="grid grid-cols-3 gap-4 pt-4 mx-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 3 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {DAOcardsData.map((data) => {
          return <DAOcards DAOcards={data} />;
        })}
      </motion.div>
    </div>
  );
};

export default DAOdetails;
