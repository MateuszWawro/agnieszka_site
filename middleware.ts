import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  
  // Always use a locale prefix
  localePrefix: 'always'
});

export const config = {
  // Nie dopasowuj ścieżek API, Next.js internals i plików statycznych
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
