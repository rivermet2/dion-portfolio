import HeroParticles from "./HeroParticles";

function HeroBackground() {
  return (
    <>

      <HeroParticles />

      <div className="hero-ambient" />

      <div className="hero-glow" />
    </>
  );
}

export default HeroBackground;
