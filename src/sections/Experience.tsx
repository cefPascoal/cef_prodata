import { SectionEyebrow } from "../components/SectionEyebrow";
import { experience, education, certifications } from "../data/experience";
import { useLanguage } from "../i18n/LanguageContext";
import { getTranslations } from "../i18n/translations";


export function Experience() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>{t.experience.eyebrow}</SectionEyebrow>
        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          {t.experience.title}
        </h2>

        <ol className="mt-10 space-y-8 border-l pl-8" style={{ borderColor: "var(--color-border)" }}>
          {experience.map((item) => {
            const translation = t.experience.items[
              item.id as keyof typeof t.experience.items
            ];

            return (
            <li key={item.id} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--color-signal)" }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>
                  {item.role} <span style={{ color: "var(--color-text-faint)" }}>· {item.company}</span>
                </h3>
                <span className="font-mono text-xs" style={{ color: "var(--color-text-faint)" }}>
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                {translation.description}
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1">
                {translation.responsibilities.map((r, i) => (
                  <li key={i} className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md px-2 py-1 font-mono text-[11px]"
                    style={{ backgroundColor: "var(--color-surface-2)", color: "var(--color-text-muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          );
          })}
        </ol>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <h3
              className="mb-4 font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--color-text-faint)" }}
            >
              {t.experience.education}
            </h3>
            <div className="space-y-4">
              {education.map((e) => {
                const translation =
                  t.experience.educationItems[
                    e.id as keyof typeof t.experience.educationItems
                  ];

                return (
                <div key={e.id}>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                    {translation.title}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {e.institution} · {e.period}
                  </p>
                  {e.description && (
                    <p className="mt-1 text-sm" style={{ color: "var(--color-text-faint)" }}>
                      {translation.description}
                    </p>
                  )}
                </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3
              className="mb-4 font-mono text-xs uppercase tracking-wider"
              style={{ color: "var(--color-text-faint)" }}
            >
              {t.experience.certifications}
            </h3>
            <div className="space-y-4">
              {certifications.map((c) => {
                const translation =
                  t.experience.certificationItems[
                    c.id as keyof typeof t.experience.certificationItems
                  ];

                return (
                <div key={c.id}>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                    {translation.title}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {c.institution} · {c.period}
                  </p>
                </div>
                );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
