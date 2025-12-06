import { Shield, Car, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Trusted Since 2015</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Reliable Insurance & 
              <span className="text-accent"> Pollution Check</span> Services
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Protect your future with comprehensive insurance solutions and keep your vehicle compliant with our certified pollution testing center.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#pollution">Book Pollution Test</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                "15+ Years Experience",
                "5000+ Happy Customers",
                "Certified Center",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block animate-slide-in-right">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">Complete Protection</h3>
                    <p className="text-muted-foreground">All your insurance needs</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: "🚗", title: "Vehicle Insurance", desc: "Comprehensive coverage" },
                    { icon: "❤️", title: "Health Insurance", desc: "Family protection" },
                    { icon: "🏠", title: "Life Insurance", desc: "Secure your future" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer group">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <Car className="w-8 h-8" />
                  <div>
                    <p className="font-bold">PUC Testing</p>
                    <p className="text-sm opacity-80">Quick & Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
