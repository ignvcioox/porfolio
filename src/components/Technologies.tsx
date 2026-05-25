'use client';

import { motion } from 'framer-motion';

import { tagIcons } from '@/src/lib/tag-icons';

type AvailableProjectTech = keyof typeof tagIcons;

const technologies: AvailableProjectTech[] = [
  'Next.js',
  'React',
  'Expo',
  'Angular',
  'Java',
  'NestJS',
  'PostgreSQL',
  'MySQL',
  'TanStack',
  'Material UI',
  'TailwindCSS',
  'Prisma',
  'TypeScript',
  'AWS',
  'Firebase',
  'Docker',
  'MongoDB',
  'Redux',
];

export function Technologies() {
  return (
    <section className='mx-auto max-w-5xl px-4 py-16'>
      <div className='mb-12 text-center'>
        <h2 className='text-2xl font-bold tracking-wide text-white'>Stack Tecnológico</h2>
      </div>

      <div className='relative flex w-full flex-wrap justify-center gap-8 md:gap-12'>
        {technologies.map((tech, index) => {
          const Icon = tagIcons[tech];

          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className='group flex cursor-pointer flex-col items-center gap-3'
            >
              <div className='flex size-16 items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition-colors group-hover:border-emerald-500/50 group-hover:bg-zinc-900'>
                {Icon ? (
                  <Icon className='size-full text-zinc-400 transition-colors group-hover:text-emerald-400' />
                ) : (
                  <span className='text-xs text-zinc-500'>Logo</span>
                )}
              </div>

              <span className='text-xs font-medium text-zinc-500 transition-colors group-hover:text-zinc-200'>
                {tech}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
