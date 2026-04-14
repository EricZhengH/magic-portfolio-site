export interface ProfileSource {
  path: string;
  note: string;
}

export interface ContactLink {
  label: string;
  url: string;
  username?: string;
  source: string;
  todo?: string;
}

export interface ProfileBasics {
  givenName: string;
  familyName: string;
  displayName: string;
  legalName: string;
  nickname: string;
  title: string;
  targetRole: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  birthYear: string;
  yearsOfExperience: string;
  github: string;
  summary: string;
  sourceNotes: string[];
  todo: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
  source: string;
}

export interface WorkProject {
  name: string;
  technologies: string[];
  bullets: string[];
  background?: string;
  responsibilities?: string;
  source: string;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  context?: string;
  bullets: string[];
  projects?: WorkProject[];
  awards?: string[];
  source: string;
}

export interface EducationItem {
  institution: string;
  credential: string;
  field: string;
  startDate: string;
  endDate: string;
  source: string;
  todo?: string;
}

export interface ProjectItem {
  name: string;
  url: string;
  summary: string;
  technologies: string[];
  source: string;
  todo?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  date: string;
  source: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  source: string;
}

export interface Profile {
  sources: ProfileSource[];
  basics: ProfileBasics;
  socialLinks: ContactLink[];
  additionalContacts: ContactLink[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  certifications: AchievementItem[];
  publications: ProjectItem[];
  talks: ProjectItem[];
  languages: LanguageItem[];
  profileImages: string[];
  currentFocus: ProjectItem[];
  resumeNotes: string[];
}

export const profile: Profile = {
  sources: [
    {
      path: 'edit-me/content/personal.md',
      note: 'Primary active resume identity, title, location, summary, GitHub mention, IELTS note.',
    },
    {
      path: 'edit-me/content/private-fields/*.md',
      note: 'Primary active private contact fields for email and Australian phone number.',
    },
    {
      path: 'edit-me/content/professional-experiences/*.md',
      note: 'Primary active public experience summaries for Morfeus Technologies Inc., Cheetah Mobile (Joyme), and Quant Group.',
    },
    {
      path: 'edit-me/content/skills/*.md',
      note: 'Primary active skill groupings.',
    },
    {
      path: 'edit-me/content/achievements/00-degree.md',
      note: 'Primary active achievement for Beijing Jiaotong University bachelor degree completion year.',
    },
    {
      path: 'edit-me/content/additional-info.md',
      note: 'Primary active open source project list.',
    },
    {
      path: 'docs/ZHGOEN.MD',
      note: 'Richer English resume draft with older roles, detailed project breakdowns, legacy contact data, and education date ranges.',
    },
    {
      path: 'ProfileREADME.md',
      note: 'Untracked profile README with AI/LLM focus, Monash education entry, Mandarin/English languages, and current project themes.',
    },
  ],
  basics: {
    givenName: 'Hang',
    familyName: 'Zheng',
    displayName: 'Hang (Eric) Zheng',
    legalName: 'Hang Zheng',
    nickname: 'Eric',
    title: 'Senior Full-Stack Engineer | AI/LLM Systems',
    targetRole: 'Senior Java/Golang Developer',
    location: 'Melbourne, Australia',
    email: 'zhenghangtxdyr@gmail.com',
    phone: '+61 402837608',
    website: 'http://ericresume.online/',
    birthYear: '1998',
    yearsOfExperience: '10 years',
    github: 'https://github.com/EricZhengH',
    summary:
      'Results-driven Full-Stack Software Engineer with 10 years of experience architecting high-performance distributed systems, Java and Golang backend services, microservices, data platforms, and performance-critical product infrastructure. Over the past two years, I have focused on production-grade AI applications, successfully designing and deploying AI-powered products leveraging AI-agent architecture, LLM orchestration, RAG, tool calling, monitoring, and scalable deployment workflows. I bring a proven track record of end-to-end product delivery, combining robust backend engineering with modern frontend architectures using React, Next.js, and TypeScript.',
    sourceNotes: [
      'Current location is taken from edit-me/content/personal.md and ProfileREADME.md.',
      'docs/ZHGOEN.MD also lists preferred location as Beijing and expected salary as CNY 40,000-45,000 per month pre-tax; those legacy job-search preferences are not used as public portfolio copy.',
      'Active private-fields phone is +61 402837608; docs/ZHGOEN.MD also lists 18516899886 as phone and QQ/WeChat.',
    ],
    todo: [],
  },
  socialLinks: [
    {
      label: 'GitHub',
      username: 'EricZhengH',
      url: 'https://github.com/EricZhengH',
      source: 'edit-me/content/personal.md, docs/ZHGOEN.MD, ProfileREADME.md',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ericzheng6/',
      source: 'User-provided LinkedIn URL.',
    },
  ],
  additionalContacts: [
    {
      label: 'Legacy phone / QQ / WeChat',
      username: '18516899886',
      url: '',
      source: 'docs/ZHGOEN.MD',
      todo: 'TODO: Confirm whether this legacy China contact should be public.',
    },
  ],
  skills: [
    {
      title: 'AI & LLM Systems',
      items: [
        'Multi-agent Systems',
        'LLM Orchestration',
        'RAG',
        'Tool Calling',
        'Prompt Engineering',
        'OpenAI',
        'Claude',
        'Gemini',
        'LangChain',
        'LlamaIndex',
        'Semantic Kernel',
        'Pinecone',
        'Weaviate',
        'Qdrant',
        'ChromaDB',
      ],
      source: 'edit-me/content/skills/0.md and ProfileREADME.md',
    },
    {
      title: 'Backend & Distributed Systems',
      items: [
        'Java',
        'Golang',
        'High-concurrency Distributed Systems',
        'Spring',
        'Spring Boot',
        'Microservices Architecture',
        'Netty',
        'Redis',
        'Kafka',
        'MySQL Index Optimization & Transactions',
      ],
      source: 'edit-me/content/skills/1.md',
    },
    {
      title: 'Data Platforms & Infrastructure',
      items: [
        'FastAPI',
        'Next.js',
        'React',
        'TypeScript',
        'Supabase/Postgres',
        'AWS Lambda',
        'AWS S3',
        'AWS Redshift',
        'MongoDB',
        'ElasticSearch',
        'Docker',
        'GitHub Actions',
        'Jenkins',
        'Hive',
        'Hadoop HDFS',
        'Flume',
        'JStorm',
        'Sqoop',
        'Go Profiling Tools (pprof, trace, benchmark)',
      ],
      source: 'edit-me/content/skills/2.md and user-provided Morfeus project update',
    },
  ],
  experience: [
    {
      organization: 'Morfeus Technologies Inc. (Delaware, United States)',
      role: 'Senior Fullstack Developer',
      startDate: '2025-09',
      endDate: '',
      context: 'AI market intelligence platform for FX and macro trading.',
      source: 'edit-me/content/professional-experiences/00-morfeus-technologies.md',
      bullets: [
        'Designed and developed Morfeus, an AI/LLM-powered market intelligence platform for FX and macro trading, spanning conversational research, War Room risk monitoring, data feeds, session recaps, and Trade Lab workflows.',
        'Architected a multi-agent orchestrator that aggregated and validated outputs from 33 agents, producing consensus-backed views on currency pairs, macro events, and trade ideas.',
        'Integrated Polygon, Event Registry, Myfxbook, COT, and structured internal research datasets to power agent reasoning, market regime classification, news sentiment analysis, and research workflows.',
        'Shipped production infrastructure for authentication, subscriptions, background jobs, PDF reporting, automated tests, and CI/CD across a Next.js/FastAPI/Postgres/Redis stack.',
      ],
      projects: [
        {
          name: 'Multi-Agent Research Orchestrator',
          technologies: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI'],
          bullets: [
            'Built a multi-agent orchestration layer that merged outputs from 33 AI agents into consensus-backed research for currency pairs, macro events, and trade ideas.',
            'Used consensus validation, signal ranking, and LLM-driven synthesis to support higher-confidence market reads instead of a single-model chat flow.',
          ],
          responsibilities: 'Architecture, agent orchestration, backend integration, and product delivery.',
          source: 'User-provided Morfeus project update',
        },
        {
          name: 'War Room and Data Feed Workbench',
          technologies: ['Redis', 'Supabase', 'Postgres', 'Polygon', 'Event Registry', 'Myfxbook'],
          bullets: [
            'Built a risk dashboard that combined agent signals into risk-on and risk-off states, risk scores, priorities, and real-time monitoring views.',
            'Integrated live prices, retail sentiment, COT positioning, currency strength, seasonality, and news sentiment into a unified trading research surface.',
          ],
          responsibilities: 'Data integration, state modeling, dashboard design, and monitoring workflows.',
          source: 'User-provided Morfeus project update',
        },
        {
          name: 'Trade Lab and Product Infrastructure',
          technologies: ['Stripe', 'PDF reporting', 'Workers', 'CI/CD'],
          bullets: [
            'Implemented session recaps, PDF report generation, trade journaling, performance tracking, and strategy review workflows.',
            'Delivered product-grade capabilities including authentication, subscriptions, trial flows, payment handling, user permissions, background workers, and automated testing.',
          ],
          responsibilities: 'End-to-end product engineering across application, operations, and release readiness.',
          source: 'User-provided Morfeus project update',
        },
      ],
    },
    {
      organization: 'Cheetah Mobile (Joyme)',
      role: 'Fullstack Developer (Java/Golang)',
      startDate: '2020-08',
      endDate: '2024-12',
      context: 'Overseas Live Streaming',
      source:
        'edit-me/content/professional-experiences/01-the-deaily-observer.md, docs/ZHGOEN.MD',
      bullets: [
        'Led the design, development, and maintenance of the LiveMe risk control platform using Golang, Kafka, and Elasticsearch.',
        'Refactored core modules from Java to Go, improving task scheduling efficiency and reducing resource consumption.',
        'Introduced Kafka-based real-time event streaming and Elasticsearch user profiling, reducing risk decision latency to seconds and cutting server costs by 30%.',
        'Built and maintained a data warehouse on AWS Redshift, integrating multiple risk sources for unified analytics and reporting.',
        'Developed a streaming data ingestion platform capturing MySQL Binlog to Kafka and persisting data to Amazon S3, Hive, and analytics systems, processing over 10TB daily.',
        'Implemented a high-performance data service platform using Netty and Spring Boot, handling 40 million daily calls with flexible query modes.',
        'Created a Sqoop-JDBC plugin to support sharded table ingestion into Hive, streamlining daily ETL workflows.',
      ],
      projects: [
        {
          name: 'Joyme Risk Control Platform',
          technologies: ['Golang', 'Kafka', 'Redshift', 'Elasticsearch'],
          bullets: [
            'Rewrote core Java modules in Golang to address high latency and resource consumption in scheduled tasks.',
            'Introduced Kafka for real-time event streaming, reducing risk decision response time to seconds.',
            'Built a user profiling system with Elasticsearch for flexible rule configuration.',
            'Tuned Elasticsearch clusters, cutting server costs by approximately 30%.',
            'Developed an AWS Redshift data warehouse, integrating third-party risk services for unified visual reporting and faster analytics.',
          ],
          responsibilities: 'Solution design, core implementation, and performance tuning.',
          source: 'docs/ZHGOEN.MD',
        },
        {
          name: 'Streaming Data Ingestion Platform',
          technologies: ['Java', 'Kafka', 'Amazon S3'],
          bullets: [
            'Supported MySQL binlog capture to Kafka and data landing to Amazon S3, MySQL, and Sensors Data platform.',
            'Served streaming compute tasks and business database synchronization to Hive/Sensors, handling over 10 TB of data per day.',
          ],
          background:
            'Offline scheduled sync to Hive was time-consuming and could not meet near real-time needs for recommendation and algorithm teams.',
          responsibilities: 'End-to-end project design, development, and maintenance.',
          source: 'docs/ZHGOEN.MD',
        },
        {
          name: 'Data Service Platform',
          technologies: ['Netty', 'Spring Boot', 'MySQL'],
          bullets: [
            'Handled approximately 40 million daily calls, about 462 calls per second.',
            'Supported multiple data sources including Elasticsearch, MySQL, and Hive with flexible query modes.',
          ],
          background:
            'Business growth demanded standardized and timely data delivery via a configurable service platform.',
          responsibilities: 'Solution design, development, and maintenance.',
          source: 'docs/ZHGOEN.MD',
        },
        {
          name: 'Sqoop-JDBC Sharding Ingestion Tool',
          technologies: ['Sqoop', 'JDBC', 'Yarn', 'Hive'],
          bullets: [
            'Developed a plugin enabling Sqoop to ingest sharded tables into a single Hive table, simplifying daily data ingestion workflows.',
          ],
          background: 'Needed to collect multiple sharded tables at once into Hive.',
          responsibilities: 'Project design, development, and maintenance.',
          source: 'docs/ZHGOEN.MD',
        },
      ],
    },
    {
      organization: 'Quant Group',
      role: 'Java Backend Developer',
      startDate: '2017-02',
      endDate: '2020-08',
      context: 'Internet Finance',
      source:
        'edit-me/content/professional-experiences/02-cerebell-pacific.md, docs/ZHGOEN.MD',
      bullets: [
        'Contributed to the development and maintenance of the credit wallet backend system using Spring Boot, MyBatis, Hibernate, MySQL, Redis, and RabbitMQ, supporting over 100K DAU and peaking at 1M daily.',
        'Led the redesign of loan fund management and repayment modules, implementing circuit breakers, automated allocations, and streamlining third-party integration strategies for financing partners.',
        'Simplified integration processes for new lenders, reducing onboarding time and enhancing system maintainability.',
        'Received the Annual Best Employee award and monthly Culture Star award for outstanding technical leadership and team collaboration.',
      ],
      awards: ['Annual Best Employee', 'Monthly Culture Star'],
      projects: [
        {
          name: 'Credit Wallet Backend Support',
          technologies: ['Spring Boot', 'MyBatis', 'Hibernate', 'MySQL', 'Redis', 'RabbitMQ'],
          bullets: [
            'Supported over 100k DAU, peaking at 1M daily active users by the end of 2017.',
            'Led redesign of funding and repayment systems, implemented circuit breakers and automated allocation, and simplified funding integration.',
          ],
          background:
            'Credit Wallet offered consumer credit matching via app, WeChat, and third-party APIs, interfacing with multiple funding channels.',
          responsibilities:
            'Participated in front- and back-end modules for the credit lifecycle and led redesign work for funding and repayment systems.',
          source: 'docs/ZHGOEN.MD',
        },
      ],
    },
    {
      organization: 'Cybercloud Company Beijing',
      role: 'Software Engineer',
      startDate: '2016-05',
      endDate: '2017-02',
      context: 'Cloud Gaming Platform',
      source: 'docs/ZHGOEN.MD',
      bullets: [
        'Led development of user, product, and session management modules during a full rewrite of a legacy cloud gaming business system.',
        'Helped deploy a nationwide system with daily page views over 100 million and reduced database concurrent reads from over 500/s to approximately 30/s on non-peak days.',
        'Built a Flume to Kafka to JStorm to MongoDB/HDFS log analysis pipeline processing over 1 TB per day.',
        'Resolved high CPU usage and thread-safety issues in KafkaSpout and fixed offset skew; the system ran stably for more than 6 months.',
      ],
      projects: [
        {
          name: 'Core Business System Rewrite',
          technologies: ['Spring', 'MyBatis', 'Redis', 'MySQL'],
          bullets: [
            'Deployed nationwide with daily page views over 100 million.',
            'Reduced database concurrent reads from over 500/s to approximately 30/s on non-peak days.',
          ],
          background:
            'Legacy system spanned 10+ modules in multiple languages with high coupling and required a full rewrite without data loss.',
          responsibilities: 'Led development of user, product, and session management modules.',
          source: 'docs/ZHGOEN.MD',
        },
        {
          name: 'Big Data Log Analysis Platform',
          technologies: ['Flume', 'Kafka', 'JStorm', 'MongoDB', 'HDFS'],
          bullets: [
            'Built a log analysis pipeline processing over 1 TB per day.',
            'Resolved KafkaSpout CPU, thread-safety, and offset skew issues.',
            'Standardized transaction log processing to support revenue sharing without heavy SQL.',
          ],
          responsibilities: 'Developed JStorm tasks and production fixes.',
          source: 'docs/ZHGOEN.MD',
        },
      ],
    },
    {
      organization: 'Other Projects',
      role: 'Software Developer',
      startDate: '2015-06',
      endDate: '2016-05',
      source: 'docs/ZHGOEN.MD',
      bullets: ['Central Hospital Appointment and Call Platform.'],
    },
  ],
  education: [
    {
      institution: 'Monash University',
      credential: 'Master of Information Technology',
      field: 'Information Technology',
      startDate: '2025-07',
      endDate: '2026-12',
      source: 'ProfileREADME.md and user-provided date update.',
    },
    {
      institution: 'Beijing Jiaotong University',
      credential: 'Bachelor of Science',
      field: 'Computer Science and Technology',
      startDate: '2022-03',
      endDate: '2024-06',
      source: 'docs/ZHGOEN.MD and edit-me/content/achievements/00-degree.md',
    },
    {
      institution: 'China University of Geosciences (Beijing)',
      credential: 'Associate Degree',
      field: 'Computer Application Technology',
      startDate: '2019-09',
      endDate: '2020-12',
      source: 'docs/ZHGOEN.MD',
    },
  ],
  projects: [
    {
      name: 'Baiye-RPC',
      url: 'https://github.com/SheldonZheng/baiye-rpc',
      summary: 'A Java-based RPC scheduling framework built on Netty and CGLIB for efficient remote procedure calls.',
      technologies: ['Java', 'Netty', 'CGLIB'],
      source: 'edit-me/content/additional-info.md and docs/ZHGOEN.MD',
    },
    {
      name: 'Baiye-Task',
      url: 'https://github.com/SheldonZheng/Baiye-Task',
      summary:
        'A distributed scheduled task framework in Java with master/slave mode, dynamic JAR loading, and reflection.',
      technologies: ['Java', 'Reflection', 'Class loading'],
      source: 'edit-me/content/additional-info.md and docs/ZHGOEN.MD',
    },
    {
      name: 'baiye-framework',
      url: 'https://github.com/SheldonZheng/baiye-framework',
      summary:
        'A lightweight Java framework that mimics Spring, featuring an IOC container and AOP support via CGLIB.',
      technologies: ['Java', 'IOC', 'AOP', 'CGLIB'],
      source: 'edit-me/content/additional-info.md and docs/ZHGOEN.MD',
    },
    {
      name: 'SMZDM_Monitor',
      url: 'https://github.com/SheldonZheng/SMZDM_Monitor',
      summary: 'A Python scraper for SMZDM with keyword-based monitoring and email/WeChat notifications.',
      technologies: ['Python'],
      source: 'edit-me/content/additional-info.md and docs/ZHGOEN.MD',
    },
    {
      name: 'BaiyeJVM',
      url: 'https://github.com/SheldonZheng/BaiyeJVM',
      summary: 'A Go implementation of a Java Virtual Machine based on the "Write Your Own Java Virtual Machine" book.',
      technologies: ['Go', 'JVM'],
      source: 'edit-me/content/additional-info.md and docs/ZHGOEN.MD',
    },
  ],
  achievements: [
    {
      title: 'Bachelor of Science in Computer Science and Technology',
      organization: 'Beijing Jiaotong University',
      date: '2024',
      source: 'edit-me/content/achievements/00-degree.md',
    },
    {
      title: 'Annual Best Employee',
      organization: 'Quant Group',
      date: '',
      source: 'edit-me/content/professional-experiences/02-cerebell-pacific.md and docs/ZHGOEN.MD',
    },
    {
      title: 'Monthly Culture Star',
      organization: 'Quant Group',
      date: '',
      source: 'edit-me/content/professional-experiences/02-cerebell-pacific.md and docs/ZHGOEN.MD',
    },
  ],
  certifications: [],
  publications: [],
  talks: [],
  languages: [
    {
      name: 'English',
      proficiency: 'IELTS 6.5',
      source: 'edit-me/content/personal.md and docs/ZHGOEN.MD',
    },
    {
      name: 'Mandarin',
      proficiency: 'Native',
      source: 'ProfileREADME.md and user-provided proficiency update',
    },
  ],
  profileImages: [],
  currentFocus: [
    {
      name: 'AI Agent Framework',
      url: '',
      summary: 'Developing a modular LangChain-based framework for enterprise automation.',
      technologies: ['LangChain', 'AI agents'],
      source: 'ProfileREADME.md',
      todo: 'TODO: Add repository link or remove from public project list if not public.',
    },
    {
      name: 'RAG Pipeline',
      url: '',
      summary: 'Building production-ready RAG systems with hybrid search capabilities.',
      technologies: ['RAG', 'Vector search'],
      source: 'ProfileREADME.md',
      todo: 'TODO: Add repository link or remove from public project list if not public.',
    },
    {
      name: 'LLM Gateway',
      url: '',
      summary: 'Creating a unified API gateway for multiple LLM providers with intelligent routing.',
      technologies: ['LLM routing'],
      source: 'ProfileREADME.md',
      todo: 'TODO: Add repository link or remove from public project list if not public.',
    },
    {
      name: 'Trading Agent Orchestrator',
      url: '',
      summary: 'Designing multi-agent systems for automated trading platform operations.',
      technologies: ['Multi-agent systems'],
      source: 'ProfileREADME.md',
      todo: 'TODO: Add repository link or remove from public project list if not public.',
    },
  ],
  resumeNotes: [
    'No profile image or avatar file was found in nextjs-resume.',
    'No publications, talks, or certifications were found in audited source files.',
    'Package metadata and README template references to the upstream template author are not personal profile data.',
  ],
};
