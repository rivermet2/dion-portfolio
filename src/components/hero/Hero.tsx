import HeroContent from "./HeroContent";
import HeroButtons from "./HeroButtons";
import HeroBackground from "./HeroBackground";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 pb-40">
      <HeroBackground />

      <div className="z-10 max-w-4xl text-center">
        <HeroContent />

        <div
          className="fade-up"
          style={{ animationDelay: "2000ms" } as React.CSSProperties}
        >
          <HeroButtons />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
