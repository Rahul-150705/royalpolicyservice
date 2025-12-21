const partnerLogos = [
  "HDFC Life",
  "ICICI Prudential",
  "SBI Life",
  "Max Life",
  "Bajaj Allianz",
  "TATA AIA",
  "LIC",
  "Kotak Life",
  "Aditya Birla",
  "PNB MetLife",
  "Reliance Nippon",
  "Star Health",
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with top insurance companies to bring you a wide range of reliable and competitive insurance plans. Trust our insurer partners for exceptional coverage and service.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 min-h-[100px]"
            >
              <span className="font-semibold text-foreground/70 text-center text-sm">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;