// src/App.jsx
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <>
    <div className="home-container">
      <div className="home-heading">
        <h1>
          <span className="change-font">History of Modern Art</span>
        </h1>
      </div>

      <div className="home-subheading">
        <h3>(in no particular order)</h3>
      </div>
    
      <button
        className="explore-button"
        onClick={() => navigate("/gallery")}
      >
        Explore
        <i className="gg-arrow-top-right" />
      </button>
      </div>
    </>
    
  );
}

export default App;
