export const experiences = [
  {
    role: "Web Developer",
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: ["Apr 2024 - Present"],
    badge: "Current Role",
    description:
      "Main operational platform developer for tutoring services, billing reconciliation, reporting, and tutor management.",
    list: [
      "Authored 227+ merged PRs for production Laravel backend features, automated reporting, security patches, and daily operational fixes.",
      "Engineered automated prepaid, postpaid, and per-session invoice reconciliation, streamlining monthly financial reports.",
      "Wrote feature test suites and optimized complex MySQL joins, cutting critical report load times by up to 40%.",
      "Integrated WhatsApp API for automated notification dispatch to parents, students, and tutors.",
    ],
  },
  {
    role: "Teaching Assistant - Web Programming",
    organization: "Sebelas Maret University (UNS)",
    location: "Surakarta, Indonesia",
    time: ["Feb 2025 - Jul 2025"],
    badge: "Academic",
    description:
      "Guided undergraduate students through full-stack web development, client-server architecture, and API integration.",
    list: [
      "Instructed 60+ students in modern full-stack web engineering, RESTful API design, and frontend-backend connectivity.",
      "Evaluated student lab practicums and provided architectural code review guidance.",
    ],
  },
  {
    role: "Machine Learning Cohort",
    organization: "Bangkit Academy (Google, GoTo, Traveloka)",
    location: "Bandung, Indonesia",
    time: ["Sep 2024 - Jan 2025"],
    badge: "Graduated",
    description:
      "Selected for MSIB Batch 2 in the Machine Learning learning path; built the StunBy capstone product.",
    list: [
      "Developed Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG microservices for child health monitoring.",
      "Documented REST API specifications and connected model inference outputs with mobile and cloud infrastructure.",
      "Completed certification courses in Machine Learning, Deep Learning, and Google Cloud.",
    ],
  },
  {
    role: "Assistant Lecturer - Database Course",
    organization: "Sebelas Maret University (UNS)",
    location: "Surakarta, Indonesia",
    time: ["Sep 2024 - Jan 2025"],
    badge: "Academic",
    description:
      "Guided undergraduate students through relational database modeling, SQL practice, and query debugging.",
    list: [
      "Mentored 40+ students in normalization, ER diagrams, complex SQL queries, and transaction handling.",
      "Assisted students with MySQL and PostgreSQL schema design and indexing strategies.",
    ],
  },
  {
    role: "Web Developer Intern",
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: ["Jan 2024 - Mar 2024"],
    badge: "Internship",
    description:
      "Built and launched a modern company landing page with Astro, React, and Tailwind CSS.",
    list: [
      "Raised Google PageSpeed Insights score from 65 to 95+ through asset optimization and island architecture.",
      "Reduced landing page load time by 50% and contributed to a 20% decrease in user bounce rate.",
    ],
  },
  {
    role: "Teaching Assistant - Statistics Practicum",
    organization: "Sebelas Maret University (UNS)",
    location: "Surakarta, Indonesia",
    time: ["Aug 2023 - Dec 2023"],
    badge: "Academic",
    description:
      "Developed R-based statistical analysis course materials for the Data Science undergraduate program.",
    list: [
      "Authored 9 practical modules in R covering hypothesis testing, regression modeling, and data visualization.",
      "Guided 40+ students through hands-on data manipulation and statistical problem solving.",
    ],
  },
];

export const featuredExperiences = experiences.slice(0, 3);
