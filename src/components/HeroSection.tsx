import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImg from "@/assets/anthony-hero.jpg";

const titles = ["Student Developer", "Web Enthusiast", "Problem Solver", "Creative Thinker"];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setTitleIndex((i) => (i + 1) % titles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hello, I'm
            </p>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Anthony <span className="text-primary neon-text">Geoffrey</span>
            </h1>

            <div className="h-10 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <span className="font-display text-xl md:text-2xl text-primary/80 typing-cursor">
                {displayText}
              </span>
            </div>

            <p className="font-body text-muted-foreground max-w-xl mb-10 text-base md:text-lg leading-relaxed opacity-0 animate-fade-in mx-auto lg:mx-0" style={{ animationDelay: "0.8s" }}>
              I'm a student developer driven by creativity and problem-solving—crafting modern web experiences, writing with intention, and delivering reliable support for everyday tasks.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
              <Button variant="neon" size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Hire Me
              </Button>
              <Button variant="neon-outline" size="lg">
                Download CV
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:anthony@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:neon-glow transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-500 animate-glow-pulse" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden neon-border">
                <img
                  src={heroImg}
                  alt="Anthony Geoffrey"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
