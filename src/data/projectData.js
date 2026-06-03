export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Professional", value: "professional" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Data & ML", value: "data-ml" },
];

export const projects = [
  {
    title: "Neo Edukasi Education Platform",
    year: "2024 - Present",
    description:
      "Production Laravel platform for education operations, billing, reporting, WhatsApp notifications, tutor workflows, and admin dashboards.",
    impact: [
      "Worked on 177 merged PRs across billing, reporting, notifications, dashboards, and data maintenance.",
      "Fixed prepaid, postpaid, and per-meet invoice reconciliation flows for operational reporting.",
      "Wrote feature tests, refactored critical flows, and optimized MySQL queries to cut load time by up to 40%.",
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
    privateCase: true,
    links: [],
  },
  {
    title: "StunBy Machine Learning Capstone",
    year: "2024",
    description:
      "Bangkit capstone ML/API workflows for baby height detection, nutrition prediction, WHO Z-score checks, food tracking, and chatbot support.",
    impact: [
      "Integrated Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG workflows for stunting-related product features.",
      "Documented API endpoints for nutrition prediction, growth classification, tracking, and recommendations.",
      "Improved model and chatbot integration through team PRs in the public Bangkit organization repositories.",
    ],
    technologies: ["Python", "TensorFlow", "YOLO", "Flask API", "Vertex AI"],
    categories: ["professional", "data-ml"],
    visualLabel: "ML/API Capstone",
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
    title: "Recycle Reward Web Application",
    year: "2024",
    description:
      "Laravel and Filament web application for recyclable waste management, rewards, complaint handling, profile editing, notifications, and dashboard charts.",
    impact: [
      "Built reward and complaint modules, dashboard charts, profile flows, notifications, and user panel setup.",
      "Contributed nine merged PRs and project setup documentation for maintainable Laravel development.",
      "Used MySQL-backed Laravel workflows with Filament administration patterns.",
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
    title: "Share Task App Suite",
    year: "2024",
    description:
      "Android Kotlin task-sharing application with a Next.js API, Prisma, PostgreSQL, and a deployed API surface.",
    impact: [
      "Built a mobile-first task workflow backed by a TypeScript API service.",
      "Connected Android features to a Prisma and PostgreSQL backend deployed on Vercel.",
      "Kept app and API repositories separated for clearer mobile/backend responsibilities.",
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
        label: "API",
        href: "https://share-task-app.vercel.app",
        type: "demo",
      },
    ],
  },
  {
    title: "Mobile Laundry Android Contribution",
    year: "2025",
    description:
      "Jetpack Compose Android contribution for laundry order management, authentication flow, splash screen, and customer dashboard cards.",
    impact: [
      "Contributed merged PRs for customer dashboard order cards, navigation logic, and order detail improvements.",
      "Worked with Compose UI, ViewModel flow, and Android order-management screens.",
      "Supported a team codebase in the Laundry Almada organization.",
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
    title: "Unitip Mobile and API Contribution",
    year: "2025",
    description:
      "Team contribution across a Jetpack Compose mobile app and TypeScript API for the Unitip application.",
    impact: [
      "Contributed to mobile and API repositories in the Unitip organization.",
      "Worked with Kotlin, Jetpack Compose, TypeScript, and API documentation workflows.",
      "Kept public source links available while omitting the unavailable API demo from the portfolio.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "TypeScript", "API"],
    categories: ["professional", "mobile", "web"],
    visualLabel: "Mobile/API Team",
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
    title: "Air Quality Dashboard",
    year: "2024",
    description:
      "Streamlit dashboard and notebook analysis for Wanshouxigong air quality data, built for a Python data analysis project.",
    impact: [
      "Prepared a reproducible Python environment for analysis and dashboard execution.",
      "Published a live Streamlit dashboard for interactive exploration.",
      "Used notebook-driven analysis to turn air quality data into a deployable dashboard.",
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
    title: "News Recommendation and NER",
    year: "2024",
    description:
      "Indonesian news recommendation, search, sentiment, and named entity recognition notebook using TF-IDF, cosine similarity, and NER models.",
    impact: [
      "Explored an Indonesian news dataset with nearly 500k rows.",
      "Implemented recommendation and search workflows with TF-IDF vectorization and cosine similarity.",
      "Integrated Indonesian NER model usage for entity extraction.",
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
    title: "Turing Machine Simulator",
    year: "2024",
    description:
      "Astro-based simulator for exploring Turing machine behavior through an interactive web interface.",
    impact: [
      "Built and deployed an educational simulator with Astro.",
      "Published a GitHub Pages demo for quick access and testing.",
      "Used a focused interface to make formal language concepts easier to inspect.",
    ],
    technologies: ["Astro", "JavaScript", "GitHub Pages"],
    categories: ["web"],
    visualLabel: "Astro Simulator",
    accent: "#fb7185",
    links: [
      {
        label: "Demo",
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
];

export const featuredProjects = projects.filter((project) => project.featured);
