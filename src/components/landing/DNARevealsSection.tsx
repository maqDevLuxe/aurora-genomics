import { Heart, Brain, Shield, Activity, Pill, Users } from "lucide-react";

const reveals = [
  { icon: Heart, title: "Cardiovascular Health", desc: "Risk variants for heart disease, hypertension, and cholesterol metabolism." },
  { icon: Brain, title: "Neurological Traits", desc: "Genetic markers for cognitive function, sleep patterns, and neurotransmitter levels." },
  { icon: Shield, title: "Immune Response", desc: "HLA typing, autoimmune predispositions, and immune system markers." },
  { icon: Activity, title: "Athletic Performance", desc: "Muscle fiber composition, VO2 max potential, and injury recovery genes." },
  { icon: Pill, title: "Pharmacogenomics", desc: "Drug metabolism pathways for 300+ medications and dosage optimization." },
  { icon: Users, title: "Ancestry & Heritage", desc: "Deep ancestral analysis across 2,000+ reference populations worldwide." },
];

const DNARevealsSection = () => (
  <section id="results" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Discoveries</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
          What Your DNA <span className="gradient-text">Reveals</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reveals.map(({ icon: Icon, title, desc }, i) => (
          <article key={title} className={`glass-panel rounded-xl p-6 group hover:glow-box transition-all duration-500 scroll-fade-up delay-${(i % 5) + 1}`}>
            <Icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default DNARevealsSection;
