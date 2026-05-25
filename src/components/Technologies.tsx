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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mb-12 text-center'
      >
        <h2 className='text-2xl font-bold tracking-wide text-white'>Stack Tecnológico</h2>
      </motion.div>

      <div className='relative flex w-full flex-wrap justify-center gap-8 md:gap-12'>
        {technologies.map((tech) => {
          const Icon = tagIcons[tech];

          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15, margin: '0px 0px -10px 0px' }}
              transition={{
                duration: 1.5,
                ease: [0.215, 0.61, 0.355, 1.0],
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.12, ease: 'easeOut' },
              }}
              className='group flex transform-gpu cursor-pointer flex-col items-center gap-3 will-change-transform'
            >
              <div className='flex size-16 items-center justify-center rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition-colors duration-300 group-hover:border-emerald-500/50 group-hover:bg-zinc-900'>
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
