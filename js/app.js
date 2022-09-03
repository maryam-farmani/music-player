import musicsCard from "./components/MusicCards/index.js";

const audio = document.querySelector("#audio");
const musicTimeRange = document.querySelector("#music-time-range");
const musicProgressBar = document.querySelector(".music-progress-bar");
 
musicsCard();

musicTimeRange.addEventListener("change" , (e)=>{
  console.log(e.target.value);
  audio.currentTime= e.target.value;
  const musicProgressBarWidth = (audio.currentTime / audio.duration) *100;
  musicProgressBar.style.width = musicProgressBarWidth + "%" ;
});

 




 


 