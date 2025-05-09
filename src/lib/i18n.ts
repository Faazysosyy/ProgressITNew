import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../locales/en/common.json';
import ruCommon from '../locales/ru/common.json';

// Define the structure of our resources
const resources = {
  en: {
    common: enCommon
  },
  ru: {
    common: ruCommon
  }
};

// Initialize i18next
const i18n = createInstance();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    defaultNS: 'common',
  });

export default i18n; 