const metrics = [
  { value: "99.97%", label: "Variant Calling Accuracy", bar: 99.97 },
  { value: "99.99%", label: "Base Call Quality (Q30+)", bar: 99.99 },
  { value: "30x", label: "Average Read Depth", bar: 85 },
  { value: "< 0.01%", label: "False Discovery Rate", bar: 99.99 },
];

const MetricsSection = () => (
  <section className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Performance</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
          AI <span className="gradient-text">Accuracy</span> Metrics
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto scroll-fade-up delay-2">
          Independently validated against NIST Genome in a Bottle reference standards.
        </p>
      </div>

      <div className="space-y-8">
        {metrics.map(({ value, label, bar }, i) => (
          <div key={label} className={`scroll-fade-up delay-${i + 1}`}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm text-foreground font-medium">{label}</span>
              <span className="text-lg font-bold font-mono gradient-text">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full gradient-primary transition-all duration-1000 ease-out"
                style={{ width: `${bar}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
