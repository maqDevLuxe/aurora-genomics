import { Lock, ShieldCheck, Eye, Server } from "lucide-react";

const features = [
  { icon: Lock, title: "AES-256 Encryption", desc: "Military-grade encryption for all genomic data at rest and in transit." },
  { icon: ShieldCheck, title: "SOC 2 Type II", desc: "Independently audited security controls with continuous monitoring." },
  { icon: Eye, title: "Zero-Knowledge Architecture", desc: "We never sell, share, or access your data without explicit consent." },
  { icon: Server, title: "On-Premise Deletion", desc: "Request complete data destruction with cryptographic proof of deletion." },
];

const PrivacySection = () => (
  <section id="privacy" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Security</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
          Unbreakable Data <span className="gradient-text">Privacy</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto scroll-fade-up delay-2">
          Your genomic data deserves the highest level of protection. We exceed HIPAA, GDPR, and GINA requirements.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <article key={title} className={`glass-panel rounded-xl p-6 text-center hover:glow-box transition-all duration-500 scroll-fade-up delay-${i + 1}`}>
            <div className="w-14 h-14 rounded-full glow-border flex items-center justify-center mx-auto mb-4">
              <Icon size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PrivacySection;
