export function iniciarProgramacao() {
    const programacaoContainer = document.getElementById('programacao-container');
    const botoes = document.querySelectorAll('.day');

    const programacoes = {
        saturday: [
            { horario: "06.00-07.00", aula: "Yoga and Pilates", professor: "Eaward Watson" },
            { horario: "08.00-09.00", aula: "Cardio Blast", professor: "Sarah Johnson" },
            { horario: "10.00-11.00", aula: "Martial Art", professor: "Jessica Lee" },
            { horario: "11.00-12.00", aula: "Boxercise", professor: "Jeremy Dupont" },
            { horario: "12.00-13.00", aula: "Yoga and Mindfulness", professor: "Michael Rodriguez" }
        ],
        monday: [
            { horario: "06.00-07.00", aula: "Yoga and Mindfulness", professor: "Michael Rodriguez" },
            { horario: "08.00-09.00", aula: "Yoga and Pilates", professor: "Eaward Watson" },
            { horario: "10.00-11.00", aula: "Boxercise", professor: "Jeremy Dupont" },
            { horario: "11.00-12.00", aula: "Martial Art", professor: "Jessica Lee" },
            { horario: "12.00-13.00", aula: "Cardio Blast", professor: "Sarah Johnson" }
        ],
        tuesday: [
            { horario: "06.00-07.00", aula: "Cardio Blast", professor: "Sarah Johnson" },
            { horario: "08.00-09.00", aula: "Cardio Blast", professor: "Eaward Watson" },
            { horario: "10.00-11.00", aula: "Martial Art", professor: "Jessica Lee" },
            { horario: "11.00-12.00", aula: "Boxercise", professor: "Jeremy Dupont" },
            { horario: "12.00-13.00", aula: "Yoga and Mindfulness", professor: "Michael Rodriguez" }
        ],
        wednesday: [
            { horario: "06.00-07.00", aula: "Yoga and Pilates", professor: "Eaward Watson" },
            { horario: "08.00-09.00", aula: "Martial Art", professor: "Jessica Lee" },
            { horario: "10.00-11.00", aula: "Yoga and Mindfulness", professor: "Michael Rodriguez" },
            { horario: "11.00-12.00", aula: "Boxercise", professor: "Jeremy Dupont" },
            { horario: "12.00-13.00", aula: "Cardio Blast", professor: "Sarah Johnson" }
        ],
        thursday: [
            { horario: "06.00-07.00", aula: "Cardio Blast", professor: "Sarah Johnson" },
            { horario: "08.00-09.00", aula: "Boxercise", professor: "Jeremy Dupont" },
            { horario: "10.00-11.00", aula: "Martial Art", professor: "Jessica Lee" },
            { horario: "11.00-12.00", aula: "Yoga and Mindfulness", professor: "Michael Rodriguez" },
            { horario: "12.00-13.00", aula: "Yoga and Pilates", professor: "Eaward Watson" }
        ],
        friday: [
            { horario: "06.00-07.00", aula: "Martial Art", professor: "Jessica Lee" },
            { horario: "08.00-09.00", aula: "Cardio Blast", professor: "Sarah Johnson" },
            { horario: "10.00-11.00", aula: "Yoga and Pilates", professor: "Eaward Watson" },
            { horario: "11.00-12.00", aula: "Boxercise", professor: "Jeremy Dupont" },
            { horario: "12.00-13.00", aula: "Yoga and Mindfulness", professor: "Michael Rodriguez" }
        ]
    };

    function mostrarProgramacao(dia) {
        programacaoContainer.innerHTML = "";  
        programacaoContainer.style.display = "flex";  

        if (!programacoes[dia]) return;

        programacoes[dia].forEach(({ horario, aula, professor }) => {
            const aulaInfo = document.createElement('div');
            aulaInfo.classList.add('aula__info');
            aulaInfo.innerHTML = `
                <div class="horario">${horario}</div>
                <div class="programacao__aula">${aula}</div>
                <div class="programacao__professor">${professor}</div>
            `;
            programacaoContainer.appendChild(aulaInfo);

            const barra = document.createElement('p');
            barra.classList.add('barra');
            programacaoContainer.appendChild(barra);
        });
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
