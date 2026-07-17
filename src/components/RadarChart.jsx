import { motion } from 'framer-motion';

export default function RadarChart() {
  const stats = [
    { label: 'DIGITAL FORENSIC', value: 4 },
    { label: 'WEB EXPLOIT', value: 3 },
    { label: 'STEALTH / OSINT', value: 3 },
    { label: 'CRYPTOGRAPHY', value: 1 },
    { label: 'REVERSE ENG.', value: 2 },
  ];

  const maxLevel = 5;
  const radius = 110;
  const cx = 250;
  const cy = 200;

  // Calculate coordinates for a given index, radius, and level
  const getCoordinates = (index, rVal) => {
    const angle = (index * 2 * Math.PI) / 5 - Math.PI / 2; // -90 deg starts at top
    return {
      x: cx + rVal * Math.cos(angle),
      y: cy + rVal * Math.sin(angle),
    };
  };

  // Generate grid pentagons (levels 1 to 5)
  const gridPentagons = Array.from({ length: maxLevel }, (_, i) => {
    const currentRadius = (radius / maxLevel) * (i + 1);
    const points = Array.from({ length: 5 }, (_, idx) => {
      const { x, y } = getCoordinates(idx, currentRadius);
      return `${x},${y}`;
    }).join(' ');
    return points;
  });

  // Calculate points for the actual stats polygon
  const statPoints = stats.map((stat, idx) => {
    const currentRadius = (radius / maxLevel) * stat.value;
    const { x, y } = getCoordinates(idx, currentRadius);
    return `${x},${y}`;
  }).join(' ');

  // Animation variants
  const polygonVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0.1,
    },
    visible: {
      pathLength: 1,
      opacity: 0.85,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative w-full max-w-[450px] aspect-square mx-auto flex justify-center items-center select-none bg-p5-black-card border border-p5-red/30 p-4 clip-p5-card-1 shadow-[10px_10px_0px_0px_rgba(255,0,0,1)]">
      
      {/* Halftone graphic background */}
      <div className="absolute inset-0 p5-halftone-red opacity-10 pointer-events-none" />

      <svg 
        viewBox="0 0 500 400" 
        className="w-full h-full drop-shadow-[0_0_12px_rgba(255,0,0,0.5)] z-10 overflow-visible"
      >
        {/* Concentric grid pentagons */}
        {gridPentagons.map((points, idx) => (
          <polygon
            key={idx}
            points={points}
            fill="none"
            stroke={idx === maxLevel - 1 ? '#ff0000' : '#ffffff'}
            strokeWidth={idx === maxLevel - 1 ? '3' : '1'}
            strokeOpacity={idx === maxLevel - 1 ? '0.8' : '0.2'}
            strokeDasharray={idx === maxLevel - 1 ? 'none' : '4 4'}
          />
        ))}

        {/* Axes lines */}
        {Array.from({ length: 5 }).map((_, idx) => {
          const { x, y } = getCoordinates(idx, radius);
          return (
            <line
              key={idx}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#ffffff"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          );
        })}

        {/* Level indicators on the top axes */}
        {Array.from({ length: maxLevel }).map((_, idx) => {
          const currentRadius = (radius / maxLevel) * (idx + 1);
          const { x, y } = getCoordinates(0, currentRadius);
          return (
            <text
              key={idx}
              x={x + 6}
              y={y + 4}
              fill="#ff0000"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="bold"
              opacity="0.8"
            >
              {idx + 1}
            </text>
          );
        })}

        {/* Filled polygon for actual values */}
        <motion.polygon
          points={statPoints}
          fill="rgba(255, 0, 0, 0.55)"
          stroke="#ff0000"
          strokeWidth="3.5"
          variants={polygonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Outer label connectors and text */}
        {stats.map((stat, idx) => {
          const labelOffset = idx === 0 ? 25 : 22;
          const outerCoords = getCoordinates(idx, radius + labelOffset);
          const { x, y } = outerCoords;

          // Adjust alignment depending on label position relative to center
          let textAnchor = 'middle';
          let dy = '0.3em';
          if (x < cx - 10) {
            textAnchor = 'end';
          } else if (x > cx + 10) {
            textAnchor = 'start';
          }
          if (y < cy - 10) {
            dy = '0';
          } else if (y > cy + 10) {
            dy = '0.7em';
          }

          return (
            <g key={idx}>
              {/* Point indicator */}
              <circle
                cx={getCoordinates(idx, (radius / maxLevel) * stat.value).x}
                cy={getCoordinates(idx, (radius / maxLevel) * stat.value).y}
                r="6"
                fill="#ffeb3b"
                stroke="#000000"
                strokeWidth="2"
              />
              
              {/* Outer Stat labels */}
              <text
                x={x}
                y={y}
                textAnchor={textAnchor}
                dy={dy}
                fill="#ffffff"
                className="font-bebas text-xl tracking-wider select-none"
                style={{ filter: 'drop-shadow(2px 2px 0px #000000)' }}
              >
                {stat.label}
              </text>
              <text
                x={x}
                y={y + 14}
                textAnchor={textAnchor}
                dy={dy}
                fill="#ffeb3b"
                className="font-mono text-xs font-bold"
                style={{ filter: 'drop-shadow(1px 1px 0px #000000)' }}
              >
                {`LVL ${stat.value}`}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

