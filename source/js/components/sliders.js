import Swiper from '../vendor/swiper.js';

// Products slider
let sliderArticle = new Swiper(".products__slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: ".products__slider-btn--next",
      prevEl: ".products__slider-btn--prev",
      clickable: true,
  },
  // breakpoints: {
  //     320: {
  //         slidesPerView: 1,
  //         spaceBetween: 20,
  //       },
  //     576: {
  //       slidesPerView: 2,
  //       spaceBetween: 50,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 40,
  //     }
  // }
});
