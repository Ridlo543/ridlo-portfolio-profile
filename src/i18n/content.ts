// Bilingual content data for projects, experience, and credentials

export type BilingualText = {
  id: string;
  en: string;
};

export type BilingualProject = {
  id: string;
  title: string;
  year: BilingualText;
  visualLabel: BilingualText;
  description: BilingualText;
  impact: {
    id: string[];
    en: string[];
  };
  technologies: string[];
  categories: string[];
  accent: string;
  featured?: boolean;
  privateCase?: boolean;
  links: Array<{
    label: BilingualText;
    href: string;
    type: "code" | "demo";
  }>;
};

export const bilingualProjects: BilingualProject[] = [
  {
    id: "neo-edukasi",
    title: "Neo Edukasi Education Platform",
    year: { id: "2024 - Sekarang", en: "2024 - Present" },
    visualLabel: { id: "Production Platform", en: "Production Platform" },
    description: {
      id: "Platform production Laravel untuk operasional bimbingan belajar harian, otomatisasi rekonsiliasi billing, dispatch notifikasi WhatsApp, manajemen tutor, dan dashboard admin.",
      en: "Production Laravel platform for daily education operations, automated billing reconciliation, WhatsApp notification dispatch, tutor management, and administrative dashboards.",
    },
    impact: {
      id: [
        "Menulis 177 merged PR untuk fitur backend Laravel di production, otomatisasi reporting bulanan, dispatch alert WhatsApp, dan maintenance data.",
        "Menyelesaikan logika rekonsiliasi invoice (prabayar, pascabayar, dan per sesi) untuk akurasi gaji tutor dan laporan keuangan.",
        "Menulis feature test suite dan mengoptimasi query MySQL, memangkas waktu muat laporan krusial hingga 40%.",
      ],
      en: [
        "Authored 177 merged PRs across billing, monthly reporting, automated WhatsApp alerts, and data maintenance.",
        "Resolved prepaid, postpaid, and per-meet invoice reconciliation logic for accurate salary and financial reporting.",
        "Wrote feature tests and optimized MySQL queries, reducing critical report query load times by up to 40%.",
      ],
    },
    technologies: ["Laravel", "PHP", "MySQL", "Feature Testing", "WhatsApp API"],
    categories: ["professional", "web"],
    accent: "#5eead4",
    featured: true,
    privateCase: true,
    links: [],
  },
  {
    id: "stunby-ml",
    title: "StunBy Machine Learning Capstone",
    year: { id: "2024", en: "2024" },
    visualLabel: { id: "ML / API Capstone", en: "ML / API Capstone" },
    description: {
      id: "Pipeline capstone Bangkit Academy untuk klasifikasi pertumbuhan anak, tracking nutrisi, kalkulasi Z-score standar WHO, dan chatbot AI pendukung.",
      en: "Bangkit Academy capstone pipeline for child growth classification, nutrition tracking, WHO Z-score calculation, and AI chatbot support.",
    },
    impact: {
      id: [
        "Mengembangkan microservice Python, TensorFlow, YOLO, Flask API, dan Vertex AI RAG untuk klasifikasi tumbuh kembang anak.",
        "Merancang dan mendokumentasikan spesifikasi REST API untuk integrasi aplikasi mobile dan cloud backend.",
        "Berkolaborasi lintas tim mobile dan cloud melalui pull request di organisasi GitHub publik.",
      ],
      en: [
        "Engineered Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG services for growth classification.",
        "Designed and documented REST endpoints for nutrition checks, image classification handoff, and recommendations.",
        "Coordinated with cross-functional mobile and cloud teams through GitHub pull requests in public organization repos.",
      ],
    },
    technologies: ["Python", "TensorFlow", "YOLO", "Flask API", "Vertex AI"],
    categories: ["professional", "data-ml"],
    accent: "#a78bfa",
    featured: true,
    links: [
      {
        label: { id: "ML Repo", en: "ML Repo" },
        href: "https://github.com/StunBy-Bangkit-Capstone/Machine-Learning",
        type: "code",
      },
      {
        label: { id: "API Repo", en: "API Repo" },
        href: "https://github.com/StunBy-Bangkit-Capstone/ai-integrated",
        type: "code",
      },
    ],
  },
  {
    id: "recycle-reward",
    title: "Recycle Reward Web Application",
    year: { id: "2024", en: "2024" },
    visualLabel: { id: "Laravel / Filament", en: "Laravel / Filament" },
    description: {
      id: "Aplikasi pengelolaan sampah daur ulang berbasis Laravel dan Filament admin panel dengan kalkulasi reward poin, tiket pengaduan, dan dashboard analitik.",
      en: "Waste management platform with Laravel and Filament admin panel for recyclable collection, point reward calculations, complaint tickets, and analytics.",
    },
    impact: {
      id: [
        "Mengimplementasikan modul kalkulasi poin reward, sistem tiket aduan, metrik dashboard, dan panel manajemen user.",
        "Menyumbang 9 merged PR serta menyusun dokumentasi setup lokal yang jelas untuk tim developer.",
        "Menata skema MySQL dan alur relasional mengikuti konvensi Filament admin.",
      ],
      en: [
        "Implemented reward calculation modules, ticket filing system, dashboard metrics, and user management panel.",
        "Contributed 9 merged pull requests and clear setup documentation for team development.",
        "Structured MySQL schema and relational workflows following Filament admin conventions.",
      ],
    },
    technologies: ["Laravel", "Filament", "PHP", "MySQL", "Tailwind CSS"],
    categories: ["web"],
    accent: "#34d399",
    featured: true,
    links: [
      {
        label: { id: "Repository", en: "Repository" },
        href: "https://github.com/Ridlo543/recycle-reward-app",
        type: "code",
      },
    ],
  },
  {
    id: "share-task",
    title: "Share Task App Suite",
    year: { id: "2024", en: "2024" },
    visualLabel: { id: "Android + API", en: "Android + API" },
    description: {
      id: "Aplikasi task management kolaboratif di Android yang terhubung dengan backend Next.js TypeScript, Prisma ORM, dan database PostgreSQL di Vercel.",
      en: "Android task collaboration client backed by a TypeScript Next.js API, Prisma ORM, and PostgreSQL database deployed on Vercel.",
    },
    impact: {
      id: [
        "Membangun flow manajemen task mobile yang terhubung ke authenticated REST API endpoints.",
        "Merancang skema relasional dan migrasi database dengan Prisma dan PostgreSQL.",
        "Memisahkan repo mobile dan API untuk decoupling sistem yang bersih.",
      ],
      en: [
        "Built mobile task management flows connected to authenticated REST API endpoints.",
        "Designed relational schemas and database migrations with Prisma and PostgreSQL.",
        "Separated mobile and API repos for clear decoupling and independent deployment.",
      ],
    },
    technologies: ["Kotlin", "Android", "Next.js", "Prisma", "PostgreSQL"],
    categories: ["mobile", "web"],
    accent: "#38bdf8",
    links: [
      {
        label: { id: "Mobile Repo", en: "Mobile Repo" },
        href: "https://github.com/Ridlo543/share-task-app",
        type: "code",
      },
      {
        label: { id: "API Repo", en: "API Repo" },
        href: "https://github.com/Ridlo543/share-task-app-api",
        type: "code",
      },
      {
        label: { id: "Live API", en: "Live API" },
        href: "https://share-task-app.vercel.app",
        type: "demo",
      },
    ],
  },
  {
    id: "mobile-laundry",
    title: "Mobile Laundry Android Contribution",
    year: { id: "2025", en: "2025" },
    visualLabel: { id: "Compose App", en: "Compose App" },
    description: {
      id: "Kontribusi aplikasi Android Jetpack Compose untuk manajemen order laundry, tracking status cucian pelanggan, dan authentication flow.",
      en: "Jetpack Compose Android contribution for laundry order management, customer status tracking, and authentication flows.",
    },
    impact: {
      id: [
        "Mengirim merged PR untuk card status order di dashboard customer dan layar detail.",
        "Membangun komponen UI deklaratif Compose dengan arsitektur Android ViewModel.",
        "Berkolaborasi aktif di team repository organisasi Laundry Almada.",
      ],
      en: [
        "Submitted merged PRs for customer dashboard order cards, navigation state, and detail screens.",
        "Built declarative Compose UI components following Android ViewModel architecture.",
        "Collaborated in a team repository within the Laundry Almada organization.",
      ],
    },
    technologies: ["Kotlin", "Jetpack Compose", "Android", "ViewModel"],
    categories: ["professional", "mobile"],
    accent: "#60a5fa",
    links: [
      {
        label: { id: "Repository", en: "Repository" },
        href: "https://github.com/Ridlo543/mobile-laundry-mbkm25",
        type: "code",
      },
    ],
  },
  {
    id: "unitip-mobile",
    title: "Unitip Mobile & API Contribution",
    year: { id: "2025", en: "2025" },
    visualLabel: { id: "Mobile / API", en: "Mobile / API" },
    description: {
      id: "Aplikasi Android Jetpack Compose dan backend TypeScript API untuk layanan jasa titip barang dan makanan antarmahasiswa.",
      en: "Jetpack Compose Android app and TypeScript API for a peer-to-peer parcel and food delivery service.",
    },
    impact: {
      id: [
        "Berkontribusi pada screen antarmuka Android Compose dan endpoint service backend API.",
        "Mengimplementasikan state flow Compose serta menyusun dokumentasi kontrak endpoint.",
        "Memastikan repo hygiene dan instruksi local build yang rapi.",
      ],
      en: [
        "Contributed to both mobile UI screens and backend API services across team repositories.",
        "Implemented Compose state flows and documented endpoints for client-server integration.",
        "Ensured clean repository hygiene and reproducible local build instructions.",
      ],
    },
    technologies: ["Kotlin", "Jetpack Compose", "TypeScript", "REST API"],
    categories: ["professional", "mobile", "web"],
    accent: "#f59e0b",
    links: [
      {
        label: { id: "Mobile Repo", en: "Mobile Repo" },
        href: "https://github.com/Ridlo543/unitip-mobile-native",
        type: "code",
      },
      {
        label: { id: "API Repo", en: "API Repo" },
        href: "https://github.com/Ridlo543/unitip-nextjs-api",
        type: "code",
      },
    ],
  },
  {
    id: "air-quality",
    title: "Air Quality Analytics Dashboard",
    year: { id: "2024", en: "2024" },
    visualLabel: { id: "Data Dashboard", en: "Data Dashboard" },
    description: {
      id: "Dashboard interaktif Streamlit untuk menganalisis data sensor stasiun kualitas udara Beijing, dilengkapi eksplorasi Jupyter notebook.",
      en: "Interactive Streamlit dashboard analyzing sensor data from Beijing air quality stations, with exploratory Jupyter notebooks.",
    },
    impact: {
      id: [
        "Menyiapkan pipeline data processing dan visualisasi menggunakan Pandas dan Matplotlib.",
        "Mendeploy dashboard interaktif ke Streamlit Cloud untuk akses terbuka.",
        "Menyusun notebook eksplorasi analisis yang terstruktur dan mudah di-reproduce.",
      ],
      en: [
        "Prepared data processing and visualization pipelines using Pandas and Matplotlib.",
        "Deployed interactive dashboard to Streamlit Cloud for open inspection.",
        "Structured reproducible virtual environment and analysis notebooks.",
      ],
    },
    technologies: ["Python", "Streamlit", "Pandas", "Jupyter Notebook"],
    categories: ["data-ml", "web"],
    accent: "#22d3ee",
    links: [
      {
        label: { id: "Dashboard", en: "Dashboard" },
        href: "https://dashboard-air-quality-wanshouxigong-ridlo.streamlit.app/",
        type: "demo",
      },
      {
        label: { id: "Repository", en: "Repository" },
        href: "https://github.com/Ridlo543/analytic-data-air-quality",
        type: "code",
      },
    ],
  },
  {
    id: "news-recommendation",
    title: "News Recommendation & NER",
    year: { id: "2024", en: "2024" },
    visualLabel: { id: "NLP Notebook", en: "NLP Notebook" },
    description: {
      id: "Sistem rekomendasi berita bahasa Indonesia, search engine berbasis TF-IDF, dan Named Entity Recognition dari 500k+ artikel.",
      en: "Indonesian news recommendation, search engine, and Named Entity Recognition pipeline over 500k articles.",
    },
    impact: {
      id: [
        "Menganalisis korpus teks Indonesia skala besar dengan TF-IDF vectorization dan cosine similarity.",
        "Membangun mekanisme pencarian dan rekomendasi artikel berita terkait.",
        "Mengintegrasikan model transformer pre-trained untuk ekstraksi entitas bernama bahasa Indonesia.",
      ],
      en: [
        "Analyzed large-scale Indonesian corpus with TF-IDF vectorization and cosine similarity.",
        "Built search and content recommendation mechanisms for news headlines and bodies.",
        "Integrated pretrained transformer NER models for Indonesian entity extraction.",
      ],
    },
    technologies: ["Python", "NLP", "TF-IDF", "NER", "Jupyter Notebook"],
    categories: ["data-ml"],
    accent: "#c084fc",
    links: [
      {
        label: { id: "Notebook", en: "Notebook" },
        href: "https://github.com/Ridlo543/news-recommendation-NER/blob/main/sistem-rekomendasi-ner-news.ipynb",
        type: "code",
      },
      {
        label: { id: "Repository", en: "Repository" },
        href: "https://github.com/Ridlo543/news-recommendation-NER",
        type: "code",
      },
    ],
  },
  {
    id: "turing-machine",
    title: "Turing Machine Simulator",
    year: { id: "2024", en: "2024" },
    visualLabel: { id: "Astro Simulator", en: "Astro Simulator" },
    description: {
      id: "Simulator web interaktif untuk memvisualisasikan transisi state mesin Turing, pergerakan tape head, dan formal grammar.",
      en: "Interactive educational web simulator for visualizing Turing machine state transitions, tape movements, and formal grammars.",
    },
    impact: {
      id: [
        "Membangun simulator interaktif berbasis Astro dan vanilla JavaScript.",
        "Mendeploy aplikasi ke GitHub Pages untuk akses instan mahasiswa saat perkuliahan.",
        "Memvisualisasikan step-by-step perubahan state dan shift tape head tanpa dependency UI yang berat.",
      ],
      en: [
        "Built single-page interactive simulator with Astro and vanilla JavaScript.",
        "Deployed to GitHub Pages for instant student access during university coursework.",
        "Visualized step-by-step state changes and tape head shifts with zero external UI dependencies.",
      ],
    },
    technologies: ["Astro", "JavaScript", "GitHub Pages"],
    categories: ["web"],
    accent: "#fb7185",
    links: [
      {
        label: { id: "Live Demo", en: "Live Demo" },
        href: "https://ridlo543.github.io/turing-machine-astro/",
        type: "demo",
      },
      {
        label: { id: "Repository", en: "Repository" },
        href: "https://github.com/Ridlo543/turing-machine-astro",
        type: "code",
      },
    ],
  },
];

export type BilingualExperience = {
  id: string;
  role: BilingualText;
  organization: string;
  location: string;
  time: BilingualText;
  badge: BilingualText;
  description: BilingualText;
  list: {
    id: string[];
    en: string[];
  };
};

export const bilingualExperiences: BilingualExperience[] = [
  {
    id: "neo-edukasi-dev",
    role: { id: "Web Developer", en: "Web Developer" },
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: { id: "Apr 2024 - Sekarang", en: "Apr 2024 - Present" },
    badge: { id: "Current Role", en: "Current Role" },
    description: {
      id: "Developer utama platform operasional: rekonsiliasi billing, reporting, dan manajemen tutor.",
      en: "Main operational platform developer for tutoring services, billing reconciliation, reporting, and tutor management.",
    },
    list: {
      id: [
        "Menulis 177 merged PR untuk fitur backend Laravel di production, otomatisasi reporting, dan maintenance harian.",
        "Merancang rekonsiliasi invoice otomatis (prabayar, pascabayar, dan per sesi) untuk kemudahan laporan keuangan bulanan.",
        "Menulis test suite fitur dan mengoptimasi query kompleks MySQL, memangkas waktu muat laporan utama hingga 40%.",
        "Mengintegrasikan WhatsApp API untuk pengiriman notifikasi otomatis kepada orang tua, siswa, dan tutor.",
      ],
      en: [
        "Authored 177 merged PRs for production Laravel backend features, automated reporting, and daily operational fixes.",
        "Engineered automated prepaid, postpaid, and per-session invoice reconciliation, streamlining monthly financial reports.",
        "Wrote feature test suites and optimized complex MySQL joins, cutting critical report load times by up to 40%.",
        "Integrated WhatsApp API for automated notification dispatch to parents, students, and tutors.",
      ],
    },
  },
  {
    id: "bangkit-ml",
    role: { id: "Machine Learning Cohort", en: "Machine Learning Cohort" },
    organization: "Bangkit Academy (Google, GoTo, Traveloka)",
    location: "Bandung, Indonesia",
    time: { id: "Sep 2024 - Jan 2025", en: "Sep 2024 - Jan 2025" },
    badge: { id: "Graduated", en: "Graduated" },
    description: {
      id: "Terpilih dalam program MSIB Batch 2 alur Machine Learning; membangun produk capstone StunBy.",
      en: "Selected for MSIB Batch 2 in the Machine Learning learning path; built the StunBy capstone product.",
    },
    list: {
      id: [
        "Mengembangkan microservice Python, TensorFlow, YOLO, Flask API, dan Vertex AI RAG untuk monitoring kesehatan anak.",
        "Menyusun spesifikasi REST API dan menghubungkan inferensi model dengan infrastruktur mobile dan cloud.",
        "Menyelesaikan seluruh sertifikasi Machine Learning, Deep Learning, dan Google Cloud.",
      ],
      en: [
        "Developed Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG microservices for child health monitoring.",
        "Documented REST API specifications and connected model inference outputs with mobile and cloud infrastructure.",
        "Completed certification courses in Machine Learning, Deep Learning, and Google Cloud.",
      ],
    },
  },
  {
    id: "asdos-database",
    role: { id: "Asisten Dosen - Mata Kuliah Basis Data", en: "Assistant Lecturer - Database Course" },
    organization: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta, Indonesia",
    time: { id: "Sep 2024 - Jan 2025", en: "Sep 2024 - Jan 2025" },
    badge: { id: "Academic", en: "Academic" },
    description: {
      id: "Membimbing mahasiswa S1 Informatika dalam pemodelan database relasional, praktik SQL, dan query debugging.",
      en: "Guided undergraduate students through relational database modeling, SQL practice, and query debugging.",
    },
    list: {
      id: [
        "Mementori 40+ mahasiswa dalam normalisasi, ER diagram, query SQL kompleks, dan transaction handling.",
        "Membantu perancangan skema dan strategi indexing database MySQL serta PostgreSQL.",
      ],
      en: [
        "Mentored 40+ students in normalization, ER diagrams, complex SQL queries, and transaction handling.",
        "Assisted students with MySQL and PostgreSQL schema design and indexing strategies.",
      ],
    },
  },
  {
    id: "neo-edukasi-intern",
    role: { id: "Web Developer Intern", en: "Web Developer Intern" },
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: { id: "Jan 2024 - Mar 2024", en: "Jan 2024 - Mar 2024" },
    badge: { id: "Internship", en: "Internship" },
    description: {
      id: "Membangun dan merilis landing page modern perusahaan menggunakan Astro, React, dan Tailwind CSS.",
      en: "Built and launched a modern company landing page with Astro, React, and Tailwind CSS.",
    },
    list: {
      id: [
        "Meningkatkan skor Google PageSpeed Insights dari 65 ke 95+ melalui optimasi asset dan island architecture.",
        "Memangkas loading time landing page hingga 50% dan berkontribusi menurunkan bounce rate pengunjung sebesar 20%.",
      ],
      en: [
        "Raised Google PageSpeed Insights score from 65 to 95+ through asset optimization and island architecture.",
        "Reduced landing page load time by 50% and contributed to a 20% decrease in user bounce rate.",
      ],
    },
  },
  {
    id: "asdos-statistika",
    role: { id: "Asisten Praktikum - Statistika", en: "Teaching Assistant - Statistics Practicum" },
    organization: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta, Indonesia",
    time: { id: "Agu 2023 - Des 2023", en: "Aug 2023 - Dec 2023" },
    badge: { id: "Academic", en: "Academic" },
    description: {
      id: "Menyusun modul praktikum analisis data berbasis bahasa R untuk program studi Sains Data UNS.",
      en: "Developed R-based statistical analysis course materials for the Data Science undergraduate program.",
    },
    list: {
      id: [
        "Menulis 9 modul praktikum bahasa R mencakup uji hipotesis, regression modeling, dan visualisasi data.",
        "Membimbing 40+ mahasiswa dalam manipulasi data hands-on dan problem solving statistik.",
      ],
      en: [
        "Authored 9 practical modules in R covering hypothesis testing, regression modeling, and data visualization.",
        "Guided 40+ students through hands-on data manipulation and statistical problem solving.",
      ],
    },
  },
];

export const bilingualEducation = {
  title: { id: "S1 Informatika", en: "Bachelor of Computer Science, Informatics" },
  institution: { id: "Universitas Sebelas Maret", en: "Sebelas Maret University" },
  location: "Surakarta, Indonesia",
  period: { id: "Agu 2022 - Jul 2026", en: "Aug 2022 - Jul 2026" },
  gpa: { id: "IPK 3.75", en: "GPA 3.75" },
  description: {
    id: "Mahasiswa S1 Informatika dengan fokus pada software engineering, sistem database, web development, dan machine learning.",
    en: "Computer Science undergraduate focused on software engineering, database systems, web development, and applied machine learning.",
  },
};
