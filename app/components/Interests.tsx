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
    <section id="interests" className="section-padding bg-gray-light">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-dark">
          Zainteresowania
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 text-center">{interest.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3 text-center">
                {interest.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
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
