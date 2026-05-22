export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='w-full mt-24 pb-32 pt-12 relative z-10'>
      <div className='max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-900/60 pt-8 text-xs text-foreground font-light tracking-wider'>
        <p>© {currentYear} • Benjamín López</p>
        <p className='text-foreground uppercase tracking-widest font-normal text-[10px]'>
          Software Developer
        </p>
      </div>
    </footer>
  );
};
