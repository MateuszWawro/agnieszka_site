import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import '../globals.css';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === 'pl';
  
  return {
    title: isPl ? 'Agnieszka Wawro - Inżynier Architekt' : 'Agnieszka Wawro - Architect Engineer',
    description: isPl 
      ? 'Portfolio Agnieszki Wawro - studentki Architektury II stopnia na Politechnice Gdańskiej. Specjalizacja w projektowaniu wnętrz i urbanistyce.'
      : 'Portfolio of Agnieszka Wawro - Master\'s student of Architecture at Gdańsk University of Technology. Specialization in interior design and urban planning.',
    keywords: ['architektura', 'architecture', 'inżynier architekt', 'architect engineer', 'projektowanie wnętrz', 'interior design', 'AutoCAD', 'REVIT', 'SketchUp', 'portfolio'],
    authors: [{ name: 'Agnieszka Wawro' }],
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      ],
    },
    openGraph: {
      title: isPl ? 'Agnieszka Wawro - Inżynier Architekt' : 'Agnieszka Wawro - Architect Engineer',
      description: isPl 
        ? 'Portfolio Agnieszki Wawro - studentki Architektury II stopnia na Politechnice Gdańskiej'
        : 'Portfolio of Agnieszka Wawro - Master\'s student of Architecture at Gdańsk University of Technology',
      type: 'website',
    },
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
