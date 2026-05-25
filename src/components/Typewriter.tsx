import { TypeAnimation } from 'react-type-animation';

export const Typewriter = () => {
  return (
    <div className='h-8'>
      <TypeAnimation
        sequence={['Software Developer', 3500, 'Backend Architect', 3500, 'Full Stack Developer', 3500]}
        speed={1}
        deletionSpeed={99}
        repeat={Infinity}
        className='text-2xl font-bold text-emerald-500 md:text-3xl'
      />
    </div>
  );
};
