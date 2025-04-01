export function iniciarAnimacaoNumeros() {
    const elementosNumero = document.querySelectorAll('.numero p');
    let numerosAlvo = Array.from({ length: elementosNumero.length }, () => Math.floor(Math.random() * 1001));
    let saoNumerosVisiveis = true;

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
                    clearInterval(intervalo);
                }
            }, 30);
        });
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
            saoNumerosVisiveis = false;
        }
    }

    window.addEventListener('scroll', verificarSeNumerosVisiveis);
}