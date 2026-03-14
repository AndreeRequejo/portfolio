import portfolio from "../assets/projects/portfolio.png";
import type { Locale } from "../i18n/types";

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  platform: "web" | "mobile";
  featured: boolean;
  image: string;
  github: string;
  demo?: string;
};

const portfolioTags = [
  "Astro",
  "TypeScript",
  "Framer Motion",
  "Tailwind CSS",
  "Vercel",
  "Formspree",
];

export const projects: Record<Locale, Project[]> = {
  es: [
    {
      title: "Portafolio Personal",
      desc: "Un portafolio personal que muestra mis proyectos y habilidades de desarrollo web.",
      tags: portfolioTags,
      platform: "web",
      featured: true,
      image: portfolio.src,
      github: "https://github.com/AndreeRequejo/portfolio",
    },
  ],
  en: [
    {
      title: "Personal Portfolio",
      desc: "A personal portfolio that showcases my projects and web development skills.",
      tags: portfolioTags,
      platform: "web",
      featured: true,
      image: portfolio.src,
      github: "https://github.com/AndreeRequejo/portfolio",
    },
  ],
};
