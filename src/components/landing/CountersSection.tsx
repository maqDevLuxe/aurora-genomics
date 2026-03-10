import { useEffect, useRef, useState } from "react";

const counters = [
  { target: 2400000, label: "Genomes Sequenced", suffix: "M+", divisor: 1000000, decimals: 1 },
  { target: 19200000000, label: "Data Points Analyzed", suffix: "B+", divisor: 1000000000, decimals: 1 },
  { target: 200, label: "Health Conditions Covered", suffix: "+", divisor: 1, decimals: 0 },
  { target: 48, label: "Countries Served", suffix: "", divisor: 1, decimals: 0 },
];

function useCounter(target: number, divisor: number, decimals: number, inView: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target / divisor;
    const duration = 2000;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, divisor]);
  return value.toFixed(decimals);
}

const CounterCard = ({ target, label, suffix, divisor, decimals }: typeof counters[number]) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const val = useCounter(target, divisor, decimals, inView);

  return (
    <div ref={ref} className="glass-panel rounded-xl p-8 text-center animate-counter-glow">
      <div className="text-3xl sm:text-4xl font-bold font-mono gradient-text">
        {val}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  );
};

const CountersSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="relative max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {counters.map((c) => (
          <CounterCard key={c.label} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default CountersSection;
