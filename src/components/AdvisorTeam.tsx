import { MapPin, Languages, FileCheck, Calendar } from "lucide-react";
import advisorImg from "@/components/ui/advisorimg.jpeg";
// TODO: Replace this placeholder image with your actual advisor photo
// Upload your photo and update the 'image' field with the correct path
// Example: image: "/path/to/your-photo.jpg"
const advisor = {
  name: "Your Advisor Name", // TODO: Update with actual name
  role: "Insurance Advisor",
  // TODO: Replace with actual advisor photo
  // Upload your image and use: image: "/your-uploaded-image.jpg"
  image: "advisorImg",
};

const stats = [
  { icon: FileCheck, value: "1200", label: "Policies Sold" },
  { icon: Calendar, value: "12", label: "Years of Experience" },
  { icon: Languages, value: "TAMIL", label: "Language" },
  { icon: MapPin, value: "Palani", label: "Location" },
];

const AdvisorTeam = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet The <span className="text-accent">Advisor</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50">
            <div className="grid md:grid-cols-2">
              {/* Advisor Image */}
              <div className="relative">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full min-h-[400px] object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Trusted Since 2015
                </div>
              </div>

              {/* Advisor Info */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">{advisor.name}</h3>
                <p className="text-accent font-medium mb-8">{advisor.role}</p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-secondary/50 rounded-xl">
                      <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorTeam;
