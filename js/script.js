var navbarToggler = document.querySelector('.navbar-toggler');
var introduction = document.querySelector('.introduction-box');

navbarToggler.addEventListener('click', () => {
  if (introduction.style.display === "none") {
    introduction.style.display = "block";
  } else {
    introduction.style.display = "none";
  }
});
