const Education = () => {
  const education = [
    {
      period: '2021 - 2025',
      institution: 'Politechnika Gdańska',
      degree: 'inżynier architekt',
      field: 'Architektura, studia I stopnia',
    },
    {
      period: '2025 - obecnie',
      institution: 'Politechnika Gdańska',
      degree: 'magister inżynier architekt',
      field: 'Architektura, studia II stopnia',
    },
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-dark">
          Wykształcenie
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-light rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-dark"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-bold text-dark">{item.institution}</h3>
                <span className="text-primary-dark font-semibold mt-2 md:mt-0">{item.period}</span>
              </div>
              <p className="text-xl text-primary-dark font-semibold mb-2">{item.degree}</p>
              <p className="text-gray-700">{item.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
