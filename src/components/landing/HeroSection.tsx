import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroPreview from "@/assets/hero.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import html2canvas from "html2canvas";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isGenerated, setIsGenerated] = useState(false);

  useGSAP(
    () => {
      const captureEl = previewRef.current;
      if (!captureEl || isGenerated) return;

      const createCanvases = () => {
        // Use onclone to ensure the capture sees the element as fully opaque, 
        // even if we hide it in the real DOM to prevent double-rendering.
        html2canvas(captureEl, { 
            backgroundColor: null, 
            scale: 1,
            onclone: (clonedDoc) => {
                const clonedEl = clonedDoc.querySelector('[data-capture-target="true"]') as HTMLElement;
                if (clonedEl) {
                    clonedEl.style.opacity = "1";
                }
            }
        }).then((canvas) => {
          const width = canvas.width;
          const height = canvas.height;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          const imageData = ctx.getImageData(0, 0, width, height);
          const dataList: ImageData[] = [];
          
          const COUNT = 75;
          const REPEAT_COUNT = 3;

          for (let i = 0; i < COUNT; i++) {
            dataList.push(ctx.createImageData(width, height));
          }

          for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              for (let l = 0; l < REPEAT_COUNT; l++) {
                const index = (x + y * width) * 4;
                const dataIndex = Math.floor(
                  (COUNT * (Math.random() + (2 * x) / width)) / 3
                );
                
                if (dataList[dataIndex]) {
                    for (let p = 0; p < 4; p++) {
                        dataList[dataIndex].data[index + p] = imageData.data[index + p];
                    }
                }
              }
            }
          }
          
          // Hide the original image but make sure container is visible
          const img = captureEl.querySelector("img");
          if (img) img.style.opacity = "0";
          
          captureEl.style.opacity = "1";
          
          // Allow particles to spill out
          captureEl.style.overflow = "visible";
          captureEl.style.boxShadow = "none";
          captureEl.style.background = "transparent";

          const tl = gsap.timeline({
            onComplete: () => {
                // Restore the perfect original image
                if (img) {
                    gsap.to(img, { 
                        opacity: 1, 
                        duration: 0.5, 
                        onComplete: () => {
                             // Clean up canvases to free memory and ensure sharp text/image
                             captureEl.querySelectorAll('.capture-canvas').forEach(c => c.remove());
                             // Restore overflow/shadow if needed for the clean image look
                             captureEl.style.overflow = "hidden";
                             captureEl.style.boxShadow = ""; 
                             captureEl.style.background = "";
                        }
                    });
                }
            }
          });
          
          dataList.forEach((data, i) => {
            const clonedCanvas = document.createElement('canvas');
            clonedCanvas.width = width;
            clonedCanvas.height = height;
            clonedCanvas.className = "capture-canvas absolute inset-0 w-full h-full pointer-events-none";
            
            clonedCanvas.getContext("2d")?.putImageData(data, 0, 0);
            captureEl.appendChild(clonedCanvas);

            const randomAngle = (Math.random() - 0.5) * 2 * Math.PI;
            const randomRotationAngle = 30 * (Math.random() - 0.5);
            const randomX = 50 * Math.sin(randomAngle);
            const randomY = 50 * Math.cos(randomAngle);

            // Set initial "shattered" state
            gsap.set(clonedCanvas, {
                opacity: 0,
                x: randomX,
                y: randomY,
                rotate: randomRotationAngle
            });
            
            // Animate to "whole" state
            tl.to(clonedCanvas, {
              duration: 1.5,
              ease: "power2.out",
              rotate: 0,
              x: 0,
              y: 0,
              opacity: 1,
            }, (i / dataList.length) * 0.5); // Stagger the start times
          });
          
          setIsGenerated(true);
        });
      };

      const img = captureEl.querySelector("img");
      if (img && !img.complete) {
        img.onload = createCanvases;
      } else {
        setTimeout(createCanvases, 500); 
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
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
          className="text-sm text-muted-foreground/20 hover:text-foreground transition-colors mb-10 animate-fade-up"
        >
          Privacy Policy
        </a>
      </div>

      {/* Preview Image - positioned to show top part */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto px-6 mb-12" 
      >
        <div 
            ref={previewRef}
            data-capture-target="true"
            className="relative rounded-2xl overflow-hidden shadow-elevated opacity-0"
        >
          
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
