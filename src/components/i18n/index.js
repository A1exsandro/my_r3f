import LanguageDetector from "i18next-browser-languagedetector" 

import i18n from "i18next" 
import { initReactI18next } from "react-i18next"

import translation from './locales' 

const i18nConfig = {
  resources: translation, // resources are our translation
  fallbackLng: ['en', 'pt'],  // fallbackLng is the default language if the browser can't to find it on its on
  
  interpolation: {
    escapeValue: false // react already safes from xss
  }
}

i18n 
  .use(LanguageDetector)  
  .use(initReactI18next)  
  .init(i18nConfig)  

export default i18n
