import { Dot } from 'lucide-react';
import Image from 'next/image';

import { experiences } from '@/src/data/experience';
import { tagIcons } from '@/src/lib/tag-icons';

export function Experience() {
  return (
    <section id='experience' className='py-24'>
      <div className='mx-auto max-w-3xl'>
        <div className='text-center mb-20'>
          <p className='text-sm text-emerald-400 tracking-widest uppercase mb-2'>
            Trayectoria
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold'>
            Experiencia Laboral
          </h2>
        </div>

        <div className='flex flex-col'>
          {experiences.map((exp, index) => (
            <div key={exp.id} className='flex gap-8'>
              <div className='flex flex-col items-center'>
                <div
                  className={`w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 transition-transform duration-300 hover:scale-110`}
                >
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className='object-cover'
                  />
                </div>
                <div className='w-0.5 flex-1 my-4 bg-linear-to-b from-white/20 to-transparent' />
              </div>

              <div
                className={`flex-1 ${index < experiences.length - 1 ? 'pb-20' : ''}`}
              >
                <div className='flex flex-wrap items-center gap-2 mb-3'>
                  <span className='text-emerald-400 text-sm font-semibold'>
                    {exp.period}
                  </span>
                  <span className='text-muted-foreground text-sm'>·</span>
                  <span className='text-muted-foreground text-sm'>
                    {exp.duration}
                  </span>
                </div>

                <h3 className='text-xl font-bold mb-1'>{exp.role}</h3>
                <p className='text-emerald-400 font-medium text-sm mb-6 tracking-wide'>
                  {exp.company}
                </p>

                <ul className='flex flex-col gap-3 mb-6'>
                  {exp.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className='flex items-start gap-3 text-base text-muted-foreground'
                    >
                      <Dot className='size-4 shrink-0 text-emerald-400 mt-1' />

                      <span className='text-foreground/90'>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className='flex gap-2 flex-wrap'>
                  {exp.tags.map((tag) => {
                    const Icon = tagIcons[tag as keyof typeof tagIcons];
                    return (
                      <span
                        key={tag}
                        className='bg-zinc-900 p-2 rounded flex items-center gap-2 text-xs font-semibold'
                      >
                        <Icon className='size-4' />
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
