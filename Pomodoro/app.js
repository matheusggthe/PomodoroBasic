const sino = new Audio('assets/sounds/mixkit-achievement-bell-600.wav');
const startBtn = document.querySelector('.start');
const timerDisplay = document.querySelector('.timer');
let meuIntervalo;
let estado = true;

const appTimer = () => {
    if (estado) {
        estado = false;

        const sessionAmount = Number.parseInt(timerDisplay.textContent.split(':')[0]);
        let segundosTotais = sessionAmount * 60;

        const atualizarSeg = () => {
            segundosTotais--;

            let minutosSobra = Math.floor(segundosTotais / 60);
            let segundosSobra = segundosTotais % 60;

            const formatoMinutos = minutosSobra < 10 ? '0' + minutosSobra : minutosSobra;
            const formatoSegundos = segundosSobra < 10 ? '0' + segundosSobra : segundosSobra;

            timerDisplay.textContent = `${formatoMinutos}:${formatoSegundos}`;

            if (segundosTotais <= 0) {
                sino.play();
                clearInterval(meuIntervalo);
                estado = true;
            }
        };

        atualizarSeg();
        meuIntervalo = setInterval(atualizarSeg, 1000);
    } else {
        alert('Já iniciado');
    }
};

startBtn.addEventListener('click', appTimer);
