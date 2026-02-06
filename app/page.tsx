import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Interests />
      <Contact />
    </main>
  );
}
