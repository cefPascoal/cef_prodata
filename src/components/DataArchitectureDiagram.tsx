/**
 * Data Architecture diagram, built in pure SVG (no external images), reflecting:
 *
 *            SOURCES
 *               |
 *       +-------+-------+
 *       |               |
 *      APIs         Databases
 *       |               |
 *       +-------+-------+
 *               |
 *          INGESTION
 *               |
 *            BRONZE
 *               |
 *            SILVER
 *               |
 *             GOLD
 *               |
 *       ANALYTICS / BI
 */
export function DataArchitectureDiagram() {
  const W = 640;
  const nodeW = 160;
  const nodeH = 46;
  const rowGap = 66;
  const centerX = W / 2;
  const branchOffset = 150;

  const yTop = 20;
  const ySources = yTop;
  const yBranch = ySources + rowGap;
  const yIngestion = yBranch + rowGap;
  const yBronze = yIngestion + rowGap;
  const ySilver = yBronze + rowGap;
  const yGold = ySilver + rowGap;
  const yAnalytics = yGold + rowGap;

  const totalH = yAnalytics + nodeH + 20;

  const neutral = "var(--color-text-faint)";
  const signal = "var(--color-signal)";

  const node = (x: number, y: number, label: string, color: string, key: string) => (
    <g key={key}>
      <rect
        x={x - nodeW / 2}
        y={y}
        width={nodeW}
        height={nodeH}
        rx={9}
        fill="var(--color-surface)"
        stroke={color}
        strokeWidth={1.4}
      />
      <text
        x={x}
        y={y + nodeH / 2 + 5}
        textAnchor="middle"
        fontSize="13"
        fontFamily="var(--font-mono)"
        fontWeight={600}
        fill="var(--color-text)"
      >
        {label}
      </text>
    </g>
  );

  const line = (x1: number, y1: number, x2: number, y2: number, key: string) => (
    <line
      key={key}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={neutral}
      strokeWidth={1.3}
      strokeDasharray="5 5"
      className="animate-flow"
    />
  );

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${totalH}`}
        className="mx-auto block min-w-[420px] max-w-2xl"
        role="img"
        aria-label="Data architecture diagram: Sources branch into APIs and Databases, merging into Ingestion, then Bronze, Silver, Gold and Analytics / BI"
      >
        {node(centerX, ySources, "SOURCES", neutral, "sources")}

        {line(centerX, ySources + nodeH, centerX - branchOffset, yBranch, "l1")}
        {line(centerX, ySources + nodeH, centerX + branchOffset, yBranch, "l2")}

        {node(centerX - branchOffset, yBranch, "APIs", neutral, "apis")}
        {node(centerX + branchOffset, yBranch, "Databases", neutral, "dbs")}

        {line(centerX - branchOffset, yBranch + nodeH, centerX, yIngestion, "l3")}
        {line(centerX + branchOffset, yBranch + nodeH, centerX, yIngestion, "l4")}

        {node(centerX, yIngestion, "INGESTION", neutral, "ingestion")}
        {line(centerX, yIngestion + nodeH, centerX, yBronze, "l5")}

        {node(centerX, yBronze, "BRONZE", "#b8722e", "bronze")}
        {line(centerX, yBronze + nodeH, centerX, ySilver, "l6")}

        {node(centerX, ySilver, "SILVER", "#a9b3c2", "silver")}
        {line(centerX, ySilver + nodeH, centerX, yGold, "l7")}

        {node(centerX, yGold, "GOLD", "#e8b73f", "gold")}
        {line(centerX, yGold + nodeH, centerX, yAnalytics, "l8")}

        {node(centerX, yAnalytics, "ANALYTICS / BI", signal, "analytics")}
      </svg>
    </div>
  );
}
