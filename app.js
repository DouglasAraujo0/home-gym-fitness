let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.carrossel-image');
const totalImages = images.length;

// Função para alterar o carrossel
function moveCarousel() {
    // Move o carrossel para a esquerda (cada imagem tem 33.33% da largura)
    currentIndex = (currentIndex + 1) % totalImages; 
    document.querySelector('.carrossel-wrapper').style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

// Inicia o carrossel
function startCarousel() {
    moveCarousel(); // Inicia a troca de imagens imediatamente
    setInterval(moveCarousel, 3000); // Troca a imagem a cada 3 segundos
}

// Inicia o ciclo quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', startCarousel);
