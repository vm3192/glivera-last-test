let menuTrigger;
let body = document.querySelector('.header__menu');

menuTrigger = document.querySelector('.menuTrigger');

menuTrigger.addEventListener('click', () => {
  console.log('hello');
  if (body.classList.contains('active')) {
    body.classList.remove('active');
    menuTrigger.classList.remove('active_mod');
  } else {
    body.classList.add('active');
    menuTrigger.classList.add('active_mod');
  }
});
