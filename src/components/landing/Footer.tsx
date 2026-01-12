import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 px-6 border-t border-muted/50 bg-secondary/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by 
            <a className="hover:text-primary transition-all" href="https://sblzd.cn" target="_blank" rel="noopener noreferrer">sblzddddddddddddddddd</a>
          </p>

          <a
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
