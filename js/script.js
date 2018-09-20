
// hide h1

let navbarToggler = document.querySelector('.navbar-toggler');
let introduction = document.querySelector('.introduction-box');

navbarToggler.addEventListener('click', () => {
  if (introduction.style.opacity === "0") {
    introduction.style.opacity = "1";
  } else {
    introduction.style.opacity = "0";
  }
});

// slide header background image

let bgImage = document.querySelector('.header');
let lastScrollTop = 0;
let bgY = 75;

window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let bgY = st == 0 ? 75 : 75 - (st * 0.04);
  bgImage.style.backgroundPosition = `50% ${bgY}%`;
}, false);
