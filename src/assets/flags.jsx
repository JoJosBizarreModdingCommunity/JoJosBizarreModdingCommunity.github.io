import flag_GB from "./images/flags/GB.png";
import flag_ES from "./images/flags/ES.png";
import flag_PT_BR from "./images/flags/BR.png";
import flag_SE from "./images/flags/SE.png";
import flag_PL from "./images/flags/PL.png";
import flag_JP from "./images/flags/JP.png";

export function GetFlag(code) {
    switch(String(code).toLowerCase()) {
        case "en": return flag_GB;
        case "es": return flag_ES;
        case "pt-br": return flag_PT_BR;
        case "sv": return flag_SE;
        case "pl": return flag_PL;
        case "ja": return flag_JP;
    }
    return flag_GB;
}