import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./Components/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import DAOdetails from "./Components/Dashboard/DAOdetails";
import DAObounties from "./Components/DAObounties/DAObounties";
import DAObountiesDetails from "./Components/DAObounties/DAObountiesDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="DAOdetails" element={<DAOdetails />} />
        <Route path="DAObounties" element={<DAObounties />} />
        <Route path="DAObountiesDetails" element={<DAObountiesDetails />} />
      
      </Routes>
    </div>
  );
}

export default App;
