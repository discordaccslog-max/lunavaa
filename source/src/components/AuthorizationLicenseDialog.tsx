import { Award, Shield, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AuthorizationLicenseDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Award className="w-4 h-4" />
          <span className="hidden sm:inline">View License</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">
            Authorization License
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 p-6 rounded-lg border-2 border-primary/30 bg-gradient-to-b from-secondary/50 to-secondary/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary/40 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-primary/40 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-primary/40 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-primary/40 rounded-br-lg" />
          
          <div className="text-center space-y-4 relative z-10">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Certificate of Authorization</p>
              <h3 className="text-2xl font-bold mt-2">
                <span className="text-foreground">Luna</span>
                <span className="text-primary">Val</span>
              </h3>
            </div>
            
            <div className="border-t border-b border-border/50 py-4 my-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                This license certification indicates that <span className="text-foreground font-semibold">LunaVal</span> is an 
                <span className="text-primary font-semibold"> Authorized Vendor</span> and 
                <span className="text-primary font-semibold"> Distributor</span>, operating in 
                compliance with community standards since <span className="text-foreground font-semibold">2024</span>.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Verified Vendor Status</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Authorized Distribution Rights</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">15,000+ Verified Transactions</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Registered & Verified for Customer Privacy Protection</span>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">License ID: LV-2024-AUTH-001</p>
              <p className="text-xs text-muted-foreground">Valid: February 2026 - Present</p>
              <p className="text-xs text-muted-foreground">Expires: September 2027</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthorizationLicenseDialog;
