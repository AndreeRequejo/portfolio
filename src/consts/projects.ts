import portfolio from "../assets/projects/portfolio.png";

export const projects = [
  {
    title: "Portafolio Personal",
    desc: "Un portafolio personal que muestra mis proyectos y habilidades de desarrollo web.",
    tags: ["Astro", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel", "Formspree"],
    platform: "web" as const,
    featured: true,
    image: portfolio.src,
    github: "https://github.com/AndreeRequejo/portfolio",
  },
];
