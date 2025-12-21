const partnerLogos = [
  { name: "HDFC Life", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/HDFC_Life_Logo.svg/200px-HDFC_Life_Logo.svg.png" },
  { name: "ICICI Prudential", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/ICICI_Prudential_Life_Insurance_logo.svg/200px-ICICI_Prudential_Life_Insurance_logo.svg.png" },
  { name: "SBI Life", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-Life-Insurance-Logo.svg/200px-SBI-Life-Insurance-Logo.svg.png" },
  { name: "Max Life", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Max_Life_Insurance_logo.svg/200px-Max_Life_Insurance_logo.svg.png" },
  { name: "Bajaj Allianz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bajaj_Allianz_Life_Insurance_logo.svg/200px-Bajaj_Allianz_Life_Insurance_logo.svg.png" },
  { name: "TATA AIA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_AIA_Life_logo.svg/200px-Tata_AIA_Life_logo.svg.png" },
  { name: "LIC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/LIC_of_India_Logo.svg/200px-LIC_of_India_Logo.svg.png" },
  { name: "Kotak Life", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kotak_Mahindra_Life_Insurance_logo.svg/200px-Kotak_Mahindra_Life_Insurance_logo.svg.png" },
  { name: "Aditya Birla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Aditya_Birla_Sun_Life_Insurance_logo.svg/200px-Aditya_Birla_Sun_Life_Insurance_logo.svg.png" },
  { name: "PNB MetLife", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/PNB_MetLife_logo.svg/200px-PNB_MetLife_logo.svg.png" },
  { name: "Star Health", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Star_Health_Logo.svg/200px-Star_Health_Logo.svg.png" },
  { name: "New India Assurance", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/The_New_India_Assurance_Logo.svg/200px-The_New_India_Assurance_Logo.svg.png" },
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
              className="bg-card rounded-xl p-4 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 min-h-[80px] group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="font-semibold text-foreground/70 text-center text-xs">${partner.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;