import { Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Landing/> } />
        </Routes>
     
    </div>
  );
}

export default App;
