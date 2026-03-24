'use client';

import { useTranslations } from 'next-intl';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FaBook, FaAward, FaBuilding, FaUtensils, FaLeaf, FaHeartbeat } from 'react-icons/fa';

const StudentProjects = () => {
  const t = useTranslations('studentProjects');
  const [activeTab, setActiveTab] = useState<'engineering' | 'master'>('engineering');
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const engineeringProjects = [
    {
      id: 'kindergarten',
      name: 'Przyjazne Przedszkole ze strefą warsztatową',
      icon: FaBuilding,
      emoji: '🏫',
      images: Array.from({ length: 6 }, (_, i) => ({
        src: `/inz${i + 1}_PLASKI.png`,
        alt: `Projekt przedszkola - ${i + 1}`,
      })),
    },
    {
      id: 'sopot-spot',
      name: 'Sopot Spot - Restaurant & WELLNESS SPA',
      icon: FaUtensils,
      emoji: '🍽️',
      images: Array.from({ length: 6 }, (_, i) => ({
        src: `/przeddyplom_${i + 1}_PLASKI.png`,
        alt: `Sopot Spot - ${i + 1}`,
      })),
    },
    {
      id: 'wisnowa-oliwa',
      name: 'WIŚNIOWA OLIWA',
      icon: FaLeaf,
      emoji: '🌳',
      images: [{ src: '/oliwa.png', alt: 'WIŚNIOWA OLIWA' }],
    },
    {
      id: 'rehabilitation',
      name: 'PROJEKT ZAKŁADU REHABILITACJI I FIZJOTERAPII W ZABUDOWIE PLOMBOWEJ - GDYNIA ORŁOWO',
      icon: FaHeartbeat,
      emoji: '🏥',
      images: [{ src: '/rehab.png', alt: 'Rehabilitacja' }],
    },
  ];

  const tabs = [
    {
      id: 'engineering',
      label: t('engineeringStudies'),
      icon: FaBook,
      emoji: '📐',
    },
    {
      id: 'master',
      label: t('masterStudies'),
      icon: FaAward,
      emoji: '📚',
    },
  ];

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setActiveGallery(null);
    setIsImageLoading(false);
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev);
  }, []);
  const nextImage = useCallback(() => {
    const currentProject = engineeringProjects.find(p => p.id === activeGallery);
    const imagesLength = currentProject?.images.length || 0;
    setLightboxIndex(prev => prev !== null && prev < imagesLength - 1 ? prev + 1 : prev);
  }, [activeGallery, engineeringProjects]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    setIsImageLoading(true);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  // Preload adjacent images for smooth navigation
  useEffect(() => {
    if (!activeGallery || lightboxIndex === null) return;

    const currentProject = engineeringProjects.find(p => p.id === activeGallery);
    if (!currentProject) return;

    const imagesToPreload = [];
    if (lightboxIndex > 0) imagesToPreload.push(lightboxIndex - 1); // Previous
    if (lightboxIndex < currentProject.images.length - 1) imagesToPreload.push(lightboxIndex + 1); // Next

    imagesToPreload.forEach((idx) => {
      const img = new window.Image();
      img.src = currentProject.images[idx].src;
    });
  }, [lightboxIndex, activeGallery, engineeringProjects]);

  return (
    <section
      id="student-projects"
      className="section-padding bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-dark dark:text-white">
            {t('title')}
          </h2>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-primary-dark to-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 mb-8 md:mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'engineering' | 'master')}
                  className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-2xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-dark to-primary text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-xs">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {activeTab === 'engineering' ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {engineeringProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <button
                      key={project.id}
                      onClick={() => {
                        setActiveGallery(project.id);
                        setLightboxIndex(0);
                        setIsImageLoading(true);
                      }}
                      className="group bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600 flex flex-col items-center text-center cursor-pointer"
                    >
                      <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {project.emoji}
                      </div>
                      <div className="text-primary-dark dark:text-primary mb-3">
                        <Icon size={32} />
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-dark dark:text-white leading-snug">
                        {project.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-3">Kliknij aby zobaczyć galerię</p>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-600 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl md:text-8xl mb-6 opacity-50">📚</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {t('masterStudies')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                  {t('comingSoon')}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeGallery && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors p-2"
            aria-label="Zamknij"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous arrow */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2 bg-black/30 hover:bg-black/50 rounded-full"
              aria-label="Poprzedni"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next arrow */}
          {activeGallery && lightboxIndex < (engineeringProjects.find(p => p.id === activeGallery)?.images.length || 0) - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2 bg-black/30 hover:bg-black/50 rounded-full"
              aria-label="Następny"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          {activeGallery && (
            <div
              className="relative w-[90vw] h-[80vh] max-w-6xl bg-black/50 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-20">
                  <div className="animate-spin">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              )}
              <Image
                src={engineeringProjects.find(p => p.id === activeGallery)?.images[lightboxIndex]?.src || ''}
                alt={engineeringProjects.find(p => p.id === activeGallery)?.images[lightboxIndex]?.alt || ''}
                fill
                className="object-contain"
                sizes="90vw"
                priority={true}
                loading="eager"
                onLoadingComplete={() => setIsImageLoading(false)}
              />
            </div>
          )}

          {/* Counter */}
          {activeGallery && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
              {lightboxIndex + 1} / {engineeringProjects.find(p => p.id === activeGallery)?.images.length}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default StudentProjects;
