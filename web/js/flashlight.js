let flashlight = document.querySelector('.flashlight');
let buttonOnOffFlashlight = document.querySelector('.efeito-lanterna');
let backgroundVideo = document.querySelector('.background-video');

document.addEventListener('mousemove', (e) => {
    flashlight.style.setProperty('--x', `${e.clientX}px`);
    flashlight.style.setProperty('--y', `${e.clientY}px`);
})

buttonOnOffFlashlight.addEventListener('click', () => {
    flashlight.classList.toggle('active');
})