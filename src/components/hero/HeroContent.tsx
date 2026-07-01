import React from "react";

function HeroContent() {
  return (
    <>
      <h1
        className="fade-up text-6xl md:text-8xl font-bold text-white"
        style={{ animationDelay: "1000ms" } as React.CSSProperties}
      >
        Dion Hoti
      </h1>

      <h2
        className="fade-up mt-8 text-2xl md:text-3xl text-white/85"
        style={{ animationDelay: "1500ms" } as React.CSSProperties}
      >
        Software Engineer
      </h2>

      <p
        className="fade-up mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-8"
        style={{ animationDelay: "2000ms" } as React.CSSProperties}
      >
        Transforming ideas into scalable, efficient, and meaningful software
        solutions.
      </p>
    </>
  );
}

export default HeroContent;
