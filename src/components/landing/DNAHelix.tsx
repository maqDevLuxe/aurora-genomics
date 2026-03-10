const DNAHelix = () => {
  const pairs = 12;
  return (
    <svg viewBox="0 0 200 600" className="w-32 h-96 animate-float" aria-label="DNA Double Helix Animation">
      {Array.from({ length: pairs }).map((_, i) => {
        const y = 30 + i * 45;
        const phase = (i / pairs) * Math.PI * 2;
        const x1 = 100 + Math.sin(phase) * 60;
        const x2 = 100 - Math.sin(phase) * 60;
        const opacity = 0.3 + Math.abs(Math.sin(phase)) * 0.7;
        return (
          <g key={i}>
            <circle cx={x1} cy={y} r={5} fill="hsl(190 100% 50%)" opacity={opacity}>
              <animate attributeName="cx" values={`${x1};${x2};${x1}`} dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values={`${opacity};${1 - opacity + 0.3};${opacity}`} dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx={x2} cy={y} r={5} fill="hsl(220 90% 56%)" opacity={1 - opacity + 0.3}>
              <animate attributeName="cx" values={`${x2};${x1};${x2}`} dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values={`${1 - opacity + 0.3};${opacity};${1 - opacity + 0.3}`} dur="4s" repeatCount="indefinite" />
            </circle>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke="hsl(190 100% 50%)" strokeWidth="1" opacity={0.2}>
              <animate attributeName="x1" values={`${x1};${x2};${x1}`} dur="4s" repeatCount="indefinite" />
              <animate attributeName="x2" values={`${x2};${x1};${x2}`} dur="4s" repeatCount="indefinite" />
            </line>
          </g>
        );
      })}
      {/* Backbone curves */}
      <path d="M 40 30 Q 160 150 40 270 Q 160 390 40 510" stroke="hsl(190 100% 50%)" strokeWidth="2" fill="none" opacity="0.3">
        <animate attributeName="d" values="M 40 30 Q 160 150 40 270 Q 160 390 40 510;M 160 30 Q 40 150 160 270 Q 40 390 160 510;M 40 30 Q 160 150 40 270 Q 160 390 40 510" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M 160 30 Q 40 150 160 270 Q 40 390 160 510" stroke="hsl(220 90% 56%)" strokeWidth="2" fill="none" opacity="0.3">
        <animate attributeName="d" values="M 160 30 Q 40 150 160 270 Q 40 390 160 510;M 40 30 Q 160 150 40 270 Q 160 390 40 510;M 160 30 Q 40 150 160 270 Q 40 390 160 510" dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
};

export default DNAHelix;
