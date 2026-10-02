import { Star } from "lucide-react";

const StarRating = ({ rating, max = 5 }: { rating: number; max?: number }) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <div key={i} className="relative w-6 h-6">
            <Star className="w-6 h-6 text-muted/40" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const categories = [
  { label: "Delivery Speed", rating: 4.7 },
  { label: "Product Satisfaction", rating: 4.9 },
  { label: "Customer Support", rating: 4.6 },
];

const TrustpilotSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container px-6">
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" fill="#00b67a" />
              </svg>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">Trustpilot</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-foreground">4.8</span>
                <span className="text-muted-foreground text-lg">/ 5</span>
              </div>
              <StarRating rating={4.8} />
              <p className="text-muted-foreground text-sm mt-1">Based on 2,847 reviews</p>
            </div>
          </div>

          {/* Category Ratings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50">
                <span className="text-sm font-medium text-muted-foreground">{cat.label}</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-2xl font-bold text-foreground">{cat.rating}</span>
                  <span className="text-muted-foreground text-sm">/ 5</span>
                </div>
                <StarRating rating={cat.rating} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotSection;
