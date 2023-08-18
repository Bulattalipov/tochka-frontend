export default function () {
  const blocks = document.querySelectorAll(".with-cards-graphic");

  if (!blocks) return;

  blocks.forEach(block => {
    console.log("!!!");
    const sliderTexts = block.querySelectorAll('.with-cards-graphic__item-list-container');

    if (!sliderTexts) return;

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
