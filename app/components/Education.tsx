const Education = () => {
  const education = [
    {
      period: '2021 - 2025',
      institution: 'Politechnika Gdańska',
      degree: 'inżynier architekt',
      field: 'Architektura, studia I stopnia',
      icon: '🎓',
    },
    {
      period: '2025 - obecnie',
      institution: 'Politechnika Gdańska',
      degree: 'magister inżynier architekt',
      field: 'Architektura, studia II stopnia',
      icon: '📚',
    },
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark dark:text-white">
          Wykształcenie
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-16"></div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-light to-white dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-dark transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-dark dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300">
                      {item.institution}
                    </h3>
                    <span className="inline-block bg-primary-dark/10 dark:bg-primary/20 text-primary-dark dark:text-primary font-semibold px-4 py-1 rounded-full mt-2 md:mt-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xl text-primary-dark dark:text-primary font-semibold mb-2">{item.degree}</p>
                  <p className="text-gray-700 dark:text-gray-300">{item.field}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
