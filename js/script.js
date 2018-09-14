
// hide h1

let navbarToggler = document.querySelector('.navbar-toggler');
let introduction = document.querySelector('.introduction-box');

// navbarToggler.addEventListener('click', () => {
//   if (introduction.style.display === "none") {
//     introduction.style.display = "block";
//   } else {
//     introduction.style.display = "none";
//   }
// });

navbarToggler.addEventListener('click', () => {
  if (introduction.style.opacity === "0") {
    introduction.style.opacity = "1";
  } else {
    introduction.style.opacity = "0";
  }
});
