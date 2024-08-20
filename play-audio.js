const customPlay = () => {
    const audio = document.getElementById("sample-audio");
    console.log('play pressed');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}