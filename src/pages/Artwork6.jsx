// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import f1 from "../images/expressionism.jpg";
import f2 from "../images/exp/cig.jpg";
import f3 from "../images/exp/egon.jpg";
import f4 from "../images/exp/horse.jpg";
import f5 from "../images/exp/man.jpg";
import f6 from "../images/exp/street.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: f1, title: "The Scream", artist: "Edvard Munch", year: "1893" },
    { src: f2, title: "Self-Portrait with Cigarette", artist: "Edvard Munch", year: "1895" },
    { src: f3, title: "Self-Portrait with Physalis", artist: "Egon Schiele", year: "1912" },
    { src: f4, title: "The Large Blue Horses", artist: "Franz Marc", year: "1911" },
    { src: f5, title: "Portrait of a Man", artist: "Erich Heckel", year: "1919" },
    { src: f6, title: "Street, Berlin", artist: "Ernst Ludwig Kirchner", year: "1913" },
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
          <h1>Expressionism</h1>
          <p>
Expressionism emerged in early 20th-century Europe as artists sought to convey inner emotion rather than external reality. Through bold colours, distorted forms, and intense psychological imagery, they rejected naturalistic representation in favour of subjective expression.    </p>    </div>
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
