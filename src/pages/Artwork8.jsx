// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import h1 from "../images/futurism.jpg";
import h2 from "../images/futurism/aviatore.jpg";
import h3 from "../images/futurism/city.jpg";
import h4 from "../images/futurism/dancer.jpg";
import h5 from "../images/futurism/dynamism.jpg";
import h6 from "../images/futurism/unique.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: h1, title: "Dynamism of a Dog on a Leash", artist: "Giacomo Balla", year: "1912" },
    { src: h2, title: "Aeroritratto di Mussolini aviatore (ariel portrait of Mussolini)", artist: "Alfredo Ambrosi", year: "1930" },
    { src: h3, title: "The City Rises", artist: "Umberto Boccioni", year: "1910" },
    { src: h4, title: "Dancer at Pigalle", artist: "Gino Serverini", year: "1912" },
    { src: h5, title: "Dynamism of a Cyclist", artist: "Umberto Boccioni", year: "1913" },
    { src: h6, title: "Unique Forms of Continuity in Space", artist: "Umberto Boccioni", year: "1913" },
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
          <h1>Futurism</h1>
          <p>
          Futurism emerged in Italy in the early 20th century, celebrating  <span className="highlight">speed, technology and the dynamism of modern life. </span> Rejecting traditional artistic values, Futurist painters sought to capture movement, energy, and the sensations of an industrializing world.            
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
