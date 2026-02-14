import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Interests from '../components/Interests';
import Contact from '../components/Contact';

const SITE_URL = 'https://agnieszka.wawro.ovh';

function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Agnieszka Wawro',
    jobTitle: 'Inżynier Architekt',
    url: SITE_URL,
    image: `${SITE_URL}/aga_main.jpg`,
    description: 'Studentka Architektury II stopnia na Politechnice Gdańskiej. Specjalizacja w projektowaniu wnętrz i urbanistyce.',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Politechnika Gdańska',
      sameAs: 'https://pg.edu.pl',
    },
    knowsAbout: [
      'Architecture', 'Interior Design', 'Urban Design',
      'AutoCAD', 'REVIT', 'SketchUp', 'Rhino',
      'Lumion', 'D5 Render', 'Twinmotion', 'Adobe Suite',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gdańsk',
      addressCountry: 'PL',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function Home() {
  return (
    <main>
      <JsonLd />
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
