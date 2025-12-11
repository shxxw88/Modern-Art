// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import g1 from "../images/fauvism.jpg";
import g2 from "../images/fauvism/dance.jpg";
import g3 from "../images/fauvism/dessert.jpg";
import g4 from "../images/fauvism/sails.jpg";
import g5 from "../images/fauvism/window.jpg";
import g6 from "../images/fauvism/woman.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: g1, title: "Mountains at Collioure", artist: "André Derain", year: "1905" },
    { src: g2, title: "Bacchus dance", artist: "André Derain", year: "1906" },
    { src: g3, title: "The Dessert: Harmony in Red (The Red Room)", artist: "Henri Matisse", year: "1908" },
    { src: g4, title: "Le séchage des voile (The Drying Sails)", artist: "André Derain", year: "1905" },
    { src: g5, title: "Open Window, Collioure", artist: "Henri Matissse", year: "1905" },
    { src: g6, title: "Woman with a Hat", artist: "Henri Matisse", year: "1905" },
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
          <h1>Fauvism</h1>
          <p>
            Fauvism emerged in France in the early 20th century, defined by its use of vivid, non-naturalistic colour and expressive, energetic brushwork. Led by artists such as Henri Matisse and André Derain, the Fauves rejected traditional naturalism in favour of heightened emotional impact, simplifying forms and intensifying colour to convey feeling over realism.
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
