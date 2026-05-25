'use client';

import { motion, Variants } from 'framer-motion';
import { Dot } from 'lucide-react';
import Image from 'next/image';

import { experiences } from '@/src/data/experience';
import { tagIcons } from '@/src/lib/tag-icons';

const cardEffect: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

export function Experience() {
  return (
    <section id='experience' className='mx-auto max-w-5xl px-4 py-8'>
      <div className='mb-20 text-center'>
        <p className='text-sm font-semibold tracking-widest text-emerald-400 uppercase'>Trayectoria</p>
        <h2 className='mt-2 text-2xl font-bold tracking-wide text-white'>Experiencia Laboral</h2>
      </div>

      <div className='flex flex-col'>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={cardEffect}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.2, margin: '-40px 0px' }}
            className='flex gap-8'
          >
            <div className='flex flex-col items-center'>
              <div className='h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-lg transition-transform duration-300 hover:scale-110'>
                <Image src={exp.image} alt={exp.company} width={64} height={64} className='object-cover' />
              </div>
              <div className='my-4 w-0.5 flex-1 bg-linear-to-b from-white/20 to-transparent' />
            </div>

            <div className={`flex-1 ${index < experiences.length - 1 ? 'pb-20' : ''}`}>
              <div className='mb-3 flex flex-wrap items-center gap-2'>
                <span className='text-sm font-semibold text-emerald-400'>{exp.period}</span>
                <span className='text-muted-foreground text-sm'>·</span>
                <span className='text-muted-foreground text-sm'>{exp.duration}</span>
              </div>

              <h3 className='mb-1 text-xl font-bold text-zinc-100'>{exp.role}</h3>
              <p className='mb-6 text-sm font-medium tracking-wide text-emerald-400'>{exp.company}</p>

              <ul className='mb-6 flex flex-col gap-3'>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className='text-muted-foreground flex items-start gap-3 text-base'>
                    <Dot className='mt-1 size-4 shrink-0 text-emerald-400' />
                    <span className='text-foreground/90'>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className='flex flex-wrap gap-2'>
                {exp.tags.map((tag) => {
                  const Icon = tagIcons[tag as keyof typeof tagIcons];
                  return (
                    <span
                      key={tag}
                      className='flex items-center gap-2 rounded border border-zinc-800/40 bg-zinc-900 p-2 text-xs font-semibold text-zinc-300'
                    >
                      <Icon className='size-4' />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
