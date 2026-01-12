import HeroSection from "@/components/landing/HeroSection";
import FeatureSection from "@/components/landing/FeatureSection";
import Footer from "@/components/landing/Footer";
import { 
  LayoutGrid, 
  Calendar, 
  BarChart3, 
  Palette, 
  Globe, 
  Image, 
  Shield, 
  Heart, 
  Download,
  Github
} from "lucide-react";

// Import feature images
import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import feature3 from "@/assets/feature-3.jpg";
import feature4 from "@/assets/feature-4.jpg";
import feature5 from "@/assets/feature-5.jpg";
import feature6 from "@/assets/feature-6.jpg";
import feature7 from "@/assets/feature-7.jpg";
import feature8 from "@/assets/feature-8.jpg";

const features = [
  {
    id: "feature-1",
    title: "Dynamic Home Page",
    description:
      "Sort anything on your home page by long press + drag. Add or remove any icons, resize widgets as you want! Make your campus management experience truly personal.",
    icon: LayoutGrid,
    imageUrl: feature1,
  },
  {
    id: "feature-2",
    title: "Flexible Schedule Displays",
    description:
      "A variety of schedule, time, and appointment views for pages, providing a more intuitive way to manage your time and resources throughout the semester.",
    icon: Calendar,
    imageUrl: feature2,
  },
  {
    id: "feature-3",
    title: "Gain Test Insights",
    description:
      "Visualize assessment results through intuitive charts and data. Identify strengths, weaknesses, and track your progress instantly with detailed analytics.",
    icon: BarChart3,
    imageUrl: feature3,
  },
  {
    id: "feature-4",
    title: "Customize Your Theme",
    description:
      "Infinite amounts of color themes based on one custom seed color! Window effects like Mica and Acrylic are also supported for a truly personalized experience.",
    icon: Palette,
    imageUrl: feature4,
  },
  {
    id: "feature-5",
    title: "Styled Web CMS",
    description:
      "OpenCMS eliminates color inconsistencies between Web CMS and the app. Automatically uses your app color theme with full dark mode support.",
    icon: Globe,
    imageUrl: feature5,
  },
  {
    id: "feature-6",
    title: "Create Your Own Skin",
    description:
      "Add images as backgrounds and icons for different pages! Export your custom skins as files to share with friends and the community.",
    icon: Image,
    imageUrl: feature6,
  },
  {
    id: "feature-7",
    title: "Your Data, Your Choice",
    description:
      "OpenCMS encrypts and stores user data & credentials locally. No extra third-party server, no data collection—all your data is handled by yourself.",
    icon: Shield,
    imageUrl: feature7,
  },
  {
    id: "feature-8",
    title: "Open and Free, Forever",
    description:
      "OpenCMS is fully open-source and licensed for modification. Report issues, share feedback, or suggest improvements—the community drives development.",
    icon: Heart,
    imageUrl: feature8,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h6 className="text-xl font-bold">
            <a href="/" className="text-foreground">OpenCMS</a>
          </h6>
          <div className="hidden md:flex items-center gap-8">
            <a href="#feature-1" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a target="_blank" href="https://github.com/sblzdddd/OpenCMS" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-4 h-4 inline-block mr-2 mb-0.5" />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Sections */}
      <div className="relative">
        {/* Gradient divider */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
        
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.id}
            id={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            imageUrl={feature.imageUrl}
            index={index}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-48 px-6 mb-12 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Download OpenCMS today and take control of your campus experience.
            Open-source, privacy-focused, and completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              target="_blank"
              href="https://github.com/sblzdddd/OpenCMS/releases/latest/"
              className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-xl bg-primary text-primary-foreground font-semibold shadow-glow hover:shadow-[0_0_80px_hsl(16_85%_60%_/_0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
            <a
              href="https://github.com/sblzdddd/OpenCMS"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-xl bg-transparent border border-border text-foreground font-semibold hover:bg-secondary transition-all hover:scale-[1.03]  duration-300"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
