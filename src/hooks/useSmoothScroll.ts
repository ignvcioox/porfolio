import { MouseEvent } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string, offset = 0) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      const yPosition = element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };

  return {
    scrollToSection,
  };
};
