import Swiper, {
  Thumbs, FreeMode, fadeEffect
} from "swiper/swiper-bundle";

Swiper.use([Thumbs, FreeMode, fadeEffect]);

export default function tabsSliderLadder() {

  const tabsSliderLadder = document.querySelectorAll('.js-tabs-ladder-slider');

  if(!tabsSliderLadder) return;

  tabsSliderLadder.forEach(slider => {

    const tabsSwiper = new Swiper(slider.querySelector('.stages-ladder__btns'), {
      speed: 500,
      slidesPerView: "auto",
      watchSlidesProgress: true,
      spaceBetween: 12,
      freeMode: true,
      allowTouchMove: true,
      breakpoints: {
        768: {
          spaceBetween: 10,
        },
      },
    })

    const contentSwiper = new Swiper(slider.querySelector('.stages-ladder__contents'), {
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

    const contents = document.querySelectorAll('.stages-ladder__contents .swiper-slide');
    contents[0].classList.add('active');

    const sliderLadder = document.querySelector('.stages-ladder__btns');
    const sliderSlides = sliderLadder.querySelectorAll('.swiper-slide');

    sliderSlides.forEach((item, i) => {
      item.addEventListener('mousedown', (e) => {
        contentSwiper.slideTo(i);
      });
    });

    contentSwiper.on('slideChange', () => {
      contents.forEach(item => item.classList.remove('active'));
      contents[contentSwiper.activeIndex] ? contents[contentSwiper.activeIndex].classList.add('active') : null;
      tabsSwiper.slideTo(contentSwiper.activeIndex)
    })

    const inner = document.querySelector('.stages-ladder__inner');
    inner.style.overflow = "visible";
  });
}
