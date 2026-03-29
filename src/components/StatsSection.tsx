import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Folder, Code, Layers, Coffee } from "lucide-react";

const stats = [
  { icon: Folder, label: "Projects Built", value: 5, suffix: "+" },
  { icon: Code, label: "Technologies Used", value: 8, suffix: "+" },
  { icon: Layers, label: "Components Created", value: 30, suffix: "+" },
  { icon: Coffee, label: "Cups of Coffee", value: 200, suffix: "+" },
];

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary glow-text">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section id="stats" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={spring}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          By The <span className="text-primary glow-text">Numbers</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full glow" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map(({ icon: Icon, label, value, suffix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass p-8 flex flex-col items-center text-center rounded-2xl group hover:border-primary/40 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.2)] transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <Counter value={value} suffix={suffix} />
              <span className="font-body text-sm text-muted-foreground mt-2">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
