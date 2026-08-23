import { SectionEyebrow } from "../components/SectionEyebrow";
import { learningJourney } from "../data/expertise";

export function LearningJourney() {
  return (
    <section
      id="learning-journey"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>Consistent progression, not a finished destination</SectionEyebrow>
        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Learning Journey
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {learningJourney.map((step, i) => {
            const isCurrent = i === learningJourney.length - 2; // Data Platforms: current edge
            const isFuture = i === learningJourney.length - 1; // Data Analytics: still ahead
            return (
              <div key={step} className="flex items-center gap-3">
                <span
                  className="rounded-md border px-3 py-1.5 font-mono text-xs"
                  style={{
                    borderColor: isCurrent
                      ? "var(--color-signal)"
                      : isFuture
                        ? "var(--color-warn)"
                        : "var(--color-border-soft)",
                    color: isCurrent
                      ? "var(--color-signal)"
                      : isFuture
                        ? "var(--color-warn)"
                        : "var(--color-text-muted)",
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  {step}
                </span>
                {i < learningJourney.length - 1 && (
                  <span style={{ color: "var(--color-text-faint)" }}>→</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
