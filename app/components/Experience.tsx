const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-gray-light to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
          Doświadczenie
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-gradient-to-br from-white to-gray-light rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-dark transform hover:-translate-y-2 overflow-hidden">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary-dark transition-colors duration-300">
                      MIDI Pracownia Architektoniczna
                    </h3>
                    <span className="inline-block bg-primary-dark/10 text-primary-dark font-semibold px-4 py-1 rounded-full mt-2 md:mt-0">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
