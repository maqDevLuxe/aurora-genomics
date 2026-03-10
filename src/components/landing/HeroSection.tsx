import heroDna from "@/assets/hero-dna.jpg";
import DNAHelix from "./DNAHelix";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroDna} alt="Abstract DNA visualization" className="w-full h-full object-cover opacity-40" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Grid overlay */}
    <div className="absolute inset-0 grid-bg opacity-50" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glow-border mb-6">
          <span className="w-2 h-2 rounded-full gradient-primary animate-pulse" />
          <span className="text-xs font-mono text-primary tracking-wider uppercase">AI-Powered Sequencing v4.2</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Decode Your{" "}
          <span className="gradient-text">Genetic</span>{" "}
          Blueprint
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
          Next-generation whole genome sequencing powered by proprietary AI algorithms. 
          99.97% accuracy across 6.4 billion base pairs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a href="#order" className="px-8 py-3.5 rounded-lg gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-box">
            Start Sequencing
          </a>
          <a href="#technology" className="px-8 py-3.5 rounded-lg glow-border text-foreground font-medium hover:bg-primary/5 transition-colors">
            View Technology
          </a>
        </div>
        <div className="flex gap-8 mt-10 justify-center lg:justify-start">
          {[["99.97%", "Accuracy"], ["< 72h", "Results"], ["CLIA", "Certified"]].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-xl font-bold gradient-text font-mono">{val}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
        <DNAHelix />
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
      <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
    </div>
  </section>
);

export default HeroSection;
