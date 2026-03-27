import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, BookOpen, Zap, Folder, LayoutGrid, X } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A futuristic personal portfolio built with React, Tailwind CSS, and TypeScript. Features smooth animations, modern design, and responsive layout.",
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

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

type Project = typeof projects[number];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
    <motion.div
      className="relative glass-strong p-8 max-w-lg w-full z-10"
      initial={{ scale: 0.9, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 30 }}
      transition={spring}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
        <project.icon className="w-7 h-7" />
      </div>
      <h3 className="font-display text-xl font-bold text-foreground mb-3">{project.title}</h3>
      <p className="font-body text-muted-foreground leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-body rounded-full bg-primary/10 text-primary border border-primary/20">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-body font-semibold text-sm bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-all duration-300"
      >
        View Project <ExternalLink className="w-4 h-4" />
      </a>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [view, setView] = useState<"grid" | "folder">("grid");
  const [hoveredFolder, setHoveredFolder] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={spring}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary glow-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full glow" />

          {/* View toggle */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="glass p-1 flex items-center gap-1">
              <button
                onClick={() => setView("folder")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 ${
                  view === "folder" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Folder className="w-4 h-4" /> Folder
              </button>
              <button
                onClick={() => setView("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 ${
                  view === "grid" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid className="w-4 h-4" /> Grid
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {view === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
              >
                {projects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring, delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedProject(project)}
                    className="glass p-6 group hover:border-primary/40 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.2)] transition-all duration-500 flex flex-col cursor-pointer"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-body rounded-full bg-primary/10 text-primary border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="folder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center"
              >
                <div
                  className="relative w-72 h-52 cursor-pointer"
                  onMouseEnter={() => setHoveredFolder(true)}
                  onMouseLeave={() => setHoveredFolder(false)}
                >
                  {/* Folder shape */}
                  <div className="absolute bottom-0 w-full h-40 glass border-primary/20 rounded-xl" />
                  <div className="absolute bottom-[140px] left-0 w-28 h-8 glass border-primary/20 rounded-t-xl" />

                  {/* Stacked cards */}
                  {projects.map((project, i) => {
                    const total = projects.length;
                    const angle = hoveredFolder ? (i - (total - 1) / 2) * 25 : 0;
                    const tx = hoveredFolder ? (i - (total - 1) / 2) * 80 : 0;
                    const ty = hoveredFolder ? -120 - Math.abs(i - (total - 1) / 2) * 20 : -10 - i * 4;
                    const scale = hoveredFolder ? 1.05 : 1 - i * 0.03;

                    return (
                      <motion.div
                        key={project.title}
                        className="absolute bottom-8 left-1/2 w-56 glass-strong p-4 cursor-pointer"
                        style={{ originX: 0.5, originY: 1 }}
                        animate={{
                          rotate: angle,
                          x: tx - 112,
                          y: ty,
                          scale,
                        }}
                        transition={spring}
                        whileHover={{ scale: 1.12 }}
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <project.icon className="w-4 h-4 text-primary" />
                          <span className="font-display text-xs font-bold text-foreground truncate">{project.title}</span>
                        </div>
                        <p className="font-body text-[10px] text-muted-foreground line-clamp-2">{project.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
