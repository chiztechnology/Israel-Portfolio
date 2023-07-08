const hamburgerBtn = document.getElementById('hamburger');
const closeDrawerBtn = document.getElementById('exit-button');

hamburgerBtn.addEventListener('click', (e) => {
  document.querySelector('.mobile-menu').setAttribute('style', 'visibility:visible');
  e.preventDefault();
});

closeDrawerBtn.addEventListener('click', (e) => {
  document.querySelector('.mobile-menu').setAttribute('style', 'visibility:hidden');
  e.preventDefault();
});

// click on any menu
document.getElementById('menu-link-portfolio').addEventListener('click', () => {
  document.querySelector('.mobile-menu').setAttribute('style', 'visibility:hidden');
});

// click on any menu
document.getElementById('menu-link-about').addEventListener('click', () => {
  document.querySelector('.mobile-menu').setAttribute('style', 'visibility:hidden');
});

// click on any menu
document.getElementById('menu-link-contact').addEventListener('click', () => {
  document.querySelector('.mobile-menu').setAttribute('style', 'visibility:hidden');
});
