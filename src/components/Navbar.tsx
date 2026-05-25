'use client';

import Link from 'next/link';

import { Briefcase, Folder, Home } from 'lucide-react';

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
    <div className='fixed inset-x-0 bottom-6 z-50 mx-auto w-fit'>
      <div className='relative z-50 mx-auto flex h-16 w-max items-center gap-6 rounded-full border border-neutral-700 bg-neutral-900/80 p-2 px-6 backdrop-blur-lg'>
        {links.map(({ label, section, icon: Icon }) => (
          <div key={section} className='group relative flex aspect-square items-center justify-center rounded-full'>
            <Link
              href='/'
              onClick={(event) => scrollToSection(event, section)}
              aria-label={label}
              className='transition-all duration-200 ease-out hover:scale-110'
            >
              <Icon className='size-4' />
            </Link>
            <span className='pointer-events-none absolute -top-10 left-1/2 z-50 -translate-x-1/2 scale-95 rounded-lg bg-white px-3 py-1 text-sm text-black opacity-0 shadow transition-all group-hover:scale-100 group-hover:opacity-100'>
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
            className='transition-all duration-200 ease-out hover:scale-110'
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
            className='transition-all duration-200 ease-out hover:scale-110'
          >
            <LinkedIn className='size-4' />
          </a>
        </div>
      </div>
    </div>
  );
};
