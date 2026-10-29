
import { SectionEyebrow } from "../components/SectionEyebrow";
import { DataArchitectureDiagram } from "../components/DataArchitectureDiagram";
import { useLanguage } from "../i18n/LanguageContext";

const LAYERS = {
  pt: [
    {
      title: "Bronze",
      text: "Dados em bruto provenientes das fontes, mantidos próximos da sua forma original.",
    },
    {
      title: "Silver",
      text: "Dados limpos e padronizados, preparados para modelação.",
    },
    {
      title: "Gold",
      text: "Dados estruturados e preparados para utilização pelo negócio.",
    },
    {
      title: "Analytics",
      text: "Consumo e análise com base em dados confiáveis.",
    },
  ],
  en: [
    {
      title: "Bronze",
      text: "Raw / source data, kept close to its original form.",
    },
    {
      title: "Silver",
      text: "Cleaned and standardized data, ready for modelling.",
    },
    {
      title: "Gold",
      text: "Business-ready, structured data.",
    },
    {
      title: "Analytics",
      text: "Consumption and analysis on top of trusted data.",
    },
  ],
};

const CONTENT = {
  pt: {
    eyebrow: "Dos dados em bruto aos dados confiáveis",
    title: "Arquitetura de Dados",
  },
  en: {
    eyebrow: "From raw data to trusted data",
    title: "Data Architecture",
  },
};

export function Architecture() {
  const { language } = useLanguage();
  const layers = LAYERS[language];
  const content = CONTENT[language];

  return (
    <section
      id="architecture"
      className="scroll-mt-20 border-t px-5 py-24 sm:px-8"
      style={{ borderColor: "var(--color-border-soft)" }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>

        <h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          {content.title}
        </h2>

        <div
          className="mt-10 rounded-xl border p-6 sm:p-10"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <DataArchitectureDiagram />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer) => (
            <div key={layer.title}>
              <h3
                className="mb-1.5 font-mono text-sm font-medium"
                style={{ color: "var(--color-signal-soft)" }}
              >
                {layer.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {layer.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
