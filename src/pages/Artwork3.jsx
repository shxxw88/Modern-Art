// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import c1 from "../images/cubism.jpg";
import c2 from "../images/cubism/demoiselle.jpg";
import c3 from "../images/cubism/portrait.jpg";
import c4 from "../images/cubism/guitar.jpg";
import c5 from "../images/cubism/portuguese.jpg";
import c6 from "../images/cubism/tenora.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: c1, title: "Still Life with a Bottle of Rum", artist: "Pablo Picasso", year: "1911" },
    { src: c2, title: "Les Demoiselles d'Avignon", artist: "Pablo Picasso", year: "1907" },
    { src: c3, title: "Portrait de Messieurs Kaawashima. et Foujita", artist: "Diego Rivera", year: "1919-20" },
    { src: c4, title: "Mandolin and Guitar", artist: "Pablo Picasso", year: "1924" },
    { src: c5, title: "The Portuguese)", artist: "Georges Barque", year: "1911" },
    { src: c6, title: "Still Life with Tenora", artist: "Georges Barque", year: "1913" },
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
          <h1>Cubism</h1>
          <p>
            Cubism broke traditional perspective by turning objects into <span className="highlight">geometric forms with multiple viewpoints. </span> This new approach rejected naturalistic representation, instead reconstructing subjects through fractured planes to reveal a deeper analytical understanding of form. Cubism became a defining turning point in modern art, influencing architecture, design, and many later abstract movements.
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
