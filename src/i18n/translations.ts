import type { Language } from "./types";


export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contacto",
    },
    actions: {
      contact: "Contacto",
      viewProjects: "Ver projetos",
      contactMe: "Entrar em contacto",
      downloadCv: "Baixar CV",
    },
    hero: {
      pipelineStatus: "Estado do pipeline",
      extract: "Extrair",
      transform: "Transformar",
      validate: "Validar",
      deliver: "Entregar",
    },
    about: {
  eyebrow: "Sobre",
  title: "Sobre mim",
  paragraphs: [
    "Sou Engenheiro de Dados focado na construção de pipelines de dados confiáveis, integração de sistemas e transformação de dados operacionais em soluções estruturadas e confiáveis.",
    "Desde 2022, o meu trabalho envolve ingestão de dados, integração de APIs, processos ETL/ELT, modelação de dados e desenvolvimento de Data Warehouses. Trabalho principalmente com Python, SQL, SQL Server, DuckDB e ferramentas de integração de dados, com experiência em arquiteturas em camadas como Bronze, Silver e Gold.",
    "A minha experiência com sistemas operacionais e infraestrutura também me proporciona uma compreensão prática dos dados por trás de operações reais. Tenho particular interesse em plataformas de dados, automação e na construção de bases confiáveis para analytics e tomada de decisão.",
    "Continuo a aprofundar os meus conhecimentos em práticas modernas de engenharia de dados e a desenvolver competências em análise de dados e Business Intelligence.",
  ],
  highlights: [
    {
      label: "Foco principal",
      value: "Engenharia de Dados, Integração e Plataformas de Dados",
    },
    {
      label: "Trabalho com",
      value: "Python · SQL · APIs · ETL/ELT · Data Warehousing",
    },
    {
      label: "Em desenvolvimento",
      value: "Data Analytics · Business Intelligence · Modern Data Platforms",
    },
  ],
},
approach: {
  eyebrow: "Como trabalho",
  title: "Como trabalho",
  steps: {
    understand: {
      title: "Entender",
      description: "Esclarecer a questão real e as restrições antes de trabalhar com os dados.",
    },
    extract: {
      title: "Extrair",
      description: "Extrair dados dos sistemas de origem e APIs, preservando a forma original.",
    },
    transform: {
      title: "Transformar",
      description: "Limpar, normalizar e reorganizar os dados numa estrutura consistente e utilizável.",
    },
    validate: {
      title: "Validar",
      description: "Verificar problemas de qualidade, anomalias e pressupostos incorretos desde cedo.",
    },
    model: {
      title: "Modelar",
      description: "Estruturar os dados em camadas e modelos preparados para utilização real.",
    },
    automate: {
      title: "Automatizar",
      description: "Eliminar tarefas manuais para que os pipelines sejam executados de forma confiável.",
    },
    deliver: {
      title: "Entregar",
      description: "Disponibilizar dados nos quais as pessoas possam confiar e trabalhar.",
    },
  },
},
expertise: {
  eyebrow: "O que faço",
  title: "Áreas de atuação",
  areas: {
    "data-engineering": {
      title: "Engenharia de Dados",
      description: "Construção e manutenção de pipelines de dados de ponta a ponta.",
    },
    "data-integration": {
      title: "Integração de Dados",
      description: "Integração de APIs, sistemas e diferentes fontes de dados.",
    },
    "etl-elt": {
      title: "ETL / ELT",
      description: "Extração, transformação, validação e carregamento.",
    },
    "data-warehousing": {
      title: "Data Warehousing",
      description: "Organização e modelação de dados para consumo analítico.",
    },
    "data-platforms": {
      title: "Plataformas de Dados",
      description: "Estruturação de ambientes de dados organizados e preparados para crescer.",
    },
    automation: {
      title: "Automação",
      description: "Automatização de processos e tarefas recorrentes relacionados com dados.",
    },
  },
},
experience: {
  eyebrow: "Percurso",
  title: "Experiência",

  items: {
    "exp-1": {
      description:
        "Construção e integração de soluções de dados para ambientes operacionais, com foco em pipelines confiáveis, integração de sistemas e desenvolvimento de plataformas de dados.",
      responsibilities: [
        "Desenvolver pipelines de dados com Python e SQL, com foco em confiabilidade, desempenho e automação.",
        "Integrar sistemas operacionais e APIs, consolidando dados de múltiplas fontes em plataformas de dados estruturadas.",
        "Trabalhar com arquiteturas de dados em camadas (Bronze, Silver e Gold), incluindo transformação, modelação, validação e qualidade dos dados.",
        "Contribuir para o desenvolvimento e evolução do Data Warehouse da empresa, apoiando a integração e padronização dos dados operacionais.",
      ],
    },

    "exp-2": {
      description:
        "Suporte à integração e operação da plataforma Valuekeep CMMS, trabalhando com dados operacionais, configuração de sistemas e integração da plataforma.",
      responsibilities: [
        "Apoiar a integração e manutenção da plataforma Valuekeep CMMS, garantindo a consistência dos dados operacionais.",
        "Configurar ativos e indicadores operacionais utilizados como fontes para relatórios e análises.",
        "Apoiar a integração entre sistemas operacionais e plataformas de gestão.",
      ],
    },

    "exp-3": {
      description:
        "Supervisão de operações regionais e monitorização do desempenho dos serviços num ambiente crítico e multirregional.",
      responsibilities: [
        "Monitorizar indicadores operacionais, incluindo indisponibilidade, incidentes e cumprimento de SLA em múltiplas regiões.",
        "Produzir relatórios operacionais para apoiar a tomada de decisão e a monitorização do desempenho.",
        "Coordenar equipas operacionais e apoiar processos de controlo de acesso e conformidade em infraestruturas críticas.",
      ],
    },

    "exp-4": {
      description:
        "Monitorização de operações de rede em ambientes críticos, analisando eventos e dados operacionais para apoiar a fiabilidade dos serviços.",
      responsibilities: [
        "Monitorizar operações de rede e analisar eventos e dados operacionais para identificar falhas e padrões recorrentes.",
        "Produzir e interpretar relatórios operacionais para apoiar decisões técnicas e de gestão.",
        "Colaborar com equipas multidisciplinares para melhorar processos operacionais e a fiabilidade dos serviços.",
      ],
    },
  },

  education: "Formação",
  certifications: "Certificações",

  educationItems: {
    "edu-1": {
      title: "Licenciatura em Engenharia Informática",
      description:
        "Formação superior em Engenharia Informática, com desenvolvimento de conhecimentos em tecnologia, sistemas de informação, programação e engenharia de software.",
    },
    "edu-2": {
      title: "Princípios de Telecomunicações",
      description:
        "Formação complementar em fundamentos e conceitos de telecomunicações.",
    },
    "edu-3": {
      title: "Ensino Médio Técnico em Energia e Instalações Elétricas",
      description:
        "Formação técnica na área de energia e instalações elétricas.",
    },
  },

  certificationItems: {
    "cert-1": {
      title: "Alteryx TRIFACTA e Apache HOP: cargas e tratamento de dados",
    },
  },
},
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    actions: {
      contact: "Contact",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
    },
    hero: {
      pipelineStatus: "Pipeline status",
      extract: "Extract",
      transform: "Transform",
      validate: "Validate",
      deliver: "Deliver",
    },
    about: {
  eyebrow: "About",
  title: "About me",
  paragraphs: [
    "I’m a Data Engineer focused on building reliable data pipelines, integrating systems and transforming operational data into structured, trustworthy data solutions.",
    "Since 2022, my work has involved data ingestion, API integration, ETL/ELT processes, data modelling and Data Warehouse development. I work mainly with Python, SQL, SQL Server, DuckDB and data integration tools, with experience in layered data architectures such as Bronze, Silver and Gold.",
    "My background in operational systems and infrastructure also gives me a practical understanding of the data behind real-world operations. I’m particularly interested in data platforms, automation and building reliable foundations for analytics and decision-making.",
    "I’m continuously expanding my knowledge of modern data engineering practices and developing my skills in data analytics and Business Intelligence.",
  ],
  highlights: [
    {
      label: "Core focus",
      value: "Data Engineering, Integration & Data Platforms",
    },
    {
      label: "Working with",
      value: "Python · SQL · APIs · ETL/ELT · Data Warehousing",
    },
    {
      label: "Developing",
      value: "Data Analytics · Business Intelligence · Modern Data Platforms",
    },
  ],
},
approach: {
  eyebrow: "Working method",
  title: "How I Work",
  steps: {
    understand: {
      title: "Understand",
      description: "Clarify the real question and constraints before touching any data.",
    },
    extract: {
      title: "Extract",
      description: "Pull data from source systems and APIs, keeping the raw form intact.",
    },
    transform: {
      title: "Transform",
      description: "Clean, normalize and reshape data into a consistent, usable structure.",
    },
    validate: {
      title: "Validate",
      description: "Check for quality issues, anomalies and broken assumptions early.",
    },
    model: {
      title: "Model",
      description: "Structure data into layers and models that hold up under real use.",
    },
    automate: {
      title: "Automate",
      description: "Remove manual steps so pipelines run reliably without supervision.",
    },
    deliver: {
      title: "Deliver",
      description: "Hand off data that people can actually trust and build on.",
    },
  },
},
expertise: {
  eyebrow: "What I do",
  title: "Areas of Expertise",
  areas: {
    "data-engineering": {
      title: "Data Engineering",
      description: "Building and maintaining data pipelines end to end.",
    },
    "data-integration": {
      title: "Data Integration",
      description: "Integrating APIs, systems and different data sources.",
    },
    "etl-elt": {
      title: "ETL / ELT",
      description: "Extraction, transformation, validation and loading.",
    },
    "data-warehousing": {
      title: "Data Warehousing",
      description: "Organizing and modelling data for analytical consumption.",
    },
    "data-platforms": {
      title: "Data Platforms",
      description: "Structuring scalable, well-organized data environments.",
    },
    automation: {
      title: "Automation",
      description: "Automating recurring data processes and tasks.",
    },
  },
},
experience: {
  eyebrow: "Background",
  title: "Experience",

  items: {
    "exp-1": {
      description:
        "Building and integrating data solutions for operational environments, with a focus on reliable data pipelines, system integration and data platform development.",
      responsibilities: [
        "Design and develop data pipelines using Python and SQL, focusing on reliability, performance and automation.",
        "Integrate operational systems and APIs, consolidating data from multiple sources into structured data platforms.",
        "Work with layered data architectures (Bronze, Silver and Gold), including data transformation, modelling, validation and data quality.",
        "Contribute to the development and evolution of the company's Data Warehouse, supporting the integration and standardization of operational data.",
      ],
    },

    "exp-2": {
      description:
        "Supported the integration and operation of the Valuekeep CMMS platform, working with operational data, system configuration and platform integration.",
      responsibilities: [
        "Supported the integration and maintenance of the Valuekeep CMMS platform, ensuring consistency of operational data.",
        "Configured assets and operational indicators used as sources for reporting and analysis.",
        "Supported the integration between operational systems and management platforms.",
      ],
    },

    "exp-3": {
      description:
        "Supervised regional operations and monitored service performance in a critical multi-region environment.",
      responsibilities: [
        "Monitored operational indicators including downtime, incidents and SLA compliance across multiple regions.",
        "Produced operational reports to support decision-making and performance monitoring.",
        "Coordinated operational teams and supported access control and compliance processes for critical infrastructure.",
      ],
    },

    "exp-4": {
      description:
        "Monitored network operations in critical environments, analysing operational events and data to support service reliability.",
      responsibilities: [
        "Monitored network operations and analysed events and operational data to identify failures and recurring patterns.",
        "Produced and interpreted operational reports to support technical and management decisions.",
        "Collaborated with multidisciplinary teams to improve operational processes and service reliability.",
      ],
    },
  },

  education: "Education",
  certifications: "Certifications",

  educationItems: {
    "edu-1": {
      title: "Bachelor's Degree in Computer Engineering",
      description:
        "Higher education in Computer Engineering, developing knowledge in technology, information systems, programming and software engineering.",
    },
    "edu-2": {
      title: "Telecommunications Principles",
      description:
        "Additional training in telecommunications fundamentals and concepts.",
    },
    "edu-3": {
      title: "Technical High School in Energy and Electrical Installations",
      description:
        "Technical training in energy and electrical installations.",
    },
  },

  certificationItems: {
    "cert-1": {
      title: "Alteryx TRIFACTA and Apache HOP: Data Loading and Processing",
    },
  },
},
  },
} satisfies Record<Language, object>;


export type Translation = (typeof translations)[Language];

export function getTranslations(language: Language): Translation {
  return translations[language];
}