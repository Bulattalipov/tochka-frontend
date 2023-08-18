import textHeightAlignment from "./text-height-alignment";
import Swiper, {
  Navigation
} from "swiper/swiper-bundle";

Swiper.use([Navigation]);

export default function sliderDesc() {
  const sliderDesc = document.querySelectorAll('.js-slider-desc')

  sliderDesc.forEach(slider => {
    if (!slider) return;

    const swiper = new Swiper(slider.querySelector('.slider-desc__swiper'), {
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: slider.querySelector('.slider-nav__next'),
        prevEl: slider.querySelector('.slider-nav__prev')
      },
      breakpoints: {
        768: {
          // slidesPerView: 2
        },
        992: {
          spaceBetween: 82,
          // slidesPerView: 2
        }
      },
      on: {
        init: function() {
          textHeightAlignment();
        }
      }
    })

    const btn = slider.querySelector('button').classList.contains('swiper-button-lock');
    if (btn) {
      slider.querySelector('button').parentElement.classList.add('hide');
    } else {
      slider.querySelector('button').parentElement.classList.remove('hide');
    }
  })
}
