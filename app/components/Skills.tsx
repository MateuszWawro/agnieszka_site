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
    'Lumion',
    'D5 Render',
    'Twinmotion',
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-dark">
          Umiejętności
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Design Skills with Progress Bars */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-primary-dark">Programy projektowe</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-dark">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary-dark to-primary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary-dark">Wizualizacje</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visualizationTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="text-5xl mb-3">🎨</div>
                  <h4 className="text-xl font-bold">{tool}</h4>
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
