import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translations from a backend
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debugging for development
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to translation files
    },
  });

export default i18n;
