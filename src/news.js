import React from 'react';
import { HashLink } from 'react-router-hash-link';

import more         from "./assets/images/See More.png";
import icons        from "./assets/icons.js"
import thumbnails   from "./assets/thumbnails.js"

import "./styles/news.css"

const URLs = {
    eng: "/",
    spa: "/es",
    jpn: "/jp"
};

const news_data = {
    "NewWebsiteLaunch" : {
        media: thumbnails["NewWebsiteLaunch"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:JoJo_Modding_Website",
        date: {
            year: 2024,
            month: 11,
            day: 29
        },
        desc: {
            eng: "We're proud to announce the launch of our new website at jojomodding.com, our official portal!",
            spa: "¡Estamos orgullosos de anunciar el inicio de nuestra web nueva a jojomodding.com, nuestro portal oficial!",
            jpn: ""
        }
    },
    "AsbrModdingComesToNintendoSwitch" : {
        media: thumbnails["AsbrModdingComesToNintendoSwitch"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:ASBR_modding_comes_to_Nintendo_Switch",
        date: {
            year: 2024,
            month: 8,
            day: 8
        },
        desc: {
            eng: "We've seen a massive breakthrough for ASBR players on Nintendo Switch...",
            spa: "Hemos visto un gran avance para los jugadores de ASBR en Nintendo Switch...",
            jpn: "私たちはNintendo SwitchのASBRプレイヤーにとって大きなディスカバリーを見られました！"
        }
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
        desc: {
            eng: "Previously seldom modded, we held a Lisa Lisa texture competition, funded by Useless Maid...",
            spa: "Organizamos un concurso de texturas para la Lisa Lisa solitaria, financiado por Useless Maid...",
            jpn: "[TBA]"
        }
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
        desc: {
            eng: "Useless Butler started a character model competition with 5 remarkable submissions...",
            spa: "Useless Butler inició una competencia de modelos, y hay 5 presentaciones geniales...",
            jpn: "[TBA]"
        }
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
        desc: {
            eng: "Sofdec2 USM modding has been made easier than ever thanks to our discovery of various tools...",
            spa: "El modding de Sofdec2 se ha hecho súper fácil gracias al descubrimiento de varias herramientas...",
            jpn: "[TBA]"
        }
    }
};

const see_more = {
    eng: ["see", "more"],
    spa: ["leer", "más"],
    jpn: ["もっと", "見る"]
};

function Icon({link, name, color = "white", target = "", lang}) {
    let text = name;
    if (name == "NexusMods") return (
        <div className="icon" style={{background: `${color}`}}>
            <HashLink to={`${URLs[lang]}#mod-pages`}>
                <img src={icons[name]}/>
                <p>Mods</p>
            </HashLink>
        </div>
    );
    return (
        <div className="icon" style={{background: `${color}`}}>
            <a href={link} target={target}>
                <img src={icons[name]}/>
                <p>{text}</p>
            </a>
        </div>
    );
}  

export function News({lang}) {
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
                <p className="news-desc">{data.desc[lang]}</p>
            </div>
            </a>
        );
    }

    return (
        <>
        <div className="news-section">
        <div className="scrollbox">
            <div className="news-container">
                <Post id="NewWebsiteLaunch"/>
                <Post id="AsbrModdingComesToNintendoSwitch"/>
                <Post id="UselessMaidLisaLisaCompetition"/>
                <Post id="UselessButlerCharacterCompetition"/>
                <Post id="Sofdec2Discoveries"/>

                <div className="see-more">
                    <a className="see-more" href="https://jojomodding.miraheze.org/wiki/Template:Modding_Announcements" target="_blank">
                        <img src={more}/>
                        <p className="see-more-1">{see_more[lang][0]}</p>
                        <p className="see-more-2">{see_more[lang][1]}</p>
                    </a>
                </div>
            </div>
        </div>
        </div>

        <div className="icons">
            <Icon link="https://discord.jojomodding.com" name="Discord" color="rgb(88, 101, 242)" target="_blank" />
            <Icon lang={lang} color="rgb(218, 142, 53)" name="NexusMods" />
            <Icon link="https://twitter.jojomodding.com" name="Twitter" color="rgb(29, 155, 240)" target="_blank" />
            <Icon link="https://bsky.app/profile/jojomodding.bsky.social" name="Bluesky" color="rgb(17, 133, 254)" target="_blank" />
            <Icon link="https://youtube.jojomodding.com" name="YouTube" color="rgb(255, 0, 0)" target="_blank" />
        </div>
        </>
    );
}