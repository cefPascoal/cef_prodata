import { SectionEyebrow } from "../components/SectionEyebrow";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>Case studies</SectionEyebrow>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            Projects
          </h2>
          <p className="max-w-md text-sm" style={{ color: "var(--color-text-faint)" }}>
            Cards marked <em>example</em> are structural placeholders based on real practical
            work — replace with your project details in{" "}
            <code
              className="rounded px-1 py-0.5 font-mono text-xs"
              style={{ backgroundColor: "var(--color-surface-2)" }}
            >
              src/data/projects.ts
            </code>
            . Cards marked <em>planned</em> are future / in-development work, shown honestly as
            such.
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
