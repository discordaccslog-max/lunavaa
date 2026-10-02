import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/10 bg-black/30 backdrop-blur">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} LunaVal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
