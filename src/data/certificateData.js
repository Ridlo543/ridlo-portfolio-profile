const certificateAsset = (file) => encodeURI(`/certificates/${file}`);

export const education = {
  title: "Bachelor of Computer Science, Informatics",
  institution: "Sebelas Maret University",
  location: "Surakarta, Indonesia",
  period: "Aug 2022 - Jul 2026",
  gpa: "GPA 3.75",
  description:
    "Computer Science undergraduate focused on software engineering, database systems, web development, and applied machine learning.",
};

export const certificateFilters = [
  { label: "All", value: "all" },
  { label: "Career", value: "career" },
  { label: "ML & Data", value: "ml-data" },
  { label: "Web & Mobile", value: "web-mobile" },
  { label: "Cloud & Network", value: "cloud-network" },
];

const rawCertificates = [
  {
    title: "Bangkit 2024 Machine Learning Completion",
    issuer: "Bangkit Academy",
    date: "Jan 2025",
    categories: ["career", "ml-data"],
    description:
      "Certificate of completion for Bangkit 2024 Batch 2, specializing in Machine Learning.",
    file: "Pelatihan/Bangkit/[Bangkit 2024 Batch 2] Certificate - M312B4KY3827.pdf",
    featured: true,
  },
  {
    title: "Bangkit 2024 Graduation Letter",
    issuer: "Bangkit Academy",
    date: "Jan 2025",
    categories: ["career", "ml-data"],
    description:
      "Official graduation letter for the Machine Learning learning path in Bangkit 2024 Batch 2.",
    file: "Pelatihan/Bangkit/[Bangkit 2024 Batch 2] Graduation Letter - M312B4KY3827.pdf",
    featured: true,
  },
  {
    title: "MSIB Certified Independent Study - Bangkit",
    issuer: "Kampus Merdeka / Dicoding",
    date: "2024",
    categories: ["career", "ml-data"],
    description:
      "MSIB certified independent study record for the Bangkit program.",
    file: "Sertifikat MSIB Bangkit.pdf",
    featured: true,
  },
  {
    title: "Neo Edukasi Web Developer Internship Letter",
    issuer: "CV Cendekia Karya",
    date: "Mar 2024",
    categories: ["career"],
    description:
      "Internship completion letter for Web Developer work at Neo Edukasi from January to February 2024.",
    file: "PengalamanKerja/Surat Keterangan Internship Neo Edukasi.pdf",
    featured: true,
  },
  {
    title: "Assistant Lecturer - Database Course",
    issuer: "Sebelas Maret University",
    date: "Feb 2025",
    categories: ["career"],
    description:
      "Teaching assistant certificate for the Database course, Informatics program.",
    file: "PengalamanKerja/Asisten Dosen Ridlo Abdullah Basis Data D.pdf",
    featured: true,
  },
  {
    title: "Assistant Lecturer - Statistics Practicum",
    issuer: "Sebelas Maret University",
    date: "Feb 2024",
    categories: ["career"],
    description:
      "Teaching assistant certificate for Statistics practicum in the Data Science program.",
    file: "PengalamanKerja/Asisten Dosen Ridho Abdullah Statistika A.pdf",
  },
  {
    title: "Alibaba Cloud Certified Developers",
    issuer: "Alibaba Cloud",
    date: "Mar 2024",
    categories: ["cloud-network"],
    description:
      "Developer certification covering Alibaba Cloud fundamentals and cloud application concepts.",
    file: "ridlo_AlibabaCloudCertifiedDevelopers-1.jpg",
    featured: true,
  },
  {
    title: "CCNAv7 Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Jun 2024",
    categories: ["cloud-network"],
    description:
      "Cisco Networking Academy course completion for CCNAv7: Introduction to Networks.",
    file: "Pelatihan/cisco/RidloUlinnuha-Computer Network-certificate_2.pdf",
    featured: true,
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Dicoding",
    date: "Oct 2024",
    categories: ["ml-data"],
    description:
      "Dicoding course certificate for introductory artificial intelligence concepts.",
    file: "Pelatihan/course-dicoding/sertifikat_course_653_747956_111024224155_Belajar Dasar AI.pdf",
    featured: true,
  },
  {
    title: "Python Programming Fundamentals",
    issuer: "Dicoding",
    date: "Mar 2024",
    categories: ["ml-data"],
    description:
      "Dicoding course certificate for Python programming fundamentals.",
    file: "Pelatihan/course-dicoding/sertifikat_course_python_dasar.pdf",
    featured: true,
  },
  {
    title: "Data Visualization Fundamentals",
    issuer: "Dicoding",
    date: "Feb 2024",
    categories: ["ml-data"],
    description:
      "Dicoding course certificate for basic data visualization concepts.",
    file: "Pelatihan/course-dicoding/sertifikat_course_visualisasiData.pdf",
    featured: true,
  },
  {
    title: "SQL Fundamentals",
    issuer: "Dicoding",
    date: "Oct 2023",
    categories: ["ml-data", "web-mobile"],
    description:
      "Dicoding course certificate for Structured Query Language fundamentals.",
    file: "Pelatihan/course-dicoding/sql_sertifikat_course_600_747956_011023004802_SQL.pdf",
  },
  {
    title: "Back-End Application Beginner",
    issuer: "Dicoding",
    date: "Dec 2022",
    categories: ["web-mobile"],
    description:
      "Dicoding course certificate for beginner back-end application development.",
    file: "Pelatihan/course-dicoding/backend_sertifikat_course_261_747956_191222144142_backend1.pdf",
    featured: true,
  },
  {
    title: "Front-End Web Beginner",
    issuer: "Dicoding",
    date: "Mar 2023",
    categories: ["web-mobile"],
    description:
      "Dicoding course certificate for beginner front-end web development.",
    file: "Pelatihan/course-dicoding/front_end_sertifikat_course_315_747956_100323103957_frontPemula.pdf",
  },
  {
    title: "Web Programming Fundamentals",
    issuer: "Dicoding",
    date: "Feb 2023",
    categories: ["web-mobile"],
    description: "Dicoding course certificate for basic web programming.",
    file: "Pelatihan/course-dicoding/webdasar_sertifikat_course_123_747956_150223220327_web-dasar.pdf",
  },
  {
    title: "JavaScript Programming Fundamentals",
    issuer: "Dicoding",
    date: "Oct 2022",
    categories: ["web-mobile"],
    description:
      "Dicoding course certificate for JavaScript programming fundamentals.",
    file: "Pelatihan/course-dicoding/javascript_sertifikat_course_256_747956_251022190928_javascriptDasar.pdf",
  },
  {
    title: "IDCamp Front-End Developer Intermediate",
    issuer: "IDCamp / Dicoding",
    date: "Jun 2023",
    categories: ["web-mobile"],
    description:
      "IDCamp certificate for intermediate front-end developer training.",
    file: "Pelatihan/course-dicoding/Sertifikat Front end IDcamp.pdf",
    featured: true,
  },
  {
    title: "Full Stack Coding Bootcamp",
    issuer: "Progate",
    date: "Jan 2023",
    categories: ["web-mobile"],
    description:
      "Lukananakit 7.0 full stack coding bootcamp completion certificate.",
    file: "Pelatihan/progate/Fullstack - Ridlo Abdullah Ulinnuha.pdf",
    featured: true,
  },
];

export const certificates = rawCertificates.map((certificate) => ({
  ...certificate,
  href: certificateAsset(certificate.file),
  fileType: certificate.file.split(".").pop()?.toUpperCase() || "FILE",
}));

export const featuredCertificates = certificates.filter(
  (certificate) => certificate.featured,
);
