import { ArrowRight } from "lucide-react";
import { SALE, SALE_PERCENT_OFF, formatPrice } from "@/config/sale";
import { useSale } from "@/hooks/use-sale";
import { InlineCountdown } from "./CountdownTimer";

/** Top-of-page discount strip with a live countdown. Hidden once the sale ends. */
const SaleBanner = () => {
  const { active, timeLeft } = useSale();
  if (!active) return null;

  return (
    <a
      href="#pricing"
      className="group relative block overflow-hidden bg-[linear-gradient(100deg,#7c3aed,#db2777_45%,#0891b2)] text-white"
    >
      {/* light sweep */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-sweep bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="container relative mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 text-center text-xs sm:text-sm">
        <span className="inline-flex items-center rounded-full bg-black/25 px-3 py-0.5 font-semibold uppercase tracking-[0.16em] ring-1 ring-white/30">
          {SALE.label} · {SALE_PERCENT_OFF}% off
        </span>
        <span className="font-medium">
          <span className="text-white/70 line-through">{formatPrice(SALE.regularPrice)}</span>{" "}
          <span className="font-bold">{formatPrice(SALE.price)}</span> lifetime access
        </span>
        <span className="inline-flex items-center gap-2 font-medium">
          <span className="text-white/80">Ends in</span>
          <InlineCountdown timeLeft={timeLeft} className="rounded-md bg-black/30 px-2 py-0.5 font-semibold" />
        </span>
        <span className="hidden items-center gap-1 font-semibold underline-offset-4 group-hover:underline sm:inline-flex">
          Claim deal <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
};

export default SaleBanner;
