// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import d1 from "../images/dadaism.jpg";
import d2 from "../images/dada/kitchen.jpg";
import d3 from "../images/dada/rayograph.jpg";
import d4 from "../images/dada/lhooq.jpg";
import d5 from "../images/dada/sound.jpg";
import d6 from "../images/dada/spirit.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: d1, title: "Fountain", artist: "Marcel Duchamp", year: "1917" },
    { src: d2, title: "Cut with the Kitchen Knife Through the Last Epoch of Weimar Beer-Belly Culture in Germany", artist: "Hannah Hoch", year: "1919" },
    { src: d3, title: "Rayograph", artist: "Man Ray", year: "1922" },
    { src: d4, title: "L.H.O.O.Q", artist: "Marcel Duchamp", year: "1919" },
    { src: d5, title: "Receiting the sound Poem 'Karawane'", artist: "Hugo Ball", year: "1916" },
    { src: d6, title: "The Spirit of Our Time (Mechanical Head)", artist: "Raoul Hausmann", year: "1919" },
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
          <h1>Dada</h1>
          <p>
        Dadaism emerged during World War I as a radical rejection of the rational thought and cultural values that many believed had led to the conflict. Beginning in Zurich around 1916, Dada artists embraced <span className="highlight">absurdity, change and provocation </span> to dismantle traditional aesthetics and question the very definition of art. Through <span className="highlight">readymades, collage and anarchic performance, </span> artists exposed the instability of cultural norms and challenged the foundations of modern artistic practice.          
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
