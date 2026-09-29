import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../i18n/LanguageContext";
import { getTranslations } from "../i18n/translations";

const NAV_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_IDS.map((id) => id));
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);
  const navItems = [
  { id: "home", label: t.nav.home },
  { id: "about", label: t.nav.about },
  { id: "skills", label: t.nav.skills },
  { id: "projects", label: t.nav.projects },
  { id: "experience", label: t.nav.experience },
  { id: "contact", label: t.actions.contact },
];

  const handleNavigate = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-bg) 82%, transparent)",
        borderColor: "var(--color-border-soft)",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <button
          onClick={() => handleNavigate("home")}
          className="focus-ring flex items-center gap-2"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--color-signal)" }}
          />
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            CEF ProData
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                className="focus-ring relative rounded-md px-3.5 py-2 text-sm transition-colors"
                style={{
                  color: activeId === item.id ? "var(--color-text)" : "var(--color-text-muted)",
                }}
              >
                {item.label}
                {activeId === item.id && (
                  <span
                    className="absolute -bottom-[13px] left-3.5 right-3.5 h-[2px] rounded-full"
                    style={{ backgroundColor: "var(--color-signal)" }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <div
            className="flex items-center rounded-md border p-0.5"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-surface)",
            }}
          >
            {(["pt", "en"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setLanguage(option)}
                className="focus-ring rounded px-2 py-1 text-xs font-medium uppercase transition-colors"
                style={{
                  backgroundColor:
                    language === option ? "var(--color-signal)" : "transparent",
                  color:
                    language === option
                      ? "#090a0d"
                      : "var(--color-text-muted)",
                }}
                aria-pressed={language === option}
              >
                {option}
              </button>
            ))}
          </div>
          <ThemeToggle />
          <button
            onClick={() => handleNavigate("contact")}
            className="focus-ring rounded-md border px-4 py-2 text-sm font-medium transition-colors"
            style={{ borderColor: "var(--color-signal)", color: "var(--color-signal)" }}
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-md"
            style={{ color: "var(--color-text)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="animate-fade-in border-t md:hidden"
          style={{ borderColor: "var(--color-border-soft)", backgroundColor: "var(--color-bg)" }}
        >
          <ul className="flex flex-col px-5 py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigate(item.id)}
                  className="focus-ring block w-full rounded-md px-2 py-3 text-left text-base"
                  style={{
                    color: activeId === item.id ? "var(--color-signal)" : "var(--color-text-muted)",
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
