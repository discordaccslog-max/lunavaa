import { useEffect, useState } from "react";
import { SALE } from "@/config/sale";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const split = (ms: number): Countdown => {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
};

/** Live sale state: whether it's running, the price to charge, and time left. */
export function useSale() {
  const [now, setNow] = useState(() => Date.now());
  const remaining = SALE.endsAt.getTime() - now;
  const active = remaining > 0;

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [active]);

  return {
    active,
    price: active ? SALE.price : SALE.regularPrice,
    regularPrice: SALE.regularPrice,
    timeLeft: split(remaining),
  };
}
