'use client';

import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-gray-light to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-dark dark:text-white">
          {t('title')}
        </h2>
        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-12 md:mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-gradient-to-br from-white to-gray-light dark:from-gray-700 dark:to-gray-800 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-dark transform hover:-translate-y-2 overflow-hidden">
            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 dark:bg-primary/10 rounded-bl-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <div className="flex-1 w-full">
                  <div className="flex flex-col gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-dark dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300">
                      {t('midi.company')}
                    </h3>
                    <span className="inline-block bg-primary-dark/10 dark:bg-primary/20 text-primary-dark dark:text-primary font-semibold px-3 py-1 sm:px-4 rounded-full text-sm sm:text-base self-start">
                      {t('midi.period')}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t('midi.description')}
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
