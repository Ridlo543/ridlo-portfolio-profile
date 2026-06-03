export const experiences = [
  {
    role: "Web Developer",
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: ["Apr 2024 - Present"],
    description:
      "Build and maintain a Laravel education operations platform across billing, reporting, notifications, dashboards, tutor workflows, and data maintenance.",
    list: [
      "Worked on 177 merged PRs for production Laravel features and operational fixes.",
      "Fixed prepaid, postpaid, and per-meet flows for invoice reconciliation, salary reports, report submissions, and admin dashboards.",
      "Wrote feature tests, refactored billing and notification code, and optimized MySQL queries to cut load time by up to 40%.",
    ],
  },
  {
    role: "Machine Learning Cohort",
    organization: "Bangkit Academy",
    location: "Bandung, Indonesia",
    time: ["Sep 2024 - Present"],
    description:
      "Worked on StunBy's ML/API integration for nutrition prediction, tracking, chatbot/model updates, and API documentation.",
    list: [
      "Integrated Python, TensorFlow, YOLO, Flask API, and Vertex AI RAG workflows.",
      "Documented API endpoints for nutrition prediction, growth checks, food tracking, and recommendations.",
      "Collaborated through public organization repositories and merged team PRs.",
    ],
  },
  {
    role: "Assistant Lecturer, Database Course",
    organization: "Sebelas Maret University",
    location: "Surakarta, Indonesia",
    time: ["Sep 2024 - Present"],
    description:
      "Guided students through SQL practice, database design topics, and troubleshooting during database coursework.",
    list: [
      "Supported database design discussion and hands-on SQL practice.",
      "Helped students troubleshoot schema, query, and implementation issues.",
    ],
  },
  {
    role: "Web Developer Intern",
    organization: "Neo Edukasi (CV. Cendekia Karya)",
    location: "Karanganyar, Indonesia",
    time: ["Jan 2024 - Mar 2024"],
    description:
      "Built a fast landing page with Astro, React, and Tailwind CSS for Neo Edukasi.",
    list: [
      "Improved PageSpeed Insights from 65 to 95+.",
      "Cut page load time by 50% and supported interface updates that reduced bounce rate by 20%.",
    ],
  },
  {
    role: "Teaching Assistant, Data Science Statistics Practicum",
    organization: "Sebelas Maret University",
    location: "Surakarta, Indonesia",
    time: ["Aug 2023 - Dec 2023"],
    description:
      "Developed R-based teaching material and supported students during data science statistics practicum sessions.",
    list: [
      "Developed 9 R-based teaching modules with 20+ case studies.",
      "Supported 40+ students through practicum sessions and statistical analysis exercises.",
    ],
  },
];

export const featuredExperiences = experiences.slice(0, 2);
