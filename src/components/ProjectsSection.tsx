import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, BookOpen, Zap } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A futuristic personal portfolio built with React, Tailwind CSS, and TypeScript. Features smooth animations, neon design, and responsive layout.",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: Globe,
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A minimalist blog platform with markdown support, clean typography, and fast page loads. Built for writers who value simplicity.",
    tags: ["React", "Markdown", "CSS"],
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Task Manager",
    description: "An efficient task management app with drag-and-drop, priority levels, and deadline tracking. Designed for productivity.",
    tags: ["JavaScript", "UI/UX", "LocalStorage"],
    icon: Zap,
    link: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary neon-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full neon-glow" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map(({ title, description, tags, icon: Icon, link }, i) => (
            <div
              key={title}
              className="glass-card p-6 group hover:border-primary/40 hover:neon-glow transition-all duration-500 flex flex-col relative overflow-hidden scanline"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-body rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="neon-outline" size="sm" asChild>
                <a href={link}>
                  View Project <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
