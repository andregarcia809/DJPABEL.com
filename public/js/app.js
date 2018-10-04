// *Open modal
var openModal = document.querySelector('.flex');
var modalEl = document.querySelector('.modal');
var bodyEl = document.getElementById('body');
var footerBtnEl = document.querySelector('.footer-btn');

openModal.addEventListener('click', function () {
  modalEl.classList.add('open');
  bodyEl.classList.add('no-scrolling');
});

footerBtnEl.onclick = function () {
  modalEl.classList.add('open')
  bodyEl.classList.add('no-scrolling');
};

// * Close modal
function closeModal() {
  var modaContentlEl = document.querySelector('.modal__content');
  var modalCloseEl = document.querySelector('.close__modal__btn');

  modalCloseEl.addEventListener('click', function () {
    modalEl.classList.remove('open');
    bodyEl.classList.remove('no-scrolling');
  })

  window.addEventListener('click', function (e) {
    if (e.target === modalEl) {
      modalEl.classList.remove('open');
      bodyEl.classList.remove('no-scrolling');
    }
  })
}

closeModal();

// * Opens the nav
var navEl = document.querySelector('.main__nav');
var hamburgerMenuEl = document.querySelector('.hamburger__menu');

hamburgerMenuEl.onclick = function () {
  navEl.classList.add('open')
  bodyEl.classList.add('no-scrolling');
};

// *Closes the nav
var navCloseEl = document.querySelector('#x');

navCloseEl.addEventListener('click', function (e) {
  navEl.classList.remove('open');
  bodyEl.classList.remove('no-scrolling');
})

function closeNavOnscroll() {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navEl.classList.remove('open');
      bodyEl.classList.remove('no-scrolling');
    }
  })
}

closeNavOnscroll();

// *reviews slider
var sliderStatus = 1;
var sliderTimer = 2000;

// Runs loop when page loads
window.onload = function () {
  sliderLoop();
}

// *Makes loop iterate
var startSliderLoop = setInterval(function () {
  sliderLoop();
}, sliderTimer);

// * Stops loop
document.querySelector('.reviews__wrap').onmouseenter = function () {
  clearInterval(startSliderLoop);
};

// * Starts loop againg
document.querySelector('.reviews__wrap').onmouseleave = function () {
  startSliderLoop = setInterval(function () {
    sliderLoop();
  }, sliderTimer);
};

// Shows selected review
var reviews1El = document.getElementById('reviews1');
var reviews2El = document.getElementById('reviews2');
var reviews3El = document.getElementById('reviews3');
var shadedCircle1 = document.getElementById('circle1');
var shadedCircle2 = document.getElementById('circle2');
var shadedCircle3 = document.getElementById('circle3');

// *cirlce 1 click
shadedCircle1.onclick = function () {
  reviews1El.style.left = '-1200px';
  setTimeout(function () {
    reviews1El.style.opacity = 1;
    shadedCircle1.classList.add('grey__dot');
    reviews1El.style.zIndex = 999;
    reviews1El.style.left = '0px';
    reviews2El.style.left = '-1200px';
    reviews2El.style.opacity = '0';
    shadedCircle2.classList.remove('grey__dot');
    reviews3El.style.opacity = '0';
    shadedCircle3.classList.remove('grey__dot');
  }, 500)
};
// *cirlce 2 click
shadedCircle2.onclick = function () {
  reviews2El.style.left = '-1200px';
  setTimeout(function () {
    reviews2El.style.opacity = 1;
    shadedCircle2.classList.add('grey__dot');
    reviews2El.style.left = '0px';
    reviews2El.style.zIndex = 999;
    reviews3El.style.left = '-1200px';
    reviews3El.style.opacity = '0';
    shadedCircle3.classList.remove('grey__dot');
    reviews1El.style.opacity = '0';
    shadedCircle1.classList.remove('grey__dot');
  }, 500)
};
// *cirlce 1 click
shadedCircle3.onclick = function () {
  reviews3El.style.left = '-1200px';
  setTimeout(function () {
    reviews3El.style.opacity = 1;
    shadedCircle3.classList.add('grey__dot');
    reviews3El.style.left = '0px';
    reviews3El.style.zIndex = 999;
    reviews2El.style.opacity = '0';
    shadedCircle2.classList.remove('grey__dot');
    reviews1El.style.opacity = '0';
    shadedCircle1.classList.remove('grey__dot');
  }, 500)
}


// * Loops thru each review
function sliderLoop() {
  if (sliderStatus === 1) {
    reviews1El.style.opacity = 1;
    shadedCircle1.classList.add('grey__dot');
    reviews2El.style.left = '-1200px';
    sliderStatus = 2;

  } else if (sliderStatus === 2) {
    setTimeout(function () {
      reviews1El.style.left = '1200px';
      reviews1El.style.opacity = 0;
      shadedCircle1.classList.remove('grey__dot');
      setTimeout(function () {
        reviews1El.style.left = '-1200px';
      }, 500)
      reviews2El.style.left = '0px';
      reviews2El.style.opacity = 1;
      shadedCircle2.classList.add('grey__dot');
    }, 1000)
    sliderStatus = 3;

  } else if (sliderStatus === 3) {
    setTimeout(function () {
      reviews2El.style.left = '1200px';
      reviews2El.style.opacity = 0;
      shadedCircle2.classList.remove('grey__dot');
      setTimeout(function () {
        reviews2El.style.left = '-1200px';
      }, 500)
      reviews3El.style.left = '0px';
      reviews3El.style.opacity = 1;
      shadedCircle3.classList.add('grey__dot');
    }, 1000)
    sliderStatus = 4;

  } else if (sliderStatus === 4) {
    setTimeout(function () {
      reviews3El.style.left = '1200px';
      reviews3El.style.opacity = 0;
      shadedCircle3.classList.remove('grey__dot');
      setTimeout(function () {
        reviews3El.style.left = '-1200px';
      }, 500)
      reviews1El.style.left = '0px';
      reviews1El.style.opacity = 1;
      shadedCircle1.classList.add('grey__dot');
    }, 1000)
    sliderStatus = 1;

  }
}