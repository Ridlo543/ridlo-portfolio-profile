import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import PortfolioDev from "../assets/img-projects/PortfolioDev.jpg";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";
import AstroEcommers from "../assets/img-projects/astroEcommers.jpg";
import CvBuilder from "../assets/img-projects/CvBuilder.png";
import ChatAi from "../assets/img-projects/ChatAI.png";
import ProductivityApp from "../assets/img-projects/productivityApp.png";

export const projects = [
  {
    title: "Commerce Platform",
    description:
      "A full-stack commerce template with product browsing, cart flows, authentication, admin tools, and content sections.",
    image: VintageTone.src,
    technologies: ["Vue.js", "Tailwind", "Express", "MongoDB"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    code: "https://github.com/Lautaro-R-collins/VintageTone-Front-Vue.git",
    category: "fullstack",
  },
  {
    title: "React Storefront",
    description:
      "A React ecommerce storefront with search, categories, reviews, cart interactions, and reusable UI components.",
    image: ReactEcommerce.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
    category: "fullstack",
  },
  {
    title: "Productivity Dashboard",
    description:
      "A productivity app concept with tasks, calendar events, focus sessions, AI assistance, and admin metrics.",
    image: ProductivityApp.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://productivity-app-tau-virid.vercel.app",
    code: "https://github.com/Lautaro-R-collins/productivity-App.git",
    category: "fullstack",
  },
  {
    title: "AI Chat Interface",
    description:
      "A multi-model chat interface template for automated assistance, conversation history, and API-driven responses.",
    image: ChatAi.src,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demo: "https://multi-model-ai-chat-platform.vercel.app",
    code:
      "https://github.com/Lautaro-R-collins/Multi-Model-AI-Chat-Platform.git",
    category: "fullstack",
  },
  {
    title: "Astro Ecommerce",
    description:
      "A frontend ecommerce concept built with Astro and React, including category views and cart-ready product cards.",
    image: AstroEcommers.src,
    technologies: ["React", "Astro", "Tailwind", "daisyUI"],
    demo: "https://e-commer-astro.vercel.app",
    code: "https://github.com/Lautaro-R-collins/E-commer-Astro.git",
    category: "frontend",
  },
  {
    title: "Task Board App",
    description:
      "A full-stack task management template with CRUD flows, boards, lists, and authenticated user sessions.",
    image: imgNote.src,
    technologies: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://front-react-todo.onrender.com",
    code: "https://github.com/Lautaro-R-collins/Front-react-todo",
    category: "fullstack",
  },
  {
    title: "CV Builder",
    description:
      "A multilingual resume builder concept with structured sections, export-friendly layouts, and ATS-aware content.",
    image: CvBuilder.src,
    technologies: ["React", "Context API", "Tailwind", "i18n"],
    demo: "https://cv-builder-pi-three.vercel.app",
    code: "https://github.com/Lautaro-R-collins/CV-Builder.git",
    category: "frontend",
  },
  {
    title: "Urban Shop Concept",
    description:
      "A frontend shop template for apparel and accessories with product cards, cart interactions, and payment-ready flows.",
    image: urbanStyle.src,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
    category: "frontend",
  },
  {
    title: "Developer Portfolio",
    description:
      "A modern portfolio starter built with Astro, Tailwind CSS, and JavaScript for reusable developer profiles.",
    image: PortfolioDev.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://portfolio-developers-astro.vercel.app/",
    code:
      "https://github.com/Lautaro-R-collins/Portfolio-developers-astro.git",
    category: "frontend",
  },
  {
    title: "Service Landing Page",
    description:
      "A responsive Astro landing page template for professional services, lead capture, and conversion-focused sections.",
    image: legalWeb.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://legal-staff.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/legal-staff",
    category: "frontend",
  },
  {
    title: "Healthcare Landing Page",
    description:
      "A polished static website template for healthcare-style services with clear sections and responsive layouts.",
    image: mediCare.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://obra-social-landing.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/obra-social-landing.git",
    category: "frontend",
  },
  {
    title: "Fitness Landing Page",
    description:
      "A high-energy marketing page template for fitness services, plans, calls to action, and visual project sections.",
    image: astroFit.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://gym-page-sandy.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/GymPage.git",
    category: "frontend",
  },
  {
    title: "Commerce REST API",
    description:
      "A REST API template with product, user, authentication, and CRUD patterns for ecommerce-style applications.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
    category: "backend",
  },
  {
    title: "AI Chat API",
    description:
      "An Express API concept for authenticated chat workflows, model routing, and persistent conversation data.",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://multi-model-ai-chat-platform.vercel.app",
    code:
      "https://github.com/Lautaro-R-collins/Multi-Model-AI-Chat-Platform/tree/main/backend",
    category: "backend",
  },
  {
    title: "Planning App",
    description:
      "A planning dashboard template with project lists, responsive layouts, and a clean React plus TypeScript stack.",
    image:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    technologies: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://planify-1tu6.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/PlaniFy-organization-app",
    category: "frontend",
  },
  {
    title: "Startup Challenge Page",
    description:
      "A static Astro page created as a startup-style challenge with simple sections, responsive styling, and reusable blocks.",
    image: Verbenas.src,
    technologies: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://challenge-neowyze.onrender.com/",
    code: "https://github.com/Lautaro-R-collins/challenge-Neowyze.git",
    category: "frontend",
  },
];
