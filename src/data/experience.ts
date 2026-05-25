import { tagIcons } from '@/src/lib/tag-icons';

export type ExperienceItem = {
  id: number;
  period: string;
  duration: string;
  role: string;
  company: string;
  image: string;
  bullets: string[];
  tags: (keyof typeof tagIcons)[];
};

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: 'Ene 2026 - Mar 2026',
    duration: '3 meses',
    role: 'Frontend Developer',
    company: 'Primarket',
    image: '/company/primarket.webp',
    bullets: [
      'Desarrollo interfaces frontend con Next.js y Zustand, priorizando rendimiento, mantenibilidad y buenas prácticas de desarrollo',
      'Implementación de integraciones con APIs RESTful en un ecosistema B2B, optimizando la transferencia de datos y garantizando la consistencia de la información técnica.',
    ],
    tags: ['Next.js', 'Material UI', 'TanStack', 'ClickUp', 'GitHub'],
  },
  {
    id: 2,
    period: 'Jun 2025 - Nov 2025',
    duration: '6 meses',
    role: 'Full Stack Developer',
    company: 'Hospital de Ovalle',
    image: '/company/hospital.webp',
    bullets: [
      'Mantenimiento y mejora de aplicaciones internas desarrolladas con NestJS y Angular, asegurando estabilidad, rendimiento y cumplimiento de los requerimientos funcionales.',
      'Implementación de nuevas funcionalidades y optimización de módulos existentes, reduciendo tiempos de carga y mejorando la experiencia del usuario interno.',
      'Identificación y corrección de errores críticos en producción, mejorando la fiabilidad del sistema y reduciendo incidencias repetidas.',
    ],
    tags: ['Angular', 'NestJS', 'TypeScript', 'MySQL', 'GitHub'],
  },
  {
    id: 3,
    period: 'Abr 2024 - Jun 2024',
    duration: '3 meses',
    role: 'Full Stack Developer',
    company: 'Hospital de Ovalle',
    image: '/company/hospital.webp',
    bullets: [
      'Desarrollé una aplicación móvil desde cero utilizando tecnologías modernas como React, Expo y TypeScript, aplicando componentes reutilizables, custom hooks y buenas prácticas de arquitectura para mantener un frontend limpio, modular y escalable.',
      'En el backend, implementé Express, TypeScript y MySQL para desarrollar APIs REST seguras y escalables, totalmente integradas con la aplicación móvil.',
      'Diseñé la interfaz en Figma e integré mapas interactivos, mejorando la accesibilidad y experiencia del usuario.',
      'Se realizo la publicación y despliegue de la aplicación en Google Play Store para el uso de dispositivos Android.',
    ],
    tags: ['Expo', 'React', 'Node.js', 'MySQL', 'Figma', 'Play Store'],
  },
];
