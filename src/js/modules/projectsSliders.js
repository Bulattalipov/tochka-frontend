import Swiper, {
  Navigation
} from "swiper/swiper-bundle";

Swiper.use([Navigation]);

export default function projectsSliders() {

  const projectsSliders = document.querySelectorAll('.main-projects__slider');

  projectsSliders.forEach(slider => {
    if (!slider) return;

    const swiper = new Swiper(slider.querySelector('.js-projects-slider'), {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: slider.querySelector('.slider-nav__next'),
        prevEl: slider.querySelector('.slider-nav__prev')
      },
      breakpoints: {
        768: {
          spaceBetween: 18,
          // slidesPerView: 2
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
