import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" className="relative">
      <div ref={ref} className={`section-container transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary neon-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full neon-glow" />

        <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:anthony@example.com" className="font-body text-primary hover:underline">
              anthony@example.com
            </a>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:neon-glow transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:neon-glow transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:neon-glow transition-all duration-300 resize-none"
              />
            </div>
            <Button variant="neon" size="lg" className="w-full">
              Send Message <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
