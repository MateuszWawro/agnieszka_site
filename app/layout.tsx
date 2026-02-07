import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agnieszka Wawro - Inżynier Architekt',
  description: 'Portfolio Agnieszki Wawro - studentki Architektury II stopnia na Politechnice Gdańskiej. Specjalizacja w projektowaniu wnętrz i urbanistyce.',
  keywords: ['architektura', 'inżynier architekt', 'projektowanie wnętrz', 'AutoCAD', 'REVIT', 'SketchUp', 'portfolio'],
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
    title: 'Agnieszka Wawro - Inżynier Architekt',
    description: 'Portfolio Agnieszki Wawro - studentki Architektury II stopnia na Politechnice Gdańskiej',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="font-sans antialiased bg-white dark:bg-gray-900">{children}</body>
    </html>
  );
}
