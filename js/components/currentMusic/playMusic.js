import handlePlayPause from "./handlePlayPause.js";
import handleStyleProgressBar from "./handleStyleProgressBar.js";



const handlePlaySong =(audio)=>{
    audio.play().then(()=>{
        handleStyleProgressBar(audio);
        handlePlayPause(audio);
    })
}



export default handlePlaySong;