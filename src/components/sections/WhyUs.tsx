import { Zap, CheckCircle, MessageCircle } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Cutting-Edge Innovation",
      description: "Our solutions are built on the latest technology, ensuring you get the most advanced and effective automation experience.",
    },
    {
      icon: CheckCircle,
      title: "Uncompromising Quality",
      description: "We rigorously test every product to guarantee reliability, security, and durability, so you can trust our hardware to work 24/7.",
    },
    {
      icon: MessageCircle,
      title: "Dedicated Support",
      description: "Our expert team is always here to help, from initial consultation and installation to ongoing technical support.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Why Partner with <span className="text-gradient">NSL Lab</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide more than just products; we deliver peace of mind and future-proof technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-6 group-hover:bg-primary/20 transition-smooth glow-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold font-heading text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;