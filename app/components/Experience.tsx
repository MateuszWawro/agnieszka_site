const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-light">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-dark">
          Doświadczenie
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-dark">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-2xl font-bold text-dark">MIDI Pracownia Architektoniczna</h3>
              <span className="text-primary-dark font-semibold mt-2 md:mt-0">
                kwiecień - czerwiec 2024
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Praktyki studenckie obejmujące wykonywanie projektu architektoniczno-budowlanego, 
              projektów urządzenia terenu oraz rozwój w obsłudze programów AutoCAD i SketchUp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
