import React from "react";
import "./Gallery.css";

// Automatically import all images in /images
const images = import.meta.glob("../images/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const Gallery = () => {
  const imageList = Object.values(images).slice(0, 12); // first 12 images

  return (
    <div className="gallery-wrapper">
      <div className="gallery-grid">
        {imageList.map((src, i) => (
          <div key={i} className="gallery-item">
            <a href={`/artwork/${i + 1}`}>
            <img src={src} alt={`Artwork ${i + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
