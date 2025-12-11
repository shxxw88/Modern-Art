// src/components/ArtworkCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Carousel({ images = [] }) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}                 // 🔁 infinite scroll
      spaceBetween={-40}          // 🧷 less gap / slight overlap
      coverflowEffect={{
        rotate: 35,               // 🎚 tilt of side slides
        stretch: -40,             // pull slides closer together
        depth: 250,               // 3D depth
        modifier: 1.1,
        slideShadows: false,      // can turn true if you like the shadows
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
        {/* bigger image, natural ratio */}
          <img src={src} alt={`Artwork ${i + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
