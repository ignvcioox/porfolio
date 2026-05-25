'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, Mail } from 'lucide-react';

import { GitHub, LinkedIn } from '@/src/components/Icons';
import { Button } from '@/src/components/ui/button';
import { useSmoothScroll } from '@/src/hooks/useSmoothScroll';

const ParticlesBackground = dynamic(
  () => import('@/src/components/ParticlesBackground').then((mod) => mod.ParticlesBackground),
  { ssr: false },
);

const Typewriter = dynamic(() => import('@/src/components/Typewriter').then((mod) => mod.Typewriter), {
  ssr: false,
  loading: () => <div className='h-8 text-2xl font-bold text-emerald-500 md:text-3xl'>Software Developer</div>,
});

const links = [
  { href: 'https://github.com/ignvcioox', label: 'Github', icon: GitHub },
  {
    href: 'https://www.linkedin.com/in/ignvcioox/',
    label: 'LinkedIn',
    icon: LinkedIn,
  },
  {
    href: 'mailto:ignvcioweb@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

export const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id='home'>
      <ParticlesBackground />
      <div className='relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20'>
        <div className='flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20'>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
              Hola! Soy <span className='text-foreground'>Benjamin </span>
            </h1>

            <Typewriter />

            <p className='text-foreground mt-4 mb-10 max-w-lg text-lg leading-relaxed'>
              Me enfoco en escribir código limpio y construir interfaces que la gente disfrute usar
            </p>

            <div className='flex flex-col items-center gap-4 lg:flex-row'>
              <Button
                asChild
                variant='ghost'
                size='lg'
                className='group bg-blue-600 px-4 py-5 text-white transition-colors duration-300 hover:bg-blue-600'
              >
                <Link href='/' onClick={(event) => scrollToSection(event, 'projects')}>
                  Ver Proyectos
                  <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </Button>

              <div className='flex gap-2'>
                {links.map(({ href, label, icon: Icon }) => (
                  <Button
                    key={label}
                    variant='ghost'
                    size='icon'
                    asChild
                    className='transition-all duration-300 hover:scale-105 hover:bg-transparent'
                  >
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                    >
                      <Icon className='size-5' />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className='relative hidden size-72 overflow-hidden rounded-full border-4 border-white/5 lg:flex lg:size-80'>
            <Image
              src='/avatar.webp'
              alt='Benjamin - Software Developer'
              width={320}
              height={320}
              sizes='(min-width: 1024px) 320px, 0px'
              className='object-cover object-center'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
