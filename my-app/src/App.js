import { Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navbar/> } />
        </Routes>
     
    </div>
  );
}

export default App;
