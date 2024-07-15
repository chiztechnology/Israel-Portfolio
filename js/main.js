document.getElementById('hamburger').addEventListener('click', (e) => {
  // alert('Click on hamburger')
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'margin-left: 0px');
  e.preventDefault();
});

// click on Close hamburger
document.getElementById('mobile-drawer-close-icon').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'margin-left: -100%;');
});

// click on home
document.getElementById('drawer-nav-url').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'margin-left: -100%;');
});

// click on portfolio
document.getElementById('drawer-nav-url1').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'margin-left: -100%;');
});

// click on about section menu
document.getElementById('drawer-nav-url2').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'margin-left: -100%;');
});

// click on contact
document.getElementById('drawer-nav-url3').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'margin-left: -100%;');
});

// adding box shaddow on scroll

window.addEventListener('scroll', () => {
  const y = this.scrollY;
  if (y > 10) {
    document.getElementById('main-header').classList.add('active');
  } else {
    document.getElementById('main-header').classList.remove('active');
  }
});
