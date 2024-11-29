import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { useState, useEffect } from 'react';
import Markdown from 'react-markdown'

// Scripts
import { News } from "./news.js"
import { Games } from "./games.js"

// Stylesheets
import "./assets/fonts.css";
import "./styles/index.css";

// Assets
import logo         from "./assets/images/Logo.png";
import logo_JP      from "./assets/images/Logo_JP.png"
import wonder_of_u  from "./assets/images/Wonder_of_U.png";
import banner       from "./assets/images/Banner.png";
import banner_long  from "./assets/images/Long Banner.png";
import { GetFlag }  from "./assets/flags.js";

const UseDebounce = (callback, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
};

const URLs = {
  eng: "/",
  spa: "/es",
  jpn: "/jp"
};

const text_content = {
  eng : {
    navbar : {
      wiki: "wiki",
      roadmaps: "roadmaps",
      about: "about us",
      top: "back to top"
    },
    headings : {
      mods: "mods",
      about: "about us"
    },
    content : {
      about: "**JoJo's Bizarre Adventure** has been the focus of various videogames, developed by different studios and in different game engines. For many, these games are a big part of their connection with the JoJo franchise, and we here at **JoJo's Bizarre Modding Community** seek to harness our creativity to make them even more fun to play and experience!\n\nOur **mission** is to provide the resources, information, and guidance needed for modders, old and new, to successfully unleash their passionate crafts and ideas. Therefore, this website acts as a main **portal** for our community here online, and you can find us on **[Discord](https://discord.jojomodding.com)** where we are primarily based."
    }
  },
  spa : {
    navbar : {
      wiki: "wiki",
      roadmaps: "planos",
      about: "conócenos",
      top: "volver arriba"
    },
    headings : {
      mods: "mods",
      about: "sobre nosotros"
    },
    content : {
      about: "**JoJo's Bizarre Adventure** he sido el foco de varios videojuegos, creado por estudios diferentes y en motores diferentes de videojuegos. Para mucha gente, estes videojuegos son un gran parte de su coneción con el franquicia de JoJo, ¡y aquí en **JoJo's Bizarre Modding Community** nos esforzamos emplear nuestra creatividad para hacer que jugar y disfrutar aún mas divertido!\n\nLa meta de nuestra comunidad es proveer los recursos, la información y las guías necesarias entonces los modders, experimentados y nuevos, pueden realizar con éxito sus creaciones y ideas apasionadas. Por lo tanto, este sitio web es el **portal** principal para nuestra comunidad aquí en línea, y puedes encontrarnos donde estamos ubicados en **[Discord](https://discord.jojomodding.com)**."
    }
  },
  jpn : {
    navbar : {
      wiki: "wiki",
      roadmaps: "四計",
      about: "私ともとは",
      top: "トップへ戻る"
    },
    headings : {
      mods: "mod",
      about: "私ともとは"
    },
    content : {
      about: ""
    }
  }
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

  function GrabText(group, target) {
    const text = text_content[lang][group][target];
    if (text) return text;
    return "[Error: missing text]";
  }

  function LanguageButton({lang_in, code, name}) {
    if (lang_in != lang) {
      return <Link to={`/${code}`}><span className="small-flag"><img src={GetFlag(lang_in)}/>{name}</span></Link>;
    }
  }

  var logo_image = logo;
  if (lang == "jpn") logo_image = logo_JP;

  return (
    <>
      <div className="bg-container">
          <div className="bg"></div>

          <div className="navbar">
            <div className="nav-buttons">
              <a href="https://wiki.jojomodding.com" target="_blank">{GrabText("navbar", "wiki")}</a>
              {nav_pipe}
              {/* <a href="https://jojomodding.miraheze.org/wiki/JoJo%27s_Bizarre_Modding_Wiki#tabber-Roadmaps" target="_blank">{GrabText("navbar", "roadmaps")}</a>
              {nav_pipe} */}
              <HashLink to={`${URLs[lang]}#about-us`}>{GrabText("navbar", "about")}</HashLink>
              {nav_pipe}
              <div className="flag">
                <div className="flag-overflow"><img src={GetFlag(lang)}/></div>
                <div className="language-hitbox"></div>
                <div className="language-dropdown">
                  <LanguageButton lang_in="eng" code="" name="English"/>
                  <LanguageButton lang_in="spa" code="es" name="español"/>
                  {/* <LanguageButton lang_in="jpn" code="jp" name="日本語"/> */}
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
        <Games heading={GrabText("headings", "mods")}/>

        {/* <div id="roadmaps">
          <h1>Roadmaps</h1>
        </div> */}

        <div id="about-us" className="about-us">
          <div className="about-us-content">
            <h1>{GrabText("headings", "about")}</h1>
            <img className="banner only-mobile" src={banner}></img>
            <img className="banner no-mobile" src={banner_long}></img>
            <Markdown className="markdown">{GrabText("content", "about")}</Markdown>
          </div>
        </div>
      </div>

      <div className={`footer ${showFooter ? 'visible' : 'hidden'}`}><HashLink to={`${URLs[lang]}#top`}>{GrabText("navbar", "top")}</HashLink></div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home lang="eng"/>} />
        <Route path="/es" element={<Home lang="spa"/>} />
        <Route path="/jp" element={<Home lang="jpn"/>} />
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
