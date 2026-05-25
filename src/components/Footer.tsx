export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='relative z-10 mt-24 w-full pt-12 pb-32'>
      <div className='text-foreground mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 border-t border-zinc-900/60 px-6 pt-8 text-xs font-light tracking-wider md:flex-row'>
        <p>© {currentYear} • Benjamín López</p>
        <p className='text-foreground text-[10px] font-normal tracking-widest uppercase'>Software Developer</p>
      </div>
    </footer>
  );
};
