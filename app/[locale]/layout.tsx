import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import '../globals.css';

const SITE_URL = 'https://agnieszka.wawro.ovh';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === 'pl';
  
  const title = isPl ? 'Agnieszka Wawro - Inżynier Architekt' : 'Agnieszka Wawro - Architect Engineer';
  const description = isPl 
    ? 'Portfolio Agnieszki Wawro - studentki Architektury II stopnia na Politechnice Gdańskiej. Specjalizacja w projektowaniu wnętrz i urbanistyce. AutoCAD, REVIT, SketchUp, Lumion.'
    : 'Portfolio of Agnieszka Wawro - Master\'s student of Architecture at Gdańsk University of Technology. Specialization in interior design and urban planning. AutoCAD, REVIT, SketchUp, Lumion.';

  return {
    title,
    description,
    keywords: [
      'Agnieszka Wawro', 'architektura', 'architecture', 'inżynier architekt', 'architect engineer',
      'projektowanie wnętrz', 'interior design', 'urbanistyka', 'urban design',
      'AutoCAD', 'REVIT', 'SketchUp', 'Rhino', 'Lumion', 'D5 Render', 'Twinmotion',
      'portfolio architekta', 'architect portfolio', 'Politechnika Gdańska', 'Gdańsk',
    ],
    authors: [{ name: 'Agnieszka Wawro' }],
    creator: 'Agnieszka Wawro',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        'pl': `${SITE_URL}/pl`,
        'en': `${SITE_URL}/en`,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      ],
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isPl ? 'pl_PL' : 'en_US',
      url: `${SITE_URL}/${locale}`,
      siteName: 'Agnieszka Wawro - Portfolio',
      images: [
        {
          url: `${SITE_URL}/aga_main.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/aga_main.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {},
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="font-sans antialiased bg-white dark:bg-gray-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
