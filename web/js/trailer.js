const buttonTrailers = document.querySelectorAll('.button-trailer button');
const trailerIframe = document.getElementsByClassName('trailer-iframe');

buttonTrailers.forEach(button => {
  button.addEventListener('click', () => {
    // Acha o iframe relacionado ao botão atual
    const trailerIframe = button.closest('.button-trailer').nextElementSibling;

    // Alterna a classe no iframe
    const isOpen = trailerIframe.classList.toggle('trailer-on');

    // Troca o texto do botão
    button.textContent = isOpen ? 'Fechar trailer' : 'Assista ao trailer';
  });
});