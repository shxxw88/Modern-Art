// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import a1 from "../images/abstractexpressionism.jpg";
import a2 from "../images/abexp/leekrasner.jpg";
import a3 from "../images/abexp/franzkline.jpg";
import a4 from "../images/abexp/jacksonpollock.jpg";
import a5 from "../images/abexp/robertmotherwell.jpg";
import a6 from "../images/abexp/willemdekooning.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: a1, title: "No. 6", artist: "Mark Rothko", year: "1951" },
    { src: a2, title: "Night Creatures", artist: "Lee Krasner", year: "1965" },
    { src: a3, title: "Meryon", artist: "Franz Kline", year: "1960" },
    { src: a4, title: "Number 28", artist: "Jackson Pollock", year: "1950" },
    { src: a5, title: "Personage (Autoportrait)", artist: "Robert Motherwell", year: "1943" },
    { src: a6, title: "Untitled XXVIII", artist: "Willem de Kooning", year: "1977" },
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
          <h1>Abstract Expressionism</h1>
          <p>
            Emerging in post–war America, Abstract Expressionism emphasized gesture,
            spontaneity, and emotional intensity. The movement redefined modern art
            and shifted the center of the art world to New York.
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
