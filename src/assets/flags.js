import flag_GB from "./images/flags/GB.png";
import flag_ES from "./images/flags/ES.png";
import flag_JP from "./images/flags/JP.png";

export function GetFlag(code) {
    switch(String(code).toLowerCase()) {
        case "eng": return flag_GB;
        case "spa": return flag_ES;
        case "jpn": return flag_JP;
    }
    return flag_GB;
}