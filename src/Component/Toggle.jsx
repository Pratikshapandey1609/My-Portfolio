import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";

function Toggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed bottom-5 right-5 px-5 py-2 rounded-full text-lg font-semibold shadow-lg transition-all ${
        darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
      }`}
    >
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </motion.button>
  );
}

export default Toggle;
