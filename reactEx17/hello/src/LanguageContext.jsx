import React, { createContext, useState } from 'react';

// Creiamo il contesto per la lingua con valore predefinito 'en' (inglese)
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // Stato per la lingua

  const changeLanguage = (e) => setLanguage(e.target.value); // Funzione per cambiare la lingua

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
