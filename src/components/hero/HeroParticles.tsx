import { useEffect, useState } from "react";

const particles = Array.from({ length: 50 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  opacity: Math.random() * 0.4 + 0.5,
}));

function HeroParticles() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMouse({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle, index) => {
        const particleX = (particle.x / 100) * window.innerWidth;
        const particleY = (particle.y / 100) * window.innerHeight;

        const dx = particleX - mouse.x;
        const dy = particleY - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 180;

        let translateX = 0;
        let translateY = 0;

        if (distance > 0 && distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;

          translateX = (dx / distance) * force * 50;
          translateY = (dy / distance) * force * 50;
        }

        return (
          <span
            key={index}
            className="hero-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,

              transform: `translate(${translateX}px, ${translateY}px)`,
            }}
          />
        );
      })}
    </div>
  );
}

export default HeroParticles;
