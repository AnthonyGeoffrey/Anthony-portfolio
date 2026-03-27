import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code, FileText, Lightbulb, Layout, PenTool, CheckSquare,
  Cpu, Terminal, Figma, Globe, Database, Smartphone
} from "lucide-react";

const categories = ["All", "Languages", "Frameworks", "Tools", "Hardware"] as const;
type Category = typeof categories[number];

const skills: { name: string; icon: typeof Code; category: Category }[] = [
  { name: "HTML", icon: Layout, category: "Languages" },
  { name: "CSS", icon: PenTool, category: "Languages" },
  { name: "JavaScript", icon: Code, category: "Languages" },
  { name: "TypeScript", icon: Terminal, category: "Languages" },
  { name: "React", icon: Globe, category: "Frameworks" },
  { name: "Tailwind CSS", icon: PenTool, category: "Frameworks" },
  { name: "Problem Solving", icon: Lightbulb, category: "Tools" },
  { name: "Writing", icon: FileText, category: "Tools" },
  { name: "Task Management", icon: CheckSquare, category: "Tools" },
  { name: "Figma", icon: Figma, category: "Tools" },
  { name: "SQL", icon: Database, category: "Languages" },
  { name: "Hardware", icon: Cpu, category: "Hardware" },
  { name: "Mobile Dev", icon: Smartphone, category: "Frameworks" },
];

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

const SkillsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={spring}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary glow-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full glow" />

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 border ${
                  active === cat
                    ? "bg-primary/20 text-primary border-primary/40 shadow-[0_0_20px_hsl(217_91%_60%/0.3)]"
                    : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={spring}
                  whileHover={{ scale: 1.08 }}
                  className="glass p-5 flex flex-col items-center gap-3 cursor-default group hover:border-primary/40 hover:shadow-[0_0_25px_hsl(217_91%_60%/0.2)] transition-shadow duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">{name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
