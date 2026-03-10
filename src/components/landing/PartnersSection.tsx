const partners = [
  "MIT Broad Institute",
  "Stanford Genomics",
  "Mayo Clinic",
  "Johns Hopkins",
  "NIH Research",
  "Oxford Nanopore",
  "Illumina Labs",
  "CRISPR Therapeutics",
];

const PartnersSection = () => (
  <section className="py-20 border-y border-border/50">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-xs text-muted-foreground tracking-[0.3em] uppercase mb-10 scroll-fade-up">
        Trusted Research & Lab Partners
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {partners.map((p, i) => (
          <div key={p} className={`scroll-fade-up delay-${Math.min(i % 5 + 1, 5)}`}>
            <span className="text-sm font-mono text-muted-foreground/60 hover:text-primary transition-colors cursor-default tracking-wider">
              {p}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
