 // * Opens the nav
var navEl = document.querySelector('.main__nav');
var hamburgerMenuEl = document.querySelector('.hamburger__menu');
hamburgerMenuEl.onclick = function() {
  navEl.classList.add('open')
};

// *Closes the nav
  window.addEventListener('click', function(e) {
    var navCloseEl = document.querySelector('#x');
    if(event.target === navEl ||event.target === navCloseEl) {
      navEl.classList.remove('open')
    }
  })