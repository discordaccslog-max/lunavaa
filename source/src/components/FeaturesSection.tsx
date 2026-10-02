import { useRef } from "react";
import { Headphones, Lock, RefreshCw, ShieldCheck, Sparkles, Zap, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
  className?: string;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Unlock All",
    description: "Access every skin in the game instantly with one click — including knives, buddies and sprays.",
    stat: "Every skin",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    icon: ShieldCheck,
    title: "0% Ban Rate",
    description: "Advanced anti-detection technology keeps your account safe. Zero bans since launch.",
    stat: "0%",
    className: "md:col-span-3",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "One-click setup — the whole process is done in under 2 minutes.",
    stat: "< 2 min",
    className: "md:col-span-3",
  },
  {
    icon: Lock,
    title: "Trusted Since 2024",
    description: "Over two years providing reliable service to thousands of satisfied customers.",
  },
  {
    icon: RefreshCw,
    title: "Auto Updates",
    description: "Automatic updates keep you compatible with every game patch.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "A dedicated support team ready to help — any time, day or night.",
  },
];

const UNLOCKS = ["Skins", "Knives", "Buddies", "Sprays", "Every patch"];

const FeaturesSection = () => (
  <section id="features" className="relative py-28 sm:py-36">
    <div className="container relative z-10 mx-auto px-6">
      <div className="mx-auto mb-16 max-w-3xl text-center" data-reveal>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200/80">Why LunaVal</p>
        <h2 className="font-display text-balance text-5xl leading-[1.02] text-white sm:text-7xl">
          Why choose <em className="text-aurora italic">LunaVal</em>?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Providing to Valorant players since 2024 — the only Valorant unlock-all provider you'll ever need.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:gap-5">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

/** Glass card with a soft spotlight that follows the cursor. */
const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const ref = useRef<HTMLElement>(null);
  const { icon: Icon, title, description, stat, className } = feature;
  const large = index === 0;

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      data-reveal
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
      className={cn(
        "glass ring-aurora group relative overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-8",
        className ?? "md:col-span-2",
      )}
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(192,132,252,0.16), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "grid place-items-center rounded-2xl bg-gradient-to-br from-violet-500/25 via-fuchsia-500/15 to-cyan-400/20 text-white ring-1 ring-white/15 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110",
              large ? "h-16 w-16" : "h-12 w-12",
            )}
          >
            <Icon className={large ? "h-7 w-7" : "h-5 w-5"} aria-hidden="true" />
          </div>
          <span className="font-mono text-xs text-muted-foreground/60">{String(index + 1).padStart(2, "0")}</span>
        </div>

        {large && (
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Included">
            {UNLOCKS.map((u, i) => (
              <li
                key={u}
                className="animate-float rounded-full bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15 backdrop-blur"
                style={{ animationDelay: `${i * -1.4}s`, animationDuration: "7s" }}
              >
                {u}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-10">
          {stat && (
            <p className={cn("font-display text-aurora leading-none", large ? "mb-4 text-6xl sm:text-7xl" : "mb-3 text-5xl")}>
              {stat}
            </p>
          )}
          <h3 className={cn("font-semibold text-white", large ? "text-2xl sm:text-3xl" : "text-lg")}>{title}</h3>
          <p className={cn("mt-2 leading-relaxed text-muted-foreground", large && "max-w-md text-lg")}>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default FeaturesSection;
