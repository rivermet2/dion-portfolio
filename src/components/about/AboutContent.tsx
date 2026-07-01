import Reveal from "../ui/Reveal";



function AboutContent() {
  return (
    <div>
      <Reveal delay={0}>
        <h2 className="text-5xl font-bold text-white">About Me</h2>
      </Reveal>

      <Reveal delay={120}>
        <h3 className="mt-6 text-2xl text-white/80">
          Building modern software with purpose.
        </h3>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-8 max-w-xl leading-8 text-white/60">
          I am a Software Engineer from Kosovo with a passion for building
          clean, scalable and modern web applications. I enjoy transforming
          ideas into polished digital experiences while continuously learning
          new technologies and improving my craft.
        </p>
      </Reveal>
    </div>
  );
}

export default AboutContent;
