export function iniciarVideo() {
    const botaoPlay = document.getElementById('playButton');
    const sobreposicaoVideo = document.getElementById('videoOverlay');
    const quadroVideo = document.getElementById('videoFrame');
    const urlVideo = 'https://www.youtube.com/embed/axCKsbiH_4I?autoplay=1';

    botaoPlay.addEventListener('click', () => {
        sobreposicaoVideo.style.display = 'flex';
        quadroVideo.src = urlVideo;
    });

    sobreposicaoVideo.addEventListener('click', () => {
        sobreposicaoVideo.style.display = 'none';
        quadroVideo.src = '';
    });
}
