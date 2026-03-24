'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FaBook, FaAward } from 'react-icons/fa';

const StudentProjects = () => {
  const t = useTranslations('studentProjects');
  const [activeTab, setActiveTab] = useState<'engineering' | 'master'>('engineering');

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
          <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-600 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl md:text-8xl mb-6 opacity-50">
                {activeTab === 'engineering' ? '📐' : '📚'}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                {activeTab === 'engineering'
                  ? t('engineeringStudies')
                  : t('masterStudies')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                {t('comingSoon')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProjects;
