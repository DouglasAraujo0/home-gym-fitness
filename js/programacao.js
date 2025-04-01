export function iniciarProgramacao() {
    const botoes = document.querySelectorAll('.day');
    const programacoes = document.querySelectorAll('.programacao');

    function mostrarProgramacao(dia) {
        programacoes.forEach(prog => prog.style.display = 'none');
        const diaSelecionado = document.querySelector(`.programacao[data-day="${dia}"]`);
        if (diaSelecionado) diaSelecionado.style.display = 'block';
    }

    mostrarProgramacao('saturday');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const dia = this.getAttribute('data-day');
            mostrarProgramacao(dia);
            botoes.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}
