import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
const resources = {
  en: {
    translation: {
      title: "The Shawshank Redemption",
    },
  },
  iw: {
    translation: {
      title: "The Shawshank Redemption",
    },
  },
};

const languages = ["en", "iw"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: languages,
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
