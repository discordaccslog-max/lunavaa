import { Button } from "@/components/ui/button";
import { Check, Flame, ShoppingCart, Star } from "lucide-react";
import jettImage from "@/assets/jett-product.webp";
import { useCart } from "@/contexts/CartContext";
import { CHECKOUT_URL } from "@/config/site";
import { SALE, SALE_PERCENT_OFF, SALE_SAVINGS, formatPrice } from "@/config/sale";
import { useSale } from "@/hooks/use-sale";
import CountdownTimer from "./CountdownTimer";
import SecuredByPayPal from "./SecuredByPayPal";

const product = {
  name: "Luna Unlock All",
  description: "One-time purchase, lifetime access",
  features: [
    "Unlock All Skins & Knives & Buddies & Sprays",
    "Instant Delivery",
    "Priority 24/7 support",
    "100% Undetection",
    "Lifetime Access",
  ],
};

const PricingSection = () => {
  const { addItem } = useCart();
  const { active, price, regularPrice, timeLeft } = useSale();

  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center" data-reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/80">Pricing</p>
          <h2 className="font-display text-balance text-5xl leading-[1.02] text-white sm:text-7xl">
            Buy <em className="text-aurora italic">LunaVal</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            One-time purchase. Lifetime access. No hidden fees.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl" data-reveal>
          {/* rotating aurora border */}
          <div className="absolute -inset-px overflow-hidden rounded-[2rem]" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-[spin-slow_10s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,#a78bfa_60deg,transparent_120deg,transparent_180deg,#f472b6_240deg,#22d3ee_280deg,transparent_320deg)]" />
          </div>
          <div className="absolute -inset-12 -z-10 rounded-full bg-fuchsia-500/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid overflow-hidden rounded-[2rem] bg-[#07060f]/95 backdrop-blur-xl md:grid-cols-[1fr_1.15fr]">
            {/* Product image */}
            <div className="relative min-h-72 overflow-hidden">
              <img
                src={jettImage}
                alt="LunaVal product"
                width={860}
                height={860}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060f] via-[#07060f]/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#07060f]" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25 backdrop-blur">
                <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" /> Lifetime Access
              </span>
            </div>

            <div className="relative p-7 sm:p-10">
              {active && (
                <div className="mb-6 inline-flex animate-sale-glow items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/20 to-amber-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-pink-100 ring-1 ring-pink-400/40">
                  <Flame className="h-3.5 w-3.5 text-pink-300" aria-hidden="true" />
                  {SALE.label} · Save {formatPrice(SALE_SAVINGS)}
                </div>
              )}

              <h3 className="text-2xl font-semibold text-white sm:text-3xl">{product.name}</h3>
              <p className="mt-1 text-muted-foreground">{product.description}</p>

              <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className={`font-display text-7xl leading-none ${active ? "text-sale" : "text-white"}`}>
                  {formatPrice(price)}
                </span>
                {active && (
                  <>
                    <span className="pb-1.5 text-2xl text-muted-foreground line-through decoration-pink-400/70 decoration-2">
                      {formatPrice(regularPrice)}
                    </span>
                    <span className="mb-2 rounded-md bg-pink-500 px-2 py-0.5 text-xs font-bold text-white">
                      -{SALE_PERCENT_OFF}%
                    </span>
                  </>
                )}
                <span className="w-full text-sm text-muted-foreground">one-time payment</span>
              </div>

              {active && (
                <div className="mt-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-200/90">Offer ends in</p>
                  <CountdownTimer timeLeft={timeLeft} />
                </div>
              )}

              <ul className="mt-8 space-y-3.5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/15">
                      <Check className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <Button variant="aurora" size="lg" asChild>
                  <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() =>
                    addItem({
                      name: product.name,
                      price: formatPrice(price),
                      priceValue: price,
                      image: jettImage,
                    })
                  }
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
              <SecuredByPayPal className="mt-4 justify-center sm:justify-start" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
