import { motion } from "framer-motion";
import aboutImg from "@/assets/anthony-about.png";

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

const AboutSection = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={spring}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-primary glow-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full glow" />

        <div className="glass p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-primary/15 blur-lg group-hover:bg-primary/25 transition-all duration-500" />
                <div className="relative w-48 h-56 md:w-52 md:h-64 rounded-xl overflow-hidden border border-primary/20 glow">
                  <img src={aboutImg} alt="Anthony Geoffrey" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                I'm <span className="text-primary font-semibold">Anthony Geoffrey</span>, a passionate student developer with a love for building elegant digital experiences. My journey in tech is fueled by curiosity and a desire to solve real-world problems through clean code and thoughtful design.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
                Beyond coding, I enjoy writing and helping people complete tasks efficiently. I believe that great technology should be accessible, intuitive, and make people's lives easier.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
