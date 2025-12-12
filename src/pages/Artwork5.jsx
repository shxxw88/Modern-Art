// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import e1 from "../images/de-stijl.jpg";
import e2 from "../images/destijl/arithmetic.jpg";
import e3 from "../images/destijl/boogie.jpg";
import e4 from "../images/destijl/chair.jpg";
import e5 from "../images/destijl/counter.jpg";
import e6 from "../images/destijl/marlow.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: e1, title: "Composition II with Red, Blue, and Yellow", artist: "Piet Mondrian", year: "1930" },
    { src: e2, title: "Arithmetic Composition", artist: "Theo van Doesburg", year: "1929-30" },
    { src: e3, title: "Victory Boogie Woogie", artist: "Piet Mondrian", year: "1942-44" },
    { src: e4, title: "Red and Blue Chair", artist: "Gerrit Rietveld", year: "1923" },
    { src: e5, title: "Counter Composition V'", artist: "Theo van Doesburg", year: "1924" },
    { src: e6, title: "White and Yellow", artist: "Marlow Moss", year: "1935" },
  ];

  const openLightbox = (art) => {
    setSelectedImage(art.src);
    setSelectedCaption({
      title: art.title,
      artist: art.artist,
      year: art.year,
    });
  };

  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="artwork-page-columns">
      {/* LEFT COLUMN */}
      <section className="artwork-info-column">

          {/* BACK BUTTON */}
      <button className="back-button" onClick={() => navigate("/gallery")}>
        <i className="gg-arrow-top-left"></i>
      </button>

        <div className="artwork-info-bottom">
          <h1>De Stijl</h1>
          <p>
          Founded in the Netherlands in 1917, De Stijl sought a universal visual language grounded in <span className="highlight">harmony, order and abstraction. </span> Led by artists like Piet Mondrian and Theo van Doesburg, the movement reduced art to <span className="highlight">primary colours, straight lines and geometric forms </span> to express an ideal balance underlying modern life. Rejecting naturalistic representation, De Stijl into architecture, design, and typography, becoming a key foundation of modernist aesthetics.     
           </p>    
           </div>
      </section>

      {/* RIGHT COLUMN */}
      <section className="artwork-images-column">
        <div className="artwork-images-grid">
          {artworks.map((art, i) => (
            <figure
              className="artwork-item"
              key={i}
              onClick={() => openLightbox(art)}
              style={{ cursor: "pointer" }}
            >
              <img src={art.src} alt={art.title} />
            </figure>
          ))}
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt={selectedCaption?.title || ""} />

            <div className="lightbox-caption">
              <div className="cap-title">{selectedCaption.title}</div>
              <div className="cap-artist">{selectedCaption.artist}</div>
              <div className="cap-year">{selectedCaption.year}</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
