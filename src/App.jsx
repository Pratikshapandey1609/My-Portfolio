import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import Resume from "./Component/Resume";
import Footer from "./Component/Footer";
import Toggle from "./Component/Toggle";
import { Toaster } from "react-hot-toast";
import Landing from "./Component/Landing";

// ✅ Create Theme Context
export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Load from localStorage
  });

  // ✅ Apply dark mode class to <html> and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Tailwind dark mode
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <div className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
          <Toggle /> {/* ✅ Include Toggle button */}
          <FooterWrapper />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

// ✅ Fix Footer rendering issue
function FooterWrapper() {
  const location = useLocation();
  return location.pathname === "/Contact" ? <Footer /> : null;
}

export default App;

