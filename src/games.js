import "./styles/games.css";
import game_art from "./assets/game_art.js"

function Game({link, name}) {
    return (
        <a href={link} target="_blank">
        <div className="game">
            <img className="game-back" src={game_art["Back_" + name]}></img>
            <img className={name + "-prop"} src={game_art["Prop_" + name]}></img>
            <img className="game-logo" src={game_art["Logo_" + name]}></img>
        </div>
        </a>
    );
}

export function Games({heading}) {
    return (
        <div id="mod-pages" className="mod-pages">
          <h1>{heading}</h1>
          <div className="games">
            <div className="horizontal-scroll">
                <div className="game-column">
                <Game link="https://www.nexusmods.com/jojosbizarreadventureallstarbattler" name="AllStarBattleR" />
                <Game link="https://www.nexusmods.com/jojosbizarreadventureallstarbattler/mods/819" name="JoJoAPI" />
                </div><div className="game-column">
                <Game link="https://www.nexusmods.com/jojosbizarreadventureeyesofheaven" name="EyesOfHeaven" />
                <Game link="https://rpcs3.net/" name="RPCS3" />
                </div><div className="game-column">
                <Game link="https://www.nexusmods.com/jojosbizarreadventureallstarbattle" name="AllStarBattle" />
                <Game link="https://rpcs3.net/" name="RPCS3" />
                </div>
            </div>
          </div>
        </div>
    );
}