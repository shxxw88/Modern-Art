// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import l1 from "../images/surrealism.jpg";
import l2 from "../images/sur/carnival.jpg";
import l3 from "../images/sur/elephants.jpg";
import l4 from "../images/sur/glass.jpg";
import l5 from "../images/sur/lovers.jpg";
import l6 from "../images/sur/pipe.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: l1, title: "The Persistence of Memory", artist: "Salvador Dali", year: "1931" },
    { src: l2, title: "The Harlequin's Carnival", artist: "Joan Miró", year: "1924-25" },
    { src: l3, title: "The Elephants", artist: "Salvador Dali", year: "1948" },
    { src: l4, title: "Glass tears", artist: "Man Ray", year: "1932" },
    { src: l5, title: "The Lovers", artist: "Rene Magritte", year: "1928" },
    { src: l6, title: "The Treachery of Images", artist: "Rene Magritte", year: "1929" },
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
          <h1>Surrealism</h1>
          <p>
Surrealism emerged in the 1920s as artists sought to unlock the unconscious mind, drawing on  <span className="highlight">dreams, </span>automatism, and unexpected juxtapositions. Influenced by  <span className="highlight">psychoanalysis, </span>the movement rejected rational control in favour of <span className="highlight">imagination, </span>revealing hidden psychological and emotional truths.         </p>    
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
