import logo         from './assets/images/Logo.png';
import images       from "./images.js";
import arrow        from "./assets/images/Arrow.png";

import discordIcon  from "./assets/images/icons/Discord.png";
import twitterIcon  from "./assets/images/icons/Twitter.png";
import nexusIcon    from "./assets/images/icons/NexusMods.png";
import youtubeIcon  from "./assets/images/icons/YouTube.png";
import './App.css';
import { useState } from 'react';

function mod(a, b) {
  return ((a % b) + b) % b;
}

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
function App() {
  let [news_index, set_news_index] = useState(0);
  let random_news = news_links[news_index];
  let [news_link, set_news_link] = useState("https://jojomodding.miraheze.org/wiki/News:" + random_news);
  let [news_image, set_news_image] = useState(images[news_image_ref[random_news]]);
  let [news_title, set_news_title] = useState(random_news.replace(/_/g, " "));

  function reloadNews() {
    random_news = news_links[news_index];
    set_news_link("https://jojomodding.miraheze.org/wiki/News:" + random_news);
    set_news_image(images[news_image_ref[random_news]]);
    set_news_title(random_news.replace(/_/g, " "));

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

  return (
    <div className="App">
      <div className="bg-container">
        <div className="bg"></div>
      </div>

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
        <a href="https://discord.gg/eTFmC49RzF" target="_blank">
          <div className="icon" style={{left: "55px", background: `url(${discordIcon}) no-repeat center/contain`}}></div>
        </a><a href="https://twitter.com/jojomodofficial" target="_blank">
          <div className="icon" style={{left: "255px", background: `url(${twitterIcon}) no-repeat center/contain`}}></div>
        </a><a href="https://www.youtube.com/@JoJoModOfficial" target="_blank">
          <div className="icon" style={{left: "455px", background: `url(${youtubeIcon}) no-repeat center/contain`}}></div>
        </a><a href="#mod-pages">
          <div className="icon" style={{left: "655px", background: `url(${nexusIcon}) no-repeat center/contain`}}></div>
        </a>
      </div>

      <img className="jjbmc-logo" src={logo} alt="Logo"/>
      <div className="nav-background"></div>
      <div className="navbar">
        <a href="https://jojomodding.miraheze.org/" target="_blank">Wiki</a> |&nbsp;
        <a href="https://jojomodding.miraheze.org/wiki/JoJo%27s_Bizarre_Modding_Wiki#tabber-Roadmaps" target="_blank">Roadmaps</a> |&nbsp;
        <a href="#about-us">About Us</a>
      </div>

      <div className="border"></div>
      <div className="underneath">
        <div id="mod-pages" className="mod-pages">
          <h1>Mods</h1>
            <div className="horizontal-scroll">
            <a href="https://www.nexusmods.com/jojosbizarreadventureallstarbattler" target="_blank">
              <div className="game-container">
                <img className="game" src={images["AllStarBattleRCover"]}></img>
                <img className="game-logo" src={images["AllStarBattleRLogo"]}></img>
              </div>
            </a><a href="https://www.nexusmods.com/jojosbizarreadventureeyesofheaven" target="_blank">
            <div className="game-container">
                <img className="game" src={images["EyesOfHeavenCover"]}></img>
                <img className="game-logo" src={images["EyesOfHeavenLogo"]}></img>
              </div>
            </a><a href="https://www.nexusmods.com/jojosbizarreadventureallstarbattle" target="_blank">
            <div className="game-container">  
                <img className="game" src={images["AllStarBattleCover"]}></img>
                <img className="game-logo" src={images["AllStarBattleLogo"]}></img>
              </div>
            </a><br/>
            <a href="https://www.nexusmods.com/jojosbizarreadventureallstarbattler/mods/819" target="_blank">
              <div className="game-container">
                <img className="game" src={images["JoJoAPIBackground"]}></img>
                <img className="game-logo" src={images["JoJoAPILogo"]}></img>
              </div>
            </a><a href="https://rpcs3.net/" target="_blank">
              <div className="game-container">
                <img className="game" src={images["RPCS3Background"]}></img>
                <img className="game-logo" src={images["RPCS3Logo"]}></img>
              </div>
            </a><a href="https://rpcs3.net/" target="_blank">
              <div className="game-container">
                <img className="game" src={images["RPCS3Background"]}></img>
                <img className="game-logo" src={images["RPCS3Logo"]}></img>
              </div>
            </a>
          </div>
        </div>

        <div id="about-us" className="about-us">
          <h1>About Us</h1>
          <img src={logo} style={{width: "500px", display: "block", margin: "auto"}}></img>
          <p>Since its original publication in 1987, <b>JoJo's Bizarre Adventure</b> has been the focus of many videogames from different studios and game engines. These games are a large talking point within the JoJo community, and we here at <b>JoJo's Bizarre Modding Community</b> find joy in harnessing our creativity to make these games even more fun to experience!<br/><br/>
          Our <b>mission</b> is to provide the resources, information, and assistance required for modders, old and new, to unleash their passions and ideas.<br/><br/>
          Primarily based on Discord, we have expanded to other platforms as well, hence the creation of this website to serve as a <b>portal</b> for JoJo modding things.
          </p>
        </div>
      </div>

      <div className="footer"><a href="#top">back to top</a></div>
    </div>
  );
}

export default App;