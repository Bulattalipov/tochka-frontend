export default function () {
  if (window.matchMedia('(min-width: 991px)').matches) {
    const blocks = document.querySelectorAll(".stages-pile");

    if(!blocks) return;

    blocks.forEach(block => {
      const sliderTexts = block.querySelectorAll('.stages-pile__item-box');

      if(!sliderTexts) return;

      const arroy = [];

      sliderTexts.forEach(item => {
        arroy.push(item.clientHeight)
      });

      const maxheight = Math.max(...arroy);

      sliderTexts.forEach(elem => {
        elem.style.height = maxheight + 'px';
      });
    })
  }
}
