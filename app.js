let indiceAtual = 0;
const wrapperCarrossel = document.querySelector('.carrossel-wrapper');
const imagens = document.querySelectorAll('.carrossel-image');
const totalImagens = imagens.length;
const elementosNumero = document.querySelectorAll('.numero p'); 
let numerosAlvo = Array.from({ length: elementosNumero.length }, () => Math.floor(Math.random() * 1001));
let numerosAtuais = Array.from({ length: elementosNumero.length }, () => 0);
let saoNumerosVisiveis = true;

window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll(".image-container img");
    let indiceAtual = 0;

    function trocarImagem() {
        imagens[indiceAtual].classList.remove("active"); 
        indiceAtual = (indiceAtual + 1) % imagens.length;
        imagens[indiceAtual].classList.add("active");
    }

    setInterval(trocarImagem, 5000);
});

function animarNumeros() {
    elementosNumero.forEach((elementoNumero, indice) => {
        const numeroAlvo = numerosAlvo[indice]; 
        let numeroAtual = 0;

        const incremento = Math.ceil(numeroAlvo / 100);

        const intervalo = setInterval(() => {
            if (numeroAtual < numeroAlvo) {
                numeroAtual += incremento;
                if (numeroAtual > numeroAlvo) {
                    numeroAtual = numeroAlvo;
                }
                elementoNumero.textContent = numeroAtual;
            } else {
                clearInterval(intervalo)
            }
        }, 30);
    });
}

function pararAnimacaoNumeros() {
    elementosNumero.forEach((elementoNumero) => {
        elementoNumero.textContent = parseInt(elementoNumero.textContent, 10);
    });
}

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

function iniciarCarrossel() {
    setInterval(moverCarrossel, 3000);
}

function verificarSeNumerosVisiveis() {
    const container = document.querySelector('.numero');
    const retangulo = container.getBoundingClientRect();

    if (retangulo.top >= 0 && retangulo.bottom <= window.innerHeight) {
        if (!saoNumerosVisiveis) {
            saoNumerosVisiveis = true;
            animarNumeros();
        }
    } else {
        if (saoNumerosVisiveis) {
            saoNumerosVisiveis = false;
            pararAnimacaoNumeros();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrossel(); 
    animarNumeros();
});

window.addEventListener('scroll', verificarSeNumerosVisiveis);

const botaoPlay = document.getElementById('playButton');
const sobreposicaoVideo = document.getElementById('videoOverlay');
const quadroVideo = document.getElementById('videoFrame');

const urlVideo = 'https://www.youtube.com/embed/kmcTEZTrsNg?si=lwzeS1-4UOsGScDK&autoplay=1';

botaoPlay.addEventListener('click', () => {
    sobreposicaoVideo.style.display = 'flex';
    quadroVideo.src = urlVideo;
});

sobreposicaoVideo.addEventListener('click', () => {
    sobreposicaoVideo.style.display = 'none';
    quadroVideo.src = ''; 
});

document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".day");
    const programacoes = document.querySelectorAll(".programacao");

    function mostrarProgramacao(dia) {
        programacoes.forEach(prog => prog.style.display = "none");

        const diaSelecionado = document.querySelector(`.programacao[data-day="${dia}"]`);
        if (diaSelecionado) diaSelecionado.style.display = "block";
    }
    mostrarProgramacao("saturday");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const dia = this.getAttribute("data-day");
            mostrarProgramacao(dia);

            botoes.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".carrossel-wrapper");
    const imagensVisiveis = 3;
    const larguraImagem = 100 / imagensVisiveis;
    let indice = 0;

    let imagens = Array.from(wrapper.children);
    const totalImagens = imagens.length;

    wrapper.style.display = "flex";
    wrapper.style.width = `${totalImagens * larguraImagem}%`;

    function moverCarrossel() {
        wrapper.style.transition = "transform 1s ease-in-out";
        indice++;

        wrapper.style.transform = `translateX(-${indice * larguraImagem}%)`;

        setTimeout(() => {
            if (indice >= totalImagens - imagensVisiveis) {
                wrapper.style.transition = "none";
                let primeiraImagem = wrapper.children[0];
                wrapper.appendChild(primeiraImagem);
                wrapper.style.transform = `translateX(-${(indice - 1) * larguraImagem}%)`;
                indice--;
            }
        }, 1000);
    }
    moverCarrossel();
    setInterval(moverCarrossel, 3000);
});
