const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.querySelectorAll('.nav-links');
const icon = document.querySelector('.btn-mobile i');


mobileBtn.addEventListener('click', () => {
   navLinks.classList.toggle('show');
   icon.classList.toggle('fa-times');
   icon.classList.toggle('fa-bars');
})