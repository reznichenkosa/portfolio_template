const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});


const skillsPercents = document.querySelectorAll('.skills__level-percent'),
      linesProgres = document.querySelectorAll('.skills__level-progress');

skillsPercents.forEach((item, i) => {
    linesProgres[i].style.width = item.innerHTML;
});

