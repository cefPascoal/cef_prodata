import type { ReactNode } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { SectionEyebrow } from "../components/SectionEyebrow";
import { ContactForm } from "../components/ContactForm";
import { profile } from "../data/profile";

export function Contact() {
  const { contact } = profile;

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionEyebrow>{contact.eyebrow}</SectionEyebrow>
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            {contact.title}
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {contact.text}
          </p>

          <div className="mt-8 space-y-3">
            <ContactLink icon={<Mail size={16} />} href={`mailto:${profile.email}`}>
              {profile.email}
            </ContactLink>
            <ContactLink icon={<Linkedin size={16} />} href={profile.linkedin}>
              LinkedIn
            </ContactLink>
            <ContactLink icon={<Github size={16} />} href={profile.github}>
              GitHub
            </ContactLink>
          </div>
        </div>

        <div
          className="rounded-xl border p-6 sm:p-8"
          style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, href, children }: { icon: ReactNode; href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      className="focus-ring flex w-fit items-center gap-2.5 text-sm transition-colors"
      style={{ color: "var(--color-text-muted)" }}
    >
      <span style={{ color: "var(--color-signal)" }}>{icon}</span>
      {children}
    </a>
  );
}
