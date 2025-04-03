export function iniciarCarrossel() {
    const wrapperCarrossel = document.querySelector('.carrossel-wrapper');
    const imagens = document.querySelectorAll('.carrossel-image');
    let tamanhoSlide = imagens[0].getBoundingClientRect().width;
    let intervalo = 3000;
    let isTransitioning = false;

    function atualizarTamanhoSlide() {
        tamanhoSlide = imagens[0].getBoundingClientRect().width;
    }

    function moverCarrossel() {
        if (isTransitioning) return;
        isTransitioning = true;

        wrapperCarrossel.style.transition = 'transform 1s ease-in-out';
        wrapperCarrossel.style.transform = `translateX(-${tamanhoSlide}px)`;

        setTimeout(() => {
            wrapperCarrossel.style.transition = 'none';

            let primeiroSlide = wrapperCarrossel.firstElementChild;
            wrapperCarrossel.appendChild(primeiroSlide);

            wrapperCarrossel.style.transform = `translateX(0)`;

            isTransitioning = false;
        }, 1000);
    }

    setInterval(moverCarrossel, intervalo);
    window.addEventListener('resize', atualizarTamanhoSlide);
}

