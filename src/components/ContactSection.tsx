import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "anthonygeoffrey87@gmail.com", href: "mailto:anthonygeoffrey87@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 724946613", href: "tel:+254724946613" },
  { icon: MapPin, label: "Location", value: "Kenya", href: "#" },
];

const socials = [
  { icon: Github, href: "https://github.com/AnthonyGeoffrey", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/anthony-geoffrey-4293aa301/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.link/1s5aco", label: "WhatsApp" },
];

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:anthonygeoffrey87@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={spring}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-primary glow-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full glow" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Cards + Socials */}
            <div className="space-y-6">
              {contacts.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="glass p-6 flex items-center gap-5 group hover:border-primary/40 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.2)] transition-all duration-300 cursor-pointer rounded-2xl"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">{label}</h3>
                    <p className="font-body text-sm text-muted-foreground">{value}</p>
                  </div>
                </motion.a>
              ))}

              <div className="flex items-center gap-4 pt-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.3)] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="glass p-8 space-y-5 rounded-2xl"
            >
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground font-body text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(217_91%_60%/0.2)] transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground font-body text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(217_91%_60%/0.2)] transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground font-body text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(217_91%_60%/0.2)] transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-body font-semibold text-sm bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(217_91%_60%/0.5)] transition-all duration-300"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
