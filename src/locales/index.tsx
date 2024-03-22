import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {locales} from 'utils/static';
import id_ID from './id-ID';
import en_US from './en-US';

export const setupTranslation = () => {
  const resources = {
    [locales.EN_US]: en_US,
    [locales.ID_ID]: id_ID,
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: locales.ID_ID,
    fallbackLng: locales.ID_ID,
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });
};
