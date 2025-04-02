document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active"); 
        currentIndex = (currentIndex + 1) % images.length; 
        images[currentIndex].classList.add("active"); 
    }

    setInterval(changeImage, 5000);
});

export function iniciarCarrossel() {
    const wrapperCarrossel = document.querySelector('.carrossel-wrapper');
    const imagens = document.querySelectorAll('.carrossel-image');
    
    let intervalo = 3000; // Tempo entre trocas
    let isTransitioning = false;

    function atualizarTamanhoSlide() {
        tamanhoSlide = imagens[0].getBoundingClientRect().width;
    }

    function moverCarrossel() {
        if (isTransitioning) return;
        isTransitioning = true;

        wrapperCarrossel.style.transition = 'transform 1s ease-in-out';
        wrapperCarrossel.style.transform = `translateX(-${57.5}vh)`;

        setTimeout(() => {
            wrapperCarrossel.style.transition = 'none'; // Remove transição antes de reposicionar

            // Move o primeiro slide para o final
            let primeiroSlide = wrapperCarrossel.firstElementChild;
            wrapperCarrossel.appendChild(primeiroSlide);

            // Reseta a posição sem o usuário perceber
            wrapperCarrossel.style.transform = `translateX(0)`;

            isTransitioning = false;
        }, 1000); // Tempo da transição
    }

    setInterval(moverCarrossel, intervalo);
    window.addEventListener('resize', atualizarTamanhoSlide);
}

