import { cn } from "@/lib/utils";

const LUNA = "Luna".split("");
const VAL = "Val".split("");

/**
 * "Presented by LunaVal" wordmark used as the site logo (top left). Stays
 * invisible, but keeps its space so nothing jumps, until `show` is true, then
 * plays: the accent line draws in, "Presented by" fades in, each letter of
 * LunaVal rises out of a blur, and a light sweep passes over the wordmark.
 */
const PresentedBy = ({ show, className }: { show: boolean; className?: string }) => (
  <a href="#top" className={cn("presented-by group block select-none", show && "is-on", className)} aria-label="Presented by LunaVal">
    <span className="flex items-center gap-2" aria-hidden="true">
      <span className="pb-eyebrow text-[9px] font-medium uppercase leading-none text-white/60 sm:text-[10px]">
        Presented by
      </span>
      <span className="pb-line h-px w-6 origin-left bg-gradient-to-r from-fuchsia-300/80 to-transparent sm:w-8" />
    </span>

    <span className="relative mt-0.5 inline-block" aria-hidden="true">
      <span className="pb-halo pointer-events-none absolute inset-x-[-25%] inset-y-[-30%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(192,132,252,0.35),rgba(34,211,238,0.12)_60%,transparent)] blur-xl" />
      <span className="font-display relative inline-block overflow-hidden pr-1 text-[1.9rem] leading-[1.05] sm:text-[2.15rem]">
        {LUNA.map((ch, i) => (
          <span key={`l${i}`} className="pb-letter text-white" style={{ "--i": i } as React.CSSProperties}>
            {ch}
          </span>
        ))}
        {VAL.map((ch, i) => (
          <span
            key={`v${i}`}
            className="pb-letter text-aurora italic"
            style={{ "--i": LUNA.length + i } as React.CSSProperties}
          >
            {ch}
          </span>
        ))}
        <span className="pb-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent mix-blend-overlay" />
      </span>
    </span>
  </a>
);

export default PresentedBy;
