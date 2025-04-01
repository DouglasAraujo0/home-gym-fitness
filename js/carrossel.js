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
    wrapperCarrossel.style.transform = `translateX(-${33.33}%)`;
    
    function moverCarrossel() {
        indiceAtual++;
        wrapperCarrossel.style.transition = 'transform 1s ease-in-out';
        wrapperCarrossel.style.transform = `translateX(-${(indiceAtual + 1) * 33.33}%)`;
        
        if (indiceAtual >= totalImagensAtualizado - 2) {
            setTimeout(() => {
                wrapperCarrossel.style.transition = 'none';
                wrapperCarrossel.style.transform = `translateX(-${33.33}%)`;
                indiceAtual = 0;
            }, 1000);
        }
    }
    setInterval(moverCarrossel, 3000);
}