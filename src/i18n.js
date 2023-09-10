import i18n from "i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { compile,pathToRegexp } from "path-to-regexp";

export const whitelists = ['pl', 'en', 'ua', 'ru'];

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    whitelist: whitelists,
    debug: false,
    detection: {
      order: ["path","cookie"],
      cache: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

  export const generateLanguage = (locale, location) => {
    const ROUTE = "/:locale/:path*";
    const definePath = compile(ROUTE);
    const routeComponents = pathToRegexp(ROUTE).exec(location.pathname);
  
    let subPaths = null;
  
    if(routeComponents && routeComponents[1] && whitelists.includes(routeComponents[1]) == false){
      if(locale == 'ru' || locale == 'RU'){
        return '/' + routeComponents[1];
      } else {
        return `/${locale}/` + routeComponents[1];
      }
    }
  
    if (routeComponents && routeComponents[2]) {
      subPaths = routeComponents[2].split("/");
    }
  
    if (locale == 'ru' || locale == 'RU') {
      return subPaths && subPaths.length ? '/' + subPaths[0] : '/'
    }
  
  
    return definePath({
      locale,
      path: subPaths
    });
  };

export default i18n;