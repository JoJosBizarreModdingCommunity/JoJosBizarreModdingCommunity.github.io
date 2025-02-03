import React from 'react';
import { HashLink } from 'react-router-hash-link';

import strings      from "./strings.jsx";
import more         from "./assets/images/See More.png";
import icons        from "./assets/icons.jsx"
import thumbnails   from "./assets/thumbnails.jsx"

import "./styles/news.css"

const news_data = {
    "Japi310" : {
        media: thumbnails["Japi310"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:JAPI_v3.1.0",
        translated: {
            "es": false,
            "pt-br": true,
            "ja": false
        },
        date: {
            year: 2025,
            month: 1,
            day: 13
        },
        desc: {
            "en":     strings["en"].news.Japi310,
            "es":     strings["es"].news.Japi310,
            "pt-br":  strings["pt-br"].news.Japi310,
            "sv":     strings["sv"].news.Japi310,
            "pl":     strings["pl"].news.Japi310,
            "ja":     strings["ja"].news.Japi310
        }
    },
    "NewWebsiteLaunch" : {
        media: thumbnails["NewWebsiteLaunch"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:JoJo_Modding_Website",
        translated: {
            "es": false,
            "pt-br": true,
            "ja": false
        },
        date: {
            year: 2024,
            month: 11,
            day: 29
        },
        desc: {
            "en":     strings["en"].news.NewWebsiteLaunch,
            "es":     strings["es"].news.NewWebsiteLaunch,
            "pt-br":  strings["pt-br"].news.NewWebsiteLaunch,
            "sv":     strings["sv"].news.NewWebsiteLaunch,
            "pl":     strings["pl"].news.NewWebsiteLaunch,
            "ja":     strings["ja"].news.NewWebsiteLaunch
        }
    },
    "AsbrModdingComesToNintendoSwitch" : {
        media: thumbnails["AsbrModdingComesToNintendoSwitch"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:ASBR_modding_comes_to_Nintendo_Switch",
        translated: {
            "es": false,
            "pt-br": true,
            "ja": false
        },
        date: {
            year: 2024,
            month: 8,
            day: 8
        },
        desc: {
            "en":     strings["en"].news.AsbrModdingComesToNintendoSwitch,
            "es":     strings["es"].news.AsbrModdingComesToNintendoSwitch,
            "pt-br":  strings["pt-br"].news.AsbrModdingComesToNintendoSwitch,
            "sv":     strings["sv"].news.AsbrModdingComesToNintendoSwitch,
            "pl":     strings["pl"].news.AsbrModdingComesToNintendoSwitch,
            "ja":     strings["ja"].news.AsbrModdingComesToNintendoSwitch
        }
    },
    "UselessMaidLisaLisaCompetition" : {
        media: thumbnails["UselessMaidLisaLisaCompetition"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:Useless_Maid%27s_Lisa_Lisa_Competition",
        translated: {
            "es": false,
            "pt-br": true,
            "ja": false
        },
        date: {
            year: 2024,
            month: 5,
            day: 30
        },
        desc: {
            "en":     strings["en"].news.UselessMaidLisaLisaCompetition,
            "es":     strings["es"].news.UselessMaidLisaLisaCompetition,
            "pt-br":  strings["pt-br"].news.UselessMaidLisaLisaCompetition,
            "sv":     strings["sv"].news.UselessMaidLisaLisaCompetition,
            "pl":     strings["pl"].news.UselessMaidLisaLisaCompetition,
            "ja":     strings["ja"].news.UselessMaidLisaLisaCompetition
        }
    },
    "UselessButlerCharacterCompetition" : {
        media: thumbnails["UselessButlerCharacterCompetition"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:Useless_Butler%27s_Character_Competition",
        translated: {
            "es": false,
            "pt-br": true,
            "ja": false
        },
        date: {
            year: 2024,
            month: 5,
            day: 1
        },
        desc: {
            "en":     strings["en"].news.UselessButlerCharacterCompetition,
            "es":     strings["es"].news.UselessButlerCharacterCompetition,
            "pt-br":  strings["pt-br"].news.UselessButlerCharacterCompetition,
            "sv":     strings["sv"].news.UselessButlerCharacterCompetition,
            "pl":     strings["pl"].news.UselessButlerCharacterCompetition,
            "ja":     strings["ja"].news.UselessButlerCharacterCompetition
        }
    },
    "Sofdec2Discoveries" : {
        media: thumbnails["Sofdec2Discoveries"],
        type: "image",
        link: "https://jojomodding.miraheze.org/wiki/News:Sofdec2_discoveries",
        translated: {
            "es": false,
            "pt-br": true,
            "ja": false
        },
        date: {
            year: 2024,
            month: 1,
            day: 22
        },
        desc: {
            "en":     strings["en"].news.Sofdec2Discoveries,
            "es":     strings["es"].news.Sofdec2Discoveries,
            "pt-br":  strings["pt-br"].news.Sofdec2Discoveries,
            "sv":     strings["sv"].news.Sofdec2Discoveries,
            "pl":     strings["pl"].news.Sofdec2Discoveries,
            "ja":     strings["ja"].news.Sofdec2Discoveries
        }
    }
};

function Icon({link, name, color = "white", target = "", lang}) {
    let text = name;
    if (name == "NexusMods") return (
        <div className="icon" style={{background: `${color}`}}>
            <HashLink to={`${strings[lang].url}#mod-pages`}>
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
    const string = strings[lang];
    
    function Post({id}) {
        const data = news_data[id];
        var media = <img className="news-media" src={data.media}/>;
        if (data.type == "video") {
            media = <video className="news-media" src={data.media} autoPlay loop muted></video>;
        }
        
        var link = data.link;
        if (data.translated[lang] == true) 
            link += `/${lang}`;

        var desc = data.desc[lang];
        if (desc == null)
            desc = "[translation needed]"; // strings[lang].translation_needed;

        return (
            <a className="news-post" href={link} target="_blank">
            <div className="news-post">
                {media}
                <div className="news-back"></div>
                <p className="news-date">
                    {data.date.year}.{String(data.date.month).padStart(2, '0')}.{String(data.date.day).padStart(2, '0')}
                </p>
                <p className="news-desc">{desc}</p>
            </div>
            </a>
        );
    }

    return (
        <>
        <div className="news-section">
        <div className="scrollbox">
            <div className="news-container">
                <Post id="Japi310"/>
                <Post id="NewWebsiteLaunch"/>
                <Post id="AsbrModdingComesToNintendoSwitch"/>
                <Post id="UselessMaidLisaLisaCompetition"/>
                <Post id="UselessButlerCharacterCompetition"/>
                <Post id="Sofdec2Discoveries"/>

                <div className="see-more">
                    <a className="see-more" href="https://jojomodding.miraheze.org/wiki/Template:Modding_Announcements" target="_blank">
                        <img src={more}/>
                        <p className="see-more-1">{string.news.see}</p>
                        <p className="see-more-2">{string.news.more}</p>
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