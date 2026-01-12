import { Button } from "@/components/ui/button";
import { Download, ChevronDown, MoreHorizontal } from "lucide-react";
import heroPreview from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background/95 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 pb-8 flex-1 flex flex-col justify-center">
        
        {/* Main heading */}
        <div className="flex justify-center items-center gap-6 mt-20 mb-12">
          <img 
            src="/icon/Full/OCMS_ICON_256.png" 
            alt="OpenCMS Logo" 
            className="size-20 md:size-25 lg:size-32 animate-fade-up rounded-2xl" 
            style={{ animationDelay: "0.1s" }}
          />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold m-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">OpenCMS</span>
          </h1>

        </div>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          An open-source, cross-platform campus management app designed for students. 
          Manage your schedule, track grades, and customize everything.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button onClick={() => window.open("https://github.com/sblzdddd/OpenCMS/releases/latest/", "_blank")} variant="hero" size="xl" className="gap-3">
            <Download className="w-5 h-5" />
            Download
          </Button>
        </div>
        <a
          href="/privacy-policy" style={{ animationDelay: "0.4s" }}
          className="text-sm text-muted-foreground/20 hover:text-foreground transition-colors mb-10"
        >
          Privacy Policy
        </a>
      </div>

      {/* Preview Image - positioned to show top part */}
      <div className="relative w-full max-w-5xl mx-auto px-6 mb-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          
          <img 
            src={heroPreview} 
            alt="OpenCMS App Preview" 
            className="relative z-10 w-full object-cover object-top"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
