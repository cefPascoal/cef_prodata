import type { Language } from "./types";

type ProjectTranslation = {
  summary: string;
  problem: string;
  solution: string;
  result: string;
  status: string;
  statusDescription: string;
  engineeringConcerns: Record<string, string>;
};

type ProjectCardLabels = {
  eyebrow: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  engineeringConcerns: string;
  code: string;
  placeholderDescription: string;
  plannedDescription: string;
};

export const projectCardLabels: Record<Language, ProjectCardLabels> = {
  pt: {
    eyebrow: "Estudos de caso",
    title: "Projetos",
    description:
      "Projetos práticos de engenharia de dados, com distinção clara entre experiência profissional e trabalho em desenvolvimento.",
    problem: "Problema",
    solution: "Solução",
    result: "Resultado",
    engineeringConcerns: "Aspetos de engenharia",
    code: "Código",
    placeholderDescription:
      "Exemplo estrutural baseado em trabalho prático. Os detalhes devem ser adaptados ao projeto real.",
    plannedDescription:
      "Projeto futuro ou em desenvolvimento — ainda não representa experiência consolidada.",
  },
  en: {
    eyebrow: "Case studies",
    title: "Projects",
    description:
      "Practical data engineering projects, clearly distinguishing professional experience from work in development.",
    problem: "Problem",
    solution: "Solution",
    result: "Result",
    engineeringConcerns: "Engineering concerns",
    code: "Code",
    placeholderDescription:
      "Structural example based on practical work. Details should be adapted to the actual project.",
    plannedDescription:
      "Future or in-development project — not yet consolidated experience.",
  },
};

export const projectTranslations: Record<
  Language,
  Record<string, ProjectTranslation>
> = {
  pt: {
    "operational-data-platform": {
      summary:
        "Plataforma de dados operacionais que integra Valuekeep e WebSupervisor/ComAp através de APIs num Data Warehouse estruturado em SQL Server.",
      problem:
        "Os dados operacionais estavam distribuídos entre o Valuekeep e o WebSupervisor/ComAp, dificultando a consolidação, a padronização e a preparação da informação para análise e relatórios operacionais. Embora existisse um ambiente SQL Server, era necessário estruturar um fluxo de dados centralizado e confiável.",
      solution:
        "Os dados são extraídos das APIs do Valuekeep e do WebSupervisor/ComAp com Python. O processamento temporário é feito em DuckDB e os dados são exportados para CSV. O Apache Hop carrega os ficheiros para o SQL Server, onde são transformados progressivamente nas camadas Bronze, Silver e Gold.",
      result:
        "A implementação estabeleceu uma plataforma centralizada para dados operacionais, com processos automatizados de ingestão e transformação, disponibilidade de dados históricos, maior rastreabilidade e consistência e conjuntos de dados estruturados para consumo operacional e analítico.",
      status: "Experiência profissional",
      statusDescription:
        "Descrição de experiência profissional em engenharia e integração de dados.",
      engineeringConcerns: {
        "Data quality": "Qualidade dos dados",
        "Error handling": "Tratamento de erros",
        Authentication: "Autenticação",
        "Incremental extraction": "Extração incremental",
        Automation: "Automação",
        Monitoring: "Monitorização",
      },
    },
    "open-meteo-air-quality-pipeline": {
      summary:
        "Pipeline de engenharia de dados para ingestão, transformação, validação e persistência de dados de qualidade do ar através da API Open-Meteo.",
      problem:
        "Os dados provenientes de APIs externas precisam de ser ingeridos de forma confiável, transformados numa estrutura consistente e validados, separando os registos válidos dos inválidos antes da sua utilização posterior.",
      solution:
        "Foi implementado um pipeline modular em Python com ingestão via API, mecanismos de repetição e resiliência, transformação, validação, quarentena de registos inválidos, persistência em JSONL, testes automatizados e execução operacional com registos de execução.",
      result:
        "Pipeline testado e operacional, capaz de processar dados de qualidade do ar para várias localizações, preservar registos inválidos para análise e produzir ficheiros JSONL estruturados com registos de execução.",
      status: "Experiência profissional",
      statusDescription:
        "Projeto apresentado como experiência prática de engenharia de dados.",
      engineeringConcerns: {
        "Data quality": "Qualidade dos dados",
        "API resilience": "Resiliência da API",
        "Retry and backoff": "Repetição e espera progressiva",
        "Error handling": "Tratamento de erros",
        Quarantine: "Quarentena de dados",
        "Automated testing": "Testes automatizados",
        Observability: "Observabilidade",
      },
    },
    "data-quality-pipeline": {
      summary:
        "Camada de validação baseada em regras entre os dados em bruto e os dados considerados confiáveis.",
      problem:
        "Os dados em bruto podem chegar aos consumidores sem verificações consistentes de qualidade.",
      solution:
        "Implementação de uma camada de validação com regras explícitas antes de os dados serem considerados confiáveis.",
      result: "Em desenvolvimento.",
      status: "Planeado",
      statusDescription:
        "Projeto futuro ou em desenvolvimento, ainda não apresentado como experiência consolidada.",
      engineeringConcerns: {},
    },
    "modern-data-warehouse": {
      summary:
        "Data Warehouse baseado numa arquitetura em camadas para consumo analítico estruturado.",
      problem:
        "Estruturar dados operacionais em bruto para permitir uma utilização analítica confiável.",
      solution:
        "Data Warehouse organizado em camadas segundo o padrão de arquitetura Medallion.",
      result: "Em desenvolvimento.",
      status: "Planeado",
      statusDescription:
        "Projeto futuro ou em desenvolvimento, ainda não apresentado como experiência consolidada.",
      engineeringConcerns: {},
    },
    "analytics-project": {
      summary:
        "Camada analítica sobre o Data Warehouse, destinada à exploração de dados e à criação de dashboards.",
      problem:
        "Transformar os dados da camada Gold em informação acessível através de dashboards.",
      solution:
        "Ligação do Data Warehouse a uma ferramenta de Business Intelligence para exploração e elaboração de relatórios.",
      result: "Futuro projeto — em desenvolvimento.",
      status: "Planeado",
      statusDescription:
        "Projeto futuro ou em desenvolvimento, ainda não apresentado como experiência consolidada.",
      engineeringConcerns: {},
    },
  },

  en: {
    "operational-data-platform": {
      summary:
        "Operational data platform integrating Valuekeep and WebSupervisor/ComAp through APIs into a structured SQL Server data warehouse.",
      problem:
        "Operational data was distributed across Valuekeep and WebSupervisor/ComAp, making consolidation, standardization and preparation for analysis and operational reporting difficult. Although a SQL Server environment was available, a centralized and reliable data flow needed to be established.",
      solution:
        "Data is extracted from the Valuekeep and WebSupervisor/ComAp APIs using Python. Temporary processing takes place in DuckDB, and the data is exported to CSV. Apache Hop loads the files into SQL Server, where they are progressively transformed across the Bronze, Silver and Gold layers.",
      result:
        "The implementation established a centralized platform for operational data, with automated ingestion and transformation, historical data availability, improved traceability and consistency, and structured datasets for operational and analytical consumption.",
      status: "Professional experience",
      statusDescription:
        "Description of professional experience in data engineering and integration.",
      engineeringConcerns: {
        "Data quality": "Data quality",
        "Error handling": "Error handling",
        Authentication: "Authentication",
        "Incremental extraction": "Incremental extraction",
        Automation: "Automation",
        Monitoring: "Monitoring",
      },
    },
    "open-meteo-air-quality-pipeline": {
      summary:
        "Data engineering pipeline for ingesting, transforming, validating and persisting air quality data through the Open-Meteo API.",
      problem:
        "External API data needs to be ingested reliably, transformed into a consistent structure and validated, with valid records separated from invalid ones before downstream use.",
      solution:
        "A modular Python pipeline was implemented with API ingestion, retry and resilience handling, transformation, validation, quarantine of invalid records, JSONL persistence, automated tests and operational execution logging.",
      result:
        "A tested and operational pipeline capable of processing air quality data for multiple locations, preserving invalid records for analysis and producing structured JSONL files with execution logs.",
      status: "Professional experience",
      statusDescription:
        "Project presented as practical data engineering experience.",
      engineeringConcerns: {
        "Data quality": "Data quality",
        "API resilience": "API resilience",
        "Retry and backoff": "Retry and backoff",
        "Error handling": "Error handling",
        Quarantine: "Data quarantine",
        "Automated testing": "Automated testing",
        Observability: "Observability",
      },
    },
    "data-quality-pipeline": {
      summary:
        "Rule-based validation layer between raw data and trusted data.",
      problem:
        "Raw data may reach downstream consumers without consistent quality checks.",
      solution:
        "A validation layer applying explicit rules before data is considered trusted.",
      result: "In development.",
      status: "Planned",
      statusDescription:
        "Future or in-development project, not presented as consolidated experience.",
      engineeringConcerns: {},
    },
    "modern-data-warehouse": {
      summary:
        "Medallion-architecture data warehouse for structured analytical consumption.",
      problem:
        "Structuring raw operational data for reliable analytical use.",
      solution:
        "A layered data warehouse following the Medallion architecture pattern.",
      result: "In development.",
      status: "Planned",
      statusDescription:
        "Future or in-development project, not presented as consolidated experience.",
      engineeringConcerns: {},
    },
    "analytics-project": {
      summary:
        "Analytics layer on top of the data warehouse for data exploration and dashboard development.",
      problem:
        "Turning Gold-layer data into information that can be consumed through dashboards.",
      solution:
        "Connecting the data warehouse to a Business Intelligence tool for exploration and reporting.",
      result: "Future project — in development.",
      status: "Planned",
      statusDescription:
        "Future or in-development project, not presented as consolidated experience.",
      engineeringConcerns: {},
    },
  },
};