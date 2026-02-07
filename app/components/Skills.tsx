const Skills = () => {
  const designSkills = [
    { name: 'AutoCAD', level: 90 },
    { name: 'REVIT', level: 85 },
    { name: 'SketchUp', level: 90 },
    { name: 'Rhino', level: 75 },
    { name: 'Microsoft Office', level: 95 },
    { name: 'Adobe Suite', level: 80 },
  ];

  const visualizationTools = [
    { name: 'Lumion', icon: '🌅' },
    { name: 'D5 Render', icon: '✨' },
    { name: 'Twinmotion', icon: '🎬' },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-white to-gray-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-primary-dark/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
          Umiejętności
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-16"></div>

        <div className="max-w-5xl mx-auto">
          {/* Design Skills with Progress Bars */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-primary-dark flex items-center gap-3">
              <span className="text-3xl">💻</span>
              Programy projektowe
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-dark group-hover:text-primary-dark transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark h-full rounded-full transition-all duration-1000 ease-out hover:shadow-lg relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary-dark flex items-center gap-3">
              <span className="text-3xl">🎨</span>
              Wizualizacje
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visualizationTools.map((tool, index) => (
                <div
                  key={index}
                  className="relative group bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 text-center overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
                  
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h4 className="text-xl font-bold relative z-10">{tool.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
