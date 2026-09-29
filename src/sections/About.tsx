import { SectionEyebrow } from "../components/SectionEyebrow";
import { useLanguage } from "../i18n/LanguageContext";
import { getTranslations } from "../i18n/translations";

export function About() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const { about } = t;

  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionEyebrow>{about.eyebrow}</SectionEyebrow>
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            {about.title}
          </h2>

          <dl className="mt-8 space-y-4">
            {about.highlights.map((h) => (
              <div key={h.label} className="flex flex-col gap-0.5">
                <dt
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-text-faint)" }}
                >
                  {h.label}
                </dt>
                <dd className="text-sm" style={{ color: "var(--color-text)" }}>
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed sm:text-[1.05rem]"
              style={{ color: "var(--color-text-muted)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
