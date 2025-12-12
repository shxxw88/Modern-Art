// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import k1 from "../images/suprematism.jpg";
import k2 from "../images/sup/black.jpg";
import k3 from "../images/sup/white.png"; 
import k4 from "../images/sup/painterly.jpeg";
import k5 from "../images/sup/beat.jpg";
import k6 from  "../images/sup/supre.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: k1, title: "Black Square", artist: "Kazimir Malevich", year: "1915" },
    { src: k2, title: "Painterly Realism of a Boy with a Knapsack - Color Masses in the Fourth Dimension", artist: "Kazimir Malevich", year: "1915" },
    { src: k3, title: "White on White", artist: "Kazimir Malevich", year: "1918" },
    { src: k4, title: "Painterly Architectonic", artist: " Lyubov Popova", year: "1918" },
    { src: k5, title: "Beat the Whites with the Red Wedge", artist: "El Lissitzky", year: "1919" },
    { src: k6, title: "Suprematist Composition", artist: "Kazimir Malevich", year: "1916" },
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
          <h1>Suprematism</h1>
          <p>
            Suprematism focused on pure abstraction, using basic geometric forms such as squares, circles, and lines to express feeling rather than represent the physical world. Founded by Kazimir Malevich, the movement rejected realism in favour of spiritual expression through form and colour alone.
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
