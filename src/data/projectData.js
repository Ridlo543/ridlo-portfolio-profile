export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Professional", value: "professional" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Data & ML", value: "data-ml" },
];

export const projects = [
  {
    id: "ainystudy",
    title: "AinyStudy: Adaptive AI Language Learning",
    year: "2026",
    description:
      "Full-stack adaptive Japanese language (JLPT N5–N1) and TOEIC preparation platform featuring streaming conversational AI tutors via RAG, speech assessment, and spaced repetition drills.",
    impact: [
      "Built Next.js 16 App Router platform with React 19, Tailwind CSS v4, PostgreSQL, and Drizzle ORM.",
      "Engineered streaming AI tutor dialogues with contextual retrieval-augmented generation (RAG).",
      "Integrated audio speech evaluation and automated Playwright test suites for placement algorithms.",
    ],
    technologies: ["Next.js 16", "TypeScript", "PostgreSQL", "Drizzle ORM", "Playwright", "RAG"],
    categories: ["web", "data-ml"],
    visualLabel: "AI / EdTech",
    accent: "#ec4899",
    featured: true,
    privateCase: false,
    links: [
      {
        label: "Live Demo",
        href: "https://ainystudy.ainything.online",
        type: "demo",
      },
    ],
  },
  {
    id: "neo-edukasi",
    title: "Neo Edukasi Education Platform",
    year: "2024 - Present",
    description:
      "Production Laravel platform for daily education operations, automated billing reconciliation, WhatsApp notification dispatch, tutor management, and administrative dashboards.",
    impact: [
      "Delivered 167+ merged PRs across billing, monthly reporting, automated WhatsApp alerts, and data maintenance (194+ across repositories).",
      "Resolved prepaid, postpaid, and per-meet invoice reconciliation logic for accurate salary and financial reporting.",
      "Wrote feature tests and optimized MySQL queries and indexes to improve critical report response times.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Feature Testing",
      "WhatsApp API",
    ],
    categories: ["professional", "web"],
    visualLabel: "Production Platform",
    accent: "#5eead4",
    featured: true,
    privateCase: false,
    links: [
      {
        type: "demo",
        label: "Live Web App",
        href: "https://app.neo-edukasi.com/",
      },
      {
        type: "demo",
        label: "Landing Page (Astro)",
        href: "https://neo-edukasi.com/",
      },
    ],
  },
  {
    id: "stunby-ml",
    title: "StunBy Machine Learning Capstone",
    year: "2024",
    description:
      "Bangkit Academy capstone pipeline for child growth classification, nutrition tracking, WHO Z-score calculation, and AI chatbot support.",
    impact: [
      "Engineered Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG services for growth classification.",
      "Designed and documented REST endpoints for nutrition checks, image classification handoff, and recommendations.",
      "Coordinated with cross-functional mobile and cloud teams through GitHub pull requests in public organization repos.",
    ],
    technologies: ["Python", "TensorFlow", "YOLO", "Flask API", "Vertex AI"],
    categories: ["professional", "data-ml"],
    visualLabel: "ML / API Capstone",
    accent: "#a78bfa",
    featured: true,
    links: [
      {
        label: "ML Repo",
        href: "https://github.com/StunBy-Bangkit-Capstone/Machine-Learning",
        type: "code",
      },
      {
        label: "API Repo",
        href: "https://github.com/StunBy-Bangkit-Capstone/ai-integrated",
        type: "code",
      },
    ],
  },
  {
    id: "recycle-reward",
    title: "Recycle Reward Web Application",
    year: "2024",
    description:
      "Waste management platform with Laravel and Filament admin panel for recyclable collection, point reward calculations, complaint tickets, and analytics.",
    impact: [
      "Implemented reward calculation modules, ticket filing system, dashboard metrics, and user management panel.",
      "Contributed 9 merged pull requests and clear setup documentation for team development.",
      "Structured MySQL schema and relational workflows following Filament admin conventions.",
    ],
    technologies: ["Laravel", "Filament", "PHP", "MySQL", "Tailwind CSS"],
    categories: ["web"],
    visualLabel: "Laravel / Filament",
    accent: "#34d399",
    featured: true,
    links: [
      {
        label: "Repository",
        href: "https://github.com/Ridlo543/recycle-reward-app",
        type: "code",
      },
    ],
  },
  {
    id: "share-task",
    title: "Share Task App Suite",
    year: "2024",
    description:
      "Android task collaboration client backed by a TypeScript Next.js API, Prisma ORM, and PostgreSQL database deployed on Vercel.",
    impact: [
      "Built mobile task management flows connected to authenticated REST API endpoints.",
      "Designed relational schemas and database migrations with Prisma and PostgreSQL.",
      "Separated mobile and API repos for clear decoupling and independent deployment.",
    ],
    technologies: ["Kotlin", "Android", "Next.js", "Prisma", "PostgreSQL"],
    categories: ["mobile", "web"],
    visualLabel: "Android + API",
    accent: "#38bdf8",
    links: [
      {
        label: "Mobile Repo",
        href: "https://github.com/Ridlo543/share-task-app",
        type: "code",
      },
      {
        label: "API Repo",
        href: "https://github.com/Ridlo543/share-task-app-api",
        type: "code",
      },
      {
        label: "Live API",
        href: "https://share-task-app.vercel.app",
        type: "demo",
      },
    ],
  },
  {
    id: "mobile-laundry",
    title: "Mobile Laundry Android Contribution",
    year: "2025",
    description:
      "Jetpack Compose Android contribution for laundry order management, customer status tracking, and authentication flows.",
    impact: [
      "Submitted merged PRs for customer dashboard order cards, navigation state, and detail screens.",
      "Built declarative Compose UI components following Android ViewModel architecture.",
      "Collaborated in a team repository within the Laundry Almada organization.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android", "ViewModel"],
    categories: ["professional", "mobile"],
    visualLabel: "Compose App",
    accent: "#60a5fa",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Ridlo543/mobile-laundry-mbkm25",
        type: "code",
      },
    ],
  },
  {
    id: "unitip-mobile",
    title: "Unitip Mobile & API Contribution",
    year: "2025",
    description:
      "Jetpack Compose Android app and TypeScript API for a peer-to-peer parcel and food delivery service.",
    impact: [
      "Contributed to both mobile UI screens and backend API services across team repositories.",
      "Implemented Compose state flows and documented endpoints for client-server integration.",
      "Ensured clean repository hygiene and reproducible local build instructions.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "TypeScript", "REST API"],
    categories: ["professional", "mobile", "web"],
    visualLabel: "Mobile / API",
    accent: "#f59e0b",
    links: [
      {
        label: "Mobile Repo",
        href: "https://github.com/Ridlo543/unitip-mobile-native",
        type: "code",
      },
      {
        label: "API Repo",
        href: "https://github.com/Ridlo543/unitip-nextjs-api",
        type: "code",
      },
    ],
  },
  {
    id: "air-quality",
    title: "Air Quality Analytics Dashboard",
    year: "2024",
    description:
      "Interactive Streamlit dashboard analyzing sensor data from Beijing air quality stations, with exploratory Jupyter notebooks.",
    impact: [
      "Prepared data processing and visualization pipelines using Pandas and Matplotlib.",
      "Deployed interactive dashboard to Streamlit Cloud for open inspection.",
      "Structured reproducible virtual environment and analysis notebooks.",
    ],
    technologies: ["Python", "Streamlit", "Pandas", "Jupyter Notebook"],
    categories: ["data-ml", "web"],
    visualLabel: "Data Dashboard",
    accent: "#22d3ee",
    links: [
      {
        label: "Dashboard",
        href: "https://dashboard-air-quality-wanshouxigong-ridlo.streamlit.app/",
        type: "demo",
      },
      {
        label: "Repository",
        href: "https://github.com/Ridlo543/analytic-data-air-quality",
        type: "code",
      },
    ],
  },
  {
    id: "news-recommendation",
    title: "News Recommendation & NER",
    year: "2024",
    description:
      "Indonesian news recommendation, search engine, and Named Entity Recognition pipeline over 500k articles.",
    impact: [
      "Analyzed large-scale Indonesian corpus with TF-IDF vectorization and cosine similarity.",
      "Built search and content recommendation mechanisms for news headlines and bodies.",
      "Integrated pretrained transformer NER models for Indonesian entity extraction.",
    ],
    technologies: ["Python", "NLP", "TF-IDF", "NER", "Jupyter Notebook"],
    categories: ["data-ml"],
    visualLabel: "NLP Notebook",
    accent: "#c084fc",
    links: [
      {
        label: "Notebook",
        href: "https://github.com/Ridlo543/news-recommendation-NER/blob/main/sistem-rekomendasi-ner-news.ipynb",
        type: "code",
      },
      {
        label: "Repository",
        href: "https://github.com/Ridlo543/news-recommendation-NER",
        type: "code",
      },
    ],
  },
  {
    id: "turing-machine",
    title: "Turing Machine Simulator",
    year: "2024",
    description:
      "Interactive educational web simulator for visualizing Turing machine state transitions, tape movements, and formal grammars.",
    impact: [
      "Built single-page interactive simulator with Astro and vanilla JavaScript.",
      "Deployed to GitHub Pages for instant student access during university coursework.",
      "Visualized step-by-step state changes and tape head shifts with zero external UI dependencies.",
    ],
    technologies: ["Astro", "JavaScript", "GitHub Pages"],
    categories: ["web"],
    visualLabel: "Astro Simulator",
    accent: "#fb7185",
    links: [
      {
        label: "Live Demo",
        href: "https://ridlo543.github.io/turing-machine-astro/",
        type: "demo",
      },
      {
        label: "Repository",
        href: "https://github.com/Ridlo543/turing-machine-astro",
        type: "code",
      },
    ],
  },
  {
    id: "karaoke-app",
    title: "Java Karaoke Desktop Application",
    year: "2024",
    description:
      "Java desktop karaoke application built with structured MVC architecture, multimedia audio playback engine, package session billing, and transaction receipt generation.",
    impact: [
      "Engineered structured MVC architecture separating Controller business logic, data Models, and custom View components.",
      "Developed multimedia audio playback, user authentication flows, and automated transaction billing calculations.",
      "Delivered full public GitHub documentation including architectural diagrams and UI workflow screenshots.",
    ],
    technologies: ["Java", "OOP", "MVC Architecture", "Desktop GUI", "Multimedia Audio"],
    categories: ["software"],
    visualLabel: "Java Desktop App",
    accent: "#f59e0b",
    links: [
      {
        label: "Repository",
        href: "https://github.com/Ridlo543/karaoke-project",
        type: "code",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
