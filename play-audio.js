const customPlay = () => {
    const audio = document.getElementById("sample-audio");
    const pause = document.getElementById("pause-btn");
    const play = document.getElementById("play-btn");
    
    console.log('play pressed');
    if (audio.paused) {
        audio.play();
        pause.style.visibility = "visible";
        play.style.visibility = "hidden";
    } else {
        audio.pause();
        play.style.visibility = "visible";
        pause.style.visibility = "hidden";
    }
}