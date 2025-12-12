// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import j1 from "../images/postimp.jpeg";
import j2 from "../images/post/dream.jpg";
import j3 from "../images/post/vision.jpg";
import j4 from "../images/post/moulin.jpg";
import j5 from "../images/post/seurat.jpg";
import j6 from "../images/post/irises.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: j1, title: "Self-Portrait with a Straw Hat", artist: "Vincent van Gogh", year: "1888" },
    { src: j2, title: "The Dream", artist: "Henri Rousseau", year: "1910" },
    { src: j3, title: "Vision After the Sermon (Jacob Wrestling the Angel)", artist: "Paul Gauguin", year: "1876" },
    { src: j4, title: "At the Moulin Rouge, The Dance", artist: "Henri de Toulouse-Lautrec", year: "1890" },
    { src: j5, title: "A Sunday on La Grande Jatte", artist: "Georges Seurat", year: "1884" },
    { src: j6, title: "Vases with Irises Against a Yellow Background", artist: "Vincent van Gogh", year: "1889" },
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
          <h1>Post-Impressionism</h1>
          <p>
Post-Impressionism developed in the late 19th century as artists expanded beyond Impressionism’s naturalism in favour of expressive colour, simplified forms, and experimental techniques. Seeking greater emotional depth, structure, and symbolic meaning, they emphasized form, colour, and personal expression.    
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
