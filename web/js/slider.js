const slider = document.querySelector('.cards-elenco ul');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

const card = slider.querySelector('li'); // pegar o tamanho de um card
const cardWidth = card.offsetWidth + 30; // largura + gap (30px)

let isDragging = false;
let startX;
let scrollStart;

// Função para mover um card para frente (loop)
function slideNext() {
  if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
    // chegou no fim, volta pro começo
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}

// Função para mover um card para trás (loop)
function slidePrev() {
  if (slider.scrollLeft === 0) {
    // chegou no começo, vai pro fim
    slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }
}

prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

// ======== Drag para desktop e mobile ========

slider.addEventListener('mousedown', e => {
  isDragging = true;
  slider.classList.add('dragging');
  startX = e.pageX - slider.offsetLeft;
  scrollStart = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', e => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (startX - x); // quanto mover
  slider.scrollLeft = scrollStart + walk;
});

// Touch events para mobile

slider.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollStart = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
  isDragging = false;
});

slider.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (startX - x);
  slider.scrollLeft = scrollStart + walk;
});
