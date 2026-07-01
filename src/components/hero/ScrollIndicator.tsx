import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

function ScrollIndicator() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FADE_DISTANCE = 180;
  const MOVE_DISTANCE = 20;
  const MOVE_SPEED = 8;

  const opacity = Math.max(0, 1 - scrollPosition / FADE_DISTANCE);

  const translateY = Math.min(scrollPosition / MOVE_SPEED, MOVE_DISTANCE);

  return (
    <div
      className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 fade-up"
      style={
        {
          animationDelay: "4000ms",
          transform: `translate(-50%, ${translateY}px)`,
          transition: "transform 120ms linear",
        } as React.CSSProperties
      }
    >
      <button
        className="scroll-indicator flex flex-col items-center gap-3 text-white/60"
        style={{
          opacity,
          pointerEvents: opacity < 0.1 ? "none" : "auto",
        }}
      >
        <svg width="45" height="45" viewBox="0 0 24 24">
          <rect
            x="8"
            y="3"
            width="10"
            height="16"
            rx="4"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />

          <line
            className="scroll-wheel"
            x1="13"
            y1="6"
            x2="13"
            y2="9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="text-lg font-semibold">Explore My Work</div>
      </button>
    </div>
  );
}

export default ScrollIndicator;
