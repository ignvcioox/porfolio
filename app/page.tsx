import { About } from '@/src/components/About';
import { Experience } from '@/src/components/Experience';
import { Footer } from '@/src/components/Footer';
import { Hero } from '@/src/components/hero';
import { Navbar } from '@/src/components/Navbar';
import { Projects } from '@/src/components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col items-center justify-center px-4'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
