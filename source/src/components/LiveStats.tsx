import { Users, UserCheck, Activity } from "lucide-react";
import { useState, useEffect } from "react";

const getSignupsToday = () => {
  const now = new Date();
  return 25 + now.getUTCHours();
};

const LiveStats = () => {
  const [onlineNow, setOnlineNow] = useState(() => 30 + Math.floor(Math.random() * 10));
  const [totalServed] = useState(12473);
  const [recentSignups, setRecentSignups] = useState(getSignupsToday);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineNow((v) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(20, Math.min(45, v + delta));
      });
      // totalServed is now static at 12,473
      setRecentSignups(getSignupsToday());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Activity, label: "Online Now", value: onlineNow, pulse: true },
    { icon: UserCheck, label: "Customers Served In The Past Year", value: totalServed.toLocaleString() },
    { icon: Users, label: "Signups Today", value: recentSignups },
  ];

  return (
    <section className="border-t border-border py-6">
      <div className="container px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="relative">
                <s.icon className="w-4 h-4 text-primary" />
                {s.pulse && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
                )}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-lg font-bold text-foreground">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
