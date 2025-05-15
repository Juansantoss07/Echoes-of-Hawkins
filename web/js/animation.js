let contentSectionElenco = document.querySelector('.content-section');

window.addEventListener('scroll', () => {
    const limiteScroll = window.innerHeight * 0.7;

    if (window.scrollY > limiteScroll) {
        contentSectionElenco.classList.remove('animation-to-left');
    } else {
        contentSectionElenco.classList.add('animation-to-left');
    }    
})