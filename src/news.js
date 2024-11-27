import React from 'react';
import { useState } from 'react';

import { mod } from "./utils.js"

import backgrounds  from "./assets/backgrounds.js"
import arrow        from "./assets/images/Arrow.png";
import icons        from "./assets/icons.js"
import thumbnails   from "./assets/thumbnails.js"

import "./styles/news.css"

const news_data = {
    "AsbrModdingComesToNintendoSwitch" : {
        media: thumbnails["AsbrModdingComesToNintendoSwitch"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:ASBR_modding_comes_to_Nintendo_Switch",
        date: {
            year: 2024,
            month: 8,
            day: 8
        },
        desc: "We've seen a massive breakthrough for ASBR players on Nintendo Switch..."
    },
    "UselessMaidLisaLisaCompetition" : {
        media: thumbnails["UselessMaidLisaLisaCompetition"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:Useless_Maid%27s_Lisa_Lisa_Competition",
        date: {
            year: 2024,
            month: 5,
            day: 30
        },
        desc: "Previously seldom modded, we held a Lisa Lisa texture competition, funded by Useless Maid..."
    },
    "UselessButlerCharacterCompetition" : {
        media: thumbnails["UselessButlerCharacterCompetition"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:Useless_Butler%27s_Character_Competition",
        date: {
            year: 2024,
            month: 5,
            day: 1
        },
        desc: "Useless Butler started a character model competition with 5 remarkable submissions..."
    },
    "Sofdec2Discoveries" : {
        media: thumbnails["Sofdec2Discoveries"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:Sofdec2_discoveries",
        date: {
            year: 2024,
            month: 1,
            day: 22
        },
        desc: "Sofdec2 USM modding has been made easier than ever thanks to our discovery of various tools..."
    }
};

function Icon({link, name, color = "white", target = ""}) {
    let text = name;
    if (name == "NexusMods") text = "Mods";
    return (
        <a href={link} target={target}>
            <div className="icon" style={{background: `${color}`}}>
                <img src={icons[name]}/>
                <p>{text}</p>
            </div>
        </a>
    );
}  

export function News() {
    function Post({id}) {
        const data = news_data[id];
        var media = <img className="news-media" src={data.media}/>;
        if (data.type == "video") {
            media = <video className="news-media" src={data.media} autoPlay loop muted></video>;
        }
        return (
            <a className="news-post" href={data.link} target="_blank">
            <div className="news-post">
                {media}
                <div className="news-back"></div>
                <p className="news-date">{data.date.year}.{String(data.date.month).padStart(2, '0')}.{String(data.date.day).padStart(2, '0')}</p>
                <p className="news-desc">{data.desc}</p>
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
            <Post id="AsbrModdingComesToNintendoSwitch"/>
            <Post id="UselessMaidLisaLisaCompetition"/>
            <Post id="UselessButlerCharacterCompetition"/>
            <Post id="Sofdec2Discoveries"/>
        </div>
        </div>
        </>
    );
}