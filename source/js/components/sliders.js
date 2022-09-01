import Swiper from '../vendor/swiper.js';

// Products slider
for (const sliderProducts of document.querySelectorAll('.products__slider')) {
  if (sliderProducts) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(max-width:576px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(sliderProducts, {
          slidesPerView: 5,
          spaceBetween: 20,
          loop: true,
          navigation: {
              nextEl: ".products__slider-btn--next",
              prevEl: ".products__slider-btn--prev",
              clickable: true,
          },
          breakpoints: {
            576: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 5,
              spaceBetween: 20,
            }
          }
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}


// Confectioner slider
let sliderBestConfectioner = new Swiper(".best__slider", {
  slidesPerView: 3,
  spaceBetween: 23.5,
  loop: true,
  navigation: {
      nextEl: ".best__slider-btn--next",
      prevEl: ".best__slider-btn--prev",
      clickable: true,
  },
  breakpoints: {
    320: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10,
      },
    1440: {
      slidesPerView: 3,
      spaceBetween: 23.5,
    }
  }
});


// Default slider
for (const container of  document.querySelectorAll('.container') ) {
  let mainSlider = new Swiper(container.querySelector('.slider'), {
    slidesPerView: 5,
    spaceBetween: 18,
    loop: true,
    adaptiveHeight: true,
    navigation: {
      nextEl: container.querySelector(".slider__btn--next"),
      prevEl: container.querySelector(".slider__btn--prev"),
      clickable: true,
  },
    breakpoints: {
      320: {
          slidesPerView: 'auto',
          freeMode: true,
          spaceBetween: 10,
        },
      1440: {
        slidesPerView: 5,
        spaceBetween: 18,
      }
    }
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
  breakpoints: {
    320: {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10,
      },
    1440: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
  });
}


// Reviews slider
let reviewsSlider = new Swiper(".reviews__slider", {
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  direction: "vertical",
  freeMode: true,
  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
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



let productCardPreviewSlider = new Swiper(".product-card__preview-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  watchSlidesProgress: true,
  observer: true,
  direction: "vertical",
  navigation: {
      nextEl: ".product-card__preview-btn--next",
      prevEl: ".product-card__preview-btn--prev",
      clickable: true,
  },
  breakpoints: {
      320: {
        direction: "horizontal",
          slidesPerView: 'auto',
          spaceBetween: 10,
          loop: true,
          freeMode: true,
        },
      1025: {
        direction: "vertical",
        loop: true,
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
      }
  }
});

// productCardPreviewSlider.changeDirection('vertical', true);

// Product card slider
let productCardSlider = new Swiper(".product-card__slider", {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  freeMode: true,
  navigation: {
      clickable: true,
  },
  thumbs: {
    swiper: productCardPreviewSlider,
  },
  breakpoints: {
      320: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
  }
});


