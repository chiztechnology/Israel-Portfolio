document.getElementById('hamburger').addEventListener('click',
  (e) => {
    // alert('Click on hamburger')
    document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:visible');
    e.preventDefault();
  })

// click on Close hamburger
document.getElementById('mobile-drawer-close-icon').addEventListener('click',
  (e) => {
    document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility: hidden');
    e.preventDefault();
  })

// click on portfolio
document.getElementById('drawer-nav-url').addEventListener('click',
  (e) => {
    document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
    e.preventDefault();
  })

// click on about section menu
document.getElementById('drawer-nav-url2').addEventListener('click',
  (e) => {
    document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
    e.preventDefault();
  })

// click on contact
document.getElementById('drawer-nav-url3').addEventListener('click',
  (e) => {
    document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
    e.preventDefault();
  })
