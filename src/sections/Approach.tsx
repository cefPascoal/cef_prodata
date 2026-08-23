import { SectionEyebrow } from "../components/SectionEyebrow";
import { approachSteps } from "../data/approach";

export function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>Working method</SectionEyebrow>
        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          How I Work
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {approachSteps.map((step, i) => (
            <div key={step.id} className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs"
                  style={{
                    border: "1px solid var(--color-signal)",
                    color: "var(--color-signal)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {step.description}
              </p>
              {i < approachSteps.length - 1 && (
                <span
                  className="mt-4 hidden h-px w-full lg:block"
                  style={{ backgroundColor: "var(--color-border-soft)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
