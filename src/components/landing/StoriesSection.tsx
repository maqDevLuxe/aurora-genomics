import { Star } from "lucide-react";

const stories = [
  {
    name: "Dr. Sarah Chen",
    role: "Clinical Geneticist, Stanford",
    quote: "GenomX's AI variant calling is the most accurate I've worked with. It caught a pathogenic BRCA2 variant other services missed.",
  },
  {
    name: "Marcus Johnson",
    role: "Bioinformatics Researcher",
    quote: "The turnaround time is remarkable. Full WGS data with annotated VCF in 48 hours has transformed our research pipeline.",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Pharmacogenomics Lead, Mayo Clinic",
    quote: "The PGx panel identified critical CYP2D6 variants that changed my patient's treatment plan. This is precision medicine at its best.",
  },
];

const StoriesSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
          User <span className="gradient-text">Success</span> Stories
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stories.map(({ name, role, quote }, i) => (
          <article key={name} className={`glass-panel rounded-xl p-8 scroll-fade-up delay-${i + 1}`}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-primary fill-primary" />
              ))}
            </div>
            <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
              "{quote}"
            </blockquote>
            <div>
              <div className="font-semibold text-foreground text-sm">{name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{role}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default StoriesSection;
