import flag_GB from "./images/flags/GB.svg";
import flag_ES from "./images/flags/ES.svg";
import flag_JP from "./images/flags/JP.svg";

export function GetFlag(code) {
    switch(String(code).toLowerCase()) {
        case "eng": return flag_GB;
        case "spa": return flag_ES;
        case "jpn": return flag_JP;
    }
    return flag_GB;
}