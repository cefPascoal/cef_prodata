import { SectionEyebrow } from "../components/SectionEyebrow";
import { DataArchitectureDiagram } from "../components/DataArchitectureDiagram";

const LAYERS = [
  { title: "Bronze", text: "Raw / source data, kept close to its original form." },
  { title: "Silver", text: "Cleaned and standardized data, ready for modelling." },
  { title: "Gold", text: "Business-ready, structured data." },
  { title: "Analytics", text: "Consumption and analysis on top of trusted data." },
];

export function Architecture() {
  return (
    <section
      id="architecture"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>From raw data to trusted data</SectionEyebrow>
        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Data Architecture
        </h2>

        <div
          className="mt-10 rounded-xl border p-6 sm:p-10"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
        >
          <DataArchitectureDiagram />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LAYERS.map((layer) => (
            <div key={layer.title}>
              <h3
                className="mb-1.5 font-mono text-sm font-medium"
                style={{ color: "var(--color-signal-soft)" }}
              >
                {layer.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {layer.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
