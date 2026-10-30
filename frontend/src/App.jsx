import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Welcome from "./pages/Welcome";
import "./App.css";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isWelcome = location.pathname === "/";
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        {!isWelcome && <Navbar />}

        <main key={location.pathname} className="animate-fade-up flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        {!isWelcome && <Footer />}
      </div>
    </>
  );
}

export default App;
