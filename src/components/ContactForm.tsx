import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";

/**
 * The site is fully static (GitHub Pages), so this form has no backend of its own.
 *
 * Two options:
 * 1) Formspree (recommended): create a free account at https://formspree.io,
 *    get your endpoint (e.g. "https://formspree.io/f/xxxxxxx") and paste it below.
 * 2) No external service: leave FORMSPREE_ENDPOINT empty. The form opens the
 *    visitor's email client (mailto:) with the message pre-filled.
 */
const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="flex items-center gap-3 rounded-xl border p-6"
        style={{ borderColor: "var(--color-signal)", backgroundColor: "var(--color-surface)" }}
      >
        <CheckCircle2 style={{ color: "var(--color-signal)" }} size={22} />
        <p style={{ color: "var(--color-text)" }}>
          {FORMSPREE_ENDPOINT
            ? "Message sent successfully. Thanks for reaching out!"
            : "Your email client should have opened with the message ready to send."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-xs uppercase tracking-wider"
          style={{ color: "var(--color-text-faint)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus-ring w-full resize-none rounded-md border px-3.5 py-2.5 text-sm outline-none"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text)",
          }}
          placeholder="What are you working on?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        style={{ backgroundColor: "var(--color-signal)", color: "#090a0d" }}
      >
        <Send size={16} />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm" style={{ color: "var(--color-warn)" }}>
          Couldn't send the message. Please try again or email {profile.email} directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-xs uppercase tracking-wider"
        style={{ color: "var(--color-text-faint)" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="focus-ring w-full rounded-md border px-3.5 py-2.5 text-sm outline-none"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      />
    </div>
  );
}
