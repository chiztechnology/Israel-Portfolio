document.getElementById("hamburger").addEventListener('click', (e)=>{
  // alert('Click on hamburger')
  document.querySelector('.mobile-menu-drawer').setAttribute("style", "visibility:visible");
  e.preventDefault();
})

document.getElementById("mobile-drawer-close-icon").addEventListener('click', (e)=>{
  document.querySelector('.mobile-menu-drawer').setAttribute("style", "visibility: hidden");
  e.preventDefault();
})

document.getElementById("drawer-nav-url").addEventListener('click', (e)=>{
  document.querySelector('.mobile-menu-drawer').setAttribute("style", "visibility:hidden");
})

document.getElementById("drawer-nav-url2").addEventListener('click', (e)=>{
  document.querySelector('.mobile-menu-drawer').setAttribute("style", "visibility:hidden");
})

document.getElementById("drawer-nav-url3").addEventListener('click', (e)=>{
  document.querySelector('.mobile-menu-drawer').setAttribute("style", "visibility:hidden");
})
