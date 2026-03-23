import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-primary neon-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full neon-glow" />

        <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
            I'm <span className="text-primary font-semibold">Anthony Geoffrey</span>, a passionate student developer with a love for building elegant digital experiences. My journey in tech is fueled by curiosity and a desire to solve real-world problems through clean code and thoughtful design.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
            Beyond coding, I enjoy writing and helping people complete tasks efficiently. I believe that great technology should be accessible, intuitive, and make people's lives easier. Every project I work on reflects this philosophy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
