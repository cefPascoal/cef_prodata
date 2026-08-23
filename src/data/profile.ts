/**
 * Core profile data.
 * Edit this file to update name, positioning, bio and links.
 * Anything in [SQUARE_BRACKETS] must be replaced with real information.
 */

export const profile = {
  brand: "CEF ProData",
  name: "Claudio Pascoal",
  role: "Data Engineering | Data Integration | Data Platforms",
  location: "Luanda, Angola",

  heroTagline: "Building reliable data pipelines and data platforms.",
  heroText:
    "I build reliable data pipelines, integrate systems and transform operational data into structured, trustworthy data solutions.",

  heroStack: ["Python", "SQL", "ETL / ELT", "APIs", "Data Warehousing", "Automation"],

  email: "cef.pascoal@gmail.com",
  linkedin: "https://www.linkedin.com/in/claudio-pascoal-a549a0bb/",
  github: "https://github.com/cefPascoal",
  cvPath: "./Claudio_Pascoal_Data_Engineer_CV.pdf",

  about: {
    eyebrow: "About",
    title: "About me",
    // Core narrative: honest positioning, no invented seniority or specialization.
    paragraphs: [
      "I’m a Data Engineer focused on building reliable data pipelines, integrating systems and transforming operational data into structured, trustworthy data solutions.",
      "Since 2022, my work has involved data ingestion, API integration, ETL/ELT processes, data modelling and Data Warehouse development. I work mainly with Python, SQL, SQL Server, DuckDB and data integration tools, with experience in layered data architectures such as Bronze, Silver and Gold.",
      "My background in operational systems and infrastructure also gives me a practical understanding of the data behind real-world operations. I’m particularly interested in data platforms, automation and building reliable foundations for analytics and decision-making.",
      "I’m continuously expanding my knowledge of modern data engineering practices and developing my skills in data analytics and Business Intelligence.",
    ],
    highlights: [
      { label: "Core focus", value: "Data Engineering, Integration & Data Platforms" },
      { label: "Working with", value: "Python · SQL · APIs · ETL/ELT · Data Warehousing" },
      { label: "Developing", value: "Data Analytics · Business Intelligence · Modern Data Platforms" },
    ],
  },

  positioning:
    "Hands-on experience building and integrating data solutions with Python, SQL, APIs, ETL and data warehousing. Currently deepening my knowledge of data platforms and expanding into data analytics.",

  contact: {
    eyebrow: "Contact",
    title: "Let's build something with data.",
    text:
      "Open to new opportunities and collaborations in Data Engineering, Data Integration and Data Platforms. Send a message or reach out directly.",
  },
} as const;
