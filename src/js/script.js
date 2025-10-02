// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 1.2,
  spaceBetween: 8,
  autoplay: true,
  centeredSlides: true,
  loop: true,
    breakpoints: {
    768: {
      slidesPerView: 1.4,
        spaceBetween: 16,
          loop: true,
    },
    992: {
      slidesPerView: 1.6,
      spaceBetween: 16,
        loop: true,
    },
    1024: {
      slidesPerView: 1.9,
      spaceBetween: 16,
        loop: true,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var blog = new Swiper(".blog", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});

var casino = new Swiper(".casino", {
  slidesPerView: 1,
  spaceBetween: 31,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});
var testimonials = new Swiper(".testimonials", {
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 2000,
  },
  loop: true,
});