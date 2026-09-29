import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import { getTranslations } from "../i18n/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-8%] h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[130px]"
          style={{ backgroundColor: "var(--color-signal)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-fade-up">
          <p
            className="mb-5 font-mono text-xs uppercase tracking-[0.25em]"
            style={{ color: "var(--color-text-faint)" }}
          >
            {profile.brand}
          </p>

          <h1
            className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.2rem]"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            {profile.name}
          </h1>

          <p
            className="mt-3 text-base font-medium sm:text-lg"
            style={{ color: "var(--color-signal)" }}
          >
            {profile.role}
          </p>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--color-text-muted)" }}
          >
            {profile.heroText}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="focus-ring group flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--color-signal)", color: "#090a0d" }}
            >
              {t.actions.viewProjects}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="focus-ring rounded-md border px-5 py-3 text-sm font-medium transition-colors"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
            >
              {t.actions.contactMe}
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-md transition-colors"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Github size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-md transition-colors"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Linkedin size={19} />
              </a>
              <a
                href={profile.cvPath}
                download
                aria-label="Download CV"
                title="Download CV"
                className="focus-ring flex h-11 w-11 items-center justify-center rounded-md transition-colors"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Download size={19} />
              </a>
            </div>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs"
            style={{ color: "var(--color-text-faint)" }}
          >
            {profile.heroStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-3">
                {tech}
                {i < profile.heroStack.length - 1 && (
                  <span style={{ color: "var(--color-border)" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-fade-up hidden [animation-delay:150ms] lg:block">
          <HeroPipeline />
        </div>
      </div>
    </section>
  );
}

function HeroPipeline() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const stages = [
    t.hero.extract,
    t.hero.transform,
    t.hero.validate,
    t.hero.deliver,
  ];
  return (
    <div
      className="rounded-xl border p-6"
      style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
    >
      <p
        className="mb-5 font-mono text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--color-text-faint)" }}
      >
        {t.hero.pipelineStatus}
      </p>
      <div className="space-y-4">
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center gap-3">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px]"
              style={{
                backgroundColor: "var(--color-surface-2)",
                color: "var(--color-signal)",
                border: "1px solid var(--color-border)",
              }}
            >
              {i + 1}
            </span>
            <span className="text-sm" style={{ color: "var(--color-text)" }}>
              {stage}
            </span>
            <span
              className="ml-auto h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-signal)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
