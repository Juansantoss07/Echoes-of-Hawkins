let flashlight = document.querySelector('.flashlight');
let buttonOnOffFlashlight = document.querySelector('.efeito-lanterna');
let backgroundVideo = document.querySelector('.background-video');

// Movimento do mouse (desktop)
document.addEventListener('mousemove', (e) => {
    flashlight.style.setProperty('--x', `${e.clientX}px`);
    flashlight.style.setProperty('--y', `${e.clientY}px`);
});

// Ativar/desativar efeito de lanterna
buttonOnOffFlashlight.addEventListener('click', () => {
    flashlight.classList.toggle('active');
});

// Função para ativar sensor de movimento (mobile)
function ativarSensorMobile() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            let gamma = event.gamma || 0; // Inclinação esquerda/direita
            let beta = event.beta || 0;   // Inclinação frente/trás

            // Converter em coordenadas de tela
            let x = ((gamma + 90) / 180) * window.innerWidth;
            let y = ((beta + 180) / 360) * window.innerHeight;

            flashlight.style.setProperty('--x', `${x}px`);
            flashlight.style.setProperty('--y', `${y}px`);
        }, true);
    }
}

// iOS (precisa pedir permissão)
if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
    const botaoPermissao = document.createElement('button');
    botaoPermissao.innerText = 'Permitir Sensor (iOS)';
    botaoPermissao.style.position = 'fixed';
    botaoPermissao.style.bottom = '80px';
    botaoPermissao.style.left = '20px';
    botaoPermissao.style.zIndex = 9999;
    botaoPermissao.style.padding = '10px 20px';
    botaoPermissao.style.fontSize = '16px';
    botaoPermissao.style.cursor = 'pointer';
    document.body.appendChild(botaoPermissao);

    botaoPermissao.addEventListener('click', () => {
        DeviceOrientationEvent.requestPermission()
            .then(state => {
                if (state === 'granted') {
                    ativarSensorMobile();
                    botaoPermissao.remove();
                } else {
                    alert('Permissão negada para acessar o sensor.');
                }
            })
            .catch(err => {
                console.error(err);
                alert('Erro ao solicitar permissão.');
            });
    });
} else {
    // Android ou navegadores que não exigem permissão
    ativarSensorMobile();
}
