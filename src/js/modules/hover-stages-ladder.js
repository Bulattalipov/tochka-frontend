import gsap from 'gsap';
import {
  ScrollTrigger
} from 'gsap/dist/ScrollTrigger';

export default () => {
  // if(window.matchMedia('(min-width: 1200px)').matches) {
  const listWrapper = document.querySelectorAll('.stages-ladder__items');

  listWrapper.forEach(listWrapperItem => {
    const listItems = listWrapperItem.querySelectorAll('.stages-ladder__item');

    listItems.forEach(item => {
      const text = item.querySelector('.stages-ladder__item-text-wrapper');
      const img = item.querySelector('.stages-ladder__item-img');
      item.addEventListener("mouseenter", (e) => {

        listItems.forEach(listItem => {
          const text2 = listItem.querySelector('.stages-ladder__item-text-wrapper');
          const img2 = listItem.querySelector('.stages-ladder__item-img');
          gsap.to(text2, {
            height: 0,
            duration: 0.6,
            onComplete: () => ScrollTrigger.refresh()
          });
          gsap.to(img2, {
            filter: 'grayscale(100%) brightness(100%)',
            duration: 0.4,
            onComplete: () => ScrollTrigger.refresh()
          });
        });

        gsap.to(text, {
          height: 'auto',
          duration: 0.6,
          onComplete: () => ScrollTrigger.refresh()
        });
        gsap.to(img, {
          filter: 'grayscale(0%) brightness(100%)',
          duration: 0.4,
          onComplete: () => ScrollTrigger.refresh()
        });
      });

      item.addEventListener("mouseleave", (e) => {
        listItems.forEach(elem => {
          const text3 = elem.querySelector('.stages-ladder__item-text-wrapper');
          const img3 = elem.querySelector('.stages-ladder__item-img');

          gsap.to(text3, {
            height: 0,
            duration: 0.6,
            onComplete: () => ScrollTrigger.refresh()
          });
          gsap.to(img3, {
            filter: 'grayscale(100%) brightness(100%)',
            duration: 0.4,
            onComplete: () => ScrollTrigger.refresh()
          });

        })
      });
    })
  })
  // }
}
