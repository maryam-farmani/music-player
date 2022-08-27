import { cleanTime } from "../../utils/cleanTime.js";

const currentTime = document.querySelector(".current-time");
const musicProgressBar = document.querySelector(".music-progress-bar");
const musicTimeRange = document.querySelector("#music-time-range");
const fullTime = document.querySelector(".full-time");

function handleStyleProgressBar(audio) {
    setInterval(()=>{
        musicTimeRange.max = audio.duration;
        fullTime.innerHTML= cleanTime(audio.duration);
        currentTime.innerHTML= cleanTime(audio.currentTime);
        const musicProgressBarWidth = (audio.currentTime / audio.duration) *100;
        musicProgressBar.style.width = musicProgressBarWidth + "%" ;
    },1000);
}

export default handleStyleProgressBar;