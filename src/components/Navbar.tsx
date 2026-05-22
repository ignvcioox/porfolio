'use client';

import { Briefcase, Folder, Home } from 'lucide-react';
import Link from 'next/link';

import { GitHub, LinkedIn } from '@/src/components/Icons';
import { Separator } from '@/src/components/ui/separator';
import { useSmoothScroll } from '@/src/hooks/useSmoothScroll';

const links = [
  { label: 'Inicio', section: 'home', icon: Home },
  { label: 'Experiencia', section: 'experience', icon: Briefcase },
  { label: 'Proyectos', section: 'projects', icon: Folder },
];

export const Navbar = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <div className='w-fit bottom-6 fixed inset-x-0 mx-auto z-50'>
      <div className='w-max relative z-50 flex items-center h-16 p-2 px-6 mx-auto rounded-full bg-neutral-900/80 backdrop-blur-lg border-neutral-700 border gap-6'>
        {links.map(({ label, section, icon: Icon }) => (
          <div
            key={section}
            className='group relative flex aspect-square items-center justify-center rounded-full'
          >
            <Link
              href='/'
              onClick={(event) => scrollToSection(event, section)}
              aria-label={label}
              className='hover:scale-110 ease-out duration-200 transition-all'
            >
              <Icon className='size-4' />
            </Link>
            <span className='-top-10 left-1/2 group-hover:opacity-100 group-hover:scale-100 absolute z-50 px-3 py-1 text-sm text-black transition-all scale-95 -translate-x-1/2 bg-white rounded-lg shadow opacity-0 pointer-events-none'>
              {label}
            </span>
          </div>
        ))}

        <Separator orientation='vertical' />

        <div className='flex items-center justify-center rounded-full'>
          <a
            href='https://github.com/ignvcioox'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
            className='hover:scale-110 ease-out duration-200 transition-all'
          >
            <GitHub className='size-4' />
          </a>
        </div>

        <div className='flex items-center justify-center rounded-full'>
          <a
            href='https://www.linkedin.com/in/ignvcioox/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='hover:scale-110 ease-out duration-200 transition-all'
          >
            <LinkedIn className='size-4' />
          </a>
        </div>
      </div>
    </div>
  );
};
