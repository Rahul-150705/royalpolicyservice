const partnerLogos = [
  { name: "HDFC Life", color: "#004C8F" },
  { name: "ICICI Prudential", color: "#F58220" },
  { name: "SBI Life", color: "#22409A" },
  { name: "Max Life", color: "#E31837" },
  { name: "Bajaj Allianz", color: "#004B87" },
  { name: "TATA AIA", color: "#1A1F71" },
  { name: "LIC", color: "#00529B" },
  { name: "Kotak Life", color: "#ED1C24" },
  { name: "Aditya Birla", color: "#ED1C24" },
  { name: "PNB MetLife", color: "#00A3E0" },
  { name: "Star Health", color: "#00A651" },
  { name: "New India", color: "#0072BC" },
  { name: "United India", color: "#003366" },
  { name: "Reliance General", color: "#E31837" },
  { name: "HDFC Ergo", color: "#004C8F" },
  { name: "IFFCO Tokio", color: "#0066B3" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with top insurance companies to bring you a wide range of reliable and competitive insurance plans. Trust our insurer partners for exceptional coverage and service.
          </p>
        </div>
      </div>

      {/* Scrolling Partner Logos - Row 1 */}
      <div className="relative mb-6">
        <div className="flex animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3"
            >
              <div 
                className="rounded-xl px-6 py-4 flex items-center justify-center min-w-[160px] h-[70px] shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/30"
                style={{ backgroundColor: `${partner.color}15` }}
              >
                <span 
                  className="font-bold text-sm whitespace-nowrap"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Partner Logos - Row 2 (Reverse) */}
      <div className="relative">
        <div className="flex animate-scroll-reverse">
          {[...partnerLogos.slice().reverse(), ...partnerLogos.slice().reverse()].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-3"
            >
              <div 
                className="rounded-xl px-6 py-4 flex items-center justify-center min-w-[160px] h-[70px] shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/30"
                style={{ backgroundColor: `${partner.color}15` }}
              >
                <span 
                  className="font-bold text-sm whitespace-nowrap"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;