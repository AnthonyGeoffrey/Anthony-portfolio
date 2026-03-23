const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-primary">Anthony Geoffrey</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
