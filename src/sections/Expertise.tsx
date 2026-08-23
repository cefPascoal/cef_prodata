import { SectionEyebrow } from "../components/SectionEyebrow";
import { expertiseAreas } from "../data/expertise";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>What I do</SectionEyebrow>
        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          Areas of Expertise
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div
              key={area.id}
              className="animate-fade-up rounded-xl border p-6"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
            >
              <h3 className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
