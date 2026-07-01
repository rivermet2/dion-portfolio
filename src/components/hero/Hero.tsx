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
          style={{ animationDelay: "2600ms" } as React.CSSProperties}
        >
          <HeroButtons />
        </div>
      </div>
      <ScrollIndicator />
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent to-neutral-950" />
      </div>
    </section>
  );
}

export default Hero;
