'use client';

import { useTranslations } from 'next-intl';

const Interests = () => {
  const t = useTranslations('interests');
  
  const interests = [
    {
      title: t('interior.title'),
      icon: '🏠',
      description: t('interior.description'),
    },
    {
      title: t('urban.title'),
      icon: '🏙️',
      description: t('urban.description'),
    },
    {
      title: t('sport.title'),
      icon: '⚽',
      description: t('sport.description'),
    },
  ];

  return (
    <section id="interests" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-dark/5 dark:bg-primary-dark/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-dark dark:text-white">
          {t('title')}
        </h2>
        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-12 md:mb-16"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-light dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              {/* Decorative top corner */}
              <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 dark:bg-primary/20 rounded-br-full"></div>
              
              {/* Icon with animation */}
              <div className="relative z-10 text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-5 md:mb-6 text-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {interest.icon}
              </div>
              
              <h3 className="relative z-10 text-lg sm:text-xl font-bold text-primary-dark dark:text-primary mb-3 sm:mb-4 text-center group-hover:text-dark dark:group-hover:text-white transition-colors duration-300">
                {interest.title}
              </h3>
              
              <p className="relative z-10 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
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
