import Swiper from '../vendor/swiper.js';

// Products slider
let sliderProducts = new Swiper(".products__slider", {
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


// Products slider
let sliderBestConfectioner = new Swiper(".best__slider", {
  slidesPerView: 3,
  spaceBetween: 23.5,
  loop: true,
  navigation: {
      nextEl: ".best__slider-btn--next",
      prevEl: ".best__slider-btn--prev",
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


// Default slider
for (const container of  document.querySelectorAll('.container') ) {
  let mainSlider = new Swiper(container.querySelector('.slider'), {
    slidesPerView: 5,
    spaceBetween: 18,
    loop: true,
    navigation: {
      nextEl: container.querySelector(".slider__btn--next"),
      prevEl: container.querySelector(".slider__btn--prev"),
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
}

// Confectioners slider
for (const container of document.querySelectorAll('.confectioners__details') ) {
  let confectionersSlider = new Swiper(container.querySelector('.confectioners__slider'), {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: container.querySelector(".slider__btn--next"),
      prevEl: container.querySelector(".slider__btn--prev"),
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
}



