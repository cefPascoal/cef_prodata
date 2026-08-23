export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  stack: string[];
};

/**
 * Professional experience timeline, most recent first.
 * Replace [ROLE] / [COMPANY] / [PERIOD] with real information — do not invent.
 */
export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Data Engineer",
    company: "ANGLOBAL",
    period: "2022 — Present",
    description: "Building and integrating data solutions for operational environments, with a focus on reliable data pipelines, system integration and data platform development.",
    responsibilities: [
       "Design and develop data pipelines using Python and SQL, focusing on reliability, performance and automation.",
      "Integrate operational systems and APIs, consolidating data from multiple sources into structured data platforms.",
      "Work with layered data architectures (Bronze, Silver and Gold), including data transformation, modelling, validation and data quality.",
      "Contribute to the development and evolution of the company's Data Warehouse, supporting the integration and standardization of operational data.",
    ],
    stack: [
     "Python",
      "SQL",
      "SQL Server",
      "DuckDB",
      "Apache Hop",
      "APIs",
      "Git",
      "Jenkins",
   ], 
  },

    {
    id: "exp-2",
    role: "Technical Specialist — OEM_EMQ",
    company: "ANGLOBAL",
    period: "2021 — 2022",
    description:
      "Supported the integration and operation of the Valuekeep CMMS platform, working with operational data, system configuration and platform integration.",
    responsibilities: [
      "Supported the integration and maintenance of the Valuekeep CMMS platform, ensuring consistency of operational data.",
      "Configured assets and operational indicators used as sources for reporting and analysis.",
      "Supported the integration between operational systems and management platforms.",
    ],
    stack: [
      "Valuekeep CMMS",
      "Data Integration",
      "Operational Systems",
    ],
  },

 {
    id: "exp-3",
    role: "Regional Operations / NOC Supervisor",
    company: "ANGLOBAL",
    period: "2020 — 2021",
    description:
      "Supervised regional operations and monitored service performance in a critical multi-region environment.",
    responsibilities: [
      "Monitored operational indicators including downtime, incidents and SLA compliance across multiple regions.",
      "Produced operational reports to support decision-making and performance monitoring.",
      "Coordinated operational teams and supported access control and compliance processes for critical infrastructure.",
    ],
    stack: [
      "Operations Monitoring",
      "KPI Analysis",
      "SLA Monitoring",
      "Operational Reporting",
    ],
  },

  {
    id: "exp-4",
    role: "Technical Supervision",
    company: "ANGLOBAL",
    period: "2013 — 2020",
    description:
      "Monitored network operations in critical environments, analysing operational events and data to support service reliability.",
    responsibilities: [
      "Monitored network operations and analysed events and operational data to identify failures and recurring patterns.",
      "Produced and interpreted operational reports to support technical and management decisions.",
      "Collaborated with multidisciplinary teams to improve operational processes and service reliability.",
    ],
    stack: [
      "Network Monitoring",
      "Operational Analysis",
      "Reporting",
      "Incident Management",
    ],
  },

];

export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
};

export const education: EducationItem[] = [
  {
    id: "edu-1",
    title: "Licenciatura em Engenharia Informática",
    institution: "Instituto Superior Politécnico Kalandula de Angola",
    period: "Em curso — 4.º Ano",
    description: "Formação superior em Engenharia Informática, com desenvolvimento de conhecimentos em tecnologia, sistemas de informação, programação e engenharia de software.",
  },

  {
    id: "edu-2",
    title: "Princípios de Telecomunicações",
    institution: "Universidade Federal de São Carlos — EAD",
    period: "Concluído",
    description:
      "Formação complementar em fundamentos e conceitos de telecomunicações.",
  },

{
    id: "edu-3",
    title: "Ensino Médio Técnico em Energia e Instalações Elétricas",
    institution: "Instituto Médio Politécnico Alda Lara",
    period: "Concluído",
    description:
      "Formação técnica na área de energia e instalações elétricas.",
  },
];

export const certifications: EducationItem[] = [
  {
    id: "cert-1",
    title: "Alteryx TRIFACTA e Apache HOP: cargas e tratamento de dados",
    institution: "Udemy",
    period: "Completed",
  },
];
