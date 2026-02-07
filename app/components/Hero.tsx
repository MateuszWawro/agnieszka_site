'use client';

import { useTranslations } from 'next-intl';
import InteractiveShapes from './InteractiveShapes';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-light to-primary/10 dark:from-gray-900 dark:via-gray-800 dark:to-primary-dark/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-dark/10 dark:bg-primary-dark/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Interactive Shapes - replaces static dots */}
        <InteractiveShapes />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="text-center max-w-4xl">
            {/* Animated title */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-dark dark:text-white animate-fade-in-up">
                {t('title')}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full animate-scale-in"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl text-primary-dark dark:text-primary mb-8 font-semibold animate-fade-in-up animation-delay-200">
              {t('subtitle')}
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              <p className="leading-relaxed">
                {t('description1')}
              </p>
              <p className="leading-relaxed">
                {t('description2')} <span className="font-semibold text-primary-dark dark:text-primary">{t('description2_highlight')}</span> {t('description2_end')}
              </p>
              <p className="leading-relaxed">
                {t('description3')}
              </p>
            </div>

            <div className="mt-10 animate-fade-in-up animation-delay-600">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary text-white px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span>{t('contactButton')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
