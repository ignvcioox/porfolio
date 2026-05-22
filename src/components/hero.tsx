'use client';

import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { GitHub, LinkedIn } from '@/src/components/Icons';
import { ParticlesBackground } from '@/src/components/ParticlesBackground';
import { Typewriter } from '@/src/components/Typewriter';
import { Button } from '@/src/components/ui/button';
import { useSmoothScroll } from '@/src/hooks/useSmoothScroll';

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
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2'>
              Hola! Soy <span className='text-foreground'>Benjamin </span>
            </h1>

            <Typewriter />

            <p className='text-lg text-foreground leading-relaxed mb-10 mt-4 max-w-lg'>
              Me enfoco en escribir código limpio y construir interfaces que la
              gente disfrute usar
            </p>

            <div className='flex flex-col lg:flex-row items-center gap-4'>
              <Button
                asChild
                variant='ghost'
                size='lg'
                className='group bg-blue-500 text-blue-100 px-4 py-5 hover:bg-blue-500/80 transition-colors duration-300'
              >
                <Link
                  href='/'
                  onClick={(event) => scrollToSection(event, 'projects')}
                >
                  Ver Proyectos
                  <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform' />
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
                      rel={
                        href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      aria-label={label}
                    >
                      <Icon className='size-5' />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className='hidden lg:flex relative size-72 lg:size-80 rounded-full overflow-hidden border-4 border-white/5'>
            <Image
              src='/avatar.png'
              alt='Benjamin - Software Developer'
              fill
              className='object-cover object-center'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
