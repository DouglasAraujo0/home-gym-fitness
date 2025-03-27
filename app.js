let currentIndex = 0; // Índice da imagem atual
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

// Função para trocar a imagem
function changeImage() {
    // Remove a classe 'active' da imagem atual
    images[currentIndex].classList.remove('active');
    
    // Atualiza o índice da próxima imagem
    currentIndex = (currentIndex + 1) % totalImages;
    
    // Adiciona a classe 'active' à próxima imagem
    images[currentIndex].classList.add('active');
}

// Troca a imagem a cada 3 segundos (3000ms)
setInterval(changeImage, 3000);

window.onscroll = function() { toggleNavbarClass() };

    function toggleNavbarClass() {
        if (window.scrollY > 50) {  // Quando o usuário rolar 50px ou mais
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    }
