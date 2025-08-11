import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import { en, zh } from "./src/locales";

const resources = {
  en: { translation: en },
  zh: { translation: zh },
};

// Detect device language and fallback to 'en' if not supported
const fallback = { languageTag: "en", isRTL: false };

const { languageTag } =
  RNLocalize.findBestLanguageTag(Object.keys(resources)) || fallback;

i18n
  .use(initReactI18next) // Connects with React
  .init({
    resources,
    lng: languageTag,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
    react: {
      useSuspense: false, // For React Native, set to false
    },
  });

export default i18n;
