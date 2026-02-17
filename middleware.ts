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
  // Do not match API paths, Next.js internals and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
