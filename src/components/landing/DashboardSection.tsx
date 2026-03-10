import dashboardImg from "@/assets/dashboard-mockup.jpg";

const DashboardSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Dashboard</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
          Your <span className="gradient-text">Genomic</span> Command Center
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto scroll-fade-up delay-2">
          Interactive reports, variant explorer, and health insights — all in one secure platform.
        </p>
      </div>

      <div className="scroll-fade-up delay-3">
        <div className="rounded-2xl overflow-hidden glow-border">
          <img
            src={dashboardImg}
            alt="GenomX AI genomic analysis dashboard showing DNA data visualization"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DashboardSection;
