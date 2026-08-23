export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

/**
 * Consolidated skills — things actively used in practice.
 * Keep "Currently Learning" (below) separate: it must never be presented
 * as an advanced or consolidated competency.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: ["Python", "SQL"],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    skills: ["ETL", "ELT", "Data Pipelines", "Data Warehouse", "APIs", "Data Quality"],
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["SQL Server", "DuckDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "data-tools",
    title: "Data Tools",
    skills: ["Apache Hop", "dbt", "Power Query"],
  },
  {
    id: "devops",
    title: "DevOps / Engineering",
    skills: ["Git", "GitHub", "Docker", "Jenkins", "Linux", "WSL"],
  },
  {
    id: "architecture",
    title: "Architecture",
    skills: ["Bronze", "Silver", "Gold", "Medallion Architecture", "Data Integration"],
  },
];

/**
 * Deliberately separate from the main skill grid: these are areas in active
 * development, shown with clearly lower visual weight so they never read as
 * consolidated expertise (see project brief, section 13).
 */
export const currentlyLearning: string[] = [
  "Power BI",
  "Data Analytics",
  "DAX",
  "Cloud Data Platforms",
  "Lakehouse",
  "DataOps",
];
