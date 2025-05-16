const slider = document.querySelector('.cards-elenco ul');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentIndex = 0;
const itemWidth = 300;
const visibleItems = 5;
const maxIndex = slider.children.length - visibleItems;

nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex;
    }
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * itemWidth;
    slider.style.transition = 'transform 0.3s ease';
    slider.style.transform = `translateX(${offset}px)`;
}

// --- Lógica de arraste ---
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    slider.style.cursor = 'grabbing';
    slider.style.transition = 'none'; // remove transição durante o arraste
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    currentTranslate = -currentIndex * itemWidth + deltaX;
    slider.style.transform = `translateX(${currentTranslate}px)`;
});

slider.addEventListener('mouseup', (e) => {
    endDrag(e);
});

slider.addEventListener('mouseleave', (e) => {
    if (isDragging) endDrag(e);
});

function endDrag(e) {
    isDragging = false;
    slider.style.cursor = 'grab';

    const deltaX = e.clientX - startX;

    if (Math.abs(deltaX) > itemWidth / 4) {
        if (deltaX < 0 && currentIndex < slider.children.length - visibleItems) {
            currentIndex++;
        } else if (deltaX > 0 && currentIndex > 0) {
            currentIndex--;
        }
    }

    updateSlider();
}
