// Bilingual content data for projects, experience, and credentials

export type BilingualText = {
  id: string;
  en: string;
};

export type ProjectImage = {
  // file stem in public/assets/portofolio; -320 and -740 variants sit beside it
  name: string;
  width: number;
  height: number;
  alt: BilingualText;
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
  images?: ProjectImage[];
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
    visualLabel: { id: "Platform produksi", en: "In production" },
    description: {
      id: "Platform les privat dengan 20.000+ pengguna terdaftar di 20+ kota. Laravel, MySQL, dan Vue untuk jadwal tentor, absensi, laporan admin, dan pengingat WhatsApp.",
      en: "A private tutoring platform with 20,000+ registered users in 20+ cities. Laravel, MySQL and Vue for tutor schedules, attendance, admin reports and WhatsApp reminders.",
    },
    impact: {
      id: [
        "241+ pull request ter-merge di repo utama (292+ di semua repo) untuk operasional tentor, jadwal, absensi, dan laporan admin.",
        "Rilis keamanan di 122 file: sanitasi XSS, lebih sedikit route yang terbuka, dan proteksi brute-force pada login.",
        "Optimasi query, indeks, dan cache MySQL di balik dashboard laporan, plus feature test untuk validasi sesi dan notifikasi.",
      ],
      en: [
        "241+ merged pull requests in the main repo (292+ across all repos) for tutor operations, scheduling, attendance and admin reports.",
        "A security release across 122 files: XSS sanitising, fewer exposed routes and login brute-force protection.",
        "Tuned MySQL queries, indexes and caches behind the report dashboards, and wrote feature tests for session checks and notifications.",
      ],
    },
    technologies: ["Laravel", "PHP", "MySQL", "Vue", "WhatsApp API", "Feature Test"],
    categories: ["professional", "web"],
    accent: "#5eead4",
    featured: true,
    privateCase: false,
    images: [
      {
        name: "neoedukasi_home",
        width: 1600,
        height: 849,
        alt: {
          id: "Halaman depan Neo Edukasi untuk pendaftaran tentor les privat",
          en: "The Neo Edukasi landing page where private tutors sign up",
        },
      },
      {
        name: "neoedukasi_job",
        width: 1600,
        height: 849,
        alt: {
          id: "Halaman lowongan tentor Neo Edukasi dengan pencarian dan filter provinsi, mata pelajaran, dan kelas",
          en: "The Neo Edukasi tutor job board with search and filters for province, subject and grade",
        },
      },
    ],
    links: [
      {
        type: "demo",
        label: { id: "Aplikasi", en: "Web app" },
        href: "https://app.neo-edukasi.com/",
      },
      {
        type: "demo",
        label: { id: "Situs", en: "Website" },
        href: "https://neo-edukasi.com/",
      },
    ],
  },
  {
    id: "ainystudy",
    title: "AinyStudy: Adaptive AI Language Learning",
    year: { id: "2026", en: "2026" },
    visualLabel: { id: "Produk live / AI", en: "Live product / AI" },
    description: {
      id: "Platform belajar bahasa Jepang (JLPT N5 sampai N1) dan TOEIC yang saya bangun dan luncurkan sendiri. Tutor AI menjawab lewat streaming dengan RAG atas materi kursus.",
      en: "A Japanese (JLPT N5 to N1) and TOEIC learning platform I built and launched myself. The AI tutor streams answers grounded in the course material with RAG.",
    },
    impact: {
      id: [
        "Next.js 16 App Router, React 19, Tailwind CSS v4, PostgreSQL, dan Drizzle ORM.",
        "Tutor AI streaming dengan retrieval-augmented generation (RAG) atas materi kursus.",
        "Penilaian audio, latihan spaced repetition, dan tes end-to-end Playwright untuk placement test.",
      ],
      en: [
        "Next.js 16 App Router, React 19, Tailwind CSS v4, PostgreSQL and Drizzle ORM.",
        "A streaming AI tutor with retrieval-augmented generation (RAG) over the course material.",
        "Audio scoring, spaced repetition drills and Playwright end-to-end tests for the placement test.",
      ],
    },
    technologies: ["Next.js 16", "TypeScript", "PostgreSQL", "Drizzle ORM", "Playwright", "RAG"],
    categories: ["web", "data-ml"],
    accent: "#ec4899",
    featured: true,
    privateCase: false,
    images: [
      {
        name: "ainystudy",
        width: 1600,
        height: 849,
        alt: {
          id: "Halaman depan AinyStudy dengan pilihan jalur Bahasa Jepang dan TOEIC",
          en: "The AinyStudy home page with the Japanese and TOEIC tracks",
        },
      },
    ],
    links: [
      {
        label: { id: "Buka", en: "Open" },
        href: "https://ainystudy.ainything.online",
        type: "demo",
      },
    ],
  },
  {
    id: "latent-watermark",
    title: "Latent Watermark Evaluation Platform",
    year: { id: "2026", en: "2026" },
    visualLabel: { id: "Skripsi / ML", en: "Thesis / ML" },
    description: {
      id: "Skripsi S1: watermark DCT di ruang laten VAE, diuji melawan serangan fine-tuning LoRA. Dashboard Next.js menunjukkan bit mana yang bertahan di setiap gambar.",
      en: "My thesis: a DCT watermark in a VAE's latent space, tested against LoRA fine-tuning attacks. A Next.js dashboard shows which bits survive in each image.",
    },
    impact: {
      id: [
        "Meningkatkan ketahanan watermark DCT di ruang laten VAE terhadap fine-tuning LoRA dengan redundant embedding dan majority vote.",
        "Dashboard hasil Next.js dan layanan demo FastAPI yang siap tayang di Modal, dengan penyisipan watermark langsung.",
        "Dataset gambar bukti dipublikasikan di Hugging Face.",
      ],
      en: [
        "Made DCT watermarking in a VAE latent space more resistant to LoRA fine-tuning with redundant embedding and majority voting.",
        "A Next.js results dashboard and a FastAPI demo service, deployable on Modal, with live watermark embedding.",
        "The evidence image dataset is published on Hugging Face.",
      ],
    },
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "Next.js"],
    categories: ["data-ml"],
    accent: "#10b981",
    featured: true,
    images: [
      {
        name: "dashboard_laten_watermark",
        width: 1106,
        height: 999,
        alt: {
          id: "Dashboard skripsi: gambar asli, gambar ber-watermark, hasil serangan LoRA, dan peta bit pesan",
          en: "The thesis dashboard: the original, the watermarked image, the LoRA attack result and a map of the message bits",
        },
      },
    ],
    links: [
      {
        label: { id: "Dashboard", en: "Dashboard" },
        href: "https://dashboard-latent-waterwark.vercel.app/",
        type: "demo",
      },
      {
        label: { id: "Dataset", en: "Dataset" },
        href: "https://huggingface.co/datasets/ridloau543/watermark-latent-citra-bukti",
        type: "demo",
      },
    ],
  },
  {
    id: "docextract",
    title: "DocExtract: Invoices and Receipts to JSON",
    year: { id: "2026", en: "2026" },
    visualLabel: { id: "Otomasi dokumen", en: "Document automation" },
    description: {
      id: "docTR membaca teksnya, lalu dua model Gemini membaca dokumen secara terpisah. Dokumen hanya lolos otomatis kalau setiap angkanya ditemukan di halaman dan totalnya cocok.",
      en: "docTR reads the text, then two Gemini models read the document separately. A document passes on its own only when every number is found on the page and the totals add up.",
    },
    impact: {
      id: [
        "Setiap angka hasil ekstraksi dicocokkan ke posisinya di halaman, dengan confidence per field dan layar review.",
        "Pada 100 struk uji CORD, 55% lolos otomatis dengan 1 kesalahan di antara 55 dokumen tersebut.",
        "Keluaran JSON dan CSV, dengan demo publik berisi 7 dokumen contoh.",
      ],
      en: [
        "Every extracted number is grounded to its position on the page, with per-field confidence and a review screen.",
        "On 100 CORD test receipts, 55% passed automatically, with 1 error among those 55.",
        "Outputs JSON and CSV, with a public demo of 7 sample documents.",
      ],
    },
    technologies: ["Python", "docTR", "Gemini", "OCR"],
    categories: ["data-ml", "web"],
    accent: "#38bdf8",
    featured: true,
    images: [
      {
        name: "docextract",
        width: 1600,
        height: 849,
        alt: {
          id: "DocExtract menandai setiap angka pada foto struk dan mencocokkan totalnya",
          en: "DocExtract marking each number on a receipt photo and checking the total",
        },
      },
    ],
    links: [
      {
        label: { id: "Demo", en: "Demo" },
        href: "https://docextract.ainything.online",
        type: "demo",
      },
    ],
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
    images: [
      {
        name: "laundry-screens",
        width: 1200,
        height: 1172,
        alt: {
          id: "Layar aplikasi Almada Laundry: splash, login, registrasi, dashboard, daftar order, dan filter order",
          en: "Almada Laundry app screens: splash, login, sign-up, dashboard, order list and order filters",
        },
      },
    ],
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
    images: [
      {
        name: "turing-machine",
        width: 1440,
        height: 960,
        alt: {
          id: "Simulator mesin Turing: form input pembagian dan diagram state q0 sampai q3",
          en: "The Turing machine simulator: the division input form and the state diagram from q0 to q3",
        },
      },
    ],
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
  {
    id: "karaoke-app",
    title: "Java Karaoke Desktop Application",
    year: { id: "2024", en: "2024" },
    visualLabel: { id: "Java Desktop App", en: "Java Desktop App" },
    description: {
      id: "Aplikasi desktop karaoke berbasis Java murni dengan arsitektur MVC terstruktur, pemutar audio multimedia, manajemen sesi paket, dan pencetakan nota transaksi.",
      en: "Java desktop karaoke application built with structured MVC architecture, multimedia audio playback engine, package session billing, and transaction receipt generation.",
    },
    impact: {
      id: [
        "Merancang arsitektur MVC (Model-View-Controller) memisahkan logika bisnis Controller, Model data, dan komponen View kustom.",
        "Mengembangkan pemutar musik multimedia, autentikasi pengguna (login/register), dan kalkulasi otomatis nota transaksi.",
        "Menyediakan repositori publik lengkap dengan dokumentasi arsitektur dan tangkapan layar antarmuka pengguna.",
      ],
      en: [
        "Engineered structured MVC architecture separating Controller business logic, data Models, and custom View components.",
        "Developed multimedia audio playback, user authentication flows, and automated transaction billing calculations.",
        "Delivered full public GitHub documentation including architectural diagrams and UI workflow screenshots.",
      ],
    },
    technologies: ["Java", "OOP", "MVC Architecture", "Desktop GUI", "Multimedia Audio"],
    categories: ["software"],
    accent: "#f59e0b",
    links: [
      {
        label: { id: "Repository", en: "Repository" },
        href: "https://github.com/Ridlo543/karaoke-project",
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
    time: { id: "Apr 2024 - sekarang", en: "Apr 2024 - present" },
    badge: { id: "Sekarang", en: "Current" },
    description: {
      id: "Platform les privat dengan 20.000+ pengguna terdaftar. 241+ pull request ter-merge untuk operasional tentor, jadwal, absensi, laporan admin, dan pengingat WhatsApp, termasuk rilis keamanan di 122 file.",
      en: "A private tutoring platform with 20,000+ registered users. 241+ merged pull requests for tutor operations, scheduling, attendance, admin reports and WhatsApp reminders, including a security release across 122 files.",
    },
    list: { id: [], en: [] },
  },
  {
    id: "bangkit-ml",
    role: { id: "Machine Learning Cohort", en: "Machine Learning Cohort" },
    organization: "Bangkit Academy (Google, GoTo, Traveloka)",
    location: "Bandung, Indonesia",
    time: { id: "Sep - Des 2024", en: "Sep - Dec 2024" },
    badge: { id: "Lulus", en: "Graduated" },
    description: {
      id: "Capstone StunBy bertiga: deteksi tinggi badan dengan YOLO, prediksi gizi TensorFlow, dan chatbot RAG Vertex AI di balik API Flask. Saya juga menulis dokumentasi API publiknya.",
      en: "The StunBy capstone in a team of three: YOLO height detection, TensorFlow nutrition prediction and a Vertex AI RAG chatbot behind Flask APIs. I also wrote its public API docs.",
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
    role: { id: "Asisten Dosen, Basis Data dan Pemrograman Web", en: "Teaching Assistant, Databases and Web Programming" },
    organization: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta, Indonesia",
    time: { id: "Sep 2024 - Jul 2025", en: "Sep 2024 - Jul 2025" },
    badge: { id: "Kampus", en: "University" },
    description: {
      id: "Mengajar 50+ mahasiswa desain skema dan optimasi SQL, lalu 60+ mahasiswa web full-stack dan desain REST API.",
      en: "Taught 50+ students schema design and SQL tuning, then 60+ students full-stack web development and REST API design.",
    },
    list: { id: [], en: [] },
  },
  {
    id: "neo-edukasi-intern",
    role: { id: "Web Developer Intern", en: "Web Developer Intern" },
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: { id: "Jan 2024 - Mar 2024", en: "Jan 2024 - Mar 2024" },
    badge: { id: "Magang", en: "Internship" },
    description: {
      id: "Membangun dan merilis landing page perusahaan dengan Astro, React, dan Tailwind CSS.",
      en: "Built and launched the company landing page with Astro, React and Tailwind CSS.",
    },
    list: {
      id: [
        "Membangun dan merilis landing page pemasaran berkinerja tinggi menggunakan Astro, React, dan Tailwind CSS island architecture.",
        "Mengoptimasi pengiriman aset web dan mempermudah alur navigasi pengunjung.",
      ],
      en: [
        "Built and deployed high-performance marketing landing pages using Astro, React, and Tailwind CSS component islands.",
        "Optimized asset delivery and improved user navigation flows across marketing pages.",
      ],
    },
  },
  {
    id: "asdos-statistika",
    role: { id: "Asisten Praktikum Statistika", en: "Teaching Assistant, Statistics Practicum" },
    organization: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta, Indonesia",
    time: { id: "Agu - Des 2023", en: "Aug - Dec 2023" },
    badge: { id: "Kampus", en: "University" },
    description: {
      id: "Menulis 9 modul praktikum R dan membimbing 40+ mahasiswa lewat 20+ studi kasus.",
      en: "Wrote 9 R lab modules and guided 40+ students through 20+ case studies.",
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
  title: { id: "S1 Informatika", en: "Bachelor of Computer Science (Informatics)" },
  institution: { id: "Universitas Sebelas Maret", en: "Sebelas Maret University" },
  location: "Surakarta, Indonesia",
  period: { id: "Agu 2022 - Okt 2026", en: "Aug 2022 - Oct 2026" },
  gpa: { id: "IPK 3.81 / 4.00", en: "GPA 3.81 / 4.00" },
  description: {
    id: "Lulus Oktober 2026. Fokus pada rekayasa perangkat lunak, sistem basis data, machine learning, dan statistika terapan, dengan skripsi tentang watermark laten.",
    en: "Graduated October 2026. Focus on software engineering, database systems, machine learning and applied statistics, with a thesis on latent watermarks.",
  },
};
