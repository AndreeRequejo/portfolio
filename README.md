# Portfolio personal

Sitio web de portfolio desarrollado con Astro, enfocado en rendimiento, accesibilidad y una experiencia visual moderna.

## Stack principal

- Astro
- Tailwind CSS 4
- TypeScript
- Despliegue con adaptador de Vercel

## Caracteristicas

- Secciones modulares para perfil, experiencia, habilidades, proyectos y contacto
- Contenido centralizado en archivos de constantes para editar rapido
- Soporte de idiomas en español e ingles
- Estructura limpia para escalar el portfolio con nuevas secciones

## Requisitos

- Node.js 20 o superior
- pnpm

## Instalacion y desarrollo local

1. Instala dependencias:

```bash
pnpm install
```

2. Inicia el entorno de desarrollo:

```bash
pnpm dev
```

3. Abre en el navegador:

http://localhost:4321

## Scripts disponibles

| Script | Descripcion |
| :----- | :---------- |
| `pnpm dev` | Inicia el servidor local de desarrollo |
| `pnpm build` | Genera la version de produccion en `dist/` |
| `pnpm preview` | Previsualiza localmente la build de produccion |
| `pnpm astro` | Ejecuta comandos de la CLI de Astro |

## Estructura del proyecto

```text
.
├── public/
├── src/
│   ├── assets/
│   │   └── projects/
│   ├── components/
│   │   ├── sections/
│   │   └── ui/
│   ├── consts/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Donde editar el contenido

Para actualizar la informacion del portfolio (texto, links, experiencia, skills, proyectos), revisa principalmente:

- `src/consts/about.ts`
- `src/consts/experience.ts`
- `src/consts/projects.ts`
- `src/consts/skills.ts`
- `src/consts/socials.ts`

## Internacionalizacion

La app esta configurada con locales:

- `es` (por defecto)
- `en`

Puedes ajustar esta configuracion en `astro.config.mjs`.

## Build y despliegue

Generar build de produccion:

```bash
pnpm build
```

Previsualizar build:

```bash
pnpm preview
```
