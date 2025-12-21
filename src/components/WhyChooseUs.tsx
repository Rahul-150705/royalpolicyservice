import { Shield, Lock, TrendingUp, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Shield, label: "Family's Protection" },
  { icon: Lock, label: "Financial Security" },
  { icon: TrendingUp, label: "Wealth Creation" },
  { icon: GraduationCap, label: "Child's Education" },
  { icon: Heart, label: "Care-free Retirement" },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">Why Choose</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ROYALPOLICYSERVICE
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-foreground max-w-2xl mx-auto">
            Live Your Best Life Today, Your Tomorrow Is Secured With Us
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-all group-hover:-translate-y-1 border border-border/50">
                <benefit.icon className="w-10 h-10 text-accent" />
              </div>
              <p className="font-semibold text-foreground text-sm">{benefit.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Save <span className="text-accent">Upto 80%*</span> with Best Insurance Plans offered by insurers
              </h3>
              <p className="text-muted-foreground mb-6">
                Take advantage of exclusive deals and discounts, saving up to 80% on the best insurance plans available. Ensure peace of mind with affordable, high-quality coverage from trusted insurers.
              </p>
              <Button variant="accent" size="lg" asChild>
                <a href="#contact">Get your Quote</a>
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                alt="Insurance agent"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;