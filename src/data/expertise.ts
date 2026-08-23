export type ExpertiseArea = {
  id: string;
  title: string;
  description: string;
};

/**
 * "Areas of Expertise" cards. Kept to areas backed by practical work —
 * BI/Analytics is intentionally absent here (see currentlyLearning in skills.ts).
 */
export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Building and maintaining data pipelines end to end.",
  },
  {
    id: "data-integration",
    title: "Data Integration",
    description: "Integrating APIs, systems and different data sources.",
  },
  {
    id: "etl-elt",
    title: "ETL / ELT",
    description: "Extraction, transformation, validation and loading.",
  },
  {
    id: "data-warehousing",
    title: "Data Warehousing",
    description: "Organizing and modelling data for analytical consumption.",
  },
  {
    id: "data-platforms",
    title: "Data Platforms",
    description: "Structuring scalable, well-organized data environments.",
  },
  {
    id: "automation",
    title: "Automation",
    description: "Automating recurring data processes and tasks.",
  },
];

/**
 * A simple progression path shown in the "Learning Journey" section —
 * meant to show consistent evolution, not finished mastery of every step.
 */
export const learningJourney: string[] = [
  "SQL",
  "Python",
  "ETL",
  "APIs",
  "Data Warehouse",
  "Data Engineering",
  "Data Platforms",
  "Data Analytics",
];
