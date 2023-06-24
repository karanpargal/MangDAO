import { Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./Components/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import DAOdetails from "./Components/Dashboard/DAOdetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="DAOdetails" element={<DAOdetails />} />
      
      </Routes>
    </div>
  );
}

export default App;
