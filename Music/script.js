const musicContainer = document.queryselector(".music-container");
const playBtn = document.queryselector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const image = document.querySelector("#cover");

const songs = ["Build your church", "Little Miracles", "Jireh"];
console.log(songs=[]);
let songIndex = 2;

loadsong("songs"[songIndex]);

function loadsong(song) {
    title.innerText = song;
    audio.src = `Music/$(song).mp3`;
    Image.src = `Images/$(song).jpg`;
    
}

playBtn.addEventListener("click", () =>{
    const isPlaying = musicContainer.classList.contains("play");

    if (isPlaying){
        pauseSong();
    }else {
        playSong();
    }
});

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

progressContainer.addEventListener("click",setProgress);
audio.addEventListener("timeupdate",updateProgress);

