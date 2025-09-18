import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={teamImage} 
              alt="Professional team of engineers collaborating on smart technology projects"
              className="rounded-xl shadow-elegant hover-lift w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                NSL Lab is a forward-thinking technology startup dedicated to solving everyday 
                problems with smart, automated solutions. Born from a passion for innovation, 
                our mission is to create products that are not only technologically advanced 
                but also user-friendly and accessible.
              </p>
              <p className="text-lg">
                Our team of expert engineers and designers is committed to the highest standards 
                of quality, security, and reliability. We believe in building a smarter, safer, 
                and more connected world, one device at a time.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Smart Devices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;