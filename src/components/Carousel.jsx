// src/components/ParallaxCarousel.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Carousel.css";

const ParallaxCarousel = ({ images = [] }) => {
  const stageRef = useRef(null);
  const ringRef = useRef(null);
  const xPosRef = useRef(0);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const imgNodes = ring.querySelectorAll(".img");

    // Helper: parallax background position
    const getBgPos = (i) => {
      return (
        100 -
          (gsap.utils.wrap(
            0,
            360,
            gsap.getProperty(ring, "rotationY") - 180 - i * 36
          ) /
            360) *
            500 +
        "px 0px"
      );
    };

    // Initial GSAP setup
    const tl = gsap
      .timeline()
      .set(ring, { rotationY: 180, cursor: "grab" })
      .set(imgNodes, {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) =>
          images.length
            ? `url(${images[i % images.length]})`
            : `url(https://picsum.photos/id/${i + 32}/600/400/)`,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(imgNodes, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      });

    // Hover opacity effect
    const handleMouseEnter = (e) => {
      const current = e.currentTarget;
      gsap.to(imgNodes, {
        opacity: (i, t) => (t === current ? 1 : 0.5),
        ease: "power3",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imgNodes, { opacity: 1, ease: "power2.inOut" });
    };

    imgNodes.forEach((node) => {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    });

    // Drag logic
    const handleDragStart = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      xPosRef.current = Math.round(clientX);
      gsap.set(ring, { cursor: "grabbing" });

      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("touchmove", handleDrag, { passive: false });
    };

    const handleDrag = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const newX = Math.round(clientX);

      gsap.to(ring, {
        rotationY: "-=" + ((newX - xPosRef.current) % 360),
        onUpdate: () => {
          gsap.set(imgNodes, {
            backgroundPosition: (i) => getBgPos(i),
          });
        },
      });

      xPosRef.current = newX;
    };

    const handleDragEnd = () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("touchmove", handleDrag);
      gsap.set(ring, { cursor: "grab" });
    };

    window.addEventListener("mousedown", handleDragStart);
    window.addEventListener("touchstart", handleDragStart);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);

    // Cleanup on unmount
    return () => {
      tl.kill();
      imgNodes.forEach((node) => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousedown", handleDragStart);
      window.removeEventListener("touchstart", handleDragStart);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("touchmove", handleDrag);
    };
  }, [images]);

  // 10 panels like the CodePen
  const panels = Array.from({ length: 10 });

  return (
    <div className="stage" ref={stageRef}>
      <div className="carousel-container">
        <div className="ring" ref={ringRef}>
          {panels.map((_, i) => (
            <div className="img" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxCarousel;
