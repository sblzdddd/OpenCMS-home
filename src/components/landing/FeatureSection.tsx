import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  index: number;
  isReversed?: boolean;
}

const FeatureSection = ({
  id,
  title,
  description,
  icon: Icon,
  imageUrl,
  index,
  isReversed = false,
}: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div 
        className={`absolute w-[500px] h-[500px] rounded-full blur-3xl transition-opacity duration-1000 ${
          isVisible ? "opacity-20" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
          left: isReversed ? "auto" : "-10%",
          right: isReversed ? "-10%" : "auto",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      <div className="container mx-auto max-w-7xl">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
            isReversed ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Content */}
          <div
            className={`${isReversed ? "lg:col-start-2" : ""} transition-all duration-700 mt-5 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : isReversed
                ? "opacity-0 translate-x-12"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Feature number */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-sm font-mono text-primary">
                0{index + 1}
              </span>
              <div className="w-12 h-[1px] bg-primary/50" />
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-primary" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Image */}
          <div
            className={`${isReversed ? "lg:col-start-1 lg:row-start-1" : ""} transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-elevated bg-card">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
