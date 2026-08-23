import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((i) => i.id));

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
          {NAV_ITEMS.map((item) => (
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
            {NAV_ITEMS.map((item) => (
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
