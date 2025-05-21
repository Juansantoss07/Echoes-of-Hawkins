let contentSectionElenco = document.querySelector('.content-section');
let temporadasDetails = document.querySelector('.temporadas-details');

window.addEventListener('scroll', () => {
    const limiteScrollElenco = window.innerHeight * 0.7;

    // animação da seção de elenco
    if (window.scrollY > limiteScrollElenco) {
        contentSectionElenco.classList.remove('animation-to-left');
    } else {
        contentSectionElenco.classList.add('animation-to-left');
    }

    // detectar se o elemento temporadas-details está visível no viewport
    const rect = temporadasDetails.getBoundingClientRect();
    const offset = 500;
    const adjustedTop = rect.top + offset;
    
    const isVisible = adjustedTop >= 0 && adjustedTop <= window.innerHeight;

    if (isVisible) {
        temporadasDetails.classList.remove('animation-to-right');
    } else {
        temporadasDetails.classList.add('animation-to-right');
    }
});
