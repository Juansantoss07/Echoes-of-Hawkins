let contentSectionElenco = document.querySelector('.content-section');
let temporadasDetails = document.querySelector('.temporadas-details');
let playlistAppleMusic = document.querySelector('.playslist-apple-music');
let curiosidadesSection = document.querySelector('.content-curiosidades');

window.addEventListener('scroll', () => {
    const limiteScrollElenco = window.innerHeight * 0.7;

    // animação da seção de elenco
    if (window.scrollY > limiteScrollElenco) {
        contentSectionElenco.classList.remove('animation-to-left');
    }

    // detectar se o elemento temporadas-details está visível no viewport
    const rectTemporadas = temporadasDetails.getBoundingClientRect();
    const offset = 100;
    const adjustedTopTemporadas = rectTemporadas.top + offset;
    
    const isTemporadasVisible = adjustedTopTemporadas >= 0 && adjustedTopTemporadas <= window.innerHeight;

    if (isTemporadasVisible) {
        temporadasDetails.classList.remove('animation-to-scale-to-bottom');
    }

    // detectar se o elemento playlist-apple-music está visível no viewport
    if (playlistAppleMusic) {
        const rectPlaylist = playlistAppleMusic.getBoundingClientRect();
        const adjustedTopPlaylist = rectPlaylist.top;
        
        const isPlaylistVisible = adjustedTopPlaylist >= 0 && adjustedTopPlaylist <= window.innerHeight;

        if (isPlaylistVisible) {
            playlistAppleMusic.classList.remove('animation-to-scale');
        } else {
            playlistAppleMusic.classList.add('animation-to-scale');
        }
    }

        // detectar se o elemento curiosidades está visível no viewport
        if (curiosidadesSection) {

            const rectCuriosidades = curiosidadesSection.getBoundingClientRect();
            const offset = 10;
            const adjustedCuriosidadesTop = rectCuriosidades.top + offset;

            const isCuriosidadeVisible = adjustedCuriosidadesTop >= 0 && adjustedCuriosidadesTop <= window.innerHeight;

            if (isCuriosidadeVisible) {
                curiosidadesSection.classList.remove('animation-to-left');
            }
        }
});
