import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

export const LanguageContext = createContext({
  language: "english",
  setLanguage: (language) => { }
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const TranslationContent = ({ contentId }) => {
  const { language } = useContext(LanguageContext);
  return translations[language][contentId];
};
