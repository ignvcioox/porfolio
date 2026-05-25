import Image from 'next/image';
import React from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';

interface Props {
  images: string[];
  title: string;
}

export const ProjectsImage = ({ images, title }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className='bg-primary flex h-full items-center justify-center text-sm'>Sin captura disponible</div>;
  }

  const hasMultipleImages = images.length > 1;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className='group/image relative aspect-video overflow-hidden'>
      <Image
        src={images[currentIndex]}
        alt={`Captura ${currentIndex + 1} de ${title}`}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/image:translate-y-1 group-hover/image:scale-105 group-hover/image:brightness-90'
      />

      {hasMultipleImages && (
        <React.Fragment>
          <Button
            size='icon'
            className='invisible absolute inset-y-0 left-2 my-auto cursor-pointer opacity-0 transition-all duration-500 group-hover/image:visible group-hover/image:opacity-100'
            onClick={handlePrev}
            aria-label='Imagen Anterior'
          >
            <ChevronLeft className='size-5' />
          </Button>

          <Button
            size='icon'
            className='invisible absolute inset-y-0 right-2 my-auto cursor-pointer opacity-0 transition-all duration-500 group-hover/image:visible group-hover/image:opacity-100'
            onClick={handleNext}
            aria-label='Siguiente Imagen'
          >
            <ChevronRight className='size-5' />
          </Button>

          <div className='bg-primary/75 group-hover/image:bg-primary/90 absolute inset-x-0 bottom-2 mx-auto flex w-max gap-1.5 rounded-full px-2 py-1.5 transition-all duration-500'>
            {images.map((_, index) => (
              <Button
                key={index}
                size='icon'
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : undefined}
                className={cn('h-1.5 cursor-pointer', {
                  'w-4 bg-emerald-400': currentIndex === index,
                  'w-2 bg-white/60 group-hover/image:bg-zinc-500 hover:group-hover/image:bg-zinc-400':
                    currentIndex !== index,
                })}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
