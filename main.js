const navItems = document.querySelector('#nav__items')
const openNavBtn = document.querySelector('#open__nav-btn')
const closeNavBtn = document.querySelector('#close__nav-btn')

openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

closeNavBtn.addEventListener('click', () => {
    closeNavBtn.style.display = 'none';
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
})

// TETIMONIALS SECTION (SWIPER JS)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive Breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
  },
    600: {
      slidesPerView: 2,
  },
    1024: {
      slidesPerView: 3,
  },
  }

});
