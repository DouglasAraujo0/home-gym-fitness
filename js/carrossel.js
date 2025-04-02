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
    const totalImagens = imagens.length;
    let indiceAtual = 0;
    
    const primeiroClone = imagens[0].cloneNode(true);
    const ultimoClone = imagens[totalImagens - 1].cloneNode(true);
    wrapperCarrossel.appendChild(primeiroClone);
    wrapperCarrossel.insertBefore(ultimoClone, imagens[0]);

    const imagensAtualizadas = document.querySelectorAll('.carrossel-image');
    const totalImagensAtualizado = imagensAtualizadas.length;

    function calcularTamanhoSlide() {
        return window.innerWidth <= 991 ? 50 : 33.33;
    }

    function atualizarPosicao() {
        let tamanhoSlide = calcularTamanhoSlide();
        wrapperCarrossel.style.transform = `translateX(-${(indiceAtual + 1) * tamanhoSlide}%)`;
    }

    atualizarPosicao();

    function moverCarrossel() {
        indiceAtual++;
        let tamanhoSlide = calcularTamanhoSlide();
        wrapperCarrossel.style.transition = 'transform 1s ease-in-out';
        wrapperCarrossel.style.transform = `translateX(-${(indiceAtual + 1) * tamanhoSlide}%)`;

        if (indiceAtual >= totalImagensAtualizado - 2) {
            setTimeout(() => {
                wrapperCarrossel.style.transition = 'none';
                indiceAtual = 0;
                atualizarPosicao();
            }, 1000);
        }
    }

    setInterval(moverCarrossel, 3000);

    window.addEventListener('resize', () => {
        wrapperCarrossel.style.transition = 'none';
        atualizarPosicao();
    });
}
