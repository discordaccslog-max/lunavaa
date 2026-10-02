import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";

const NoticePopup = ({ onClose }: { onClose?: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const close = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative mx-4 max-w-lg w-full bg-card border border-border rounded-2xl p-6 shadow-2xl animate-fade-up">
        <button
          onClick={close}
          className="absolute top-3 right-3 p-1 rounded-lg hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </div>
          <h3 className="text-lg font-bold text-foreground">Notice</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We are currently experiencing a high volume of orders and increased traffic. You may notice slight delays while browsing the website; delivery times are the same as usual (instant via email). Thank you for your patience and cooperation.
          </p>
          <button
            onClick={close}
            className="mt-2 px-6 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticePopup;
