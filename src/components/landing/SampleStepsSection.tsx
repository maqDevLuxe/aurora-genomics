import { Package, TestTube, Cpu, FileText } from "lucide-react";

const steps = [
  { icon: Package, step: "01", title: "Receive Your Kit", desc: "FDA-registered collection kit arrives in discreet, temperature-controlled packaging." },
  { icon: TestTube, step: "02", title: "Provide Sample", desc: "Simple saliva collection with our patented stabilization buffer. 2-minute process." },
  { icon: Cpu, step: "03", title: "AI Processing", desc: "Sample enters our automated pipeline: extraction, library prep, sequencing, and AI analysis." },
  { icon: FileText, step: "04", title: "Access Results", desc: "Comprehensive genomic report delivered to your secure dashboard within 72 hours." },
];

const SampleStepsSection = () => (
  <section id="process" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Process</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
          How to <span className="gradient-text">Collect</span> Your Sample
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ icon: Icon, step, title, desc }, i) => (
          <div key={step} className={`relative scroll-fade-up delay-${i + 1}`}>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent z-0" />
            )}
            <article className="glass-panel rounded-xl p-6 relative z-10 h-full">
              <span className="text-4xl font-bold text-primary/10 font-mono absolute top-4 right-4">{step}</span>
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SampleStepsSection;
