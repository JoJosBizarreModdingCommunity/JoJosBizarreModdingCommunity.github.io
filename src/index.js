import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { useState, useEffect } from 'react';

// Scripts
import { mod } from "./utils.js"
import { Games } from "./games.js"

// Stylesheets
import "./assets/fonts.css";
import "./index.css";

// Assets
import backgrounds  from "./assets/backgrounds.js"
import icons        from "./assets/icons.js"
import thumbnails   from "./assets/thumbnails.js"
import logo         from './assets/images/Logo.png';
import arrow        from "./assets/images/Arrow.png";
import banner       from "./assets/images/Banner.png";

const news_links = [
  "ASBR_modding_comes_to_Nintendo_Switch",
  "Useless_Maid's_Lisa_Lisa_competition",
  "Useless_Butler's_character_competition",
  "Sofdec2_discoveries"
];
const news_image_ref = {
  "ASBR_modding_comes_to_Nintendo_Switch": "AsbrModdingComesToNintendoSwitch",
  "Useless_Maid's_Lisa_Lisa_competition": "UselessMaidLisaLisaCompetition",
  "Useless_Butler's_character_competition": "UselessButlerCharacterCompetition",
  "Sofdec2_discoveries": "Sofdec2Discoveries"
};

function Icon({link, name, color = "white", target = ""}) {
  return (
    <a href={link} target={target}>
      <div className="icon" style={{background: `${color} url(${icons[name]}) no-repeat center/contain`}}></div>
    </a>
  );
}

function MainPage() {
  let [news_index, set_news_index] = useState(0);
  let news_id = news_links[news_index];
  let [news_link, set_news_link] = useState("https://jojomodding.miraheze.org/wiki/News:" + news_id);
  let [news_image, set_news_image] = useState(thumbnails[news_image_ref[news_id]]);
  let [news_title, set_news_title] = useState(news_id.replace(/_/g, " "));

  function reloadNews() {
    news_id = news_links[news_index];
    set_news_link("https://jojomodding.miraheze.org/wiki/News:" + news_id);
    set_news_image(thumbnails[news_image_ref[news_id]]);
    set_news_title(news_id.replace(/_/g, " "));

    console.log("News Index: %s", news_index);
  }

  function changeNews(forward) {
    if (forward) {
      set_news_index(mod((news_index + 1), news_links.length));
    } else {
      set_news_index(mod((news_index - 1), news_links.length));
    }
    reloadNews();
  }

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 700) { // Change 300 to however many pixels you want
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <>
      <div className="bg-container">
        <div className="bg"></div>

      <div className="news-section">
        <a href={news_link} target="_blank">
          <img className="news-image" src={news_image}/>
          <div className="back"></div>
          <p className="news-text">{news_title}</p>
        </a>
      </div>
      <img className="arrow" style={{inset: "0 1150px 50px 0", "--rotation": "-1"}} src={arrow} onClick={() => changeNews(false)}></img>
      <img className="arrow" style={{inset: "0 0 50px 1150px", "--rotation": "1"}} src={arrow} onClick={() => changeNews(true)}></img>

      <div className="icons">
        <Icon link="https://discord.jojomodding.com" name="Discord" color="rgb(88, 101, 242)" target="_blank" />
        <Icon link="https://twitter.jojomodding.com" name="Twitter" color="rgb(29, 155, 240)" target="_blank" />
        <Icon link="https://youtube.jojomodding.com" name="YouTube" color="rgb(255, 0, 0)" target="_blank" />
        <Icon link="#mod-pages" color="rgb(218, 142, 53)" name="NexusMods" />
      </div>

      <img className="jjbmc-logo" src={logo} alt="Logo"/>
      <div className="nav-background"></div>
      <div className="navbar">
        <a href="https://wiki.jojomodding.com" target="_blank">Wiki</a> |&nbsp;
        <a href="https://jojomodding.miraheze.org/wiki/JoJo%27s_Bizarre_Modding_Wiki#tabber-Roadmaps" target="_blank">Roadmaps</a> |&nbsp;
        <a href="#about-us">About Us</a>
      </div>

      </div>

      <div className="border"></div>
      <div className="underneath">
        <Games/>

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
