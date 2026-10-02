import type { Countdown } from "@/hooks/use-sale";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

/** Compact inline timer, e.g. "02d : 14h : 07m : 33s". */
export const InlineCountdown = ({ timeLeft, className }: { timeLeft: Countdown; className?: string }) => (
  <span className={cn("font-mono tabular-nums tracking-tight", className)} role="timer" aria-live="off">
    {pad(timeLeft.days)}d : {pad(timeLeft.hours)}h : {pad(timeLeft.minutes)}m : {pad(timeLeft.seconds)}s
  </span>
);

/** Large boxed timer used inside the pricing card. */
const CountdownTimer = ({ timeLeft, className }: { timeLeft: Countdown; className?: string }) => {
  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];
  return (
    <div className={cn("grid grid-cols-4 gap-2", className)} role="timer" aria-label="Time left in sale">
      {units.map((u) => (
        <div key={u.label} className="rounded-xl bg-white/[0.04] px-2 py-2.5 text-center ring-1 ring-white/10">
          <div className="font-mono text-2xl font-semibold tabular-nums text-white">{pad(u.value)}</div>
          <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{u.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
