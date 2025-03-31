let currentIndex = 0;
const carrosselWrapper = document.querySelector('.carrossel-wrapper');
const images = document.querySelectorAll('.carrossel-image');
const totalImages = images.length;
const numeroElementos = document.querySelectorAll('.numero p'); // Seleciona todos os elementos de número
let targetNumbers = Array.from({ length: numeroElementos.length }, () => Math.floor(Math.random() * 1001)); // Array de números aleatórios de até 1000
let currentNumbers = Array.from({ length: numeroElementos.length }, () => 0); // Inicializa todos os números como 0
let isNumbersVisible = true; // Flag para saber se os números estão visíveis

// Quando a página for rolada
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) { // Adiciona a classe quando rolar mais de 10px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active"); // Esconde a imagem atual
        currentIndex = (currentIndex + 1) % images.length; // Passa para a próxima
        images[currentIndex].classList.add("active"); // Exibe a nova imagem
    }

    setInterval(changeImage, 5000); // Muda a imagem a cada 4 segundos
});


// Função para animar o contador de todos os números
function animateNumbers() {
    numeroElementos.forEach((numeroElemento, index) => {
        const targetNumber = targetNumbers[index]; // Número aleatório para o índice correspondente
        let currentNumber = 0; // Número inicial

        const increment = Math.ceil(targetNumber / 100); // Aumenta o número em pedaços pequenos (dividido em 100 partes)

        const interval = setInterval(() => {
            if (currentNumber < targetNumber) {
                currentNumber += increment;
                if (currentNumber > targetNumber) {
                    currentNumber = targetNumber; // Garante que o número não ultrapasse o alvo
                }
                numeroElemento.textContent = currentNumber;
            } else {
                clearInterval(interval); // Para a animação quando atingir o alvo
            }
        }, 30); // Intervalo de 30ms entre cada incremento
    });
}

// Função para parar a animação de números
function stopNumbersAnimation() {
    // Remove todos os intervalos de animação para garantir que os números parem
    numeroElementos.forEach((numeroElemento) => {
        numeroElemento.textContent = parseInt(numeroElemento.textContent, 10); // Exibe o número atual (parado)
    });
}

// Clonar primeiro e último conjunto de imagens para criar um loop infinito
const firstClone = images[0].cloneNode(true);
const lastClone = images[totalImages - 1].cloneNode(true);
carrosselWrapper.appendChild(firstClone);
carrosselWrapper.insertBefore(lastClone, images[0]);

// Atualizar a lista de imagens após clonagem
const updatedImages = document.querySelectorAll('.carrossel-image');
const updatedTotalImages = updatedImages.length; // Agora conta o total correto de imagens após clonagem

// Configurar posição inicial para evitar um salto visível
carrosselWrapper.style.transform = `translateX(-${33.33}%)`; // Ajuste para iniciar no lugar correto

// Função para mover o carrossel
function moveCarousel() {
    currentIndex++;

    // Adiciona a transição para um efeito suave
    carrosselWrapper.style.transition = 'transform 1s ease-in-out';
    carrosselWrapper.style.transform = `translateX(-${(currentIndex + 1) * 33.33}%)`;

    // Resetar para o início quando chegar no final (loop infinito)
    if (currentIndex >= updatedTotalImages - 2) { // Considerando o número de clones
        setTimeout(() => {
            carrosselWrapper.style.transition = 'none'; // Remove a transição para evitar efeito brusco
            carrosselWrapper.style.transform = `translateX(-${33.33}%)`;
            currentIndex = 0;
        }, 1000); // Tempo para a transição ocorrer antes do reset
    }
}

// Iniciar carrossel automaticamente
function startCarousel() {
    setInterval(moveCarousel, 3000); // Altere o tempo para ajustar a velocidade do carrossel
}

// Função para verificar se o container está visível na tela
function checkIfNumbersVisible() {
    const container = document.querySelector('.numero'); // O container que contém os números
    const rect = container.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        if (!isNumbersVisible) {
            isNumbersVisible = true;
            animateNumbers(); // Reiniciar a animação se o container estiver visível
        }
    } else {
        if (isNumbersVisible) {
            isNumbersVisible = false;
            stopNumbersAnimation(); // Parar a animação se o container estiver fora da tela
        }
    }
}

// Iniciar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    startCarousel(); // Inicia o carrossel
    animateNumbers(); // Inicia a animação de todos os números
});

// Adicionar evento de scroll
window.addEventListener('scroll', checkIfNumbersVisible);


// Pega os elementos
const playButton = document.getElementById('playButton');
const videoOverlay = document.getElementById('videoOverlay');
const videoFrame = document.getElementById('videoFrame');

// URL do vídeo do YouTube (usando o iframe que você forneceu)
const videoUrl = 'https://www.youtube.com/embed/kmcTEZTrsNg?si=lwzeS1-4UOsGScDK&autoplay=1'; // O parâmetro autoplay é adicionado para iniciar a reprodução ao exibir o vídeo.

// Função para abrir o vídeo
playButton.addEventListener('click', () => {
    // Exibe o overlay e o vídeo
    videoOverlay.style.display = 'flex';
    videoFrame.src = videoUrl;
});

// Função para fechar o vídeo ao clicar no overlay
videoOverlay.addEventListener('click', () => {
    // Oculta o overlay e limpa a URL do vídeo
    videoOverlay.style.display = 'none';
    videoFrame.src = '';  // Limpa o vídeo para parar a reprodução
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".day");
    const programacoes = document.querySelectorAll(".programacao");

    function mostrarProgramacao(day) {
        // Esconde todas as programações
        programacoes.forEach(prog => prog.style.display = "none");

        // Mostra apenas a programação do dia clicado
        const diaSelecionado = document.querySelector(`.programacao[data-day="${day}"]`);
        if (diaSelecionado) diaSelecionado.style.display = "block";
    }

    // Mostra o sábado por padrão sem precisar clicar
    mostrarProgramacao("saturday");

    // Adiciona evento de clique aos botões
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const day = this.getAttribute("data-day");
            mostrarProgramacao(day);

            // Remove a classe "selected" de todos os botões
            buttons.forEach(btn => btn.classList.remove("selected"));

            // Adiciona a classe "selected" ao botão clicado
            this.classList.add("selected");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".carrossel-wrapper");
    const imagesToShow = 3; // Número de imagens visíveis ao mesmo tempo
    const imageWidth = 100 / imagesToShow; // Cada imagem ocupa 33.33% do contêiner
    let index = 0;

    // Pegamos todas as imagens iniciais
    let images = Array.from(wrapper.children);
    const totalImages = images.length;

    // Ajusta a largura do wrapper para caber todas as imagens
    wrapper.style.display = "flex";
    wrapper.style.width = `${totalImages * imageWidth}%`;

    function moveCarousel() {
        wrapper.style.transition = "transform 1s ease-in-out";
        index++;

        // Move o carrossel para a esquerda
        wrapper.style.transform = `translateX(-${index * imageWidth}%)`;

        setTimeout(() => {
            if (index >= totalImages - imagesToShow) {
                wrapper.style.transition = "none"; // Remove a animação para ajuste instantâneo
                
                // 🔹 Remove a primeira imagem e move para o final
                let firstImage = wrapper.children[0];
                wrapper.appendChild(firstImage); // Move a imagem para o final
                wrapper.style.transform = `translateX(-${(index - 1) * imageWidth}%)`; // Ajusta a posição
                
                // 🔹 Ajusta o índice para manter o fluxo contínuo SEM REPETIÇÃO
                index--;
            }
        }, 1000); // Tempo da transição
    }
    moveCarousel();
    // Define o intervalo de movimentação
    setInterval(moveCarousel, 3000);
});











