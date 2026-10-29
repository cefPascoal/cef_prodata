
import { SectionEyebrow } from "../components/SectionEyebrow";
import { skillCategories, currentlyLearning } from "../data/skills";
import { useLanguage } from "../i18n/LanguageContext";

const CONTENT = {
  pt: {
    eyebrow: "Tecnologias",
    title: "Competências",
    currentlyLearning: "Em aprendizagem — ainda não são competências avançadas",
  },
  en: {
    eyebrow: "Technologies",
    title: "Skills",
    currentlyLearning: "Currently learning — not yet an advanced competency",
  },
};

export function Skills() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section
      id="skills"
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="animate-fade-up rounded-xl border p-6"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <h3
                className="mb-4 text-sm font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                {cat.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border px-2.5 py-1 font-mono text-xs"
                    style={{
                      borderColor: "var(--color-border-soft)",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-xl border border-dashed p-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="mb-3 font-mono text-xs uppercase tracking-wider"
            style={{ color: "var(--color-warn)" }}
          >
            {content.currentlyLearning}
          </p>

          <ul className="flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <li
                key={item}
                className="rounded-md px-2.5 py-1 font-mono text-xs"
                style={{
                  backgroundColor: "var(--color-surface-2)",
                  color: "var(--color-text-faint)",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
