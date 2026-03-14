import type { Locale } from "../i18n/types";

export type Experience = {
  role: string;
  company: string;
  period: string;
  desc: string[];
  tags: string[];
};

export const experiences: Record<Locale, Experience[]> = {
  es: [
    {
      role: "Practicante Preprofesional en Desarrollo de Sistemas",
      company: "Universidad Nacional Pedro Ruiz Gallo",
      period: "Dic. 2024 — Mar. 2025",
      desc: [
        "Participación en el desarrollo de un sistema web full stack con Laravel y React (Inertia.js)",
        "Diseño e implementación de APIs REST con autenticación JWT, middlewares de seguridad y control de sesiones",
        "Desarrollo de interfaces web responsivas orientadas a la gestión de asistencia docente",
        "Implementación de control de roles y permisos para garantizar la seguridad y segregación de funciones entre usuarios",
        "Automatización de la integración de datos entre dispositivos biométricos y el sistema web mediante scripts en Python, reduciendo la carga de procesos manuales",
        "Implementación de procedimientos almacenados y triggers en MySQL para sincronizar y validar la información entre bases de datos",
        "Uso de Git y GitHub para control de versiones y trabajo colaborativo",
      ],
      tags: ["Laravel", "React", "MySQL", "Inertia", "Python"],
    },
    {
      role: "Full-Stack Developer",
      company: "Textiles Creando Moda S.A.C",
      period: "Ago. 2024 — Ene. 2025",
      desc: [
        "Diseñé la arquitectura general del sistema y la estructura de sus componentes visuales, asegurando una experiencia de usuario clara e intuitiva.",
        "Desarrollo de funcionalidades CRUD y APIs REST utilizando Node.js y Express, orientadas a la gestión de ventas, productos e inventarios.",
        "Implementación de mecanismos de autenticación y autorización con JWT, garantizando la seguridad y el acceso controlado a la información.",
        "Realización de pruebas funcionales para integración backend-frontend, asegurando la correcta interacción entre ambos y la estabilidad del sistema.",
      ],
      tags: ["React", "ExpressJS", "Docker", "MySQL"],
    },
  ],
  en: [
    {
      role: "Pre-Professional Intern — Systems Development",
      company: "Universidad Nacional Pedro Ruiz Gallo",
      period: "Dec. 2024 — Mar. 2025",
      desc: [
        "Contributed to the development of a full-stack web system using Laravel and React (Inertia.js)",
        "Designed and implemented REST APIs with JWT authentication, security middlewares, and session control",
        "Built responsive web interfaces focused on faculty attendance management",
        "Implemented role and permission controls to ensure security and segregation of responsibilities",
        "Automated data integration between biometric devices and the web system with Python scripts, reducing manual workload",
        "Implemented stored procedures and triggers in MySQL to synchronize and validate data across databases",
        "Used Git and GitHub for version control and team collaboration",
      ],
      tags: ["Laravel", "React", "MySQL", "Inertia", "Python"],
    },
    {
      role: "Full-Stack Developer",
      company: "Textiles Creando Moda S.A.C",
      period: "Aug. 2024 — Jan. 2025",
      desc: [
        "Designed the overall system architecture and visual component structure, ensuring a clear and intuitive user experience.",
        "Developed CRUD features and REST APIs with Node.js and Express for sales, product, and inventory management.",
        "Implemented JWT-based authentication and authorization mechanisms, ensuring secure and controlled access to information.",
        "Performed functional backend-frontend integration testing to ensure stable and correct interaction between both layers.",
      ],
      tags: ["React", "ExpressJS", "Docker", "MySQL"],
    },
  ],
};
