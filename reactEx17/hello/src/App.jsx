import React, { useState, useContext } from 'react';

// Step 1: Create the LanguageContext
const LanguageContext = React.createContext();

const Hello = () => {
  // Step 3: Consume the LanguageContext inside the Hello component
  const language = useContext(LanguageContext);

  // Step 4: Return the message in the selected language
  const getMessage = (lang) => {
    switch (lang) {
      case 'en':
        return 'Hello, World!';
      case 'es':
        return '¡Hola, Mundo!';
      case 'fr':
        return 'Bonjour, le Monde!';
      default:
        return 'Hello, World!';
    }
  };

  return <h2>{getMessage(language)}</h2>;
};

const App = () => {
  // Step 2: Add state to manage the selected language
  const [language, setLanguage] = useState('en');

  return (
    // Step 2: Wrap the Hello component in the Provider
    <LanguageContext.Provider value={language}>
      <div>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <Hello />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
