export default function() {
  if (window.matchMedia('(min-width: 1200px)').matches) {
    const container = document.querySelector('.page-cases');

    if(!container) return;

    const menu = container.querySelector('.fixed-menu-inputs');

    if(!menu) return;

    container.style.minHeight = menu.clientHeight + 150 + "px";

    const menu1 = document.querySelector(".fixed-menu--sticky");
    if(!menu1) return;

    const fixedMenuItems = menu1.querySelectorAll(".fixed-menu-inputs__item-label");



    fixedMenuItems.forEach(item => {
      item.addEventListener('click', function() {
        setTimeout(function() {
          const cards = document.querySelectorAll(".project");

          if(cards.length === 0) {
            const menu2 = document.querySelector(".fixed-menu--sticky");
            menu2.style.position = "absolute";
          }
        }, 60);
      })
    })


    const filter1 = document.querySelector(".intro-filter__list");
    if(!filter1) return;

    const filterItems = filter1.querySelectorAll(".intro-filter__list-item-label");

    filterItems.forEach(item => {
      item.addEventListener('click', function() {
        setTimeout(function() {
          const cards = document.querySelectorAll(".project");

          if(cards.length === 0) {
            const menu2 = document.querySelector(".fixed-menu--sticky");
            menu2.style.position = "absolute";
          }
        }, 60);
      })
    })
  }
}
