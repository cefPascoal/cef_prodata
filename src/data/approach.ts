export type ApproachStep = {
  id: string;
  title: string;
  description: string;
};

/**
 * "How I Work" — the working method shown as a vertical pipeline,
 * meant to demonstrate a data-engineering mindset rather than list soft skills.
 */
export const approachSteps: ApproachStep[] = [
  {
    id: "understand",
    title: "Understand",
    description: "Clarify the real question and constraints before touching any data.",
  },
  {
    id: "extract",
    title: "Extract",
    description: "Pull data from source systems and APIs, keeping the raw form intact.",
  },
  {
    id: "transform",
    title: "Transform",
    description: "Clean, normalize and reshape data into a consistent, usable structure.",
  },
  {
    id: "validate",
    title: "Validate",
    description: "Check for quality issues, anomalies and broken assumptions early.",
  },
  {
    id: "model",
    title: "Model",
    description: "Structure data into layers and models that hold up under real use.",
  },
  {
    id: "automate",
    title: "Automate",
    description: "Remove manual steps so pipelines run reliably without supervision.",
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Hand off data that people can actually trust and build on.",
  },
];
