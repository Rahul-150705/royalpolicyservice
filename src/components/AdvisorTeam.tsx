import { MapPin, Phone } from "lucide-react";

// TODO: Replace these placeholder images with actual advisor photos
// Upload your photos and update the 'image' field with the correct path
// Example: image: "/path/to/your-photo.jpg"
const advisors = [
  {
    name: "Your Advisor Name", // TODO: Update with actual name
    role: "Insurance Advisor",
    location: "Palani, Tamil Nadu",
    phone: "+91 9344498444",
    experience: "10+ Years Experience",
    // TODO: Replace with actual advisor photo
    // Upload your image and use: image: "/your-uploaded-image.jpg"
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces",
  },
  {
    name: "Your Advisor Name", // TODO: Update with actual name
    role: "Insurance Specialist",
    location: "Palani, Tamil Nadu",
    phone: "+91 9344498444",
    experience: "8+ Years Experience",
    // TODO: Replace with actual advisor photo
    // Upload your image and use: image: "/your-uploaded-image.jpg"
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=faces",
  },
];

const AdvisorTeam = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">Meet Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Trusted <span className="text-accent">Insurance Advisors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our experienced team is here to guide you through every step of your insurance journey with personalized advice and dedicated support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Advisor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  {advisor.experience}
                </div>
              </div>

              {/* Advisor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{advisor.name}</h3>
                <p className="text-accent font-medium mb-4">{advisor.role}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm">{advisor.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4 text-accent" />
                    <a href={`tel:${advisor.phone}`} className="text-sm hover:text-accent transition-colors">
                      {advisor.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorTeam;