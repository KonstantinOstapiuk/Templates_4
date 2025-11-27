const video = document.querySelector('.videoBlock video')
const playBtn =document.querySelector('.playBtn')

function toggleVideo() {
    if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
    } else {
        video.pause();
        playBtn.style.display = 'flex';
    }
}

playBtn.addEventListener('click', toggleVideo);
video.addEventListener('click', toggleVideo);

video.addEventListener('ended', () => {
    playBtn.style.display = 'flex';
});