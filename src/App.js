import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <div className="max-w-7xl mx-auto p-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
