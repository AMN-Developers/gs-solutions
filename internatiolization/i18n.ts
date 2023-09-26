import { pt_BR } from './locales/pt-BR/pt_BR';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt_BR: {
    translation: pt_BR,
  }
};

export const availableLanguages = Object.keys(resources);

const options = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt_BR',
    detection: options,
    supportedLngs: ['pt_BR'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
