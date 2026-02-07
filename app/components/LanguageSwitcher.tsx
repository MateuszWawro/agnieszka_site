'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from pathname and add the new one
    const pathWithoutLocale = pathname.replace(/^\/(pl|en)/, '');
    router.push(`/${newLocale}${pathWithoutLocale || ''}`);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('pl')}
        className={`w-8 h-6 rounded overflow-hidden border-2 transition-all duration-300 ${
          locale === 'pl' 
            ? 'border-primary-dark dark:border-primary scale-110 shadow-lg' 
            : 'border-gray-300 dark:border-gray-600 opacity-60 hover:opacity-100 hover:scale-105'
        }`}
        aria-label="Polski"
        title="Polski"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <rect width="640" height="240" fill="#fff"/>
          <rect y="240" width="640" height="240" fill="#dc143c"/>
        </svg>
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`w-8 h-6 rounded overflow-hidden border-2 transition-all duration-300 ${
          locale === 'en' 
            ? 'border-primary-dark dark:border-primary scale-110 shadow-lg' 
            : 'border-gray-300 dark:border-gray-600 opacity-60 hover:opacity-100 hover:scale-105'
        }`}
        aria-label="English"
        title="English"
      >
        <svg viewBox="0 0 60 30" className="w-full h-full">
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
          </clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
