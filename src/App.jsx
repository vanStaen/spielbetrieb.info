import React, { useLayoutEffect, useEffect } from "react";
import { observer } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Contact } from "./components/Contact/Contact";
import { consoleGreetings } from "./helpers/consoleGreetings";
import { Main } from "./pages/Main";
import { pageStore } from "./store/pageStore/pageStore";
import { Legals } from "./components/Legals/Legals";

import "./lib/i18n";
import "./App.less";

const defineVariableHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("resize", defineVariableHeight);

const App = observer(() => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    // Define variable height
    defineVariableHeight();
  }, []);

  useEffect(() => {
    if (pageStore.selectedLanguage) {
      if (pageStore.selectedLanguage === "de") {
        i18n.changeLanguage("de-DE");
      } else {
        i18n.changeLanguage("en-US");
      }
    } else {
      const browserlanguage = navigator.language || navigator.userLanguage;
      if (browserlanguage === "de-DE") {
        i18n.changeLanguage("de-DE");
        pageStore.setSelectedLanguage("de");
      } else {
        i18n.changeLanguage("en-US");
        pageStore.setSelectedLanguage("en");
      }
    }
  }, [i18n, pageStore.selectedLanguage]);

  useEffect(() => {
    consoleGreetings();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Contact />
        <Legals />
        <div className="main">
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
});

export default App;
