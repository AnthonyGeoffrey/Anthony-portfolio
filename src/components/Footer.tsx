import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
      <div className="flex items-center gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.3)] transition-all duration-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-primary">Anthony Geoffrey</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
