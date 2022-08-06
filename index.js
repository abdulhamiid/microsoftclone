const toggler = document.querySelector('.toggler');
const menu = document.querySelector('.main-menu');
toggler.addEventListener('click', () => {
  menu.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
});