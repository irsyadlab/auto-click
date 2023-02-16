import startTimer from "./util/timer.js";
import websites from "./data/website.js";
import { rand } from "./util/number.js";

const button = document.getElementById('btn-click');

function burst(pauseTime, siteIndex = 0, openedSite = null) {
    const nextIndex = (siteIndex + 1) >= websites.length ?
        0 : siteIndex + 1;

    setTimeout(() => {
        if(openedSite != null) openedSite.close();

        const wdw = window.open(websites[siteIndex], '_blank');
        burst(pauseTime, nextIndex, wdw);
    }, openedSite ? (pauseTime * 1000) : 0);
}

startTimer(button, burst);
