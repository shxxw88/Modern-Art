// src/pages/Gallery.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

// Automatically import all images in /images
const images = import.meta.glob("../images/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

export default function Gallery() {
  const imageList = Object.values(images).slice(0, 12);

  const [showTopRight, setShowTopRight] = useState(false);
  const [showLeftMiddle, setShowLeftMiddle] = useState(false);
  const [showBottomRight, setShowBottomRight] = useState(false);

  const topRightRef = useRef(null);
  const leftMiddleRef = useRef(null);
  const bottomRightRef = useRef(null);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (topRightRef.current && !topRightRef.current.contains(e.target)) {
        setShowTopRight(false);
      }
      if (leftMiddleRef.current && !leftMiddleRef.current.contains(e.target)) {
        setShowLeftMiddle(false);
      }
      if (
        bottomRightRef.current &&
        !bottomRightRef.current.contains(e.target)
      ) {
        setShowBottomRight(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="gallery-wrapper">
      {/* TOP RIGHT ? */}
      <div className="help-wrapper top-right" ref={topRightRef}>
        <button
          className="gallery-help"
          type="button"
          aria-label="What is Modern Art?"
          onClick={() => setShowTopRight((v) => !v)}
        >
          ?
        </button>

        {showTopRight && (
          <div className="help-modal">
            <h3>What is Modern Art?</h3>
            <h4>Modern art is NOT just a black square! (Sometimes it is)</h4>
            <p>
             Modern art emerged during a time of rapid change, from the late 19th to mid-20th century, when cities expanded, technology advanced, and old traditions were questioned. Artists began to break away from established rules, exploring new ideas about how art could reflect the modern world.
            </p>
            <p>
              Instead of copying reality, artists experimented with bold colours, abstract forms, and unconventional perspectives. By pushing boundaries, modern art became a space for expressing emotion, ideas, and social issues, challenging viewers to see the world differently.
            </p>
          </div>
        )}
      </div>

      {/* LEFT MIDDLE ? */}
      <div className="help-wrapper left-middle" ref={leftMiddleRef}>
        <button
          className="gallery-help"
          type="button"
          aria-label="How to use this gallery"
          onClick={() => setShowLeftMiddle((v) => !v)}
        >
          ?
        </button>

        {showLeftMiddle && (
          <div className="help-modal">
            <h3>Explore this Gallery</h3>
            <p>
              Click on an artwork to explore its movement in any order! 
            </p>
            <p>
              No need to worry about dates or meanings. Just enjoy the colours, shapes, and styles that artists used to express their ideas.
            </p>
          </div>
        )}
      </div>

      {/* BOTTOM RIGHT ? */}
      <div className="help-wrapper bottom-right" ref={bottomRightRef}>
        <button
          className="gallery-help"
          type="button"
          aria-label="About this project"
          onClick={() => setShowBottomRight((v) => !v)}
        >
          ?
        </button>

        {showBottomRight && (
          <div className="help-modal">
            <h3>
              Abstract Expressionism, Constructivism, Cubism, Dada, De Stijl, Expressionism, Fauvism, Futurism, Impressionism, Post-Impressionism, Suprematism and Surrealism.
            </h3>
            <p>Can you match each artwork to its movement?</p>
          </div>
        )}
      </div>

      {/* GALLERY GRID */}
      <div className="gallery-grid">
        {imageList.map((src, i) => (
          <div key={i} className="gallery-item">
            <Link to={`/artwork${i + 1}`}>
              <img src={src} alt={`Artwork ${i + 1}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}