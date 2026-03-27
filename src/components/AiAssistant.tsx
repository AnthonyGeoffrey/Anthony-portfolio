import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const prompts = [
  { label: "About Me", key: "about" },
  { label: "My Projects", key: "projects" },
  { label: "Tech Stack", key: "stack" },
];

const responses: Record<string, string> = {
  about:
    "Hi! I'm Anthony Geoffrey, a student developer passionate about crafting modern web experiences. I love problem-solving, writing clean code, and helping people complete tasks efficiently. I'm always learning and building!",
  projects:
    "I've worked on several projects including a futuristic portfolio website (this one!), a minimalist blog platform with markdown support, and a task management app with drag-and-drop. Each project focuses on clean design and great user experience.",
  stack:
    "My core stack includes React, TypeScript, and Tailwind CSS for frontend development. I'm also experienced with JavaScript, HTML/CSS, Figma for design, and I'm exploring backend technologies like Node.js and SQL databases.",
};

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

type Message = { role: "user" | "assistant"; content: string };

const AiAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! I'm Anthony's assistant. Ask me anything about him!" },
  ]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const handlePrompt = (key: string, label: string) => {
    const userMsg: Message = { role: "user", content: label };
    setMessages((m) => [...m, userMsg]);
    setTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "assistant", content: responses[key] }]);
    }, 1200);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md shadow-[0_0_30px_hsl(217_91%_60%/0.3)] hover:bg-primary/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={spring}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass-strong overflow-hidden flex flex-col"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border/50">
              <h3 className="font-display text-sm font-bold text-foreground">Anthony's Assistant</h3>
              <p className="font-body text-xs text-muted-foreground">Ask me about Anthony!</p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3" style={{ maxHeight: "300px" }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-xl font-body text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary/20 text-primary border border-primary/20"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-secondary px-4 py-3 rounded-xl flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Predefined prompts */}
            <div className="px-5 py-4 border-t border-border/50 flex flex-wrap gap-2">
              {prompts.map(({ label, key }) => (
                <button
                  key={key}
                  onClick={() => handlePrompt(key, label)}
                  disabled={typing}
                  className="px-3 py-1.5 rounded-full font-body text-xs font-medium border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 disabled:opacity-50 transition-all duration-300"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;
