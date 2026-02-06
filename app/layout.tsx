import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agnieszka Wawro - Inżynier Architekt',
  description: 'Portfolio Agnieszki Wawro - studentki Architektury II stopnia na Politechnice Gdańskiej. Specjalizacja w projektowaniu wnętrz i urbanistyce.',
  keywords: ['architektura', 'inżynier architekt', 'projektowanie wnętrz', 'AutoCAD', 'REVIT', 'SketchUp', 'portfolio'],
  authors: [{ name: 'Agnieszka Wawro' }],
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
