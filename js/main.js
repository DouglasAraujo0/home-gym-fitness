import { iniciarCarrossel } from './carrossel.js';
import { iniciarScroll } from './scroll.js';
import { iniciarAnimacaoNumeros } from './numeros.js';
import { iniciarVideo } from './video.js';
import { iniciarProgramacao } from './programacao.js';
import { iniciarTrocaImagem } from './trocaImagem.js';
import { iniciarComponents } from './carregarComponents.js';

document.addEventListener('DOMContentLoaded', async () => {
    await iniciarComponents();  
    iniciarCarrossel();
    iniciarScroll();
    iniciarAnimacaoNumeros();
    iniciarVideo();
    iniciarProgramacao();
    iniciarTrocaImagem();
});

