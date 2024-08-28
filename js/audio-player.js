const initElements = () => {
    const audio = document.getElementById("sample-audio");
    const pause = document.getElementById("pause-btn");
    const play = document.getElementById("play-btn");
    return { audio, pause, play };
}

const customPlay = () => {
    const { audio, pause, play } = initElements();
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

const stopPlay = () => {
    const { audio, pause, play } = initElements();
    audio.pause();
    play.style.visibility = "visible";
    pause.style.visibility = "hidden";
}