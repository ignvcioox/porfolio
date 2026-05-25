import { tagIcons } from '@/src/lib/tag-icons';

export type ProjectsItem = {
  demoUrl?: string;
  description: string;
  githubUrl?: string;
  images: string[];
  tags: (keyof typeof tagIcons)[];
  title: string;
};

export const projectsData: ProjectsItem[] = [
  {
    description:
      'Sistema ERP integral diseñado para la automatización y gestión operativa en faenas mineras. Permite el control crítico de mantenimiento de maquinaria pesada, administración de insumos y gestión de personal, optimizando flujos de trabajo.',
    images: ['/projects/erp-gem/image.webp', '/projects/erp-gem/image_2.webp'],
    tags: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'GitHub'],
    title: 'Global Enterprise Mining',
  },
  {
    demoUrl: 'https://play.google.com/store/apps/details?id=com.hovdeveloper.hov',
    description:
      'Aplicación móvil para el Hospital Provincial de Ovalle, diseñada para facilitar a los pacientes a ubicarse dentro del recinto hospitalario. Incluye un mapa interactivo, información de servicios médicos y un sistema de reservas de medicamentos.',
    images: ['/projects/hospital/image.webp'],
    tags: ['Expo', 'React', 'Node.js', 'MySQL', 'Figma'],
    title: 'Hospital Provincial de Ovalle',
  },
  {
    description:
      'Aplicación móvil de transporte que conecta usuarios y conductores. Incluye geolocalización en tiempo real, navegación GPS, sistema de calificaciones y gestión completa de viajes desde una sola plataforma.',
    githubUrl: 'https://github.com/ignvcioox/GoDrive',
    images: ['/projects/godrive/image.webp'],
    tags: ['Java', 'Firebase', 'Google Cloud', 'GitHub'],
    title: 'GoDrive',
  },
];
