import musics from "../../../data/musics.js";
import handlePlaySong from "./playMusic.js";
const musicsContainer= document.querySelector(".musics-container");
const MusicsCover= document.querySelector(".current-music-cover");
const musicSinger= document.querySelector(".current-music-singer");
const musicTitle=document.querySelector(".current-music-title");
const audio = document.querySelector("#audio");
 

function setCurrentMusic(){
    [...musicsContainer.children].forEach((musicElement)=>{
      musicElement.addEventListener("click", ()=>{
        console.log(musicElement.dataset.id);
        const currentMusic = musics().filter((item)=> item.id === parseInt(musicElement.dataset.id))[0];
        console.log(currentMusic);
        MusicsCover.setAttribute("data-id" , currentMusic.id);
        MusicsCover.style.backgroundImage = `url(${currentMusic.cover})`;
        musicSinger.innerHTML= currentMusic.artist;
        musicTitle.innerHTML= currentMusic.name;
        audio.src= currentMusic.audio;
        
        handlePlaySong(audio);
      })
    })
};

export default setCurrentMusic;
