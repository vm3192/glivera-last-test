let menuTrigger;
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector('body');

menuTrigger = document.querySelector('.menuTrigger');

menuTrigger.addEventListener('click', () => {
  if (headerMenu.classList.contains('active')) {
    headerMenu.classList.remove('active');
    menuTrigger.classList.remove('active_mod');
		body.style.overflowY = 'auto';
  } else {
    headerMenu.classList.add('active');
    menuTrigger.classList.add('active_mod');
		body.style.overflowY = 'hidden';
  }
});
