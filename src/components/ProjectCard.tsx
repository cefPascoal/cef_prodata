import { Github, Clock } from "lucide-react";
import type { Project } from "../data/projects";

const STATUS_LABEL: Record<Project["status"], string> = {
  placeholder: "example",
  planned: "planned",
  experience: "Professional Experience",
};

export function ProjectCard({ project }: { project: Project }) {
  const isPlanned = project.status === "planned";

  return (
    <article
      className="animate-fade-up flex flex-col rounded-xl border p-6 transition-transform hover:-translate-y-1"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-surface)",
        opacity: isPlanned ? 0.88 : 1,
      }}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3
          className="text-lg font-semibold"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          {project.name}
        </h3>
        <span
          className="flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide"
          style={{
            borderColor: isPlanned ? "var(--color-warn)" : "var(--color-signal)",
            color: isPlanned ? "var(--color-warn)" : "var(--color-signal)",
          }}
          title={
            isPlanned
              ? "Future / in-development project — not consolidated experience"
              : "Structural example — replace with your real project details"
          }
        >
          {isPlanned && <Clock size={10} />}
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {project.summary}
      </p>

      <div className="mt-4 space-y-2.5">
        <Field label="Problem" value={project.problem} />
        <Field label="Solution" value={project.solution} />
      </div>

      <div
        className="mt-4 rounded-md border px-3 py-2 font-mono text-xs"
        style={{ borderColor: "var(--color-border-soft)", color: "var(--color-signal-soft)" }}
      >
        {project.architecture}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="rounded-md px-2 py-1 font-mono text-[11px]"
            style={{ backgroundColor: "var(--color-surface-2)", color: "var(--color-text-muted)" }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <Field label="Result" value={project.result} />
      </div>

      {project.engineeringConcerns && project.engineeringConcerns.length > 0 && (
        <div className="mt-4">
          <p
            className="mb-1.5 font-mono text-[11px] uppercase tracking-wider"
            style={{ color: "var(--color-text-faint)" }}
          >
            Engineering concerns
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {project.engineeringConcerns.map((c) => (
              <li
                key={c}
                className="rounded-md px-2 py-1 font-mono text-[11px]"
                style={{ backgroundColor: "var(--color-surface-2)", color: "var(--color-text-faint)" }}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.githubUrl && (
        <div className="mt-5 flex gap-4 border-t pt-4" style={{ borderColor: "var(--color-border-soft)" }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Github size={15} /> Code
          </a>
        </div>
      )}
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        className="font-mono text-[11px] uppercase tracking-wider"
        style={{ color: "var(--color-text-faint)" }}
      >
        {label}
      </p>
      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
        {value}
      </p>
    </div>
  );
}
