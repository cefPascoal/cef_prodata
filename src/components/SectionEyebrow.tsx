/**
 * Section label styled as a technical tag rather than decorative numbering —
 * consistent with the "precision / reliability" identity of CEF ProData.
 */
export function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-[2px] w-8 rounded-full" style={{ backgroundColor: "var(--color-signal)" }} />
      <span
        className="font-mono text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--color-signal)" }}
      >
        {children}
      </span>
    </div>
  );
}
