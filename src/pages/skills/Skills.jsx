import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import SkillsLanguages from '../../components/SkillsLanguages/SkillsLanguages';

import './Skills.css';
import languageText from '../../components/SkillsLanguages/commons/about-skills-text';

export default function Skills() {
  const [languageName, setLanguageName] = useState(languageText.html5);
  // https://www.freecodecamp.org/portuguese/news/como-passar-dados-e-eventos-entre-componentes-em-react/
  const readLanguageName = (value) => {
    setLanguageName(value);
  };
  return (
    <section>
      <Header />
      <div className="container-skills">
        <SkillsLanguages readLanguageText={readLanguageName} />
        <div className="text-skills">
          <p>{ languageName }</p>
        </div>
      </div>
    </section>
  );
}
