const Interests = () => {
  const interests = [
    {
      title: 'Projektowanie wnętrz',
      icon: '🏠',
      description: 'Najbardziej w architekturze podoba mi się projektowanie wnętrz. Nie mam dużego doświadczenia, jednak bardzo chciałabym rozwijać się w tym kierunku.',
    },
    {
      title: 'Projektowanie urbanistyczne',
      icon: '🏙️',
      description: 'W większej skali, projektowanie urbanistyczne jest mi bliskie. Lubię analizować szersze aspekty wpływające na projekt oraz rozwiązywać problemy z tym wiązane tworząc większą koncepcję projektową, niż tylko sam budynek.',
    },
    {
      title: 'Sport i aktywność',
      icon: '⚽',
      description: 'Poza architekturą bliski mojemu sercu jest sport, który towarzyszy mi od najmłodszych lat. Aktywne spędzanie czasu wolnego resetuje głowę, a trenowanie od lat szkolnych nauczyło mnie bardzo dobrze i efektywnie zarządzać czasem.',
    },
  ];

  return (
    <section id="interests" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-dark/5 dark:bg-primary-dark/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark dark:text-white">
          Zainteresowania
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-light dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              {/* Decorative top corner */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-br-full"></div>
              
              {/* Icon with animation */}
              <div className="relative z-10 text-7xl mb-6 text-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {interest.icon}
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-primary-dark dark:text-primary mb-4 text-center group-hover:text-dark dark:group-hover:text-white transition-colors duration-300">
                {interest.title}
              </h3>
              
              <p className="relative z-10 text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
