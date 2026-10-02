import { ShoppingCart, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import PayPalCardButton from "@/components/PayPalButton";

const CartSidebar = () => {
  const { items, removeItem, clearCart, totalItems, isOpen, setIsOpen } = useCart();

  const total = items.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">
                Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 p-4 rounded-xl glass"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-primary/20"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm truncate">
                      {item.name}
                    </h3>
                    <p className="text-primary font-bold">{item.price}</p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.name)}
                    className="p-2 rounded-lg hover:bg-destructive/20 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-display text-2xl font-bold text-foreground">
                  ${total.toFixed(2)}
                </span>
              </div>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="https://valunacheckout.com" target="_blank" rel="noopener noreferrer">
                  Checkout with Shopify
                </a>
              </Button>
              <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                🔒 Secured by Shopify
              </p>
              <button
                onClick={clearCart}
                className="w-full text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;