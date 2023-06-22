import React, {createContext, useState} from 'react'

import './App.css';
// Create the LanguageContext
const LanguageContext = createContext();

// Create a wrapper component that includes the LanguageContext.Provider
const LanguageContextProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Initial language is set to 'en' (English)

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={selectedLanguage}>
      {/* Render the children components */}
      {children}
      {/* Render the language select */}
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </LanguageContext.Provider>
  );
};

// DisplayLanguage component that uses the LanguageContext
const DisplayLanguage = () => {
  return (
    <LanguageContext.Consumer>
      {(selectedLanguage) => (
        <div>
          Selected language: {selectedLanguage}
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

// Usage of the LanguageContextProvider and DisplayLanguage components
const App = () => {
  return (
    <LanguageContextProvider>
      <DisplayLanguage />
    </LanguageContextProvider>
  );
};


export default App;
