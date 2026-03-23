import { useEffect, useRef, useState } from "react";
import { Code, FileText, Lightbulb, Layout, PenTool, CheckSquare } from "lucide-react";

const skills = [
  { name: "HTML", icon: Layout, level: 90 },
  { name: "CSS", icon: PenTool, level: 85 },
  { name: "JavaScript", icon: Code, level: 80 },
  { name: "Problem Solving", icon: Lightbulb, level: 92 },
  { name: "Writing", icon: FileText, level: 88 },
  { name: "Task Management", icon: CheckSquare, level: 85 },
];

const SkillsSection = () => {
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
    <section id="skills" className="relative">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary neon-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full neon-glow" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map(({ name, icon: Icon, level }, i) => (
            <div
              key={name}
              className="glass-card p-6 group hover:border-primary/40 hover:neon-glow transition-all duration-500 cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-display text-sm font-semibold text-foreground">{name}</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: visible ? `${level}%` : "0%" }}
                />
              </div>
              <span className="font-body text-xs text-muted-foreground mt-2 block">{level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
