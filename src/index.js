import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { useState, useEffect } from 'react';

// Scripts
import { News } from "./news.js"
import { Games } from "./games.js"

// Stylesheets
import "./assets/fonts.css";
import "./styles/index.css";

// Assets
import logo         from "./assets/images/Logo.png";
import logo_JP      from "./assets/images/Logo_JP.png"
import banner       from "./assets/images/Banner.png";
import { GetFlag }  from "./assets/flags.js";

const UseDebounce = (callback, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
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
      about: "Since its original publication in 1987, <b>JoJo's Bizarre Adventure</b> has been the focus of many videogames from different studios and game engines. These games are a large talking point within the JoJo community, and we here at <b>JoJo's Bizarre Modding Community</b> find joy in harnessing our creativity to make these games even more fun to experience!<br/><br/>Our <b>mission</b> is to provide the resources, information, and assistance required for modders, old and new, to unleash their passions and ideas.<br/><br/>Primarily based on Discord, we have expanded to other platforms as well, hence the creation of this website to serve as a <b>portal</b> for JoJo modding things."
    }
  },
  spa : {
    navbar : {
      wiki: "wiki",
      roadmaps: "planos",
      about: "quiénes somos",
      top: "volver arriba"
    },
    headings : {
      mods: "mods",
      about: "acerca de nosotros"
    },
    content : {
      about: "Desde la publicación original en 1987, <b>JoJo's Bizarre Adventure</b> he sido el focus de muchos videojuegos de studios y game engines diferentes. These games are a large talking point within the JoJo community, and we here at <b>JoJo's Bizarre Modding Community</b> find joy in harnessing our creativity to make these games even more fun to experience!<br/><br/>Our <b>mission</b> is to provide the resources, information, and assistance required for modders, old and new, to unleash their passions and ideas.<br/><br/>Primarily based on Discord, we have expanded to other platforms as well, hence the creation of this website to serve as a <b>portal</b> for JoJo modding things."
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
      about: "Since its original publication in 1987, <b>JoJo's Bizarre Adventure</b> has been the focus of many videogames from different studios and game engines. These games are a large talking point within the JoJo community, and we here at <b>JoJo's Bizarre Modding Community</b> find joy in harnessing our creativity to make these games even more fun to experience!<br/><br/>Our <b>mission</b> is to provide the resources, information, and assistance required for modders, old and new, to unleash their passions and ideas.<br/><br/>Primarily based on Discord, we have expanded to other platforms as well, hence the creation of this website to serve as a <b>portal</b> for JoJo modding things."
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
    return <span dangerouslySetInnerHTML={{ __html: text_content[lang][group][target]}}/>;
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
              <a href="https://jojomodding.miraheze.org/wiki/JoJo%27s_Bizarre_Modding_Wiki#tabber-Roadmaps" target="_blank">{GrabText("navbar", "roadmaps")}</a>
              {nav_pipe}
              <span className="no-mobile">
                <a href="#about-us">{GrabText("navbar", "about")}</a>
                {nav_pipe}
              </span>
              <div className="flag">
                <div className="flag-overflow"><img src={GetFlag(lang)}/></div>
                <div className="language-hitbox"></div>
                <div className="language-dropdown">
                  <LanguageButton lang_in="eng" code="" name="English"/>
                  <LanguageButton lang_in="spa" code="es" name="español"/>
                  <LanguageButton lang_in="jpn" code="jp" name="日本語"/>
                </div>
              </div>
            </div>
          </div>

          <News lang={lang}/>

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
          <h1>{GrabText("headings", "about")}</h1>
          <img className="banner" src={banner}></img>
          <p>{GrabText("content", "about")}</p>
        </div>
      </div>

      <div className={`footer ${showFooter ? 'visible' : 'hidden'}`}><a href="#top">{GrabText("navbar", "top")}</a></div>
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
