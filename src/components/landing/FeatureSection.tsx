import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useGSAP(
    () => {
      if (isVisible) {
        const q = gsap.utils.selector(contentRef);

        // Number animation: per char, down to up, opacity 0 to 1
        gsap.fromTo(
          q(".number-char"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          }
        );

        // Border after number index: width 0 to current, grows right
        gsap.fromTo(
          q(".number-line"),
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1, // Start slightly after number
          }
        );

        // Icon container: scales up
        gsap.fromTo(
          q(".icon-container"),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.1,
          }
        );

        // Icon: scales up with delay
        gsap.fromTo(
          q(".icon-svg"),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            delay: 0.2,
          }
        );

        gsap.fromTo(
          q(".title-char"),
          {
            opacity: 0, // Ensure starts invisible
            x: () => 50,
            y: () => 0,
            rotation: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.0,
            stagger: 0.03,
            ease: "power4.out", // Bounce effect for "correct position" snap
          }
        );

        gsap.fromTo(
          q(".desc-word"),
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: "power2.out",
            delay: 0.4,
          }
        );
      }
    },
    { scope: contentRef, dependencies: [isVisible] }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate based on mouse position relative to center
    // Max rotation 10 degrees
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

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
            ref={contentRef}
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
              <span className="text-sm font-mono text-primary flex overflow-hidden">
                {`0${index + 1}`.split("").map((char, i) => (
                  <span key={i} className="number-char inline-block">
                    {char}
                  </span>
                ))}
              </span>
              <div className="number-line w-12 h-[1px] bg-primary/50 origin-left" />
            </div>

            {/* Icon */}
            <div className="icon-container w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Icon className="icon-svg w-7 h-7 text-primary" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title.split("").map((char, index) => (
                <span
                  key={index}
                  className="title-char inline-block whitespace-pre"
                >
                  {char}
                </span>
              ))}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {description.split(" ").map((word, index) => (
                <span key={index} className="inline-block">
                  <span className="desc-word inline-block">{word}</span>
                  &nbsp;
                </span>
              ))}
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
            <div 
              className="relative group transition-transform duration-200 ease-out perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: "1000px",
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(0.95)`,
                }}
              />
              
              {/* Image container */}
              <div 
                className="relative rounded-2xl overflow-hidden border-4 border-border/50 shadow-elevated bg-card transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full aspect-[4/3] object-cover"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
