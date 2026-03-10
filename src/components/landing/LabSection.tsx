import labImg from "@/assets/lab-facility.jpg";

const LabSection = () => (
  <section className="py-24 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="scroll-fade-up">
          <div className="rounded-2xl overflow-hidden glow-border">
            <img
              src={labImg}
              alt="GenomX AI high-tech genomic sequencing laboratory facility"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Our Facility</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 scroll-fade-up delay-1">
            CLIA-Certified <span className="gradient-text">Lab</span>
          </h2>
          <div className="space-y-4">
            {[
              "ISO 15189 accredited genomic laboratory",
              "NovaSeq X Plus & PacBio Revio sequencers",
              "Automated liquid handling with zero human error",
              "Redundant cold-chain sample preservation",
              "24/7 environmental monitoring & biosafety controls",
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-3 scroll-fade-up delay-${Math.min(i + 1, 5)}`}>
                <span className="w-1.5 h-1.5 rounded-full gradient-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LabSection;
