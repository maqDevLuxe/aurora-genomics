import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "Mar 5, 2026",
    category: "Research",
    title: "Breakthrough in Long-Read Sequencing Accuracy",
    excerpt: "Our latest AI model achieves 99.99% accuracy on structural variant detection across complex genomic regions.",
  },
  {
    date: "Feb 28, 2026",
    category: "Pharmacogenomics",
    title: "Personalized Medicine: The PGx Revolution",
    excerpt: "How pharmacogenomic testing is reducing adverse drug reactions by 40% in clinical trials.",
  },
  {
    date: "Feb 20, 2026",
    category: "Technology",
    title: "Inside Our New Bioinformatics Pipeline",
    excerpt: "A deep dive into our cloud-native pipeline that processes whole genomes in under 4 hours.",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <span className="text-xs font-mono text-primary tracking-[0.3em] uppercase scroll-fade-up">Research & Insights</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 scroll-fade-up delay-1">
            Genetic Science <span className="gradient-text">Blog</span>
          </h2>
        </div>
        <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1 scroll-fade-up delay-2">
          View All <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(({ date, category, title, excerpt }, i) => (
          <article key={title} className={`glass-panel rounded-xl overflow-hidden group hover:glow-box transition-all duration-500 scroll-fade-up delay-${i + 1}`}>
            <div className="h-48 gradient-primary opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="p-6 -mt-12 relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-primary">{category}</span>
                <span className="text-xs text-muted-foreground">{date}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
