// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Gallery from "./pages/Gallery.jsx";

import Artwork1 from "./pages/Artwork1.jsx";
import Artwork2 from "./pages/Artwork2.jsx";
import Artwork3 from "./pages/Artwork3.jsx";
import Artwork4 from "./pages/Artwork4.jsx";
import Artwork5 from "./pages/Artwork5.jsx";
import Artwork6 from "./pages/Artwork6.jsx";
import Artwork7 from "./pages/Artwork7.jsx";
import Artwork8 from "./pages/Artwork8.jsx";
import Artwork9 from "./pages/Artwork9.jsx";
// import Artwork10 from "./pages/Artwork10.jsx";
// import Artwork11 from "./pages/Artwork11.jsx";
// import Artwork12 from "./pages/Artwork12.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<App />} />

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Artwork pages */}
        <Route path="/artwork1" element={<Artwork1 />} />
        <Route path="/artwork2" element={<Artwork2 />} />
        <Route path="/artwork3" element={<Artwork3 />} />
        <Route path="/artwork4" element={<Artwork4 />} />
        <Route path="/artwork5" element={<Artwork5 />} />
        <Route path="/artwork6" element={<Artwork6 />} />
        <Route path="/artwork7" element={<Artwork7 />} />
        <Route path="/artwork8" element={<Artwork8 />} />
        <Route path="/artwork9" element={<Artwork9 />} />
        {/* <Route path="/artwork10" element={<Artwork10 />} /> */}
        {/* <Route path="/artwork11" element={<Artwork11 />} />
        <Route path="/artwork12" element={<Artwork12 />} /> */} 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
