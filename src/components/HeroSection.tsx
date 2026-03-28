import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import heroImg from "@/assets/anthony-hero.jpg";

const titles = ["Student Developer", "Web Enthusiast", "Problem Solver", "Creative Thinker"];

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setTitleIndex((i) => (i + 1) % titles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background z-[1]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
          >
            <p className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Hello, I'm
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              Anthony <span className="text-primary glow-text">Geoffrey</span>
            </h1>
            <div className="h-10 mb-6">
              <span className="font-display text-xl md:text-2xl text-primary/80 typing-cursor">
                {displayText}
              </span>
            </div>
            <p className="font-body text-muted-foreground max-w-xl mb-10 text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
              I'm a student developer driven by creativity and problem-solving—crafting modern web experiences, writing with intention, and delivering reliable support for everyday tasks.
            </p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.5 }}
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-xl font-body font-semibold text-sm bg-primary/20 text-primary border border-primary/30 backdrop-blur-md hover:bg-primary/30 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.4)] transition-all duration-300"
              >
                View Projects
              </button>
              <a
                href="/Anthony_Geoffrey_Resume.pdf"
                download
                className="px-8 py-3 rounded-xl font-body font-semibold text-sm border border-border/60 text-foreground backdrop-blur-md hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                Download CV
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="p-3 rounded-xl border border-border/60 text-muted-foreground backdrop-blur-md hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { icon: Github, href: "https://github.com/AnthonyGeoffrey", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/anthony-geoffrey-4293aa301/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:anthonygeoffrey87@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.3)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-primary/15 blur-2xl group-hover:bg-primary/25 transition-all duration-700" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden border border-primary/20 glow">
                <img
                  src={heroImg}
                  alt="Anthony Geoffrey"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
