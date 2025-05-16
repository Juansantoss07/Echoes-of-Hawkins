let buttonMenu = document.querySelector('.menu');
let navMenu = document.querySelector('.nav-menu');
let header = document.querySelector('.header');
let firstItem = document.getElementById('first-item-nav');

firstItem.addEventListener('click', () => {
    navMenu.classList.remove('open');
})

buttonMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  const limiteScroll = window.innerHeight * 0.4;

  if (window.scrollY > limiteScroll) {
      header.classList.add('scrolled');
      navMenu.classList.add('scrolled-nav');
  } else {
      header.classList.remove('scrolled');
      navMenu.classList.remove('scrolled-nav');
  }
});
