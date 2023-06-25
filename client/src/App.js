import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useAccount } from "@particle-network/connect-react-ui";
import Landing from "./Components/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import DAOdetails from "./Components/Dashboard/DAOdetails";
import DAObounties from "./Components/DAObounties/DAObounties";
import DAObountiesDetails from "./Components/DAObounties/DAObountiesDetails";
import React from "react";

function App() {
  return (
    <div className="font-Raleway App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Dashboard" element={<DAOdetails />} />
        <Route path="/Dashboard/:dao" element={<DAObounties />} />
        <Route path="DAObountiesDetails" element={<DAObountiesDetails />} />
      
      </Routes>
    </div>
  );
}

export default App;
