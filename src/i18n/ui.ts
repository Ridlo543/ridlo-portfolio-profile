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
    "intro.available": "Terbuka untuk full-time, kontrak, dan remote",
    "intro.bio":
      "Saya membangun aplikasi web, layanan machine learning, dan otomasi. Sejak April 2024 saya mengerjakan Neo Edukasi, platform les privat dengan 20.000+ pengguna terdaftar, dan 241+ pull request saya sudah ter-merge di sana. Saya juga membangun AinyStudy, tutor AI berbasis RAG, dan meneliti watermark laten untuk skripsi.",
    "intro.getInTouch": "Get in Touch",
    "intro.downloadCv": "Download CV",
    "intro.cvId": "CV Bahasa Indonesia",
    "intro.cvEn": "English CV",
    "intro.visitors": "pengunjung",
    "intro.switchTheme": "Ganti tema: terang atau gelap",

    // Track Record Card (Natural tech terms kept clean)
    "about.title": "Pencapaian & Sorotan Utama",
    "about.metric1.label": "Merged PRs Produksi",
    "about.metric1.desc": "PR ter-merge di Neo Edukasi",
    "about.metric2.label": "Mahasiswa Dimentori",
    "about.metric2.desc": "Mahasiswa diajar sebagai asdos",
    "about.metric3.label": "IPK Sarjana (S1)",
    "about.metric3.desc": "IPK S1 Informatika UNS",
    "about.metric4.label": "Tahun Pengalaman",
    "about.metric4.desc": "Pengguna terdaftar di Neo Edukasi",
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

    // Navigation Tabs & Modal Headers
    "nav.projects": "Proyek",
    "nav.experience": "Pengalaman",
    "nav.credentials": "Pendidikan",
    "nav.skills": "Keahlian",
    "projects.modalHeaderTitle": "Semua proyek",
    "projects.modalHeaderDesc": "Aplikasi produksi, proyek machine learning, dan proyek kuliah. Klik gambar untuk memperbesar.",
    "certs.modalHeaderTitle": "Semua sertifikat",
    "certs.modalHeaderDesc": "Ijazah, surat keterangan, dan sertifikat pelatihan, masing-masing dengan berkas aslinya.",
    "footer.copyright": "© {year} Ridlo Abdullah Ulinnuha · Informatika @ Universitas Sebelas Maret",
    "footer.location": "Surakarta, Indonesia (WIB / UTC+7)",
    // Page labels added in the November 2026 polish
    "intro.subtitle": "Software Engineer · Web, Machine Learning & Otomasi",
    "skills.ai": "Agen AI dan tooling",
    "skills.own": "buatan saya",
    "certs.alibabaAlt": "Sertifikat Alibaba Cloud Certified Developer atas nama Ridlo Abdullah Ulinnuha",
    "about.metric4.value": "20.000+",
    "cv.en": "CV (English)",
    "cv.id": "CV (Indonesia)",
    "projects.viewAllBtn": "Lihat semua {count} proyek",
    "projects.internal": "Sistem internal",
    "projects.enlarge": "Perbesar gambar",
    "edu.degree": "Gelar",
    "certs.heading": "Sertifikat",
    "certs.count": "{count} berkas",
    "certs.download": "Unduh",
    "certs.viewAllBtn": "Lihat semua {count} sertifikat",
    "skills.web": "Web dan backend",
    "skills.ml": "Machine learning dan AI",
    "skills.ops": "Server dan DevOps",
    "skills.mobile": "Mobile dan pengujian",
    "lightbox.close": "Tutup",
    "lightbox.prev": "Gambar sebelumnya",
    "lightbox.next": "Gambar berikutnya",
    "modal.close": "Tutup",
  },
  en: {
    // Top Bar & Identity
    "intro.greeting": "Hi, I am",
    "intro.role": "Software Engineer",
    "intro.location": "Surakarta, ID (UTC+7)",
    "intro.available": "Open to full-time, contract and remote roles",
    "intro.bio":
      "I build web apps, machine learning services and automation. Since April 2024 I have worked on Neo Edukasi, a private tutoring platform with 20,000+ registered users, where 241+ of my pull requests are merged. I also built AinyStudy, a RAG-based AI tutor, and researched latent watermarks for my thesis.",
    "intro.getInTouch": "Get in Touch",
    "intro.downloadCv": "Download CV",
    "intro.cvId": "Indonesian CV",
    "intro.cvEn": "English CV",
    "intro.visitors": "visitors",
    "intro.switchTheme": "Toggle theme: light or dark",

    // Track Record Card
    "about.title": "Track Record & Highlights",
    "about.metric1.label": "Production Merged PRs",
    "about.metric1.desc": "Merged PRs at Neo Edukasi",
    "about.metric2.label": "Students Mentored",
    "about.metric2.desc": "Students taught as a TA",
    "about.metric3.label": "Bachelor's GPA",
    "about.metric3.desc": "GPA, Informatics at UNS",
    "about.metric4.label": "Years Experience",
    "about.metric4.desc": "Registered users on Neo Edukasi",
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

    // Navigation Tabs & Modal Headers
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.credentials": "Education",
    "nav.skills": "Skills",
    "projects.modalHeaderTitle": "All projects",
    "projects.modalHeaderDesc": "Production apps, machine learning work and university projects. Click a picture to enlarge it.",
    "certs.modalHeaderTitle": "All certificates",
    "certs.modalHeaderDesc": "Degree letters, statements and training certificates, each with its original file.",
    "footer.copyright": "© {year} Ridlo Abdullah Ulinnuha · Informatics @ Sebelas Maret University",
    "footer.location": "Surakarta, Indonesia (WIB / UTC+7)",
    // Page labels added in the November 2026 polish
    "intro.subtitle": "Software Engineer · Web, Machine Learning & Automation",
    "skills.ai": "AI agents and tooling",
    "skills.own": "my own",
    "certs.alibabaAlt": "Alibaba Cloud Certified Developer certificate issued to Ridlo Abdullah Ulinnuha",
    "about.metric4.value": "20,000+",
    "cv.en": "CV (English)",
    "cv.id": "CV (Indonesian)",
    "projects.viewAllBtn": "See all {count} projects",
    "projects.internal": "Internal system",
    "projects.enlarge": "Enlarge picture",
    "edu.degree": "Degree",
    "certs.heading": "Certificates",
    "certs.count": "{count} files",
    "certs.download": "Download",
    "certs.viewAllBtn": "See all {count} certificates",
    "skills.web": "Web and backend",
    "skills.ml": "Machine learning and AI",
    "skills.ops": "Servers and DevOps",
    "skills.mobile": "Mobile and testing",
    "lightbox.close": "Close",
    "lightbox.prev": "Previous picture",
    "lightbox.next": "Next picture",
    "modal.close": "Close",
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
