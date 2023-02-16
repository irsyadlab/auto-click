import startTimer from "./util/timer.js";
import websites from "./data/website.js";
import { rand } from "./util/number.js";

const button = document.getElementById('btn-click');

startTimer(button, function() {
    const totalSites = websites.length;

    window.open(websites[rand(0, totalSites - 1)], '_blank').focus();
});
