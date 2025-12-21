import { Award, Users, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Shield, value: "50+", label: "Insurance Partners" },
];

const expertise = [
  "Life & Health Insurance Expert",
  "Motor Insurance Specialist",
  "Investment & Retirement Planning",
  "Claims Settlement Support",
  "Personalized Policy Recommendations",
  "Family Protection Planning",
];

const Advisor = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=faces"
                alt="Insurance Advisor"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[4/5]"
              />
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">98%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl">
                <p className="font-bold">Since 2015</p>
                <p className="text-sm opacity-90">Trusted Advisor</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <p className="text-accent font-semibold mb-2">Meet Your Advisor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert Guidance for Your Insurance Needs
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in the insurance industry, our team at <strong className="text-foreground">Royal Policy Service</strong> is dedicated to helping you find the perfect coverage for your needs. We believe in building lasting relationships based on trust and transparency.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center p-4 bg-secondary/50 rounded-xl">
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Expertise List */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">Our Expertise:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="accent" size="lg" asChild>
              <a href="#contact">Consult Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisor;