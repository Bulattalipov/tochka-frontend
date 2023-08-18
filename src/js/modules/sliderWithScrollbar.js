import Swiper, {
  Navigation,
  coverflow,
  Scrollbar
} from "swiper/swiper-bundle";

Swiper.use([Navigation, coverflow, Scrollbar]);

export default function sliderWithScrollbar() {
  const sliderWithScrollbar = document.querySelectorAll('.js-slider-wrapper');

  sliderWithScrollbar.forEach(slider => {

    if (!slider) return;

    const swiper = new Swiper(slider.querySelector('.swiper'), {
      slidesPerView: 1,
      spaceBetween: 8,
      allowTouchMove: true,
      navigation: {
        nextEl: slider.querySelector('.slider-nav__next'),
        prevEl: slider.querySelector('.slider-nav__prev')
      },
      breakpoints: {
        991: {
          spaceBetween: 16,
          // slidesPerView: 2
        },
        768: {
          draggable: false,
          // slidesPerView: 2
        },
      },
      scrollbar: {
        el: slider.querySelector(".swiper-scrollbar"),
        draggable: true
      },
    })

    const btn = slider.querySelector('button').classList.contains('swiper-button-lock');
    if (btn) {
      slider.querySelector('button').parentElement.classList.add('hide');
    } else {
      slider.querySelector('button').parentElement.classList.remove('hide');
    }

  })
}
