import { Car, Clock, CheckCircle, FileText, Gauge, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your test online or walk in directly",
  },
  {
    icon: Car,
    title: "Bring Your Vehicle",
    description: "Arrive at our center with your vehicle documents",
  },
  {
    icon: Gauge,
    title: "Quick Testing",
    description: "Our certified technicians conduct the emission test",
  },
  {
    icon: FileText,
    title: "Get Certificate",
    description: "Receive your PUC certificate instantly",
  },
];

const features = [
  "Government Authorized Center",
  "All Vehicle Types Accepted",
  "Digital Certificate Generation",
  "Quick 10-Minute Process",
  "Trained Technicians",
  "Affordable Pricing",
];

const PollutionCenter = () => {
  return (
    <section id="pollution" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block bg-accent/20 text-accent-foreground font-semibold text-sm px-4 py-2 rounded-full mb-4">
              🚗 Pollution Testing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Certified Vehicle Pollution Check Center
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Get your Pollution Under Control (PUC) certificate quickly and hassle-free. 
              Our government-authorized center ensures your vehicle meets all emission standards.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Pricing Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-8 border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground">PUC Certificate</h4>
                  <p className="text-muted-foreground text-sm">Valid for 6 months</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">₹100</p>
                  <p className="text-muted-foreground text-sm">onwards</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Average wait time: 10-15 minutes</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="#contact">Book Pollution Test</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:9344498444">Call: 9344498444</a>
              </Button>
            </div>
          </div>

          {/* Steps Side */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl border border-border/50">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
                How It Works
              </h3>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 group">
                    {/* Step Number */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-border" />
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pb-6">
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timing Info */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Operating Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="font-medium text-foreground">9:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Sunday</p>
                    <p className="font-medium text-foreground">10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PollutionCenter;
