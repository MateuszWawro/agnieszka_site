'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

const Skills = () => {
  const t = useTranslations('skills');
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  const designSkills = [
    { name: 'AutoCAD', level: 90 },
    { name: 'REVIT', level: 85 },
    { name: 'SketchUp', level: 90 },
    { name: 'Rhino', level: 75 },
    { name: 'Microsoft Office', level: 95 },
    { name: 'Adobe Suite', level: 80 },
  ];

  const visualizationTools = [
    { name: 'Lumion', icon: '🌅', id: 'lumion' },
    { name: 'D5 Render', icon: '✨', id: 'd5render' },
    { name: 'Twinmotion', icon: '🎬', id: 'twinmotion' },
    { name: t('collages'), icon: '🎨', id: 'collages' },
  ];

  const galleries: Record<string, { src: string; alt: string }[]> = {
    lumion: [
      { src: '/lumion1.jpg', alt: 'Wizualizacja Lumion 1' },
    ],
    d5render: [],
    twinmotion: [],
    collages: [
      { src: '/agnieszka_kol1.jpg', alt: t('collageAlt1') },
      { src: '/agnieszka_kol2.jpg', alt: t('collageAlt2') },
    ],
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-white to-gray-light dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-primary-dark/5 dark:bg-primary-dark/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-dark dark:text-white">
          {t('title')}
        </h2>
        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-12 md:mb-16"></div>

        <div className="max-w-5xl mx-auto">
          {/* Design Skills with Progress Bars */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 text-primary-dark dark:text-primary flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">💻</span>
              {t('designTools')}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="space-y-2 group">
                  <span className="text-sm sm:text-base font-semibold text-dark dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 sm:h-3 overflow-hidden shadow-inner">
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
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 text-primary-dark dark:text-primary flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">🎨</span>
              {t('visualizationAndArt')}
            </h3>
            <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8 flex items-center justify-center gap-2">
              <span className="text-lg">👇</span>
              {t('clickToView')}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {visualizationTools.map((tool, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGallery(activeGallery === tool.id ? null : tool.id)}
                  className={`relative group bg-gradient-to-br from-primary to-primary-dark text-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 text-center overflow-hidden cursor-pointer ${
                    activeGallery === tool.id ? 'ring-4 ring-white dark:ring-gray-300 scale-105' : ''
                  }`}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-bl-full"></div>
                  
                  {/* Active indicator */}
                  {activeGallery === tool.id && (
                    <div className="absolute top-3 left-3 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  )}
                  
                  <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold relative z-10">{tool.name}</h4>
                </button>
              ))}
            </div>

            {/* Gallery Section */}
            {activeGallery && (
              <div className="mt-8 md:mt-12 animate-fade-in-up">
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-xl">
                  <h4 className="text-xl md:text-2xl font-bold text-primary-dark dark:text-primary mb-6 text-center flex items-center justify-center gap-2">
                    <span className="text-2xl">
                      {visualizationTools.find(t => t.id === activeGallery)?.icon}
                    </span>
                    {visualizationTools.find(t => t.id === activeGallery)?.name} - {t('gallery')}
                  </h4>

                  {(galleries[activeGallery] || []).length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {(galleries[activeGallery] || []).map((image, idx) => (
                        <div
                          key={idx}
                          className="group relative bg-gray-100 dark:bg-gray-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 md:py-16">
                      <div className="text-6xl md:text-7xl mb-4">🚧</div>
                      <h5 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                        {t('underConstruction')}
                      </h5>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                        {t('comingSoon')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
