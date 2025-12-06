import { Car, Heart, Users, Home, Briefcase, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "Motor Insurance",
    description: "Comprehensive coverage for cars, bikes, and commercial vehicles. Protect your vehicle against accidents, theft, and natural disasters.",
    features: ["Third Party Liability", "Own Damage Cover", "Personal Accident Cover"],
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Secure your family's health with our extensive health insurance plans covering hospitalization, surgeries, and critical illnesses.",
    features: ["Cashless Hospitalization", "Pre & Post Care", "No Claim Bonus"],
  },
  {
    icon: Users,
    title: "Life Insurance",
    description: "Ensure your family's financial security with term life, whole life, and endowment plans tailored to your needs.",
    features: ["Term Life Plans", "Whole Life Coverage", "Investment Options"],
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Protect your home and belongings from fire, theft, natural calamities, and other unforeseen events.",
    features: ["Structure Protection", "Content Coverage", "Liability Cover"],
  },
  {
    icon: Briefcase,
    title: "Commercial Insurance",
    description: "Comprehensive business insurance solutions including property, liability, and employee coverage.",
    features: ["Property Insurance", "Worker Compensation", "Business Interruption"],
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Travel worry-free with coverage for trip cancellation, medical emergencies, and lost baggage.",
    features: ["Medical Coverage", "Trip Cancellation", "Baggage Protection"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-secondary text-primary font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of insurance products to protect what matters most to you. 
            Get personalized coverage that fits your lifestyle and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Get Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which insurance is right for you?
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="#contact">Talk to Our Experts</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
