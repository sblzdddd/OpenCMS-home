import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <h6 className="text-2xl font-bold">
              <span className="text-gradient">OpenCMS</span>
            </h6>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              target="_blank"
              href="https://github.com/sblzdddd/OpenCMS"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by 
            <a className="hover:text-primary transition-all" href="https://github.com/sblzdddd" target="_blank" rel="noopener noreferrer">sblzdddd</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
