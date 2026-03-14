export type { Locale } from "./types";
import type { Locale } from "./types";

import { about } from "../consts/about";
import { projects, type Project } from "../consts/projects";
import { categories, type SkillCategory } from "../consts/skills";
import { experiences, type Experience } from "../consts/experience";
import { tabs, type TabItem } from "../consts/tabs";

type Dictionary = {
  meta: {
    htmlLang: string;
    title: string;
  };
  layout: {
    footer: string;
  };
  tabs: TabItem[];
  sidebar: {
    badge: string;
    bio: string;
    location: string;
    educationLabel: string;
    educationTitle: string;
    educationPeriod: string;
    cvLabel: string;
  };
  mobileHeader: {
    cvTitle: string;
    educationTitle: string;
    educationPeriod: string;
  };
  language: {
    label: string;
    navigationMenu: string;
  };
  about: {
    publishedAgo: string;
    headingPrefix: string;
    headingHighlight: string;
    description: string;
    phrase: string;
    philosophy: string;
  };
  projects: {
    repositories: string;
    previewOf: string;
    web: string;
    mobile: string;
    featured: string;
    code: string;
    demo: string;
    items: Project[];
  };
  skills: {
    categories: SkillCategory[];
  };
  experience: {
    heading: string;
    items: Experience[];
  };
  contact: {
    heading: string;
    intro: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    send: string;
    availability: string;
  };
  contactForm: {
    pendingTitle: string;
    successTitle: string;
    errorTitle: string;
    honeypotError: string;
    tooFastError: string;
    cooldownError: string;
    pendingMessage: string;
    genericError: string;
    successMessage: string;
    networkError: string;
  };
};



const dictionaries: Record<Locale, Dictionary> = {
  es: {
    meta: {
      htmlLang: "es",
      title: "Andree Requejo - Developer",
    },
    layout: {
      footer: "Hecho con ♥ y mucho codigo",
    },
    tabs: tabs.es,
    sidebar: {
      badge: "Portfolio",
      bio: "Full-Stack Developer apasionado por crear experiencias web unicas.",
      location: "Chiclayo, Peru",
      educationLabel: "Educacion",
      educationTitle: "Ingenieria de Sistemas y Computacion",
      educationPeriod: "Universidad Catolica Santo Toribio de Mogrovejo · 2021 - 2026",
      cvLabel: "Descargar CV",
    },
    mobileHeader: {
      cvTitle: "Descargar CV",
      educationTitle: "Ing. de Sistemas y Computacion",
      educationPeriod: "2021 - 2026",
    },
    language: {
      label: "Idioma",
      navigationMenu: "Menu de navegacion",
    },
    about: {
      publishedAgo: "Publicado hace 1 min",
      headingPrefix: "Hola, soy Andree",
      headingHighlight: "desarrollador web.",
      ...about.es,
      philosophy: "Mi filosofia de desarrollo",
    },
    projects: {
      repositories: "repositorios",
      previewOf: "Preview de",
      web: "Web",
      mobile: "Mobile",
      featured: "Destacado",
      code: "Codigo",
      demo: "Demo",
      items: projects.es,
    },
    skills: {
      categories: categories.es,
    },
    experience: {
      heading: "Experiencia laboral",
      items: experiences.es,
    },
    contact: {
      heading: "Contacto",
      intro: "Tienes un proyecto en mente o quieres colaborar? Me encantaria saber de ti.",
      placeholders: {
        name: "Nombre",
        email: "Email",
        message: "Tu mensaje...",
      },
      send: "Enviar mensaje",
      availability: "Actualmente disponible para proyectos freelance y oportunidades laborales.",
    },
    contactForm: {
      pendingTitle: "Enviando",
      successTitle: "Mensaje enviado",
      errorTitle: "No se pudo enviar",
      honeypotError: "No se pudo validar el envio. Recarga la pagina.",
      tooFastError: "Espera un momento antes de enviar el formulario.",
      cooldownError: "Espera {seconds}s antes de enviar otro mensaje.",
      pendingMessage: "Enviando tu mensaje...",
      genericError: "No se pudo enviar el mensaje. Intentalo de nuevo.",
      successMessage: "Gracias. Te respondere lo antes posible.",
      networkError: "Error de red. Revisa tu conexion e intentalo otra vez.",
    },
  },
  en: {
    meta: {
      htmlLang: "en",
      title: "Andree Requejo - Developer",
    },
    layout: {
      footer: "Made with ♥ and lots of code",
    },
    tabs: tabs.en,
    sidebar: {
      badge: "Portfolio",
      bio: "Full-stack developer passionate about building unique web experiences.",
      location: "Chiclayo, Peru",
      educationLabel: "Education",
      educationTitle: "Systems and Computer Engineering",
      educationPeriod: "Universidad Catolica Santo Toribio de Mogrovejo · 2021 - 2026",
      cvLabel: "Download CV",
    },
    mobileHeader: {
      cvTitle: "Download CV",
      educationTitle: "Systems and Computer Engineering",
      educationPeriod: "2021 - 2026",
    },
    language: {
      label: "Language",
      navigationMenu: "Navigation menu",
    },
    about: {
      publishedAgo: "Published 1 min ago",
      headingPrefix: "Hi, I am Andree",
      headingHighlight: "web developer.",
      ...about.en,
      philosophy: "My development philosophy",
    },
    projects: {
      repositories: "repositories",
      previewOf: "Preview of",
      web: "Web",
      mobile: "Mobile",
      featured: "Featured",
      code: "Code",
      demo: "Demo",
      items: projects.en,
    },
    skills: {
      categories: categories.en,
    },
    experience: {
      heading: "Work experience",
      items: experiences.en,
    },
    contact: {
      heading: "Contact",
      intro: "Do you have a project in mind or want to collaborate? I would love to hear from you.",
      placeholders: {
        name: "Name",
        email: "Email",
        message: "Your message...",
      },
      send: "Send message",
      availability: "Currently available for freelance projects and job opportunities.",
    },
    contactForm: {
      pendingTitle: "Sending",
      successTitle: "Message sent",
      errorTitle: "Could not send",
      honeypotError: "Message validation failed. Reload the page and try again.",
      tooFastError: "Please wait a moment before sending the form.",
      cooldownError: "Please wait {seconds}s before sending another message.",
      pendingMessage: "Sending your message...",
      genericError: "Could not send your message. Please try again.",
      successMessage: "Thanks. I will reply as soon as possible.",
      networkError: "Network error. Check your connection and try again.",
    },
  },
};

export function getLocale(locale?: string | null): Locale {
  return locale === "en" ? "en" : "es";
}

export function getDictionary(locale?: string | null): Dictionary {
  return dictionaries[getLocale(locale)];
}