import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logoImg} alt="AG Logo" className="w-10 h-10 object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`font-body text-sm transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-primary after:w-full"
                  : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleClick("#contact")}
          className="hidden md:block px-5 py-2 rounded-xl font-body text-sm font-semibold bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.4)] transition-all duration-300"
        >
          Hire Me
        </button>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground p-2">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`block w-full text-left font-body transition-colors ${
                  activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
