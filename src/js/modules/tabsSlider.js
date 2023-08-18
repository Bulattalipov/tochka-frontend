import Swiper, {
  Thumbs, FreeMode, fadeEffect
} from "swiper/swiper-bundle";

Swiper.use([Thumbs, FreeMode, fadeEffect]);

export default function tabsSlider() {

  const tabsSlider = document.querySelectorAll('.js-tabs-slider');

  tabsSlider.forEach(slider => {

    const tabsSwiper = new Swiper(slider.querySelector('.with-slider-tabs__btns'), {
      speed: 500,
      slidesPerView: "auto",
      watchSlidesProgress: true,
      spaceBetween: 12,
      freeMode: true,
      breakpoints: {
        768: {
          spaceBetween: 60,
        },
      },
    })

    const contentSwiper = new Swiper(slider.querySelector('.with-slider-tabs__contents'), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      allowTouchMove: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: tabsSwiper
      },
      on: {
        init: function (swiper) {
          swiper.el.classList.remove("loading")
        },
      }
    });

    const contents = document.querySelectorAll('.with-slider-tabs__contents .swiper-slide');
    contents[0].classList.add('active');

    contentSwiper.on('slideChange', () => {
      contents.forEach(item => item.classList.remove('active'));
      contents[contentSwiper.activeIndex] ? contents[contentSwiper.activeIndex].classList.add('active') : null;
      tabsSwiper.slideTo(contentSwiper.activeIndex)
    })

  });
}
