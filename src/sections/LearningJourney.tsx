
import { SectionEyebrow } from "../components/SectionEyebrow";
import { learningJourney } from "../data/expertise";
import { useLanguage } from "../i18n/LanguageContext";

const CONTENT = {
  pt: {
    eyebrow: "Progressão contínua, não um destino final",
    title: "Percurso de Aprendizagem",
  },
  en: {
    eyebrow: "Consistent progression, not a finished destination",
    title: "Learning Journey",
  },
};

export function LearningJourney() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section
      id="learning-journey"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>

        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          {content.title}
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {learningJourney.map((step, i) => {
            const isCurrent = i === learningJourney.length - 2;
            const isFuture = i === learningJourney.length - 1;

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
