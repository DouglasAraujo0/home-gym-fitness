export function iniciarCarrossel() {
    const wrapperCarrossel = document.querySelector('.carrossel-wrapper');
    let imagens = document.querySelectorAll('.carrossel-image');
    let tamanhoSlide = 0;
    const intervalo = 3000;
    let isTransitioning = false;
  
    imagens.forEach((img, i) => {
      if (i < 3) {
        const clone = img.cloneNode(true);
        wrapperCarrossel.appendChild(clone);
      }
    });
  
    function atualizarTamanhoSlide() {
      imagens = document.querySelectorAll('.carrossel-image');
      tamanhoSlide = imagens[0].offsetWidth + 24;

    }
  
    atualizarTamanhoSlide();
    window.addEventListener('resize', atualizarTamanhoSlide);
  
    function moverCarrossel() {
      if (isTransitioning) return;
      isTransitioning = true;
  
      wrapperCarrossel.style.transition = 'transform 1s ease-in-out';
      wrapperCarrossel.style.transform = `translateX(-${tamanhoSlide}px)`;
  
      setTimeout(() => {
        wrapperCarrossel.style.transition = 'none';
  
        const primeiroSlide = wrapperCarrossel.firstElementChild;
        wrapperCarrossel.appendChild(primeiroSlide);
        wrapperCarrossel.style.transform = 'translateX(0)';
  
        isTransitioning = false;
      }, 1000);
    }
  
    setInterval(moverCarrossel, intervalo);
  }
  