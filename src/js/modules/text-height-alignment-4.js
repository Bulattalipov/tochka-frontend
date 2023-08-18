export default function () {

  const blocks = document.querySelectorAll(".with-slider");

  if(!blocks) return;

  blocks.forEach(block => {
    const sliderTexts = block.querySelectorAll('.with-slider__slider-text');
    const swiper = block.querySelector('.with-slider__swiper');

    if(!sliderTexts) return;

    const arroy = [];

    sliderTexts.forEach(item => {
      arroy.push(item.clientHeight)
    });

    const maxheight = Math.max(...arroy);

    swiper.style.height = swiper.clientHeight + maxheight + 'px';
  })
}
