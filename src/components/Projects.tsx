'use client';

import { ExternalLink } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

import { GitHub } from '@/src/components/Icons';
import { ProjectsImage } from '@/src/components/ProjectsImage';
import { Button } from '@/src/components/ui/button';
import { projectsData } from '@/src/data/projects';
import { tagIcons } from '@/src/lib/tag-icons';

const cardEffect: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.25, 1, 0.5, 1] as const,
      delay: index * 0.1,
    },
  }),
};

export const Projects = () => {
  return (
    <section id='projects' className='max-w-5xl scroll-mt-20 px-4 py-8'>
      <div className='mb-12 text-center'>
        <span className='text-sm font-semibold tracking-widest text-emerald-400 uppercase'>Portafolio</span>
        <h2 className='mt-2 text-2xl font-bold tracking-wide text-white'>Proyectos Destacados</h2>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projectsData.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={cardEffect}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.2 }}
              custom={index}
              className='border-border/10 bg-primary/40 group overflow-hidden rounded-xl border'
            >
              <ProjectsImage images={project.images} title={project.title} />

              <div className='p-6'>
                <h3 className='text-xl font-bold tracking-wide text-zinc-100 transition-colors group-hover:text-emerald-400'>
                  {project.title}
                </h3>
                <p className='text-foreground/80 mt-3 text-sm leading-relaxed'>{project.description}</p>
              </div>

              <div className='border-border/10 flex flex-col justify-between gap-4 border-t px-6 pt-4 pb-6 lg:flex-row lg:items-center'>
                <div className='flex flex-wrap justify-start gap-2'>
                  {project.tags.map((tag) => {
                    const Icon = tagIcons[tag as keyof typeof tagIcons];
                    return (
                      <span
                        key={tag}
                        title={tag}
                        className='bg-primary border-border/5 flex items-center justify-center rounded-lg border p-1.5'
                      >
                        {Icon && <Icon className='size-4' />}
                      </span>
                    );
                  })}
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

                  {project.demoUrl && (
                    <Button asChild variant='ghost' size='lg' className='flex-1 bg-emerald-600 hover:bg-emerald-500'>
                      <a href={project.demoUrl} target='_blank' rel='noopener noreferrer'>
                        Demo
                        <ExternalLink className='size-4' />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
