import { Award, Users, Shield, TrendingUp, Target, Heart } from "lucide-react";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "50+", label: "Insurance Partners" },
  { value: "100%", label: "Claim Settlement" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We build lasting relationships based on honesty and transparency in all our dealings.",
  },
  {
    icon: Target,
    title: "Customer First",
    description: "Your needs are our priority. We go above and beyond to ensure your satisfaction.",
  },
  {
    icon: Heart,
    title: "Care & Commitment",
    description: "We treat every customer like family and commit to protecting what matters most to them.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image/Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] bg-hero-gradient relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Award className="w-12 h-12" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold mb-2">Since 2015</h3>
                    <p className="text-primary-foreground/80">Serving with Excellence</p>
                  </div>
                </div>
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
              </div>
            </div>
            
            {/* Stats floating card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-2xl p-6 shadow-xl border border-border/50 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Customer Retention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-secondary text-primary font-semibold text-sm px-4 py-2 rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in Insurance & Vehicle Services
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">Royal Policy Service</strong> has been a cornerstone of trust 
              and reliability in the insurance industry since 2015. What started as a small family business 
              has grown into a comprehensive insurance advisory and vehicle service center.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We partner with leading insurance companies to bring you the best policies at competitive rates. 
              Our certified pollution testing center ensures your vehicle meets all regulatory standards quickly 
              and affordably.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-4">
                <h4 className="font-serif font-bold text-foreground mb-2">Our Mission</h4>
                <p className="text-muted-foreground text-sm">
                  To provide accessible, affordable, and reliable insurance solutions while maintaining 
                  the highest standards of customer service.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <h4 className="font-serif font-bold text-foreground mb-2">Our Vision</h4>
                <p className="text-muted-foreground text-sm">
                  To be the most trusted name in insurance services, known for our integrity, 
                  expertise, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Choose Royal Policy Service?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, ensuring you receive the best service every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
