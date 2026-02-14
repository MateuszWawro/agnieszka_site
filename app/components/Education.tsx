'use client';

import { useTranslations } from 'next-intl';

const Education = () => {
  const t = useTranslations('education');
  
  const education = [
    {
      period: t('bachelor.period'),
      institution: t('bachelor.institution'),
      degree: t('bachelor.degree'),
      field: t('bachelor.field'),
      icon: '🎓',
    },
    {
      period: t('master.period'),
      institution: t('master.institution'),
      degree: t('master.degree'),
      field: t('master.field'),
      icon: '📚',
    },
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-dark dark:text-white">
          {t('title')}
        </h2>
        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-12 md:mb-16"></div>

        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-light to-white dark:from-gray-800 dark:to-gray-700 rounded-xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-dark transform hover:-translate-y-2"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-dark dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300">
                      {item.institution}
                    </h3>
                    <span className="inline-block bg-primary-dark/10 dark:bg-primary/20 text-primary-dark dark:text-primary font-semibold px-3 py-1 sm:px-4 rounded-full text-sm sm:text-base self-start">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl text-primary-dark dark:text-primary font-semibold mb-2">{item.degree}</p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item.field}</p>
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
