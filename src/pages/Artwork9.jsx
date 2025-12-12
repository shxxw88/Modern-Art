// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import i1 from "../images/impressionism.jpg";
import i2 from "../images/impress/class.jpg";
import i3 from "../images/impress/dance.jpg";
import i4 from "../images/impress/lilies.jpg";
import i5 from "../images/impress/lunch.jpg";
import i6 from "../images/impress/solei.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: i1, title: "Woman with a Parasol", artist: "Claude Monet", year: "1874" },
    { src: i2, title: "La Classe de Danse", artist: "Edgar Degas", year: "1874-76" },
    { src: i3, title: "Dance at Le Moulin de la Galette", artist: "Pierre-Auguste Renoir", year: "1876" },
    { src: i4, title: "Water-Lilies", artist: "Claude Monet", year: "1903" },
    { src: i5, title: "The Luncheon on the Grass", artist: "Édouard Manet", year: "1863" },
    { src: i6, title: "Unique Forms of Continuity in Space", artist: "Umberto Boccioni", year: "1913" },
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
          <h1>Impressionism</h1>
          <p>
Impressionism emerged in France in the 1870s as artists sought to capture the <span className="highlight">fleeting effects of light, </span> atmosphere, and everyday life. Through <span className="highlight">loose brushwork </span>and luminous colour, they focused on how a scene felt rather than how it was precisely.        </p>    
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
