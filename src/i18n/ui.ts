export const languages = {
  id: "Indonesia",
  en: "English",
  ja: "日本語",
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = "id";

export const ui = {
  id: {
    // Top Bar & Identity
    "intro.greeting": "Halo, saya",
    "intro.role": "Software Engineer",
    "intro.location": "Surakarta, ID (WIB)",
    "intro.available": "Open untuk full-time, kontrak, dan remote",
    "intro.bio":
      "Saya membuat aplikasi web, layanan machine learning, dan otomasi. Sejak April 2024 saya mengerjakan Neo Edukasi, platform les privat dengan 20.000+ pengguna terdaftar, dengan 241+ pull request yang sudah di-merge. Saya juga membuat AinyStudy, tutor AI berbasis RAG, dan meneliti watermark laten untuk skripsi.",
    "intro.getInTouch": "Get in Touch",
    "intro.downloadCv": "Download CV",
    "intro.cvId": "CV Bahasa Indonesia",
    "intro.cvEn": "English CV",
    "intro.visitors": "pengunjung",
    "intro.switchTheme": "Ganti tema: terang atau gelap",

    // Track Record Card (Natural tech terms kept clean)
    "about.title": "Pencapaian & Sorotan Utama",
    "about.metric1.label": "Merged PRs Produksi",
    "about.metric1.desc": "PR di-merge di Neo Edukasi",
    "about.metric2.label": "Mahasiswa Dimentori",
    "about.metric2.desc": "Mahasiswa diajar sebagai asdos",
    "about.metric3.label": "IPK Sarjana (S1)",
    "about.metric3.desc": "IPK S1 Informatika UNS",
    "about.metric4.label": "Tahun Pengalaman",
    "about.metric4.desc": "Pengguna terdaftar di Neo Edukasi",
    "about.tag1": "Production Backend & APIs",
    "about.tag2": "ML & AI Agents",
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
    "projects.modalHeaderDesc": "Aplikasi production, proyek machine learning, dan proyek kuliah. Klik gambar untuk memperbesar.",
    "certs.modalHeaderTitle": "Semua sertifikat",
    "certs.modalHeaderDesc": "Ijazah, surat keterangan, dan sertifikat pelatihan beserta file aslinya.",
    "footer.copyright": "© {year} Ridlo Abdullah Ulinnuha · Informatika @ Universitas Sebelas Maret",
    "footer.location": "Surakarta, Indonesia (WIB / UTC+7)",
    // Page labels added in the November 2026 polish
    "intro.subtitle": "Software Engineer · Web, Machine Learning & Otomasi",
    "skills.ai": "AI agent dan tooling",
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
    "certs.count": "{count} file",
    "certs.download": "Download",
    "certs.viewAllBtn": "Lihat semua {count} sertifikat",
    "skills.web": "Web dan backend",
    "skills.ml": "Machine learning dan AI",
    "skills.ops": "Server dan DevOps",
    "skills.mobile": "Mobile dan testing",
    "lightbox.close": "Tutup",
    "lightbox.prev": "Gambar sebelumnya",
    "lightbox.next": "Gambar berikutnya",
    "modal.close": "Tutup",
    "intro.email": "Email",
    "intro.shortLocation": "Surakarta, UTC+7",
    "nav.ariaLabel": "Bagian",
    "lightbox.ariaLabel": "Screenshot",
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
      "Production web development, national cohort programs, and university teaching assistant roles.",

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
    "intro.email": "Email",
    "intro.shortLocation": "Surakarta, UTC+7",
    "nav.ariaLabel": "Sections",
    "lightbox.ariaLabel": "Screenshot",
  },
  ja: {
    // Top Bar & Identity
    "intro.greeting": "はじめまして、",
    "intro.role": "ソフトウェアエンジニア",
    "intro.location": "スラカルタ（インドネシア / UTC+7）",
    "intro.available": "正社員・業務委託・リモート勤務可",
    "intro.bio":
      "Webアプリ、機械学習サービス、自動化ツールの開発を行っています。2024年4月から登録ユーザー20,000人以上の個別指導プラットフォーム「Neo Edukasi」の開発に携わり、241件以上のPRがマージされました。また、RAGを使ったAI学習チューター「AinyStudy」を個人開発・公開し、卒業研究では潜在空間電子透かし（Latent Watermark）に取り組みました。",
    "intro.getInTouch": "お問い合わせ",
    "intro.downloadCv": "履歴書をダウンロード",
    "intro.cvId": "履歴書（インドネシア語）",
    "intro.cvEn": "履歴書（英語）",
    "intro.visitors": "訪問者",
    "intro.switchTheme": "テーマ切り替え：ライト / ダーク",

    // Track Record Card
    "about.title": "主な実績・ハイライト",
    "about.metric1.label": "本番マージ済みPR",
    "about.metric1.desc": "Neo Edukasi マージ済みPR",
    "about.metric2.label": "指導学生数",
    "about.metric2.desc": "TAとして指導した学生",
    "about.metric3.label": "学士課程 GPA",
    "about.metric3.desc": "UNS 情報工学科 GPA",
    "about.metric4.label": "実務経験",
    "about.metric4.desc": "Neo Edukasi 登録ユーザー",
    "about.tag1": "本番バックエンド・API",
    "about.tag2": "機械学習・AIエージェント",
    "about.tag3": "DB最適化",

    // Tech Stack Card
    "tech.title": "主要技術・スタック",

    // Projects Card & Modal
    "projects.title": "主要プロジェクト",
    "projects.viewAll": "全{count}件のプロジェクトを見る →",
    "projects.modalTitle": "プロジェクト実績",
    "projects.modalDesc":
      "本番運用のWebアプリケーション、機械学習キャップストーン、および主要開発プロジェクト。",
    "projects.filterAll": "すべて",
    "projects.filterProfessional": "実務",
    "projects.filterWeb": "Web",
    "projects.filterMobile": "モバイル",
    "projects.filterDataMl": "データ & ML",
    "projects.privateCase": "非公開案件",
    "projects.demo": "ライブデモ",
    "projects.code": "リポジトリ",

    // Experience Card & Modal
    "experience.title": "職務経歴・学内実績",
    "experience.viewAll": "全経歴を見る（{count}件） →",
    "experience.modalTitle": "職務経歴・学内実績",
    "experience.modalDesc":
      "本番環境でのソフトウェア開発、全国選抜プログラム、および大学でのティーチング・アシスタント実績。",

    // Education & Credentials Card & Modal
    "study.title": "学歴・資格",
    "study.featured": "主な資格・認定",
    "study.viewAll": "全{count}件の資格・証明書を見る →",
    "study.modalTitle": "学歴・資格",
    "study.modalDesc":
      "学位、卒業証明書、および技術認定資格の一覧。",
    "study.download": "ダウンロード",

    // Navigation Tabs & Modal Headers
    "nav.projects": "プロジェクト",
    "nav.experience": "経歴",
    "nav.credentials": "学歴・資格",
    "nav.skills": "スキル",
    "projects.modalHeaderTitle": "すべてのプロジェクト",
    "projects.modalHeaderDesc": "本番アプリ、機械学習、大学での開発実績。画像クリックで拡大表示。",
    "certs.modalHeaderTitle": "すべての資格・証明書",
    "certs.modalHeaderDesc": "学位証明書、修了証、技術認定資格（原本ファイル付き）。",
    "footer.copyright": "© {year} Ridlo Abdullah Ulinnuha · スブラス・マレット大学 情報工学科",
    "footer.location": "スラカルタ（インドネシア / UTC+7）",
    // Page labels added in the November 2026 polish
    "intro.subtitle": "ソフトウェアエンジニア · Web・機械学習・自動化",
    "skills.ai": "AIエージェント・ツール",
    "skills.own": "自作",
    "certs.alibabaAlt": "Ridlo Abdullah Ulinnuha 名義の Alibaba Cloud Certified Developer 認定証",
    "about.metric4.value": "20,000+",
    "cv.en": "CV（英語）",
    "cv.id": "CV（インドネシア語）",
    "projects.viewAllBtn": "全{count}件のプロジェクトを見る",
    "projects.internal": "社内システム",
    "projects.enlarge": "画像を拡大",
    "edu.degree": "学位",
    "certs.heading": "資格・認定",
    "certs.count": "{count}件",
    "certs.download": "ダウンロード",
    "certs.viewAllBtn": "資格をすべて見る（{count}件）",
    "skills.web": "Web・バックエンド",
    "skills.ml": "機械学習・AI",
    "skills.ops": "サーバー・DevOps",
    "skills.mobile": "モバイル・テスト",
    "lightbox.close": "閉じる",
    "lightbox.prev": "前の画像",
    "lightbox.next": "次の画像",
    "modal.close": "閉じる",
    "intro.email": "メール",
    "intro.shortLocation": "スラカルタ (UTC+7)",
    "nav.ariaLabel": "セクション",
    "lightbox.ariaLabel": "スクリーンショット",
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
