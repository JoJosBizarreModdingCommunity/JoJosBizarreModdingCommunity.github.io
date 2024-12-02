import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals.js';
import { useState, useEffect } from 'react';
import Markdown from 'react-markdown'

// Scripts
import { News } from "./news.jsx"
import { Games } from "./games.jsx"

// Stylesheets
import "./assets/fonts.css";
import "./styles/index.css";

// Assets
import strings      from "./strings.jsx";
import logo         from "./assets/images/Logo.png";
import logo_JP      from "./assets/images/Logo_JP.png"
import wonder_of_u  from "./assets/images/Wonder_of_U.png";
import banner       from "./assets/images/Banner.png";
import banner_long  from "./assets/images/Long Banner.png";
import { GetFlag }  from "./assets/flags.jsx";

const UseDebounce = (callback, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
};

function Home({lang}) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = UseDebounce(() => {
      if (window.scrollY > 700) { // Change 300 to however many pixels you want
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };
  }, []);

  const nav_pipe = <span className="nav-pipe">F</span>;

  function LanguageButton({code, name}) {
    if (code != lang) {
      return (
        <Link to={`${strings[code].url}`}>
          <span className="small-flag">
            <table>
              <td><img src={GetFlag(code)}/></td>
              <td>{name}</td>
            </table>
          </span>
        </Link>
      );
    }
  }

  var logo_image = logo;
  if (lang == "jp") logo_image = logo_JP;

  const string = strings[lang];

  return (
    <>
      <div className="bg-container">
          <div className="bg"></div>

          <div className="navbar">
            <div className="nav-buttons">
              <a href="https://wiki.jojomodding.com" target="_blank">{string.navbar.wiki}</a>
              {nav_pipe}
              <HashLink to={`${string.url}#about-us`}>{string.navbar.about}</HashLink>
              {nav_pipe}
              <div className="flag">
                <div className="flag-overflow"><img src={GetFlag(lang)}/></div>
                <div className="language-hitbox"></div>
                <div className="language-dropdown">
                  <LanguageButton code="en" name="English"/>
                  <LanguageButton code="es" name="español"/>
                  <LanguageButton code="pt-br" name="português brasileiro"/>
                  {/* <LanguageButton code="ja" name="日本語"/> */}
                </div>
              </div>
            </div>
          </div>

          <News lang={lang}/>

          <div className="wonder-of-u no-mobile">
            <img src={wonder_of_u}/>
          </div>
          <div className="jjbmc-logo">
            <img src={logo_image} alt="Logo"/>
          </div>
      </div>

      <div className="border"></div>
      <div className="underneath">
        <Games heading={string.headings.mods}/>

        <div id="about-us" className="about-us">
          <div className="about-us-content">
            <h1>{string.headings.about}</h1>
            <img className="banner only-mobile" src={banner}></img>
            <img className="banner no-mobile" src={banner_long}></img>
            <Markdown className="markdown">{string.about}</Markdown>
          </div>
        </div>
      </div>

      <div className={`footer ${showFooter ? 'visible' : 'hidden'}`}><HashLink to={`${strings[lang].url}#top`}>{string.navbar.top}</HashLink></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path={strings["en"].url} element={<Home lang="en"/>} />
        <Route path={strings["es"].url} element={<Home lang="es"/>} />
        <Route path={strings["pt-br"].url} element={<Home lang="pt-br"/>} />
        <Route path={strings["ja"].url} element={<Home lang="ja"/>} />
        <Route path="*" element={<><p>Error 404: This page does not exist.</p><br/><a href="/">Go back!</a></>}/>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
