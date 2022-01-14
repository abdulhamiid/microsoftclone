let toggler = document.querySelector('.toggler');
let menu = document.querySelector('.main-menu')
toggler.addEventListener('click', () => {
    menu.classList.toggle('show')
})