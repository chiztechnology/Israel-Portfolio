document.getElementById('hamburger').addEventListener('click', (e) => {
  // alert('Click on hamburger')
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:visible');
  e.preventDefault();
});

// click on Close hamburger
document.getElementById('mobile-drawer-close-icon').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility: hidden');
});

// click on portfolio
document.getElementById('drawer-nav-url').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
});

// click on about section menu
document.getElementById('drawer-nav-url2').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
});

// click on contact
document.getElementById('drawer-nav-url3').addEventListener('click', () => {
  document.querySelector('.mobile-menu-drawer').setAttribute('style', 'visibility:hidden');
});

var modal = document.getElementById("modal");
var btn = document.getElementById("showModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// openning the modal
btn.addEventListener('click', (e)=>{
  modal.style.display = "block";
  // e.preventDefault();
})

// closing the modal if the user clicks anywhere outside the modal
window.onclick = (event)=>{
  if(event.target == modal){
    modal.style.display = "none";
  }
}