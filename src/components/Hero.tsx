import { Clock, Headphones, Shield, Heart, Umbrella, Users, Plane, HeartPulse, Wallet, Baby, Bike, Car, TrendingUp, PiggyBank, Home, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import advisorImg from "@/components/ui/advisorimg.jpg";

const insuranceTypes = [
  { icon: Shield, label: "Family Health", sublabel: "Insurance" },
  { icon: Umbrella, label: "Term Life", sublabel: "Insurance" },
  { icon: HeartPulse, label: "Health", sublabel: "Insurance" },
  { icon: Users, label: "Group Health", sublabel: "Insurance" },
  { icon: Plane, label: "Travel", sublabel: "Insurance" },
  { icon: Heart, label: "Life", sublabel: "Insurance" },
  { icon: Wallet, label: "Retirement", sublabel: "Plans" },
  { icon: Baby, label: "Child Savings", sublabel: "Plans" },
  { icon: Bike, label: "2 Wheeler", sublabel: "Insurance" },
  { icon: Car, label: "Car", sublabel: "Insurance" },
  { icon: TrendingUp, label: "Investment", sublabel: "Plans" },
  { icon: PiggyBank, label: "Saving", sublabel: "Plans" },
  { icon: Home, label: "Home", sublabel: "Loan" },
  { icon: Building, label: "Commercial", sublabel: "Loan" },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-28 pb-8 overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Buy Insurance, <span className="text-muted-foreground">The Smart Way.</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">
              Our advanced tools and expert guidance simplify the insurance journey, ensuring you get the right policy with ease. Trust us to help you buy insurance the smart way, saving you time and money.
            </p>

            <Button variant="accent" size="xl" className="mb-10" asChild>
              <a href="#contact">Get your Quote</a>
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Quick, Easy &</p>
                  <p className="text-muted-foreground text-sm">Hassle Free</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Claims</p>
                  <p className="text-muted-foreground text-sm">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="relative">
              <img 
                src={advisorImg}
                alt="Insurance advisor"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-xl">
                <p className="font-bold text-lg">Since 2015</p>
                <p className="text-sm opacity-90">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Types Grid */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {insuranceTypes.map((type, index) => (
              <a
                key={index}
                href="#contact"
                className="group bg-card rounded-2xl p-4 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <type.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-tight">{type.label}</p>
                <p className="text-xs text-muted-foreground">{type.sublabel}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
