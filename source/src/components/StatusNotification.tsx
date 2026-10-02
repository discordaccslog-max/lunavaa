import { ShieldCheck } from "lucide-react";

const LAST_UPDATED = "05/23/2026";

/**
 * Live "system status" strip: rotating gradient border, a radar ping, a
 * scrolling heartbeat line and a light sweep, so it reads as live at a glance.
 */
const StatusNotification = () => (
  <div className="container mx-auto mt-6 px-4 sm:px-6">
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-[1.5px] shadow-[0_0_50px_-12px_rgba(52,211,153,0.55)]">
      {/* rotating conic border */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[140%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,#34d399_40deg,#a7f3d0_70deg,transparent_120deg,transparent_180deg,#a78bfa_220deg,#22d3ee_250deg,transparent_300deg)]" />

      <div className="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-3 overflow-hidden rounded-[15px] bg-[#07060f] px-4 py-3 backdrop-blur-xl sm:flex-nowrap sm:px-5">
        {/* light sweep */}
        <span className="pointer-events-none absolute inset-y-0 left-0 w-1/4 animate-sweep bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent" />

        <div className="relative flex items-center gap-3">
          <span className="relative grid h-9 w-9 shrink-0 place-items-center">
            <span className="absolute inset-0 animate-radar rounded-full bg-emerald-400/40" />
            <span className="absolute inset-0 animate-radar rounded-full bg-emerald-400/30 [animation-delay:1.1s]" />
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/50">
              <ShieldCheck className="h-[18px] w-[18px] text-emerald-300" aria-hidden="true" />
            </span>
          </span>
          <div className="leading-tight">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">System Status</p>
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span className="bg-[linear-gradient(100deg,#6ee7b7,#ffffff_40%,#34d399_60%,#6ee7b7)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                Undetected
              </span>
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/30">
                Operational
              </span>
            </p>
          </div>
        </div>

        {/* heartbeat line */}
        <svg
          viewBox="0 0 240 40"
          className="relative hidden h-8 flex-1 sm:block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hb" x1="0" x2="1">
              <stop offset="0" stopColor="#34d399" stopOpacity="0" />
              <stop offset="0.5" stopColor="#34d399" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path
            d="M0 20 H70 L80 20 L88 6 L98 34 L106 14 L112 20 H170 L178 20 L184 10 L192 30 L198 20 H240"
            fill="none"
            stroke="url(#hb)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="120 120"
            className="animate-heartbeat"
          />
        </svg>

        <div className="relative text-right leading-tight">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Last Updated</p>
          <p className="font-mono text-sm font-semibold tabular-nums text-foreground">{LAST_UPDATED}</p>
        </div>
      </div>
    </div>
  </div>
);

export default StatusNotification;
