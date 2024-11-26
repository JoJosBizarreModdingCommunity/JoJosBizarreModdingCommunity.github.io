import React from 'react';
import { useState } from 'react';

import { mod } from "./utils.js"

import backgrounds  from "./assets/backgrounds.js"
import arrow        from "./assets/images/Arrow.png";
import icons        from "./assets/icons.js"
import thumbnails   from "./assets/thumbnails.js"
import video_test   from "./assets/test.mp4";

import "./styles/news.css"

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
            <div className="icon" style={{background: `${color}`}}>
                <img src={icons[name]}/>
                <p>{name}</p>
            </div>
        </a>
    );
}  

export function News() {
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

    function Post({name}) {
        return (
            <a className="news-post" href={news_link} target="_blank">
            <div className="news-post">
                <img className="news-image" src={thumbnails[news_image_ref[name]]}/>
                {/* <video className="news-image" src={video_test} autoPlay loop muted></video> */}
                <div className="back"></div>
                <p className="news-text">{name.replace(/_/g, " ")}</p>
            </div>
            </a>
        );
    }

    return (
        <>
        <div className="icons">
            <Icon link="https://discord.jojomodding.com" name="Discord" color="rgb(88, 101, 242)" target="_blank" />
            <Icon link="https://twitter.jojomodding.com" name="Twitter" color="rgb(29, 155, 240)" target="_blank" />
            <Icon link="https://youtube.jojomodding.com" name="YouTube" color="rgb(255, 0, 0)" target="_blank" />
            <Icon link="#mod-pages" color="rgb(218, 142, 53)" name="NexusMods" />
        </div>

        <div className="news-section">
        <div className="scrollbox">
            <Post name="ASBR_modding_comes_to_Nintendo_Switch"/>
            <Post name="Useless_Maid's_Lisa_Lisa_competition"/>
            <Post name="Useless_Butler's_character_competition"/>
            <Post name="Sofdec2_discoveries"/>
        </div>
        </div>
        </>
    );
}