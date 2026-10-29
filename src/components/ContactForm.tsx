
import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbgrepjd";

type Status = "idle" | "sending" | "sent" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTENT = {
  pt: {
    success: "Mensagem enviada com sucesso. Obrigado pelo contacto.",
    name: "Nome",
    email: "E-mail",
    subject: "Assunto",
    message: "Mensagem",
    messagePlaceholder: "Em que projeto ou desafio estás a trabalhar?",
    send: "Enviar mensagem",
    sending: "A enviar…",
    nameRequired: "Introduz o teu nome.",
    emailRequired: "Introduz o teu e-mail.",
    emailInvalid: "Introduz um endereço de e-mail válido.",
    messageRequired: "Introduz uma mensagem.",
    error: "Ocorreu um erro. Tenta novamente ou contacta-me diretamente por e-mail",
  },
  en: {
    success: "Message sent successfully. Thank you for reaching out.",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    messagePlaceholder: "What are you working on?",
    send: "Send message",
    sending: "Sending…",
    nameRequired: "Please enter your name.",
    emailRequired: "Please enter your email.",
    emailInvalid: "Please enter a valid email address.",
    messageRequired: "Please enter a message.",
    error: "Something went wrong. Please try again or contact me directly by email",
  },
};

export function ContactForm() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(data: FormData): FieldErrors {
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: FieldErrors = {};

    if (!name) next.name = content.nameRequired;

    if (!email) {
      next.email = content.emailRequired;
    } else if (!EMAIL_PATTERN.test(email)) {
      next.email = content.emailInvalid;
    }

    if (!message) next.message = content.messageRequired;

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const fieldErrors = validate(data);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      setStatus("sending");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("sent");
        setErrors({});
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
        role="status"
        aria-live="polite"
        style={{
          borderColor: "var(--color-signal)",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <CheckCircle2 style={{ color: "var(--color-signal)" }} size={22} />
        <p style={{ color: "var(--color-text)" }}>{content.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={content.name}
          name="name"
          type="text"
          required
          autoComplete="name"
          error={errors.name}
        />

        <Field
          label={content.email}
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <Field
        label={content.subject}
        name="subject"
        type="text"
        autoComplete="off"
      />

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-xs uppercase tracking-wider"
          style={{ color: "var(--color-text-faint)" }}
        >
          {content.message}
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="focus-ring w-full resize-none rounded-md border px-3.5 py-2.5 text-sm outline-none"
          style={{
            borderColor: errors.message
              ? "var(--color-warn)"
              : "var(--color-border)",
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text)",
          }}
          placeholder={content.messagePlaceholder}
        />

        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1.5 text-xs"
            style={{ color: "var(--color-warn)" }}
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
        className="focus-ring flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        style={{ backgroundColor: "var(--color-signal)", color: "#090a0d" }}
      >
        <Send size={16} />
        {status === "sending" ? content.sending : content.send}
      </button>

      {status === "error" && (
        <p
          role="alert"
          aria-live="assertive"
          className="flex items-center gap-2 text-sm"
          style={{ color: "var(--color-warn)" }}
        >
          <AlertCircle size={15} />
          {content.error}
          {profile.email ? `: ${profile.email}.` : "."}
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
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  const errorId = `${name}-error`;

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
        autoComplete={autoComplete}
        aria-required={required ? "true" : undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className="focus-ring w-full rounded-md border px-3.5 py-2.5 text-sm outline-none"
        style={{
          borderColor: error ? "var(--color-warn)" : "var(--color-border)",
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      />

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-xs"
          style={{ color: "var(--color-warn)" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
