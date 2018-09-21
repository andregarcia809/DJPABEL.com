 // * Opens the nav
var navEl = document.querySelector('.main__nav');
var hamburgerMenuEl = document.querySelector('.hamburger__menu');
hamburgerMenuEl.onclick = function() {
  navEl.classList.add('open')
};

// *Closes the nav
  window.addEventListener('click', function(e) {
    var spanXEl = document.querySelector('#x');
    if(event.target === navEl ||event.target === spanXEl) {
      navEl.classList.remove('open')
    }
  })