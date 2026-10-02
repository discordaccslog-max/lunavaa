import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, CalendarCheck, Check, Shield, Users } from "lucide-react";
import { CHECKOUT_URL } from "@/config/site";
import { formatPrice } from "@/config/sale";
import { useSale } from "@/hooks/use-sale";

const TRUST_POINTS = ["Instant email delivery", "Lifetime access", "24/7 support"];

/** Staggered entrance on page load (pair with `animate-rise`). */
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const HeroSection = () => {
  const { active, price, regularPrice } = useSale();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center px-6 pb-24 pt-16 text-center sm:pt-20">
        {/* Highlight label */}
        <p
          style={delay(50)}
          className="mb-9 inline-flex animate-rise items-center gap-3 rounded-2xl bg-white py-2.5 pl-3.5 pr-5 text-left text-[#05040b] shadow-[0_20px_50px_-20px_rgb(0_0_0/0.6)]"
        >
          <BadgeCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="text-[11px] uppercase leading-snug tracking-[0.12em] sm:text-xs">
            <span className="block font-semibold">Undetected Since 2024</span>
            <span className="block text-[#1c1836]/70">15,000+ Satisfied Players</span>
          </span>
        </p>

        <h1
          style={delay(150)}
          className="font-display max-w-5xl animate-rise text-balance text-[3.1rem] leading-[0.98] text-white sm:text-7xl lg:text-[6.5rem]"
        >
          World's #1 Most Trusted <em className="text-aurora animate-shimmer pr-2 italic">Valorant</em> Provider
        </h1>

        <p
          style={delay(350)}
          className="mt-8 max-w-2xl animate-rise text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Every skin, knife, buddy and spray — unlocked in one click. Delivered instantly, updated every patch, and
          yours for life.
        </p>

        <div
          style={delay(500)}
          className="mt-11 flex w-full animate-rise flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button variant="aurora" size="xl" className="group w-full sm:w-auto" asChild>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Buy Now ·{" "}
              {active && <span className="font-normal text-white/70 line-through">{formatPrice(regularPrice)}</span>}
              {formatPrice(price)}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Features
          </Button>
        </div>

        <ul
          style={delay(650)}
          className="mt-10 flex animate-rise flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          {TRUST_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-fuchsia-300" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        {/* Stats */}
        <dl style={delay(800)} className="mt-16 grid w-full max-w-3xl animate-rise grid-cols-3 gap-3 sm:gap-5">
          <StatCard icon={<Users className="h-5 w-5" />} value="15,000+" label="Active Users" />
          <StatCard icon={<Shield className="h-5 w-5" />} value="100%" label="Undetected" />
          <StatCard icon={<CalendarCheck className="h-5 w-5" />} value="2024" label="Established" />
        </dl>
      </div>
    </section>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="glass ring-aurora group rounded-2xl px-3 py-5 transition duration-500 hover:-translate-y-1 sm:px-6 sm:py-6">
    <div className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full bg-white/5 text-fuchsia-200 ring-1 ring-white/10 transition group-hover:scale-110">
      {icon}
    </div>
    <dd className="font-display text-[1.7rem] text-white sm:text-5xl">{value}</dd>
    <dt className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:text-[13px]">{label}</dt>
  </div>
);

export default HeroSection;
