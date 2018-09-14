
// hide h1

let navbarToggler = document.querySelector('.navbar-toggler');
let introduction = document.querySelector('.introduction-box');

navbarToggler.addEventListener('click', () => {
  if (introduction.style.display === "none") {
    introduction.style.display = "block";
  } else {
    introduction.style.display = "none";
  }
});
