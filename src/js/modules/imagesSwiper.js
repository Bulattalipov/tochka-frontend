import Swiper, {
  Navigation
} from "swiper/swiper-bundle";

Swiper.use([Navigation]);

export default function imagesSwiper() {

  const sliders = document.querySelectorAll('.js-images-swiper');

  sliders.forEach(slider => {

    const arroySlide = slider.querySelectorAll('.swiper-slide');
    let loop = arroySlide.length < 2 ? false : true;

    new Swiper(slider.querySelector('.swiper'), {
      loop: loop,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 8,
      autoHeight: true,
      navigation: {
        nextEl: slider.querySelector('.slider-nav__next'),
        prevEl: slider.querySelector('.slider-nav__prev')
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading");
          swiper.updateAutoHeight();
        },
      },
    });

    const btn = slider.querySelector('button').classList.contains('swiper-button-lock');
    if(btn){
      slider.querySelector('button').parentElement.classList.add('hide');
    } else{
      slider.querySelector('button').parentElement.classList.remove('hide');
    }

  });
}
