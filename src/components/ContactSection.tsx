import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "anthonygeoffrey87@gmail.com", href: "mailto:anthonygeoffrey87@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 724946613", href: "tel:+254724946613" },
  { icon: MapPin, label: "Location", value: "Kenya", href: "#" },
];

const spring = { type: "spring" as const, stiffness: 120, damping: 18 };

const ContactSection = () => (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass p-8 flex flex-col items-center text-center group hover:border-primary/40 hover:shadow-[0_0_30px_hsl(217_91%_60%/0.2)] transition-all duration-300 cursor-pointer"
            >
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{label}</h3>
              <p className="font-body text-sm text-muted-foreground">{value}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
