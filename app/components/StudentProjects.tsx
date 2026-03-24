'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const StudentProjects = () => {
  const t = useTranslations('studentProjects');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<'engineering' | 'master'>('engineering');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const engineeringProjects = [
    {
      id: 'kindergarten',
      name: 'Przyjazne Przedszkole ze strefą warsztatową',
      nameEn: 'Friendly Kindergarten with Workshop Area',
      emoji: '🏫',
      description: 'Projekt powstał w odpowiedzi na rozwijające się osiedle mieszkaniowe, oferując przedszkole dla najmłodszych mieszkańców, zarazem projekt odpowiada na przyjazność pod wieloma aspektami:\n\n• Przyjazny użytkownikom - dzieciom, które w naturalnym środowisku dorastają lepiej oraz uczą się jak o nie dbać\n\n• Przyjazny środowisku - budynek zaprojektowano w całości w konstrukcji drewnianej, z belek dwuteowych, dodatkowo elewacja budynku zaprojektowana została z drewnianych lameli elewacyjnych 3D, które sprawiają, iż obiekt wtapia się w otaczający krajobraz naturalny\n\n• Przyjazny mieszkańcom - po godzinach pracy placówki oświatowej przedszkole staje się miejscem integracji społeczności lokalnej, która może korzystać z części budynku, zaprojektowanej jako wielofunkcyjna strefa warsztatowa, służąca zarówno przedszkolakom, jak i mieszkańcom do rozwijania ich kreatywności, pasji, zainteresowań, czy integrowania się ze społecznością lokalną.',
      descriptionEn: 'The project was created in response to a developing residential estate, offering a kindergarten for the youngest residents, while also responding to friendliness in many aspects:\n\n• User-friendly - for children who grow up better in natural environment and learn how to care for it\n\n• Eco-friendly - the building was designed entirely in wooden construction, with double-T beams. Additionally, the building\'s elevation was designed with 3D wooden cladding slats, which makes the object blend into the surrounding natural landscape\n\n• Community-friendly - after working hours of the educational facility, the kindergarten becomes a place of integration for the local community, which can use part of the building designed as a multifunctional workshop area, serving both preschoolers and residents to develop their creativity, passions, interests, and to integrate with the local community.',
      images: Array.from({ length: 6 }, (_, i) => ({
        src: `/inz${i + 1}_PLASKI.png`,
        alt: `Projekt przedszkola - ${i + 1}`,
      })),
    },
    {
      id: 'sopot-spot',
      name: 'Sopot Spot - Restaurant & WELLNESS SPA',
      nameEn: 'Sopot Spot - Restaurant & WELLNESS SPA',
      emoji: '🍽️',
      description: 'Nowoczesny kompleks restauracyjno-spa, będący połączeniem świeżej kuchni z pełną ofertą relaksacyjną. Projekt łączy elegancję i funkcjonalność w jednym miejscu, tworząc przestrzeń dla gości szukających zarówno gastronomicznych doświadczeń, jak i chwili relaksu. Obiekt został zaprojektowany z dbałością o detale, z nowoczesną architekturą i przestronnymi wnętrzami zawierającymi strefy gastronomiczne, spa i wellness.',
      descriptionEn: 'A modern restaurant and spa complex combining fresh cuisine with full relaxation services. The project merges elegance and functionality in one space, creating an environment for guests seeking both gastronomic experiences and moments of relaxation. The building was designed with attention to detail, featuring modern architecture and spacious interiors containing dining areas, spa and wellness zones.',
      images: Array.from({ length: 6 }, (_, i) => ({
        src: `/przeddyplom_${i + 1}_PLASKI.png`,
        alt: `Sopot Spot - ${i + 1}`,
      })),
    },
    {
      id: 'wisnowa-oliwa',
      name: 'WIŚNIOWA OLIWA',
      nameEn: 'WIŚNIOWA OLIWA',
      emoji: '🌳',
      description: 'Projekt ekspozycji tematycznej w historycznym ogrodzie, ukazujący bogactwo przyrody i tradycji lokalnych. Wiśniowa Oliwa to połączenie natury z architekturą, gdzie każdy element został zaprojektowany by harmonijnie wpisać się w istniejący krajobraz. Projekt zakłada stworzenie przestrzeni edukacyjnej i rekreacyjnej, zachowując charakter i autentyczność historycznego terenu.',
      descriptionEn: 'A thematic exhibition project in a historic garden, showcasing the richness of nature and local traditions. Wiśniowa Oliwa is a combination of nature and architecture, where every element was designed to harmoniously integrate with the existing landscape. The project assumes creating educational and recreational spaces while preserving the character and authenticity of the historic site.',
      images: [
        { src: '/oliwa.png', alt: 'WIŚNIOWA OLIWA - 1' },
        { src: '/oliwa2.png', alt: 'WIŚNIOWA OLIWA - 2' },
      ],
    },
    {
      id: 'rehabilitation',
      name: 'PROJEKT ZAKŁADU REHABILITACJI I FIZJOTERAPII W ZABUDOWIE PLOMBOWEJ - GDYNIA ORŁOWO',
      nameEn: 'REHABILITATION AND PHYSIOTHERAPY FACILITY PROJECT IN PLOMB BUILDING - GDYNIA ORŁOWO',
      emoji: '🏥',
      description: 'Nowoczesny ośrodek rehabilitacji i fizjoterapii wkomponowany w istniejącą zabudowę w Gdyni Orłowie. Projekt łączy funkcjonalność medyczną z komfortem pacjentów, oferując przestrzenie terapeutyczne zaprojektowane z myślą o uzdrowiskowych standardach. Wnętrza zostały zaprojektowane w harmonii z naturalnym otoczeniem, wspierając proces leczenia i regeneracji.',
      descriptionEn: 'A modern rehabilitation and physiotherapy center integrated into existing buildings in Gdynia Orłowo. The project combines medical functionality with patient comfort, offering therapeutic spaces designed according to resort standards. The interiors were designed in harmony with the natural surroundings, supporting the healing and recovery process.',
      images: [{ src: '/rehab.png', alt: 'Rehabilitacja' }],
    },
  ];

  const masterProjects = [
    {
      id: 'conservation',
      name: 'PROJEKT KONSERWATORSKI - REWITALIZACJA ZAŁOŻENIA FOLWARCZNEGO - DOM SĄSIEDZKI W MŁYM KACKU',
      nameEn: 'CONSERVATION PROJECT - REVITALIZATION OF FARM COMPLEX - NEIGHBORHOOD HOUSE IN MŁYM KACKO',
      emoji: '🏛️',
      description: 'Projekt konserwacji i rewitalizacji historycznego założenia folwarcznego, ze szczególnym naciskiem na odrestaurowanie Domu Sąsiedzkiego w Młym Kacku. Prace konserwatorskie łączą szacunek do historycznego dziedzictwa z nowoczesnym standardem użytkowania. Projekt zakładał przywrócenie pierwotnych materiałów i formy architektonicznej, jednocześnie adaptując budynek do współczesnych potrzeb społeczności lokalnej.',
      descriptionEn: 'A conservation and revitalization project of a historic farm complex, with particular emphasis on the restoration of the Neighborhood House in Młym Kacko. Conservation works combine respect for historical heritage with modern usage standards. The project involved restoring original materials and architectural form, while adapting the building to the contemporary needs of the local community.',
      images: [{ src: '/konserwacje_1_plaskie.png', alt: 'Projekt Konserwatorski' }],
    },
  ];

  const tabs = [
    {
      id: 'engineering',
      label: t('engineeringStudies'),
      emoji: '📐',
    },
    {
      id: 'master',
      label: t('masterStudies'),
      emoji: '📚',
    },
  ];

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setActiveGallery(null);
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const openGallery = useCallback(() => {
    if (selectedProject) {
      setActiveGallery(selectedProject);
      setLightboxIndex(0);
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : prev);
  }, []);
  const nextImage = useCallback(() => {
    const currentProjects = activeTab === 'engineering' ? engineeringProjects : masterProjects;
    const currentProject = currentProjects.find(p => p.id === activeGallery);
    const imagesLength = currentProject?.images.length || 0;
    setLightboxIndex(prev => prev !== null && prev < imagesLength - 1 ? prev + 1 : prev);
  }, [activeGallery, activeTab, engineeringProjects, masterProjects]);

  useEffect(() => {
    if (lightboxIndex === null) return;
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

    const currentProjects = activeTab === 'engineering' ? engineeringProjects : masterProjects;
    const currentProject = currentProjects.find(p => p.id === activeGallery);
    if (!currentProject) return;

    const imagesToPreload = [];
    if (lightboxIndex > 0) imagesToPreload.push(lightboxIndex - 1); // Previous
    if (lightboxIndex < currentProject.images.length - 1) imagesToPreload.push(lightboxIndex + 1); // Next

    imagesToPreload.forEach((idx) => {
      const img = new window.Image();
      img.src = currentProject.images[idx].src;
    });
  }, [lightboxIndex, activeGallery, activeTab, engineeringProjects, masterProjects]);

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
                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="group bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600 flex flex-col items-center text-center cursor-pointer"
                    >
                      <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {project.emoji}
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-dark dark:text-white leading-snug">
                        {locale === 'pl' ? project.name : project.nameEn}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-3">{locale === 'pl' ? 'Czytaj opis' : 'Read description'}</p>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {masterProjects.map((project) => {
                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className="group bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600 flex flex-col items-center text-center cursor-pointer"
                    >
                      <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {project.emoji}
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-dark dark:text-white leading-snug">
                        {locale === 'pl' ? project.name : project.nameEn}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-3">{locale === 'pl' ? 'Kliknij aby zobaczyć galerię' : 'Click to view gallery'}</p>
                    </button>
                  );
                })}
              </div>
            </>
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
          {activeGallery && (() => {
            const currentProjects = activeTab === 'engineering' ? engineeringProjects : masterProjects;
            return lightboxIndex < (currentProjects.find(p => p.id === activeGallery)?.images.length || 0) - 1;
          })() && (
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
          {activeGallery && (() => {
            const currentProjects = activeTab === 'engineering' ? engineeringProjects : masterProjects;
            const currentProject = currentProjects.find(p => p.id === activeGallery);
            return (
              <div
                className="relative w-[90vw] h-[80vh] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentProject?.images[lightboxIndex]?.src || ''}
                  alt={currentProject?.images[lightboxIndex]?.alt || ''}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority={true}
                  loading="eager"
                />
              </div>
            );
          })()}

          {/* Counter */}
          {activeGallery && (() => {
            const currentProjects = activeTab === 'engineering' ? engineeringProjects : masterProjects;
            const currentProject = currentProjects.find(p => p.id === activeGallery);
            return (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
                {lightboxIndex + 1} / {currentProject?.images.length}
              </div>
            );
          })()}
        </div>
      )}

      {/* Project Description Modal */}
      {selectedProject && (() => {
        const currentProjects = activeTab === 'engineering' ? engineeringProjects : masterProjects;
        const project = currentProjects.find(p => p.id === selectedProject);
        const description = locale === 'pl' ? project?.description : project?.descriptionEn;

        return (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 md:px-8 py-6 md:py-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl md:text-5xl">{project?.emoji}</div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-dark dark:text-white">
                      {locale === 'pl' ? project?.name : project?.nameEn}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="px-6 md:px-8 py-8">
                <div className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line mb-8">
                  {description}
                </div>

                {/* View Gallery Button */}
                {project?.images && project.images.length > 0 && (
                  <button
                    onClick={openGallery}
                    className="w-full bg-gradient-to-r from-primary-dark to-primary hover:shadow-lg text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 text-lg"
                  >
                    <span>{locale === 'pl' ? '🖼️ Pokaż galerię' : '🖼️ View Gallery'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

export default StudentProjects;
