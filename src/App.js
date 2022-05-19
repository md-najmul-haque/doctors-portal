import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAuth from "./Pages/Login/RequireAuth";
import RequireAdmin from "./Pages/Login/RequireAdmin";


function App() {
  return (
    <div className="max-w-7xl mx-auto p-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="user" element={<RequireAdmin><Users /></RequireAdmin>} />

        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
