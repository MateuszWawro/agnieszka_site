'use client';

import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('contact');
  
  const contactInfo = [
    {
      icon: '📱',
      label: t('phone'),
      value: '+48 724 23 22 21',
      href: 'tel:+48724232221',
    },
    {
      icon: '✉️',
      label: t('email'),
      value: 'agnieszkawawro02@gmail.com',
      href: 'mailto:agnieszkawawro02@gmail.com',
    },
    {
      icon: '📍',
      label: t('location'),
      value: t('locationValue'),
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-white">
          {t('title')}
        </h2>
        <div className="h-1 w-20 md:w-24 bg-white/80 mx-auto rounded-full mb-12 md:mb-16"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative bg-white dark:bg-gray-700 rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 text-center overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-dark/0 group-hover:from-primary/5 group-hover:to-primary-dark/5 dark:group-hover:from-primary/10 dark:group-hover:to-primary-dark/10 transition-all duration-300"></div>
              
              {/* Icon with animation */}
              <div className="relative text-5xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                {item.icon}
              </div>
              
              <h3 className="relative text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                {item.label}
              </h3>
              
              <p className="relative text-sm sm:text-base text-dark dark:text-white font-bold group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300 break-words">
                {item.value}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-dark to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <div className="inline-block bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl px-6 py-4 sm:px-8 sm:py-6">
            <p className="text-white dark:text-gray-200 text-base sm:text-lg font-medium">
              {t('inviteMessage')}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-custom relative z-10 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20 text-center text-white/90 dark:text-gray-300">
        <p className="text-sm sm:text-base font-medium">&copy; {new Date().getFullYear()} Agnieszka Wawro. {t('footer.rights')}</p>
        <p className="mt-2 text-xs sm:text-sm text-white/70 dark:text-gray-400">
          {t('footer.developedBy')}{' '}
          <a 
            href="https://wawro.ovh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white dark:text-gray-300 hover:text-white/90 dark:hover:text-white underline transition-colors duration-300"
          >
            wawro
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
