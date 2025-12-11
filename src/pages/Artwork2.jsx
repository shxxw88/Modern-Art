// src/pages/Artwork1.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Artwork.css";

import b1 from "../images/constructivism.jpg";
import b2 from "../images/const/books.jpg";
import b3 from "../images/const/monument.jpg";
import b4 from "../images/const/fiveyearplan.jpg";
import b5 from "../images/const/selfportrait.jpg";
import b6 from "../images/const/spatial.jpg";

export default function Artwork1() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null);
  const navigate = useNavigate();

  const artworks = [
    { src: b1, title: "Proun 12D", artist: "El Lissitzky", year: "1920" },
    { src: b2, title: "Books (Please)! In All Branches of Knowledge", artist: "Aleksandr Rodchenko", year: "1924" },
    { src: b3, title: "Monument of the Third International", artist: "Vladmir Tatlin", year: "1919-20" },
    { src: b4, title: "The Results of the First Five Year Plan", artist: "Varvara Sepanova", year: "1932" },
    { src: b5, title: "Self-Portrait (The Constructor)", artist: "El Lissitzky", year: "1924" },
    { src: b6, title: "Spatial Construction no. 12", artist: "Aleksandr Rodchenko", year: "1977" },
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
          <h1>Constructivism</h1>
          <p>
            Constructivism emerged in Russia during the aftermath of the 1917 October Revolution. Seeking an artistic language suited to a new social order, Constructivist artists (led by Aleksandr Rodchenko) rejected emotion, subjectivity, and the traditions of easel painting. Instead, they embraced the role of the artist as an engineer, creating work with clear social, functional, and utilitarian purposes for a modern, collective society.
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
