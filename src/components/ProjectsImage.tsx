'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '@/src/components/ui/button';

interface Props {
  images: string[];
  title: string;
}

export const ProjectsImage = ({ images, title }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center bg-zinc-950 text-xs text-zinc-600 italic'>
        Sin captura disponible
      </div>
    );
  }

  const hasMultipleImages = images.length > 1;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className='group/image relative h-full w-full overflow-hidden'>
      <Image
        src={images[currentIndex]}
        alt={`Captura ${currentIndex + 1} de ${title}`}
        fill
        sizes='(max-width: 768px) 100vw, 50vw'
        priority={currentIndex === 0}
      />

      {hasMultipleImages && (
        <>
          <Button
            size='icon'
            className='absolute inset-y-0 left-2 my-auto cursor-pointer'
            onClick={handlePrev}
            aria-label='Imagen Anterior'
          >
            <ChevronLeft className='size-4' />
          </Button>

          <Button
            size='icon'
            className='absolute inset-y-0 right-2 my-auto cursor-pointer'
            onClick={handleNext}
            aria-label='Siguiente Imagen'
          >
            <ChevronRight className='size-4' />
          </Button>

          <div className='bg-primary/75 absolute inset-x-0 bottom-2 z-10 mx-auto flex w-max gap-1.5 rounded-full px-2.5 py-1.5 backdrop-blur-sm'>
            {images.map((_, index) => (
              <Button
                key={index}
                size='icon'
                onClick={() => setCurrentIndex(index)}
                className={`h-2 min-h-0 min-w-0 rounded-full p-0 transition-[width,background-color] duration-300 ease-in-out ${
                  currentIndex === index ? 'w-4 bg-emerald-400' : 'w-2 bg-zinc-500 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
