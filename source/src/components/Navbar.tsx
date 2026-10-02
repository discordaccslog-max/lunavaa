import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import SaleBanner from "./SaleBanner";
import PresentedBy from "./PresentedBy";

const Navbar = ({ introReady = true }: { introReady?: boolean }) => {
  const { totalItems, setIsOpen } = useCart();
  return (
    <>
      <SaleBanner />

      <header className="relative z-40 px-3 pt-3 sm:px-5">
        <nav
          aria-label="Main"
          className="container mx-auto flex h-[4.5rem] items-center justify-between px-4 sm:px-6"
        >
          <PresentedBy show={introReady} />

          <div className="flex items-center gap-2 md:gap-8">
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Features
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </a>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={`Open cart (${totalItems} item${totalItems === 1 ? "" : "s"})`}
              className="relative grid h-10 w-10 place-items-center rounded-xl ring-1 ring-white/10 transition-colors hover:bg-white/5"
            >
              <ShoppingCart className="h-5 w-5 text-muted-foreground" />
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-gradient-primary text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
