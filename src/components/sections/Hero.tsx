import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automation.jpg";

const Hero = () => {
  const handleExploreClick = () => {
    const element = document.querySelector("#products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern smart automation technology with IoT devices and sensors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-6 leading-tight">
          Innovating the Future of{" "}
          <span className="text-gradient">Smart Automation</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-muted-foreground mb-8 leading-relaxed">
          We build cutting-edge, reliable, and intuitive smart devices that seamlessly integrate 
          into your home and business for enhanced safety, convenience, and efficiency.
        </p>
        <Button 
          variant="hero" 
          size="xl"
          className="shadow-elegant"
          onClick={handleExploreClick}
        >
          Explore Our Solutions
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;