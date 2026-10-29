
import { SectionEyebrow } from "../components/SectionEyebrow";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { projectCardLabels } from "../i18n/projectTranslations";

export function Projects() {
  const { language } = useLanguage();
  const labels = projectCardLabels[language];

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>{labels.eyebrow}</SectionEyebrow>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
            }}
          >
            {labels.title}
          </h2>

          <p
            className="max-w-md text-sm"
            style={{ color: "var(--color-text-faint)" }}
          >
            
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
