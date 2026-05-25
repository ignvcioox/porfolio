export const About = () => {
  return (
    <section className='mx-auto mb-16 flex max-w-5xl items-center px-4'>
      <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12'>
        <div className='flex flex-col justify-center md:col-span-5'>
          <span className='mb-3 text-xs font-bold tracking-widest text-emerald-400 uppercase'>Sobre mí</span>
          <h1 className='text-3xl leading-tight font-black tracking-tight text-white'>Software Developer</h1>
          <div className='mt-6 h-1 w-16 rounded-full bg-emerald-500' />
        </div>

        <div className='flex flex-col gap-6 text-base leading-relaxed font-normal text-zinc-400 md:col-span-7 md:text-lg'>
          <p>
            Desarrollador Full Stack con experiencia en{' '}
            <span className='font-semibold text-emerald-400'>Node.js (NestJS, Express) y PostgreSQL</span> para el
            backend, y en frameworks modernos de frontend como{' '}
            <span className='font-semibold text-emerald-400'>Angular, Next.js y React.</span> Especializado en el diseño
            de <span className='font-semibold text-zinc-50'>microservicios escalables</span>, desarrollo de{' '}
            <span className='font-semibold text-zinc-50'>APIs REST</span> y documentación técnica con{' '}
            <span className='font-semibold text-emerald-400'>Swagger/OpenAPI.</span>
          </p>
          <p>
            Participé en un <span className='font-semibold text-zinc-50'>hackathon en La Serena</span>, obteniendo el{' '}
            <span className='font-semibold text-zinc-50'>tercer lugar</span>, demostrando{' '}
            <span className='font-semibold text-red-400'>creatividad, liderazgo y trabajo en equipo.</span> Cuento con
            conocimientos en <span className='font-semibold text-zinc-50'>metodologías ágiles (Scrum).</span>
          </p>
        </div>
      </div>
    </section>
  );
};
