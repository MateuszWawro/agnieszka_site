'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Collages = () => {
  const t = useTranslations('collages');
  
  const collageImages = [
    {
      src: '/agnieszka_kol1.jpg',
      alt: t('image1Alt'),
    },
    {
      src: '/agnieszka_kol2.jpg',
      alt: t('image2Alt'),
    },
  ];

  return (
    <section id="collages" className="section-padding bg-gray-light dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary-dark/5 dark:bg-primary-dark/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark dark:text-white">
          {t('title')}
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full mb-8"></div>
        
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          {t('description')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {collageImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collages;