import Swiper, {
  Navigation,
  EffectFade,
  Autoplay,
  Pagination,
  HashNavigation,
  Grid,
  FreeMode
} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function infinitySlider() {

  const infinitySlider = Array.from(document.querySelectorAll('.js-infinity-slider'));

  infinitySlider.forEach(slider => {

    if (!slider) return;

    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      speed: 6000,
      loop: true,
      loopAdditionalSlides: 10,
      loopSlides: 20,
      loopedSlidesLimit: false,
      allowTouchMove: false,
      spaceBetween: 72,
      autoplay: {
        enabled: true,
        delay: 1
      },
      breakpoints: {
        768: {
          spaceBetween: 120,
        },
      }
    });
  });
}
