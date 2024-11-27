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
import logo         from './assets/images/Logo.png';
import banner       from "./assets/images/Banner.png";

const UseDebounce = (callback, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
};

function MainPage() {
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

  return (
    <>
      <div className="bg-container">
          <div className="bg"></div>

          <div className="navbar">
            <div className="nav-buttons">
              <a href="https://wiki.jojomodding.com" target="_blank">Wiki</a>
              <span className="nav-pipe">F</span>
              <a href="https://jojomodding.miraheze.org/wiki/JoJo%27s_Bizarre_Modding_Wiki#tabber-Roadmaps" target="_blank">Roadmaps</a>
              <span className="nav-pipe">F</span>
              <a href="#about-us">About Us</a>
            </div>
          </div>

          <News/>

          <div className="jjbmc-logo">
            <img src={logo} alt="Logo"/>
          </div>
      </div>

      <div className="border"></div>
      <div className="underneath">
        <Games/>

        {/* <div id="roadmaps">
          <h1>Roadmaps</h1>
        </div> */}

        <div id="about-us" className="about-us">
          <h1>About Us</h1>
          <img className="banner" src={banner}></img>
          <p>Since its original publication in 1987, <b>JoJo's Bizarre Adventure</b> has been the focus of many videogames from different studios and game engines. These games are a large talking point within the JoJo community, and we here at <b>JoJo's Bizarre Modding Community</b> find joy in harnessing our creativity to make these games even more fun to experience!<br/><br/>
          Our <b>mission</b> is to provide the resources, information, and assistance required for modders, old and new, to unleash their passions and ideas.<br/><br/>
          Primarily based on Discord, we have expanded to other platforms as well, hence the creation of this website to serve as a <b>portal</b> for JoJo modding things.
          </p>
        </div>
      </div>

      <div className={`footer ${showFooter ? 'visible' : 'hidden'}`}><a href="#top">back to top</a></div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
