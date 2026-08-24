export type ProjectStatus = "placeholder" | "planned";

export type Project = {
  id: string;
  status: ProjectStatus;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  result: string;
  engineeringConcerns?: string[];
  githubUrl?: string;
};

/**
 * Projects shown in the "Projects" section, structured as short case studies
 * (Problem → Solution → Architecture → Technology → Result).
 *
 * - status: "placeholder"  → structural example based on real practical work;
 *           replace details with your actual project once ready.
 * - status: "planned"      → shown explicitly as a future/in-progress project,
 *           never as consolidated professional experience.
 *
 * Do not invent metrics, client names or confidential information — use
 * anonymized or demonstrative data where needed (see project brief, section 15).
 */
export const projects: Project[] = [
  {
    id: "operational-data-platform",
    status: "placeholder",
    name: "Operational Data Platform",
    summary:
      "Data platform designed to integrate operational information from different systems and APIs, applying structured ingestion, transformation and modelling processes.",
    problem: "Integrating data coming from different APIs and operational systems.",
    solution:
      "Development of an ingestion and transformation pipeline structured in layers, from raw extraction to business-ready models.",
    architecture: "API → Python → DuckDB → Bronze → Silver → Gold → SQL Server",
    stack: ["Python", "APIs", "DuckDB", "SQL Server", "Apache Hop", "Git", "Jenkins"],
    result: "The implementation established a centralized data platform for operational data from Valuekeep and WebSupervisor/ComAp. It introduced automated ingestion and transformation processes, historical data availability, improved data traceability and consistency, and structured datasets for analytical and operational consumption.",
    engineeringConcerns: [
      "Data quality",
      "Error handling",
      "Authentication",
      "Incremental extraction",
      "Automation",
      "Monitoring",
    ],
    githubUrl: "[PROJECT_GITHUB_URL]",
  },
  {
    id: "api-data-pipeline",
    status: "planned",
    name: "API Data Pipeline",
    summary: "Ingestion pipeline consuming external APIs into a queryable data store.",
    problem: "Consolidating data from external APIs into one consistent, queryable format.",
    solution: "Automated extraction with Python, intermediate storage in DuckDB, incremental load into SQL Server.",
    architecture: "API → Python → DuckDB → SQL Server",
    stack: ["Python", "DuckDB", "SQL Server"],
    result: "In progress.",
  },
  {
    id: "data-quality-pipeline",
    status: "planned",
    name: "Data Quality Pipeline",
    summary: "Rule-based validation layer between raw and trusted data.",
    problem: "Raw data reaching downstream consumers without consistent quality checks.",
    solution: "A validation layer applying explicit quality rules before data is marked as trusted.",
    architecture: "Raw Data → Validation → Quality Rules → Trusted Data",
    stack: ["Python", "SQL"],
    result: "In progress.",
  },
  {
    id: "modern-data-warehouse",
    status: "planned",
    name: "Modern Data Warehouse",
    summary: "Medallion-architecture warehouse for structured analytical consumption.",
    problem: "Structuring raw operational data for reliable analytical use.",
    solution: "Layered warehouse following the medallion architecture pattern.",
    architecture: "Bronze → Silver → Gold",
    stack: ["SQL Server", "dbt"],
    result: "In progress.",
  },
  {
    id: "analytics-project",
    status: "planned",
    name: "Analytics Project",
    summary: "Analytics layer on top of the data warehouse — explicitly a future/in-development project.",
    problem: "Turning gold-layer data into consumable dashboards.",
    solution: "Connecting the warehouse to a BI tool for exploration and reporting.",
    architecture: "Data Warehouse → Power BI",
    stack: ["Power BI", "SQL Server"],
    result: "Future / in development — not presented as consolidated experience.",
  },
];
