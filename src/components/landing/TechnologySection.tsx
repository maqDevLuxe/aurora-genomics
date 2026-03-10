import { Cpu, Dna, BarChart3, Zap } from "lucide-react";

const techs = [
  { icon: Dna, title: "Whole Genome Sequencing", desc: "Complete 30x coverage across all 23 chromosome pairs with our proprietary long-read technology." },
  { icon: Cpu, title: "AI Neural Analysis", desc: "Deep learning models trained on 2M+ genomes identify variants with unprecedented precision." },
  { icon: BarChart3, title: "Polygenic Risk Scores", desc: "Multi-gene analysis for 200+ health conditions using the latest GWAS research data." },
  { icon: Zap, title: "Real-Time Processing", desc: "Cloud-based bioinformatics pipeline delivers annotated results in under 72 hours." },
];

const TechnologySection = () => (
  <section id="technology" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Our Technology</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
          Next-Gen <span className="gradient-text">Sequencing</span> Platform
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto scroll-fade-up delay-2">
          Built on cutting-edge nanopore and short-read hybrid technology, enhanced by proprietary AI models.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techs.map(({ icon: Icon, title, desc }, i) => (
          <article key={title} className={`glass-panel rounded-xl p-6 hover:glow-box transition-all duration-500 group scroll-fade-up delay-${i + 1}`}>
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologySection;
