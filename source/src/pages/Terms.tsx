const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-6 py-16 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 16, 2026</p>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using LunaVal's services, you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              LunaVal provides software services for gaming enhancement. Our services are provided "as is" and we
              reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account and for all activities that occur
              under your account. You agree to use our services only for lawful purposes and in accordance with these
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Payment and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              All purchases are final. Due to the digital nature of our products, we do not offer refunds unless
              required by applicable law. Prices are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, features, and functionality of our services are owned by LunaVal and are protected by
              international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              LunaVal shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update these terms at any time. Continued use of our services after changes
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us through our Discord support channel.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
