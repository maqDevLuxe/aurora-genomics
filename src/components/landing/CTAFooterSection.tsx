import { Dna, Mail, MapPin, Phone } from "lucide-react";

const CTAFooterSection = () => (
  <>
    {/* CTA */}
    <section id="order" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-5" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="scroll-fade-up">
          <Dna size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready to Decode Your <span className="gradient-text">DNA</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Order your FDA-registered collection kit today. Full whole genome sequencing with AI-powered analysis, delivered in 72 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="px-10 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-box">
              Order DNA Kit — $299
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Free shipping · 30-day money-back guarantee · HIPAA compliant
          </p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border/50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Genom<span className="gradient-text">X</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing precision medicine through AI-powered genomic sequencing technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Platform</h4>
            <ul className="space-y-2">
              {["Whole Genome Sequencing", "Pharmacogenomics", "Ancestry Analysis", "Research API"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Research Partners", "Careers", "Publications"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-primary" /> science@genomx.ai
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary" /> +1 (800) 555-GENE
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" /> Cambridge, MA 02142
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 GenomX AI. All rights reserved. CLIA #99D2064007
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "HIPAA Notice"].map((l) => (
              <a key={l} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooterSection;
