'use client';

import { ExternalLink } from 'lucide-react';
import React from 'react';
import {
  Expo,
  Figma,
  Firebase,
  GitHub,
  GoogleCloud,
  Java,
  MySQL,
  NestJS,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Prisma,
  React as ReactIcon,
} from './Icons';
import { ProjectsImage } from './ProjectsImage';
import { Button } from './ui/button';

const tagIcons: Record<string, React.ReactNode> = {
  Expo: <Expo className='size-4' />,
  React: <ReactIcon className='size-4' />,
  Nodejs: <Nodejs className='size-4' />,
  MySQL: <MySQL className='size-4' />,
  Figma: <Figma className='size-4' />,
  Java: <Java className='size-4' />,
  Firebase: <Firebase className='size-4' />,
  Github: <GitHub className='size-4' />,
  GoogleCloud: <GoogleCloud className='size-4' />,
  Nextjs: <Nextjs className='size-4' />,
  Prisma: <Prisma className='size-4' />,
  NestJS: <NestJS className='size-4' />,
  PostgreSQL: <PostgreSQL className='size-4' />,
};

const projectsData = [
  {
    title: 'Global Enterprise Mining',
    description:
      'Sistema ERP integral diseñado para la automatización y gestión operativa en faenas mineras. Permite el control crítico de mantenimiento de maquinaria pesada, administración de insumos y gestión de personal, optimizando flujos de trabajo.',
    tags: ['Nextjs', 'NestJS', 'Prisma', 'PostgreSQL', 'Github'],
    images: ['/projects/erp-gem/image.webp', '/projects/global.png'],
  },
  {
    title: 'Hospital Provincial de Ovalle',
    description:
      'Aplicación móvil para el Hospital Provincial de Ovalle, diseñada para facilitar a los pacientes a ubicarse dentro del recinto hospitalario. Incluye un mapa interactivo, información de servicios médicos y un sistema de reservas de medicamentos.',
    tags: ['Expo', 'React', 'Nodejs', 'MySQL', 'Figma'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.hovdeveloper.hov',
    images: ['/projects/hospital.webp'],
  },
  {
    title: 'GoDrive',
    description:
      'Aplicación móvil de transporte que conecta usuarios y conductores. Incluye geolocalización en tiempo real, navegación GPS, sistema de calificaciones y gestión completa de viajes desde una sola plataforma.',
    tags: ['Java', 'Firebase', 'GoogleCloud', 'Github'],
    githubUrl: 'https://github.com/ignvcioox/GoDrive',
    images: ['/projects/godrive.webp'],
  },
];

export const Projects = () => {
  return (
    <section id='projects' className='mx-auto max-w-5xl scroll-mt-20 px-4 py-16'>
      <div className='mb-12 text-center'>
        <span className='text-xs font-semibold tracking-widest text-emerald-400 uppercase'>Portafolio</span>
        <h2 className='mt-2 text-3xl font-bold tracking-wide text-white'>Proyectos Destacados</h2>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className='group flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 transition-all duration-300'
          >
            <div>
              <div className='relative aspect-video w-full overflow-hidden border-b border-zinc-800/60 bg-zinc-950'>
                <ProjectsImage images={project.images} title={project.title} />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold tracking-wide text-zinc-100 transition-colors group-hover:text-emerald-400'>
                  {project.title}
                </h3>
                <p className='mt-3 text-sm leading-relaxed text-zinc-400'>{project.description}</p>
              </div>
            </div>

            <div className='flex flex-col justify-between gap-4 border-t border-zinc-800/60 px-6 pt-4 pb-6 sm:flex-row sm:items-center'>
              <div className='flex flex-wrap justify-start gap-2'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    title={tag}
                    className='flex items-center justify-center rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-1.5 backdrop-blur-sm'
                  >
                    {tagIcons[tag] || <span className='px-1 text-xs text-zinc-400'>{tag}</span>}
                  </span>
                ))}
              </div>

              <div className='flex w-full items-center gap-2 sm:w-auto'>
                {project.githubUrl && (
                  <Button asChild variant='default' size='lg' className='flex-1'>
                    <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                      <GitHub className='size-4' />
                      GitHub
                    </a>
                  </Button>
                )}

                {project.liveUrl && (
                  <Button asChild variant='ghost' size='lg' className='flex-1 bg-emerald-600 hover:bg-emerald-500'>
                    <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                      Demo
                      <ExternalLink className='size-4' />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
