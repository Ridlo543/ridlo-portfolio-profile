export const languages = {
  id: "Indonesia",
  en: "English",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "id";

export const ui = {
  id: {
    // Top Bar & Identity
    "intro.greeting": "Halo, saya",
    "intro.role": "Software Engineer",
    "intro.location": "Surakarta, ID (WIB)",
    "intro.bio":
      "Software engineer dengan fokus pada pengembangan aplikasi web produksi dan arsitektur backend menggunakan Laravel, Next.js, dan TypeScript. Menyelesaikan 167+ merged PR pada platform edukasi live dan mengintegrasikan inferensi machine learning berbasis RAG. Lulusan S1 Informatika Universitas Sebelas Maret (IPK 3.81/4.00).",
    "intro.getInTouch": "Get in Touch",
    "intro.downloadCv": "Download CV",
    "intro.cvId": "CV Bahasa Indonesia",
    "intro.cvEn": "English CV",
    "intro.visitors": "pengunjung",
    "intro.switchTheme": "Ganti tema: terang atau gelap",

    // Track Record Card (Natural tech terms kept clean)
    "about.title": "Pencapaian & Sorotan Utama",
    "about.metric1.label": "Merged PRs",
    "about.metric1.desc": "Platform live Neo Edukasi",
    "about.metric2.label": "Total Merged PRs",
    "about.metric2.desc": "Seluruh repositori GitHub",
    "about.metric3.label": "IPK S1",
    "about.metric3.desc": "Informatika @ UNS (Resmi)",
    "about.metric4.label": "Jam Pelatihan ML",
    "about.metric4.desc": "Kurikulum Bangkit Academy",
    "about.tag1": "Production Backend & APIs",
    "about.tag2": "Penerapan ML & AI Agents",
    "about.tag3": "Optimasi Database",

    // Tech Stack Card
    "tech.title": "Teknologi & Keahlian Utama",

    // Projects Card & Modal
    "projects.title": "Proyek Pilihan",
    "projects.viewAll": "Lihat semua {count} proyek →",
    "projects.modalTitle": "Studi Kasus Proyek",
    "projects.modalDesc":
      "Aplikasi web production, capstone machine learning, dan proyek software pilihan.",
    "projects.filterAll": "Semua",
    "projects.filterProfessional": "Profesional",
    "projects.filterWeb": "Web",
    "projects.filterMobile": "Mobile",
    "projects.filterDataMl": "Data & ML",
    "projects.privateCase": "Private Case",
    "projects.demo": "Live Demo",
    "projects.code": "Repository",

    // Experience Card & Modal
    "experience.title": "Pengalaman Kerja & Akademik",
    "experience.viewAll": "Lihat timeline lengkap ({count} peran) →",
    "experience.modalTitle": "Pengalaman Kerja & Akademik",
    "experience.modalDesc":
      "Rekam jejak software engineering production, program cohort nasional, dan asisten lab kampus.",

    // Education & Credentials Card & Modal
    "study.title": "Pendidikan & Sertifikasi",
    "study.featured": "Sertifikasi Unggulan",
    "study.viewAll": "Lihat semua {count} sertifikat & kredensial →",
    "study.modalTitle": "Pendidikan & Sertifikasi",
    "study.modalDesc":
      "Gelar akademik resmi, surat keterangan kelulusan, dan sertifikasi teknis terverifikasi.",
    "study.download": "Download",

    // Footer
    "footer.copyright": "© {year} Ridlo Abdullah Ulinnuha · Informatika @ Universitas Sebelas Maret",
    "footer.location": "Surakarta, Indonesia (WIB / UTC+7)",
  },
  en: {
    // Top Bar & Identity
    "intro.greeting": "Hi, I am",
    "intro.role": "Software Engineer",
    "intro.location": "Surakarta, ID (UTC+7)",
    "intro.bio":
      "Software engineer building web applications and backend systems with Laravel, Next.js, and TypeScript. Shipped 167+ merged PRs for an active education platform (194+ across repositories) and built RAG-based AI services. Computer Science graduate from Sebelas Maret University (GPA 3.81/4.00).",
    "intro.getInTouch": "Get in Touch",
    "intro.downloadCv": "Download CV",
    "intro.cvId": "Indonesian CV",
    "intro.cvEn": "English CV",
    "intro.visitors": "visitors",
    "intro.switchTheme": "Toggle theme: light or dark",

    // Track Record Card
    "about.title": "Track Record & Highlights",
    "about.metric1.label": "Merged PRs",
    "about.metric1.desc": "Neo Edukasi live platform",
    "about.metric2.label": "Total Merged PRs",
    "about.metric2.desc": "Across all GitHub repos",
    "about.metric3.label": "Undergraduate GPA",
    "about.metric3.desc": "Informatics @ UNS (Official)",
    "about.metric4.label": "ML Training Hours",
    "about.metric4.desc": "Bangkit Academy curriculum",
    "about.tag1": "Production Backend & APIs",
    "about.tag2": "Applied ML & AI Agents",
    "about.tag3": "Database Optimization",

    // Tech Stack Card
    "tech.title": "Core Technologies & Stack",

    // Projects Card & Modal
    "projects.title": "Featured Projects",
    "projects.viewAll": "View all {count} projects →",
    "projects.modalTitle": "Project Case Studies",
    "projects.modalDesc":
      "Production web applications, machine learning capstones, and software contributions.",
    "projects.filterAll": "All",
    "projects.filterProfessional": "Professional",
    "projects.filterWeb": "Web",
    "projects.filterMobile": "Mobile",
    "projects.filterDataMl": "Data & ML",
    "projects.privateCase": "Private Case",
    "projects.demo": "Live Demo",
    "projects.code": "Repository",

    // Experience Card & Modal
    "experience.title": "Work & Academic Experience",
    "experience.viewAll": "View full timeline ({count} roles) →",
    "experience.modalTitle": "Work & Academic Experience",
    "experience.modalDesc":
      "Production software engineering, national cohort programs, and university course assistant roles.",

    // Education & Credentials Card & Modal
    "study.title": "Education & Credentials",
    "study.featured": "Featured Credentials",
    "study.viewAll": "View all {count} credentials & records →",
    "study.modalTitle": "Education & Credentials",
    "study.modalDesc":
      "Academic degrees, graduation letters, and technical course certifications.",
    "study.download": "Download",

    // Footer
    "footer.copyright": "© {year} Ridlo Abdullah Ulinnuha · Informatics @ Sebelas Maret University",
    "footer.location": "Surakarta, Indonesia (WIB / UTC+7)",
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
