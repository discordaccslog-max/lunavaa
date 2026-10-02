import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/** "Secured by PayPal" line with a small PayPal-style wordmark badge. */
const SecuredByPayPal = ({ className }: { className?: string }) => (
  <p className={cn("flex items-center gap-2 text-xs text-muted-foreground", className)}>
    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
    <span>Secured by</span>
    <span
      className="inline-flex items-center rounded-md bg-white px-2 py-[3px] leading-none shadow-[0_4px_14px_-6px_rgba(0,48,135,0.6)]"
      aria-label="PayPal"
    >
      <span
        aria-hidden="true"
        className="text-[12px] font-extrabold italic tracking-tight"
        style={{ fontFamily: "Verdana, 'DejaVu Sans', Geneva, sans-serif" }}
      >
        <span className="text-[#003087]">Pay</span>
        <span className="text-[#009cde]">Pal</span>
      </span>
    </span>
  </p>
);

export default SecuredByPayPal;
