import { cn } from "@/lib/utils";

const LUNA = "Luna".split("");
const VAL = "Val".split("");

/**
 * "Presented by LunaVal" title card. Stays invisible (but keeps its space so
 * nothing jumps) until `show` is true, then plays: side lines draw in,
 * "Presented by" fades in, each letter of LunaVal rises out of a blur, and a
 * light sweep passes over the wordmark.
 */
const PresentedBy = ({ show, className }: { show: boolean; className?: string }) => (
  <div className={cn("presented-by select-none", show && "is-on", className)} aria-label="Presented by LunaVal">
    <div className="flex items-center justify-center gap-4" aria-hidden="true">
      <span className="pb-line h-px w-10 origin-right bg-gradient-to-r from-transparent to-white/60 sm:w-16" />
      <span className="pb-eyebrow text-[11px] font-medium uppercase text-white/70 sm:text-xs">Presented by</span>
      <span className="pb-line h-px w-10 origin-left bg-gradient-to-l from-transparent to-white/60 sm:w-16" />
    </div>

    <div className="relative mt-2 inline-block" aria-hidden="true">
      <span className="pb-halo pointer-events-none absolute inset-x-[-20%] inset-y-[-10%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(192,132,252,0.35),rgba(34,211,238,0.12)_60%,transparent)] blur-2xl" />
      <span className="font-display relative inline-block overflow-hidden px-2 text-6xl leading-[1.1] sm:text-7xl">
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
        <span className="pb-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent mix-blend-overlay" />
      </span>
    </div>
  </div>
);

export default PresentedBy;
