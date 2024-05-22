import Swiper, { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll("[data-slider]");
  if (sliders) {
    sliders.forEach(el => {
      new Slider(el);
    });
  }
});

class Slider {
  constructor(el) {
    this.el = el;
    this.type = this.el.getAttribute("data-slider");
    this.init();
  }

  init() {
    switch (this.type) {
      case "default":
        this.initDefaultSlider();
        break;
      case 'centered':
        this.initCenteredSlider();
        break;
      case 'animated':
        this.initAnimatedSlider();
        break;
    }
  }

  initDefaultSlider() {
    const swiper = this.el.querySelector(".swiper");
    const slider = new Swiper(swiper, {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 20,
      watchSlidesProgress: true,
      navigation: {
        prevEl: this.el.querySelector('.slider-button__prev'),
        nextEl: this.el.querySelector('.slider-button__next'),
        disabledClass: 'slider-button-disabled',
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  }

  initCenteredSlider() {
    const swiper = this.el.querySelector(".swiper");
    const slider = new Swiper(swiper, {
      modules: [Navigation, EffectCoverflow, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      watchSlidesProgress: true,
      loop: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 2,
        slideShadows: false,
      },
      navigation: {
        prevEl: this.el.querySelector('.slider-button__prev'),
        nextEl: this.el.querySelector('.slider-button__next'),
        disabledClass: 'slider-button-disabled',
      },
      pagination: {
        el: this.el.querySelector('.slider-pagination'),
        clickable: true,
        bulletClass: 'slider-pagination-bullet',
        bulletActiveClass: 'slider-pagination-bullet-active',
      },
      breakpoints: {
        1200: {
          coverflowEffect: {
            rotate: 0,
            stretch: -60,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          },
        }
      }
    });
  }

  initAnimatedSlider() {
    const swiper = this.el.querySelector(".swiper");
    const slider = new Swiper(swiper, {
      modules: [Autoplay],
      spaceBetween: 0,
      centeredSlides: true,
      speed: 3000,
      autoplay: {
        delay: 1,
        reverseDirection: this.el.hasAttribute('data-reverse')
      },
      loop: true,
      slidesPerView:'auto',
      allowTouchMove: false,
      disableOnInteraction: true,
      updateOnImagesReady: true,
    });
  }
}