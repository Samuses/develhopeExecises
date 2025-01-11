import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function Hello() {
  const { language } = useContext(LanguageContext);

  const messages = {
    en: "Hello, World!",
    es: "¡Hola, Mundo!",
    fr: "Bonjour le Monde!",
    it: "Ciao, Mondo!"
  };

  return <h2>{messages[language] || messages.en}</h2>;  // Fallback a 'en' se la lingua non è disponibile
}

export default Hello;
