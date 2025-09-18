import smartSwitchImg from "@/assets/smart-switch.jpg";
import doorSensorImg from "@/assets/door-sensor.jpg";
import medicineDispenserImg from "@/assets/medicine-dispenser.jpg";
import presenceSensorImg from "@/assets/presence-sensor.jpg";
import temperatureSensorImg from "@/assets/temperature-sensor.jpg";
import humiditySensorImg from "@/assets/humidity-sensor.jpg";
import gasSensorImg from "@/assets/gas-sensor.jpg";
import emergencyButtonImg from "@/assets/emergency-button.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Smart Switch",
      description: "Remotely control lights and appliances with scheduling and voice command integration.",
      image: smartSwitchImg,
    },
    {
      id: 2,
      name: "Smart Door Sensor",
      description: "Receive instant mobile alerts for any door or window activity, enhancing home security.",
      image: doorSensorImg,
    },
    {
      id: 3,
      name: "Medicine Dispenser",
      description: "Automated medication reminders and dispensing for reliable health management.",
      image: medicineDispenserImg,
    },
    {
      id: 4,
      name: "Human Presence Sensor",
      description: "Advanced motion and presence detection for smart lighting and security automation.",
      image: presenceSensorImg,
    },
    {
      id: 5,
      name: "Temperature Sensor",
      description: "Intelligently monitor and regulate climate for optimal comfort and energy savings.",
      image: temperatureSensorImg,
    },
    {
      id: 6,
      name: "Humidity Sensor",
      description: "Maintain perfect air quality by tracking humidity levels to prevent mold and discomfort.",
      image: humiditySensorImg,
    },
    {
      id: 7,
      name: "Gas Sensor",
      description: "Ensure safety with early detection of harmful gases like CO and natural gas.",
      image: gasSensorImg,
    },
    {
      id: 8,
      name: "Emergency Button",
      description: "A one-press button for immediate alerts in critical situations, ensuring peace of mind.",
      image: emergencyButtonImg,
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Our Suite of <span className="text-gradient">Smart Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designed for reliability and ease of use, our products bring intelligence to your environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="gradient-card p-6 rounded-xl shadow-card hover-lift group cursor-pointer border border-border/50"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-spring group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold font-heading text-foreground mb-3 group-hover:text-primary transition-smooth">
                {product.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;