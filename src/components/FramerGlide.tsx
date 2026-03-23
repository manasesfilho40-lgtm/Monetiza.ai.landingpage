"use client";

import { useState, useCallback, useEffect, startTransition } from "react";

const IMAGES = [
  { src: "/images/IMG_9578.jpeg", alt: "Aprender" },
  { src: "/images/IMG_9577.jpeg", alt: "Estratégia" },
  { src: "/images/IMG_9575.jpeg", alt: "Criar" },
];

export default function FramerGlide() {
  const images = IMAGES;
  const rotationInterval = 4000;
  const imageSize = 280;
  const borderRadius = "48px";
  const buttonColor = "rgba(255,255,255,0.15)";
  const buttonIconColor = "#FFFFFF";

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = useCallback(() => {
    startTransition(() =>
      setCurrentIndex((prev) => (prev + 1) % images.length)
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    startTransition(() =>
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    );
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(handleNext, rotationInterval);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        overflow: "hidden",
        width: "100%",
        minHeight: "720px",
      }}
    >
      {/* Glow blobs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.25,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-20%",
            top: "-10%",
            height: "500px",
            width: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle farthest-side, rgba(255,255,255,0.3), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "-20%",
            top: "-10%",
            height: "500px",
            width: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle farthest-side, rgba(255,255,255,0.2), transparent)",
          }}
        />
      </div>

      {/* Carousel */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "650px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1000px",
          }}
        >
          {images.map((item, index) => {
            const offset = index - currentIndex;
            const total = images.length;
            let pos = (offset + total) % total;
            if (pos > Math.floor(total / 2)) pos = pos - total;

            const isCenter = pos === 0;
            const isAdjacent = Math.abs(pos) === 1;

            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  width: imageSize,
                  height: imageSize * 2.2,
                  transition: "all 0.5s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `translateX(${pos * 45}%) scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7}) rotateY(${pos * -10}deg)`,
                  zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                  opacity: isCenter ? 1 : isAdjacent ? 0.45 : 0,
                  filter: isCenter ? "blur(0px)" : "blur(3px)",
                  visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    borderRadius,
                    border: "1.5px solid rgba(255,255,255,0.1)",
                    boxShadow: isCenter
                      ? "0 24px 60px rgba(0,0,0,0.6)"
                      : "0 10px 30px rgba(0,0,0,0.3)",
                    backgroundColor: "#0a0a0a",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Botão anterior */}
        <button
          onClick={handlePrev}
          aria-label="Anterior"
          style={{
            position: "absolute",
            left: "32px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            zIndex: 20,
            backgroundColor: buttonColor,
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={buttonIconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Botão próximo */}
        <button
          onClick={handleNext}
          aria-label="Próximo"
          style={{
            position: "absolute",
            right: "32px",
            top: "50%",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            zIndex: 20,
            backgroundColor: buttonColor,
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={buttonIconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
