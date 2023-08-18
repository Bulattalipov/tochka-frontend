import Swiper, {
  Navigation,
  EffectFade,
  Autoplay,
  Pagination,
  HashNavigation,
  Grid,
  FreeMode,
} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function jsMainIntro() {

  if (window.matchMedia('(max-width: 1200px)').matches) {
    const jsMainIntro = Array.from(document.querySelectorAll('.js-main-intro'));

    jsMainIntro.forEach(slider => {

      if (!slider) return;

      const swiper = new Swiper(slider, {
        slidesPerView: "auto",
        speed: 6000,
        loop: true,
        loopAdditionalSlides: 10,
        loopSlides: 30,
        loopedSlidesLimit: false,
        allowTouchMove: true,
        spaceBetween: 20,
        autoplay: {
          enabled: true,
          delay: 1
        },
        breakpoints: {
          768: {
            spaceBetween: 40,
          },
        }
      });
    });
  }
}
