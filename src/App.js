import { useTranslation } from "react-i18next";

import './App.css'

export function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = lng => {
    return () => {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div>

      <header className="header">
        <button onClick={changeLanguage('PT_BR')}>PT-BR</button>
        <button onClick={changeLanguage('EN_US')}>EN-US</button>
      </header>


      <main className="main">
        <h1 className="main__title">{t('title')}</h1>

        <div className="card"><p>{t('phrase_one')}</p></div>
        <div className="card"><p>{t('phrase_two')}</p></div>
        <div className="card"><p>{t('phrase_three')}</p></div>
      </main>

    </div>
  );
}
