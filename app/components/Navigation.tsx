'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      // Safari iOS fix - prevent background scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      window.addEventListener('keydown', handleEscape);
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('education'), href: '#education' },
    { name: t('experience'), href: '#experience' },
    { name: t('skills'), href: '#skills' },
    { name: t('interests'), href: '#interests' },
    { name: t('collages'), href: '#collages' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Left side: Language Switcher and Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          
          {/* Center/Right: Navigation items */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-dark dark:text-white p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu - Dropdown from right */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-64 sm:w-72 bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden z-40 overflow-y-auto overscroll-contain ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            WebkitTransform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            touchAction: 'pan-y',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="pt-20 px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-4 text-lg font-medium text-dark dark:text-gray-200 hover:text-primary-dark dark:hover:text-primary hover:pl-2 transition-all duration-200 border-b border-gray-200 dark:border-gray-700"
                onClick={() => {
                  // Close menu immediately
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
