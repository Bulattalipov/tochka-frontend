export default function () {
  const sliderTexts = document.querySelectorAll('.slider-desc__swiper-item-user-projects');

  const arroy = [];

  sliderTexts.forEach(item => {
    arroy.push(item.clientHeight)
  });

  const maxheight = Math.max(...arroy);

  sliderTexts.forEach(elem => {
    elem.style.height = maxheight + 'px';
  });
}
