import React from 'react';
import { withLocalize } from 'react-localize-redux';

const LanguageDropdown = ({languages, activeLanguage, setActiveLanguage}) => {
  const getClass = (languageCode) => {
    return languageCode === activeLanguage.code ? 'active' : ''
  };

  return (
    <select onChange={e => setActiveLanguage(e.target.value)}>
      {languages.map(lang =>
        <option value={lang.code}>{ lang.name }</option>
      )}
    </select>
  );
};

export default withLocalize(LanguageDropdown);