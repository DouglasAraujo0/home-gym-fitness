import { iniciarCarrossel } from './carrossel.js';
import { iniciarScroll } from './scroll.js';
import { iniciarAnimacaoNumeros } from './numeros.js';
import { iniciarVideo } from './video.js';
import { iniciarProgramacao } from './programacao.js';

document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrossel();
    iniciarScroll();
    iniciarAnimacaoNumeros();
    iniciarVideo();
    iniciarProgramacao();
});
