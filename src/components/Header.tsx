import { Github } from "lucide-react";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h6 className="text-xl font-bold">
          <a href="/" className="text-foreground">OpenCMS</a>
        </h6>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#feature-1" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a target="_blank" href="https://github.com/sblzdddd/OpenCMS" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4 inline-block mr-2 mb-0.5" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
