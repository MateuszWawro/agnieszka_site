import Image from 'next/image';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-light">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-primary shadow-2xl">
              <Image
                src="https://via.placeholder.com/400x400/F5C2C7/1A1A1A?text=AW"
                alt="Agnieszka Wawro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-dark">
              AGNIESZKA WAWRO
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-dark mb-6 font-semibold">
              Inżynier Architekt
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 max-w-2xl">
              <p>
                Ambitna studentka 2-go semestru Architektury studiów II stopnia na Politechnice Gdańskiej.
              </p>
              <p>
                W czerwcu 2025 roku otrzymałam tytuł <span className="font-semibold text-primary-dark">inż. arch.</span> po zakończonych studiach I stopnia.
              </p>
              <p>
                Z zaangażowaniem chcę rozwijać swoje umiejętności pracy w zawodzie. Jestem osobą otwartą, nastawioną na zdobywanie wiedzy i osiąganie celów.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-primary-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Skontaktuj się
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
