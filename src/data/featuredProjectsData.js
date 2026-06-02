import urbanStyle from "../assets/img-projects/urbanStyle.png";
import ReactEcommerce from "../assets/img-projects/ecommers.jpg";
import VintageTone from "../assets/img-projects/vintageToneApp.jpg";

export const projects = [
    {
    title: "Commerce Starter",
    image: VintageTone.src,
    technologies: ["Vue.js", "Tailwind", "Express", "MongoDB"],
    demo: "https://vintage-tone-front-vue.vercel.app",
    code: "https://github.com/Lautaro-R-collins/VintageTone-Front-Vue.git",
    category: "fullstack",
  },
  {
    title: "React Storefront",
    image: ReactEcommerce.src,
    technologies: ["React", "Tailwind", "Node.js" ,"Express", "MongoDB", "jwt"],
    demo: "https://react-e-commerce-three-phi.vercel.app",
    code: "https://github.com/Lautaro-R-collins/React-E-commerce.git",
  },
  {
    title: "Urban Shop Concept",
    description: "Short placeholder description for a featured commerce project.",
    image: urbanStyle.src,
    technologies: ["React", "Tailwind", "Firebase"],
    demo: "https://proyecto-final-rodriguez-sable.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ProyectoFinal-Rodriguez.git",
  },
  {
    title: "Commerce REST API",
    image: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://react-e-commerce-three-phi.vercel.app/",
    code: "https://github.com/Lautaro-R-collins/ApiRest-Ecommerce.git",
  },
];
