import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Palani",
    rating: 5,
    text: "Excellent service! Got my health insurance within 24 hours. The team was very helpful and explained everything clearly.",
  },
  {
    name: "Priya Sharma",
    location: "Coimbatore",
    rating: 5,
    text: "Very professional team. They helped me choose the right life insurance policy for my family. Highly recommended!",
  },
  {
    name: "Muthu Selvam",
    location: "Dindigul",
    rating: 5,
    text: "Best insurance service in the area. Quick PUC testing and insurance renewal. Very satisfied with their service.",
  },
  {
    name: "Lakshmi Devi",
    location: "Palani",
    rating: 5,
    text: "The claim support was amazing. They guided me through the entire process and I got my claim settled quickly.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-accent">Customers</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-muted-foreground text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;