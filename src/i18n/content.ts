// Bilingual content data for projects, experience, and credentials

export type BilingualText = {
  id: string;
  en: string;
  ja: string;
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
    ja: string[];
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
    year: { id: "2024 - Sekarang", en: "2024 - Present", ja: "2024年 - 現在" },
    visualLabel: { id: "Production", en: "In production", ja: "本番運用中" },
    description: {
      id: "Platform les privat dengan 20.000+ pengguna terdaftar di 20+ kota. Laravel, MySQL, dan Vue untuk jadwal tentor, absensi, laporan admin, dan pengingat WhatsApp.",
      en: "A private tutoring platform with 20,000+ registered users in 20+ cities. Laravel, MySQL and Vue for tutor schedules, attendance, admin reports and WhatsApp reminders.",
      ja: "20都市以上・登録ユーザー20,000人以上の個別指導プラットフォーム。Laravel、MySQL、Vueを用い、講師スケジュール管理、出席管理、管理レポート、WhatsAppリマインダー機能を開発。",
    },
    impact: {
      id: [
        "241+ pull request di-merge di repo utama (292+ di semua repo) untuk operasional tentor, jadwal, absensi, dan laporan admin.",
        "Update keamanan di 122 file: sanitasi XSS, pembatasan route publik, dan proteksi brute-force login.",
        "Optimasi query, index, dan cache MySQL untuk dashboard laporan, plus feature test untuk validasi sesi dan notifikasi.",
      ],
      en: [
        "241+ merged pull requests in the main repo (292+ across all repos) for tutor operations, scheduling, attendance and admin reports.",
        "A security release across 122 files: XSS sanitising, fewer exposed routes and login brute-force protection.",
        "Tuned MySQL queries, indexes and caches for the report dashboards, and wrote feature tests for session checks and notifications.",
      ],
      ja: [
        "メインリポジトリで241件以上（全リポジトリ合計292件以上）のPRがマージされ、講師業務、スケジュール、出席管理、管理レポート機能を実装。",
        "122ファイルにわたるセキュリティ対応：XSSサニタイズ、公開ルートの削減、ログインのブルートフォース対策を実装。",
        "レポートダッシュボードのMySQLクエリ・インデックス・キャッシュを最適化し、セッション検証と通知のFeatureテストを作成。",
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
          ja: "個別指導講師の登録を行う Neo Edukasi のトップページ",
        },
      },
      {
        name: "neoedukasi_job",
        width: 1600,
        height: 849,
        alt: {
          id: "Halaman lowongan tentor Neo Edukasi dengan pencarian dan filter provinsi, mata pelajaran, dan kelas",
          en: "The Neo Edukasi tutor job board with search and filters for province, subject and grade",
          ja: "都道府県・教科・学年で検索・絞り込みができる Neo Edukasi の講師募集ページ",
        },
      },
    ],
    links: [
      {
        type: "demo",
        label: { id: "Aplikasi", en: "Web app", ja: "Webアプリ" },
        href: "https://app.neo-edukasi.com/",
      },
      {
        type: "demo",
        label: { id: "Situs", en: "Website", ja: "公式サイト" },
        href: "https://neo-edukasi.com/",
      },
    ],
  },
  {
    id: "ainystudy",
    title: "AinyStudy: Adaptive AI Language Learning",
    year: { id: "2026", en: "2026", ja: "2026年" },
    visualLabel: { id: "Live / AI", en: "Live product / AI", ja: "公開プロダクト / AI" },
    description: {
      id: "Platform belajar bahasa Jepang (JLPT N5 sampai N1) dan TOEIC yang saya buat dan rilis sendiri. Tutor AI menjawab secara streaming dengan RAG dari materi kursus.",
      en: "A Japanese (JLPT N5 to N1) and TOEIC learning platform I built and launched myself. The AI tutor streams answers grounded in the course material with RAG.",
      ja: "個人で開発・公開した日本語（JLPT N5〜N1）・TOEIC学習プラットフォーム。教材データに基づくRAGでAIチューターがストリーミング回答。",
    },
    impact: {
      id: [
        "Next.js 16 App Router, React 19, Tailwind CSS v4, PostgreSQL, dan Drizzle ORM.",
        "Tutor AI streaming dengan RAG dari materi kursus.",
        "Penilaian audio, latihan spaced repetition, dan E2E test Playwright untuk placement test.",
      ],
      en: [
        "Next.js 16 App Router, React 19, Tailwind CSS v4, PostgreSQL and Drizzle ORM.",
        "A streaming AI tutor with retrieval-augmented generation (RAG) over the course material.",
        "Audio scoring, spaced repetition drills and Playwright end-to-end tests for the placement test.",
      ],
      ja: [
        "Next.js 16 App Router、React 19、Tailwind CSS v4、PostgreSQL、Drizzle ORMで構築。",
        "教材コンテンツを参照するRAGを用いたストリーミング対応AIチューターを実装。",
        "音声評価、間隔反復（Spaced Repetition）演習、プレースメントテストのPlaywright E2Eテストを実装。",
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
          ja: "日本語コースとTOEICコースを選択できる AinyStudy のトップページ",
        },
      },
    ],
    links: [
      {
        label: { id: "Buka", en: "Open", ja: "サイトを開く" },
        href: "https://ainystudy.ainything.online",
        type: "demo",
      },
    ],
  },
  {
    id: "latent-watermark",
    title: "Latent Watermark Evaluation Platform",
    year: { id: "2026", en: "2026", ja: "2026年" },
    visualLabel: { id: "Skripsi / ML", en: "Thesis / ML", ja: "卒業研究 / ML" },
    description: {
      id: "Skripsi S1: watermark DCT di latent space VAE, diuji terhadap serangan fine-tuning LoRA. Dashboard Next.js menampilkan bit yang bertahan di tiap gambar.",
      en: "My thesis: a DCT watermark in a VAE's latent space, tested against LoRA fine-tuning attacks. A Next.js dashboard shows which bits survive in each image.",
      ja: "学士卒業研究：VAEの潜在空間におけるDCT電子透かしを実装し、LoRAファインチューニング攻撃に対する耐性を検証。Next.jsダッシュボードで各画像の残存ビットを可視化。",
    },
    impact: {
      id: [
        "Meningkatkan ketahanan watermark DCT di latent space VAE terhadap fine-tuning LoRA dengan redundant embedding dan majority vote.",
        "Dashboard hasil Next.js dan demo API FastAPI di Modal untuk embed watermark langsung.",
        "Dataset gambar bukti dipublikasikan di Hugging Face.",
      ],
      en: [
        "Made DCT watermarking in a VAE latent space more resistant to LoRA fine-tuning with redundant embedding and majority voting.",
        "A Next.js results dashboard and a FastAPI demo service, deployable on Modal, with live watermark embedding.",
        "The evidence image dataset is published on Hugging Face.",
      ],
      ja: [
        "冗長埋め込みと多数決（Majority Voting）により、VAE潜在空間におけるDCT電子透かしのLoRAファインチューニング攻撃耐性を向上。",
        "Next.jsによる評価結果ダッシュボードと、Modal上でデプロイ可能なFastAPIリアルタイム透かし埋め込みデモを構築。",
        "検証用画像データセットをHugging Faceにて公開。",
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
          ja: "卒業研究ダッシュボード：元画像、透かし埋め込み画像、LoRA攻撃後の結果、およびメッセージビットマップ",
        },
      },
    ],
    links: [
      {
        label: { id: "Dashboard", en: "Dashboard", ja: "ダッシュボード" },
        href: "https://dashboard-latent-waterwark.vercel.app/",
        type: "demo",
      },
      {
        label: { id: "Dataset", en: "Dataset", ja: "データセット" },
        href: "https://huggingface.co/datasets/ridloau543/watermark-latent-citra-bukti",
        type: "demo",
      },
    ],
  },
  {
    id: "docextract",
    title: "DocExtract: Invoices and Receipts to JSON",
    year: { id: "2026", en: "2026", ja: "2026年" },
    visualLabel: { id: "Otomasi dokumen", en: "Document automation", ja: "文書処理自動化" },
    description: {
      id: "docTR membaca teks dokumen, lalu dua model Gemini mengekstrak datanya secara terpisah. Dokumen lolos otomatis hanya jika semua angka ditemukan di halaman dan totalnya cocok.",
      en: "docTR reads the text, then two Gemini models read the document separately. A document passes on its own only when every number is found on the page and the totals add up.",
      ja: "docTRでテキストを読み取り、2つのGeminiモデルが独立して解析。抽出した全数値がページ上で確認でき、合計金額が一致した場合のみ自動承認。",
    },
    impact: {
      id: [
        "Setiap angka hasil ekstraksi dicocokkan ke posisinya di halaman, lengkap dengan confidence per field dan halaman review.",
        "Pada 100 struk uji CORD, 55% lolos otomatis dengan 1 error dari 55 dokumen tersebut.",
        "Output JSON dan CSV, dengan demo publik berisi 7 contoh dokumen.",
      ],
      en: [
        "Every extracted number is grounded to its position on the page, with per-field confidence and a review screen.",
        "On 100 CORD test receipts, 55% passed automatically, with 1 error among those 55.",
        "Outputs JSON and CSV, with a public demo of 7 sample documents.",
      ],
      ja: [
        "抽出されたすべての数値をページ上の座標と照合し、項目ごとの信頼度スコアとレビュー画面を提供。",
        "CORDテスト領収書100件で55%が自動承認を通過（55件中エラー1件）。",
        "JSONおよびCSV形式での出力に対応し、7件のサンプル文書を試せる公開デモを提供。",
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
          ja: "領収書画像上の各数値をハイライトし、合計金額を照合する DocExtract の画面",
        },
      },
    ],
    links: [
      {
        label: { id: "Demo", en: "Demo", ja: "デモ" },
        href: "https://docextract.ainything.online",
        type: "demo",
      },
    ],
  },
  {
    id: "stunby-ml",
    title: "StunBy Machine Learning Capstone",
    year: { id: "2024", en: "2024", ja: "2024年" },
    visualLabel: { id: "ML / API Capstone", en: "ML / API Capstone", ja: "ML / API キャップストーン" },
    description: {
      id: "Pipeline capstone Bangkit Academy untuk klasifikasi pertumbuhan anak, tracking nutrisi, hitung Z-score standar WHO, dan chatbot AI.",
      en: "Bangkit Academy capstone pipeline for child growth classification, nutrition tracking, WHO Z-score calculation, and AI chatbot support.",
      ja: "Bangkit Academyのキャップストーンプロジェクト。小児の発育分類、栄養トラッキング、WHO基準Zスコア算出、AIチャットボット支援を行うMLパイプラインを構築。",
    },
    impact: {
      id: [
        "Membuat service Python, TensorFlow, YOLO, Flask API, dan Vertex AI RAG untuk klasifikasi pertumbuhan anak.",
        "Merancang dan mendokumentasikan REST API untuk integrasi aplikasi mobile dan cloud backend.",
        "Kolaborasi dengan tim mobile dan cloud lewat pull request di repo GitHub publik.",
      ],
      en: [
        "Built Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG services for growth classification.",
        "Designed and documented REST endpoints for nutrition checks, image classification handoff, and recommendations.",
        "Worked with the mobile and cloud teams via GitHub pull requests in public organization repos.",
      ],
      ja: [
        "Python、TensorFlow、YOLO、Flask API、Vertex AI RAGを用いた小児発育分類マイクロサービスを開発。",
        "栄養チェック、画像分類連携、レコメンデーション用のREST APIエンドポイントを設計・文書化。",
        "公開GitHub組織リポジトリ上でモバイルチーム・クラウドチームとPRを通じて連携開発。",
      ],
    },
    technologies: ["Python", "TensorFlow", "YOLO", "Flask API", "Vertex AI"],
    categories: ["professional", "data-ml"],
    accent: "#a78bfa",
    featured: true,
    links: [
      {
        label: { id: "ML Repo", en: "ML Repo", ja: "MLリポジトリ" },
        href: "https://github.com/StunBy-Bangkit-Capstone/Machine-Learning",
        type: "code",
      },
      {
        label: { id: "API Repo", en: "API Repo", ja: "APIリポジトリ" },
        href: "https://github.com/StunBy-Bangkit-Capstone/ai-integrated",
        type: "code",
      },
    ],
  },
  {
    id: "recycle-reward",
    title: "Recycle Reward Web Application",
    year: { id: "2024", en: "2024", ja: "2024年" },
    visualLabel: { id: "Laravel / Filament", en: "Laravel / Filament", ja: "Laravel / Filament" },
    description: {
      id: "Aplikasi pengelolaan sampah daur ulang dengan Laravel dan Filament admin panel, lengkap dengan poin reward, tiket aduan, dan dashboard analitik.",
      en: "Waste management platform with Laravel and Filament admin panel for recyclable collection, point reward calculations, complaint tickets, and analytics.",
      ja: "LaravelとFilament管理パネルで構築したリサイクル資源回収管理プラットフォーム。ポイント報酬計算、問い合わせチケット管理、分析ダッシュボードを実装。",
    },
    impact: {
      id: [
        "Membuat modul hitung poin reward, sistem tiket aduan, metrik dashboard, dan manajemen user.",
        "9 PR di-merge dan menulis dokumentasi setup lokal untuk tim.",
        "Menyusun skema MySQL dan relasi tabel sesuai konvensi Filament admin.",
      ],
      en: [
        "Implemented reward calculation modules, ticket filing system, dashboard metrics, and user management panel.",
        "Contributed 9 merged pull requests and setup documentation for team development.",
        "Structured MySQL schema and relational workflows following Filament admin conventions.",
      ],
      ja: [
        "ポイント報酬計算モジュール、問い合わせチケット機能、ダッシュボード指標、ユーザー管理パネルを実装。",
        "9件のPRをマージし、チーム開発向けのローカル環境構築ドキュメントを整備。",
        "Filament管理画面の規約に沿ったMySQLスキーマおよびリレーショナルデータフローを設計。",
      ],
    },
    technologies: ["Laravel", "Filament", "PHP", "MySQL", "Tailwind CSS"],
    categories: ["web"],
    accent: "#34d399",
    featured: true,
    links: [
      {
        label: { id: "Repository", en: "Repository", ja: "リポジトリ" },
        href: "https://github.com/Ridlo543/recycle-reward-app",
        type: "code",
      },
    ],
  },
  {
    id: "share-task",
    title: "Share Task App Suite",
    year: { id: "2024", en: "2024", ja: "2024年" },
    visualLabel: { id: "Android + API", en: "Android + API", ja: "Android + API" },
    description: {
      id: "Aplikasi task management Android yang terhubung ke backend Next.js TypeScript, Prisma ORM, dan PostgreSQL di Vercel.",
      en: "Android task collaboration client backed by a TypeScript Next.js API, Prisma ORM, and PostgreSQL database deployed on Vercel.",
      ja: "TypeScript製Next.js API、Prisma ORM、Vercel上のPostgreSQLデータベースと連携するAndroid向け共同タスク管理アプリケーション。",
    },
    impact: {
      id: [
        "Membuat flow task management di Android yang terhubung ke REST API terautentikasi.",
        "Merancang skema dan migrasi database dengan Prisma dan PostgreSQL.",
        "Memisahkan repo mobile dan API agar deploy bisa berjalan terpisah.",
      ],
      en: [
        "Built mobile task management flows connected to authenticated REST API endpoints.",
        "Designed relational schemas and database migrations with Prisma and PostgreSQL.",
        "Separated mobile and API repos for clean separation and independent deployment.",
      ],
      ja: [
        "認証付きREST APIエンドポイントと連携するモバイルタスク管理フローを構築。",
        "PrismaおよびPostgreSQLを用いたリレーショナルスキーマ設計とデータベースマイグレーションを実施。",
        "疎結合と独立デプロイを実現するため、モバイル側とAPI側のリポジトリを分離設計。",
      ],
    },
    technologies: ["Kotlin", "Android", "Next.js", "Prisma", "PostgreSQL"],
    categories: ["mobile", "web"],
    accent: "#38bdf8",
    links: [
      {
        label: { id: "Mobile Repo", en: "Mobile Repo", ja: "モバイルリポジトリ" },
        href: "https://github.com/Ridlo543/share-task-app",
        type: "code",
      },
      {
        label: { id: "API Repo", en: "API Repo", ja: "APIリポジトリ" },
        href: "https://github.com/Ridlo543/share-task-app-api",
        type: "code",
      },
      {
        label: { id: "Live API", en: "Live API", ja: "公開API" },
        href: "https://share-task-app.vercel.app",
        type: "demo",
      },
    ],
  },
  {
    id: "mobile-laundry",
    title: "Mobile Laundry Android Contribution",
    year: { id: "2025", en: "2025", ja: "2025年" },
    visualLabel: { id: "Compose App", en: "Compose App", ja: "Composeアプリ" },
    description: {
      id: "Kontribusi aplikasi Android Jetpack Compose untuk manajemen order laundry, tracking status cucian, dan flow login/register.",
      en: "Jetpack Compose Android contribution for laundry order management, customer status tracking, and authentication flows.",
      ja: "ランドリー注文管理、顧客向けステータス追跡、認証フローを備えたJetpack Compose製Androidアプリへの開発貢献。",
    },
    impact: {
      id: [
        "PR di-merge untuk card status order di dashboard customer dan halaman detail.",
        "Membuat komponen UI Compose dengan arsitektur Android ViewModel.",
        "Kolaborasi di repo tim organisasi Laundry Almada.",
      ],
      en: [
        "Submitted merged PRs for customer dashboard order cards, navigation state, and detail screens.",
        "Built declarative Compose UI components following Android ViewModel architecture.",
        "Collaborated in a team repository within the Laundry Almada organization.",
      ],
      ja: [
        "顧客ダッシュボードの注文ステータスカード、画面遷移状態、詳細画面のPRを実装・マージ。",
        "Android ViewModelアーキテクチャに準拠した宣言的Compose UIコンポーネントを構築。",
        "Laundry Almada組織のチームリポジトリにて共同開発を実施。",
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
          ja: "Almada Laundry アプリ画面：スプラッシュ、ログイン、新規登録、ダッシュボード、注文一覧、注文フィルター",
        },
      },
    ],
    links: [
      {
        label: { id: "Repository", en: "Repository", ja: "リポジトリ" },
        href: "https://github.com/Ridlo543/mobile-laundry-mbkm25",
        type: "code",
      },
    ],
  },
  {
    id: "unitip-mobile",
    title: "Unitip Mobile & API Contribution",
    year: { id: "2025", en: "2025", ja: "2025年" },
    visualLabel: { id: "Mobile / API", en: "Mobile / API", ja: "モバイル / API" },
    description: {
      id: "Aplikasi Android Jetpack Compose dan backend TypeScript API untuk layanan jasa titip barang dan makanan antarmahasiswa.",
      en: "Jetpack Compose Android app and TypeScript API for a peer-to-peer parcel and food delivery service.",
      ja: "学生間の荷物・食事の代理購入・配送サービス向けJetpack Compose製AndroidアプリおよびTypeScriptバックエンドAPI。",
    },
    impact: {
      id: [
        "Berkontribusi di UI Android Compose dan endpoint backend API.",
        "Mengimplementasikan StateFlow Compose dan mendokumentasikan kontrak endpoint.",
        "Merapikan struktur repo dan panduan local build.",
      ],
      en: [
        "Contributed to both mobile UI screens and backend API services across team repositories.",
        "Implemented Compose state flows and documented endpoints for client-server integration.",
        "Maintained repository structure and reproducible local build instructions.",
      ],
      ja: [
        "チームリポジトリ横断でモバイルUI画面とバックエンドAPIサービスの両方に貢献。",
        "ComposeのStateFlowを実装し、クライアント・サーバー連携用のエンドポイント仕様を文書化。",
        "リポジトリ構成とローカルビルド手順を整備。",
      ],
    },
    technologies: ["Kotlin", "Jetpack Compose", "TypeScript", "REST API"],
    categories: ["professional", "mobile", "web"],
    accent: "#f59e0b",
    links: [
      {
        label: { id: "Mobile Repo", en: "Mobile Repo", ja: "モバイルリポジトリ" },
        href: "https://github.com/Ridlo543/unitip-mobile-native",
        type: "code",
      },
      {
        label: { id: "API Repo", en: "API Repo", ja: "APIリポジトリ" },
        href: "https://github.com/Ridlo543/unitip-nextjs-api",
        type: "code",
      },
    ],
  },
  {
    id: "air-quality",
    title: "Air Quality Analytics Dashboard",
    year: { id: "2024", en: "2024", ja: "2024年" },
    visualLabel: { id: "Data Dashboard", en: "Data Dashboard", ja: "データダッシュボード" },
    description: {
      id: "Dashboard Streamlit untuk analisis data sensor kualitas udara Beijing, dilengkapi Jupyter notebook.",
      en: "Streamlit dashboard analyzing sensor data from Beijing air quality stations, with exploratory Jupyter notebooks.",
      ja: "北京の大気質観測局センサーデータを分析するStreamlitダッシュボードおよび探索的Jupyter Notebook。",
    },
    impact: {
      id: [
        "Membuat pipeline olah data dan visualisasi dengan Pandas dan Matplotlib.",
        "Deploy dashboard ke Streamlit Cloud agar bisa diakses publik.",
        "Menyusun notebook analisis dan environment yang mudah di-reproduce.",
      ],
      en: [
        "Built data processing and visualization pipelines using Pandas and Matplotlib.",
        "Deployed dashboard to Streamlit Cloud for public access.",
        "Set up a reproducible virtual environment and analysis notebooks.",
      ],
      ja: [
        "PandasおよびMatplotlibを用いたデータ前処理・可視化パイプラインを構築。",
        "Streamlit Cloudへダッシュボードを公開。",
        "再現可能な仮想環境と分析ノートブックを整備。",
      ],
    },
    technologies: ["Python", "Streamlit", "Pandas", "Jupyter Notebook"],
    categories: ["data-ml", "web"],
    accent: "#22d3ee",
    links: [
      {
        label: { id: "Dashboard", en: "Dashboard", ja: "ダッシュボード" },
        href: "https://dashboard-air-quality-wanshouxigong-ridlo.streamlit.app/",
        type: "demo",
      },
      {
        label: { id: "Repository", en: "Repository", ja: "リポジトリ" },
        href: "https://github.com/Ridlo543/analytic-data-air-quality",
        type: "code",
      },
    ],
  },
  {
    id: "news-recommendation",
    title: "News Recommendation & NER",
    year: { id: "2024", en: "2024", ja: "2024年" },
    visualLabel: { id: "NLP Notebook", en: "NLP Notebook", ja: "NLPノートブック" },
    description: {
      id: "Sistem rekomendasi berita bahasa Indonesia, search engine berbasis TF-IDF, dan Named Entity Recognition dari 500k+ artikel.",
      en: "Indonesian news recommendation, search engine, and Named Entity Recognition pipeline over 500k articles.",
      ja: "50万件以上のインドネシア語ニュース記事を対象とした記事推薦、TF-IDF検索エンジン、固有表現抽出（NER）パイプライン。",
    },
    impact: {
      id: [
        "Menganalisis 500k+ artikel berita Indonesia dengan TF-IDF dan cosine similarity.",
        "Membuat fitur pencarian dan rekomendasi artikel berita terkait.",
        "Mengintegrasikan model transformer pre-trained untuk NER bahasa Indonesia.",
      ],
      en: [
        "Analyzed large-scale Indonesian corpus with TF-IDF vectorization and cosine similarity.",
        "Built search and content recommendation mechanisms for news headlines and bodies.",
        "Integrated pretrained transformer NER models for Indonesian entity extraction.",
      ],
      ja: [
        "TF-IDFベクトル化とコサイン類似度を用いて大規模インドネシア語コーパスを解析。",
        "ニュース見出し・本文を対象とした検索および関連記事推薦メカニズムを構築。",
        "事前学習済みTransformer NERモデルを統合し、インドネシア語固有表現抽出を実装。",
      ],
    },
    technologies: ["Python", "NLP", "TF-IDF", "NER", "Jupyter Notebook"],
    categories: ["data-ml"],
    accent: "#c084fc",
    links: [
      {
        label: { id: "Notebook", en: "Notebook", ja: "ノートブック" },
        href: "https://github.com/Ridlo543/news-recommendation-NER/blob/main/sistem-rekomendasi-ner-news.ipynb",
        type: "code",
      },
      {
        label: { id: "Repository", en: "Repository", ja: "リポジトリ" },
        href: "https://github.com/Ridlo543/news-recommendation-NER",
        type: "code",
      },
    ],
  },
  {
    id: "turing-machine",
    title: "Turing Machine Simulator",
    year: { id: "2024", en: "2024", ja: "2024年" },
    visualLabel: { id: "Astro Simulator", en: "Astro Simulator", ja: "Astroシミュレーター" },
    description: {
      id: "Simulator web untuk memvisualisasikan transisi state mesin Turing, pergerakan tape head, dan formal grammar.",
      en: "Web simulator for visualizing Turing machine state transitions, tape movements, and formal grammars.",
      ja: "チューリングマシンの状態遷移、テープヘッドの移動、形式文法を視覚的に学べるWebシミュレーター。",
    },
    impact: {
      id: [
        "Membuat simulator dengan Astro dan vanilla JavaScript.",
        "Deploy ke GitHub Pages agar mahasiswa bisa langsung pakai saat kuliah.",
        "Memvisualisasikan perubahan state dan pergerakan tape head step-by-step tanpa library UI tambahan.",
      ],
      en: [
        "Built single-page simulator with Astro and vanilla JavaScript.",
        "Deployed to GitHub Pages for student access during university coursework.",
        "Visualized step-by-step state changes and tape head shifts with zero external UI dependencies.",
      ],
      ja: [
        "AstroとバニラJavaScriptでシングルページのシミュレーターを構築。",
        "大学の講義中に学生がすぐアクセスできるようGitHub Pagesへデプロイ。",
        "外部UIライブラリに依存せず、ステップごとの状態変化とテープヘッド移動を可視化。",
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
          ja: "チューリングマシンシミュレーター：除算入力フォームと状態遷移図（q0〜q3）",
        },
      },
    ],
    links: [
      {
        label: { id: "Live Demo", en: "Live Demo", ja: "ライブデモ" },
        href: "https://ridlo543.github.io/turing-machine-astro/",
        type: "demo",
      },
      {
        label: { id: "Repository", en: "Repository", ja: "リポジトリ" },
        href: "https://github.com/Ridlo543/turing-machine-astro",
        type: "code",
      },
    ],
  },
  {
    id: "karaoke-app",
    title: "Java Karaoke Desktop Application",
    year: { id: "2024", en: "2024", ja: "2024年" },
    visualLabel: { id: "Java Desktop App", en: "Java Desktop App", ja: "Javaデスクトップアプリ" },
    description: {
      id: "Aplikasi desktop karaoke Java dengan arsitektur MVC, pemutar audio, manajemen paket sesi, dan cetak nota transaksi.",
      en: "Java desktop karaoke application built with MVC architecture, multimedia audio playback, package session billing, and transaction receipt generation.",
      ja: "MVCアーキテクチャで構築したJava製カラオケデスクトップアプリ。マルチメディア音声再生、パッケージ課金管理、取引レシート発行機能を実装。",
    },
    impact: {
      id: [
        "Memisahkan logika Controller, Model data, dan komponen View dengan arsitektur MVC.",
        "Membuat pemutar audio, login/register, dan hitung otomatis nota transaksi.",
        "Menyediakan repo publik lengkap dengan diagram arsitektur dan screenshot UI.",
      ],
      en: [
        "Designed MVC architecture separating Controller business logic, data Models, and custom View components.",
        "Developed multimedia audio playback, user authentication flows, and automated transaction billing calculations.",
        "Published GitHub documentation with architecture diagrams and UI screenshots.",
      ],
      ja: [
        "Controllerのビジネスロジック、データModel、カスタムViewコンポーネントを分離したMVCアーキテクチャを設計。",
        "マルチメディア音声再生、ユーザー認証（ログイン/登録）、自動料金計算・レシート発行機能を開発。",
        "アーキテクチャ図およびUI画面スクリーンショットを含む公開GitHubドキュメントを整備。",
      ],
    },
    technologies: ["Java", "OOP", "MVC Architecture", "Desktop GUI", "Multimedia Audio"],
    categories: ["software"],
    accent: "#f59e0b",
    links: [
      {
        label: { id: "Repository", en: "Repository", ja: "リポジトリ" },
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
    ja: string[];
  };
};

export const bilingualExperiences: BilingualExperience[] = [
  {
    id: "neo-edukasi-dev",
    role: { id: "Web Developer", en: "Web Developer", ja: "Webデベロッパー" },
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: { id: "Apr 2024 - sekarang", en: "Apr 2024 - present", ja: "2024年4月 - 現在" },
    badge: { id: "Saat ini", en: "Current", ja: "現職" },
    description: {
      id: "Platform les privat dengan 20.000+ pengguna terdaftar. 241+ pull request di-merge untuk operasional tentor, jadwal, absensi, laporan admin, dan pengingat WhatsApp, termasuk update keamanan di 122 file.",
      en: "A private tutoring platform with 20,000+ registered users. 241+ merged pull requests for tutor operations, scheduling, attendance, admin reports and WhatsApp reminders, including a security release across 122 files.",
      ja: "登録ユーザー20,000人以上の個別指導プラットフォーム。講師業務、スケジュール、出席管理、管理レポート、WhatsAppリマインダー機能の開発および122ファイルにわたるセキュリティ対応を含め、241件以上のPRがマージ。",
    },
    list: { id: [], en: [], ja: [] },
  },
  {
    id: "bangkit-ml",
    role: { id: "Machine Learning Cohort", en: "Machine Learning Cohort", ja: "機械学習コホート生" },
    organization: "Bangkit Academy (Google, GoTo, Traveloka)",
    location: "Bandung, Indonesia",
    time: { id: "Sep - Des 2024", en: "Sep - Dec 2024", ja: "2024年9月 - 12月" },
    badge: { id: "Lulus", en: "Graduated", ja: "修了" },
    description: {
      id: "Capstone StunBy bertiga: deteksi tinggi badan dengan YOLO, prediksi gizi TensorFlow, dan chatbot RAG Vertex AI lewat API Flask. Saya juga menulis dokumentasi API publiknya.",
      en: "The StunBy capstone in a team of three: YOLO height detection, TensorFlow nutrition prediction and a Vertex AI RAG chatbot served via Flask APIs. I also wrote its public API docs.",
      ja: "3名チームでのStunByキャップストーン：YOLOによる身長推定、TensorFlowによる栄養予測、Flask API経由のVertex AI RAGチャットボットを構築し、公開APIドキュメントも執筆。",
    },
    list: {
      id: [
        "Membuat service Python, TensorFlow, YOLO, Flask API, dan Vertex AI RAG untuk monitoring kesehatan anak.",
        "Menulis spesifikasi REST API dan menghubungkan output model ke aplikasi mobile dan cloud.",
        "Menyelesaikan seluruh sertifikasi Machine Learning, Deep Learning, dan Google Cloud.",
      ],
      en: [
        "Developed Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG services for child health monitoring.",
        "Documented REST API specifications and connected model inference outputs with mobile and cloud infrastructure.",
        "Completed certification courses in Machine Learning, Deep Learning, and Google Cloud.",
      ],
      ja: [
        "Python、TensorFlow、YOLO、Flask API、Vertex AI RAGを用いた小児健康モニタリング用マイクロサービスを開発。",
        "REST API仕様を文書化し、モデル推論結果をモバイルおよびクラウド基盤と連携。",
        "機械学習、ディープラーニング、Google Cloudの認定コースを修了。",
      ],
    },
  },
  {
    id: "asdos-database",
    role: { id: "Asisten Dosen, Basis Data dan Pemrograman Web", en: "Teaching Assistant, Databases and Web Programming", ja: "ティーチング・アシスタント（データベース・Webプログラミング）" },
    organization: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta, Indonesia",
    time: { id: "Sep 2024 - Jul 2025", en: "Sep 2024 - Jul 2025", ja: "2024年9月 - 2025年7月" },
    badge: { id: "Kampus", en: "University", ja: "大学" },
    description: {
      id: "Mengajar 50+ mahasiswa desain skema dan optimasi SQL, lalu 60+ mahasiswa web full-stack dan desain REST API.",
      en: "Taught 50+ students schema design and SQL tuning, then 60+ students full-stack web development and REST API design.",
      ja: "50名以上の学生にスキーマ設計とSQLチューニングを指導し、続いて60名以上の学生にフルスタックWeb開発とREST API設計を指導。",
    },
    list: { id: [], en: [], ja: [] },
  },
  {
    id: "neo-edukasi-intern",
    role: { id: "Web Developer Intern", en: "Web Developer Intern", ja: "Webデベロッパー インターン" },
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: { id: "Jan 2024 - Mar 2024", en: "Jan 2024 - Mar 2024", ja: "2024年1月 - 2024年3月" },
    badge: { id: "Magang", en: "Internship", ja: "インターン" },
    description: {
      id: "Membuat dan merilis landing page perusahaan dengan Astro, React, dan Tailwind CSS.",
      en: "Built and launched the company landing page with Astro, React and Tailwind CSS.",
      ja: "Astro、React、Tailwind CSSを用いて企業のランディングページを設計・公開。",
    },
    list: {
      id: [
        "Membuat dan merilis landing page marketing dengan Astro, React, dan Tailwind CSS.",
        "Mengoptimasi loading aset web dan menyederhanakan navigasi halaman.",
      ],
      en: [
        "Built and launched marketing landing pages with Astro, React, and Tailwind CSS.",
        "Optimized asset loading and simplified page navigation.",
      ],
      ja: [
        "Astro、React、Tailwind CSSでマーケティング用ランディングページを構築・公開。",
        "アセット配信の最適化とナビゲーション導線の改善を実施。",
      ],
    },
  },
  {
    id: "asdos-statistika",
    role: { id: "Asisten Praktikum Statistika", en: "Teaching Assistant, Statistics Practicum", ja: "ティーチング・アシスタント（統計学実習）" },
    organization: "Universitas Sebelas Maret (UNS)",
    location: "Surakarta, Indonesia",
    time: { id: "Agu - Des 2023", en: "Aug - Dec 2023", ja: "2023年8月 - 12月" },
    badge: { id: "Kampus", en: "University", ja: "大学" },
    description: {
      id: "Menulis 9 modul praktikum R dan membimbing 40+ mahasiswa lewat 20+ studi kasus.",
      en: "Wrote 9 R lab modules and guided 40+ students through 20+ case studies.",
      ja: "R言語の実習モジュール9本を執筆し、20件以上のケーススタディを通じて40名以上の学生を指導。",
    },
    list: {
      id: [
        "Menulis 9 modul praktikum R tentang uji hipotesis, regresi, dan visualisasi data.",
        "Membimbing 40+ mahasiswa dalam olah data dan latihan statistika.",
      ],
      en: [
        "Wrote 9 R lab modules covering hypothesis testing, regression modeling, and data visualization.",
        "Guided 40+ students through data manipulation and statistical exercises.",
      ],
      ja: [
        "仮説検定、回帰モデリング、データ可視化を網羅したR言語実習モジュール9本を作成。",
        "実践的なデータ操作および統計演習において40名以上の学生を指導。",
      ],
    },
  },
];

export const bilingualEducation = {
  title: { id: "S1 Informatika", en: "Bachelor of Computer Science (Informatics)", ja: "情報工学学士（インフォマティクス）" },
  institution: { id: "Universitas Sebelas Maret", en: "Sebelas Maret University", ja: "スブラス・マレット大学（UNS）" },
  location: "Surakarta, Indonesia",
  period: { id: "Agu 2022 - Okt 2026", en: "Aug 2022 - Oct 2026", ja: "2022年8月 - 2026年10月" },
  gpa: { id: "IPK 3.81 / 4.00", en: "GPA 3.81 / 4.00", ja: "GPA 3.81 / 4.00" },
  description: {
    id: "Lulus Oktober 2026. Fokus pada software engineering, database, machine learning, dan statistika terapan, dengan skripsi tentang watermark laten.",
    en: "Graduated October 2026. Focus on software engineering, database systems, machine learning and applied statistics, with a thesis on latent watermarks.",
    ja: "2026年10月卒業。ソフトウェア工学、データベースシステム、機械学習、応用統計学を専攻し、卒業研究では潜在空間電子透かし（Latent Watermark）を研究。",
  },
};
