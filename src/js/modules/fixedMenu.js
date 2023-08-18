import gsap from 'gsap';
import {
  ScrollTrigger
} from 'gsap/dist/ScrollTrigger';

export default function fixedMenu () {
  if(window.matchMedia('(min-width: 1200px)').matches) {
    const fixedMenus = document.querySelectorAll('.js-fixed-menu');

    if(fixedMenus.length === 0) return;

    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const formBlocks = Array.from(document.querySelectorAll('[data-non-fixed]'));
    const mainVacancies = document.querySelector(".main-vacancies");

    if(!fixedMenus) {
      return
    }

    fixedMenus.forEach((item, i) => {

      if(i === fixedMenus.length - 1) {
        let fixedMenuSection = item.closest("section");

      window.addEventListener('scroll', toggleHide);

      function toggleHide() {
        if(fixedMenuSection.clientHeight - header.clientHeight < document.documentElement.getBoundingClientRect().top * -1) {

          if(!item.classList.contains("fixed-menu--dark")) {
            item.classList.add("fixed-menu--white-bg");
          }

          // gsap.to(item, {
          //   position: "fixed",
          //   delay: 0.7,
          //   onComplete: () => ScrollTrigger.refresh()
          // });

          item.style.position = "fixed";

          var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );

          const sumFormBlocks = formBlocks.reduce((partialSum, a) => partialSum + a.clientHeight, 0);

          if(window.pageYOffset > scrollHeight - footer.clientHeight - item.scrollHeight - header.clientHeight * 2 - sumFormBlocks) {
            item.style.position = "absolute";
            item.style.top = 10 + (scrollHeight - sumFormBlocks - footer.clientHeight -item.scrollHeight - header.clientHeight) +"px";
            item.closest("main").style.position = "relative"
          } else {
            const list = document.querySelectorAll(".js-fixed-menu");
            list.forEach((elem, j) => {
              if(j === fixedMenus.length - 1) {
                elem.style.top = "auto";
              }
            })
          }

        } else {
          item.style.position = "absolute";

          if(!item.classList.contains("fixed-menu--dark")) {
            item.classList.remove("fixed-menu--white-bg");
          }
        }
      }

      toggleHide();
      }

    });
  }
}
