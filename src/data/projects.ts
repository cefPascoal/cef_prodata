export type ProjectStatus = "placeholder" | "planned" | "experience";

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
    status: "experience",
    name: "Operational Data Platform",
    summary:"Operational data platform integrating Valuekeep and WebSupervisor/ComAp through APIs into a structured SQL Server data warehouse environment.",
    problem: "Operational data was distributed across two different systems, Valuekeep and WebSupervisor/ComAp, making it difficult to consolidate, standardize, and prepare the information for analysis and operational reporting. The existing SQL Server environment was available but was not being used as a structured data warehouse. A centralized and reliable data flow was therefore needed to integrate the sources, organize the data, and make it available in a consistent format for downstream consumption.",
    solution:
      "Data is extracted from Valuekeep and WebSupervisor/ComAp APIs using Python. The extracted data is temporarily processed in DuckDB and exported as CSV files. Apache Hop loads the raw files into SQL Server, where the data is progressively transformed and structured across Bronze, Silver, and Gold layers for analytical and operational consumption.",
    architecture: "API → Python → DuckDB → CSV → Apache Hop → SQL Server → Bronze → Silver → Gold",
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
  },
  {
  id: "open-meteo-air-quality-pipeline",
  status: "experience",
  name: "Open-Meteo Air Quality Pipeline",
  summary:
    "Data engineering pipeline for ingesting, transforming, validating, and persisting air quality data from the Open-Meteo API.",
  problem:
    "External API data needs to be ingested reliably, transformed into a consistent structure, validated, and separated between trusted and invalid records before downstream consumption.",
  solution:
    "A modular Python pipeline was implemented with API ingestion, retry and resilience handling, transformation, data validation, quarantine of invalid records, JSONL persistence, automated tests, and operational execution with logging.",
  architecture:
    "Open-Meteo API → API Client → Ingestion → Transformation → Validation → Orchestration → Output / Quarantine",
  stack: [
    "Python",
    "HTTPX",
    "Pytest",
    "YAML",
    "JSONL",
    "Git",
    "GitHub",
  ],
  result:
    "A tested and operational pipeline capable of processing air quality data for multiple locations, preserving invalid records for analysis and producing structured JSONL outputs with execution logging.",
  engineeringConcerns: [
    "Data quality",
    "API resilience",
    "Retry and backoff",
    "Error handling",
    "Quarantine",
    "Automated testing",
    "Observability",
  ],
  githubUrl:
    "https://github.com/cefPascoal/open-meteo-air-quality-pipeline",
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
