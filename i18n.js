import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './public/locales/en/common.json';
import ukrTranslations from './public/locales/ukr/common.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  ukr: {
    translation: ukrTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ukr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
