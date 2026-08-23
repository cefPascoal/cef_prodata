import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t px-5 py-10 sm:px-8" style={{ borderColor: "var(--color-border-soft)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
            {profile.name}
          </p>
          <p className="font-mono text-xs" style={{ color: "var(--color-text-faint)" }}>
            {profile.brand} — Data Engineering · Data Integration
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="focus-ring transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="focus-ring transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="focus-ring transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Mail size={17} />
          </a>
        </div>

        <p className="font-mono text-xs" style={{ color: "var(--color-text-faint)" }}>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
