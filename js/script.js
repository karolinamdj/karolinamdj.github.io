
//  hamburger menu handle

let menuIcon = document.querySelector('.nav-icon');
let menuLinks = document.querySelector('.nav-links');
let nav = document.querySelector('nav');
let introduction = document.querySelector('.introduction-box');
let arrow = document.querySelector('.arrow-box');

menuIcon.addEventListener('click', () => {
  introduction.classList.toggle('hide');
  arrow.classList.toggle('hide');
  menuIcon.classList.toggle('open');
  menuLinks.classList.toggle('show-links');
  nav.classList.toggle('nav-collapse');
});

menuLinks.addEventListener('click', () => {
  introduction.classList.toggle('hide');
  arrow.classList.toggle('hide');
  menuIcon.classList.toggle('open');
  menuLinks.classList.toggle('show-links');
  nav.classList.toggle('nav-collapse');
})


// slide header background image

let bgImage = document.querySelector('.header');
let lastScrollTop = 0;
let bgY = 75;

window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let bgY = st == 0 ? 75 : 75 - (st * 0.04);
  bgImage.style.backgroundPosition = `50% ${bgY}%`;
}, false);
