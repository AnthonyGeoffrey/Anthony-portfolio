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

        <div className="glass p-8 md:p-12 max-w-4xl mx-auto rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={spring}
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-primary/15 blur-lg group-hover:bg-primary/25 transition-all duration-500" />
                <div className="relative w-48 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden border border-primary/20 glow">
                  <img src={aboutImg} alt="Anthony Geoffrey" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
            >
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                It started with curiosity — tweaking HTML pages just to see what would change. That spark turned into a passion for building clean, functional web experiences that actually make a difference.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                Today, I focus on crafting responsive interfaces with <span className="text-primary font-semibold">React</span> and <span className="text-primary font-semibold">Tailwind CSS</span>, always chasing that perfect balance between aesthetics and performance.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                My goal? To grow into a full-stack engineer who ships products people love — one pixel, one function at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
