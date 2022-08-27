import musics from "../../../data/musics.js";
import setCurrentMusic from "../currentMusic/index.js";
import { songCard } from "./cardMusic.js";
const musicsContainer= document.querySelector(".musics-container");
 
function musicsCard(){
    musics().forEach((song) => {
        songCard(song);
        musicsContainer.innerHTML += songCard(song);

        setCurrentMusic();
    });
};

export default musicsCard;
